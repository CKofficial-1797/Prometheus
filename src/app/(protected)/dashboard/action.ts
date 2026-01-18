"use server";
import prisma from "@/lib/prisma";
import { createStreamableValue } from "@ai-sdk/rsc";
import {generateEmbedding} from "../../../lib/gemini";
import {createGoogleGenerativeAI} from "@ai-sdk/google";
import { streamText } from "ai"
const google = createGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
})
export async function askQuestion(question: string, projectId: string) {
  const stream = createStreamableValue();

  const queryVector = await generateEmbedding(question);
  if (!Array.isArray(queryVector) || queryVector.length === 0) {
  throw new Error("Invalid query embedding");
}

  if (!queryVector) {
  throw new Error("Query embedding is undefined");
}

  const vectorQuery = `[${queryVector.join(",")}]`;

  const result = await prisma.$queryRaw<
    { fileName: string; sourceCode: string; summary: string }[]
  >`
    SELECT "fileName", "sourceCode", "summary",
           1 - ("summaryEmbedding" <=> ${vectorQuery}::vector) AS similarity
    FROM "SourceCodeEmbedding"
    WHERE "summaryEmbedding" IS NOT NULL
    AND "projectId" = ${projectId}
    AND 1 - ("summaryEmbedding" <=> ${vectorQuery}::vector) > 0.5
    ORDER BY similarity DESC
    LIMIT 10
  `;

  let context = "";

  for (const doc of result) {
    context += `source: ${doc.fileName}\n` +
               `code content: ${doc.sourceCode}\n` +
               `summary of file: ${doc.summary}\n\n`;
  }
  (async () => {
  const { textStream } = await streamText({
    model: google("gemini-2.5-flash-lite"),
    prompt: `
You are an AI code assistant who answers questions about the codebase.
Your target audience is a technical intern who is looking to understand the codebase.

AI assistant is a brand new, powerful, human-like artificial intelligence.
The traits of AI include expert knowledge, helpfulness, cleverness, and articulateness.
AI is a well-behaved and well-mannered individual.
AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user.
AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation.

If the question is asking about code or a specific file, AI will provide the detailed answer,
giving step by step instructions, including code snippets.

START CONTEXT BLOCK
${context}
END OF CONTEXT BLOCK

START QUESTION
${question}
END OF QUESTION

AI assistant will take into account any CONTEXT BLOCK that is provided in a conversation.
If the context does not provide the answer to the question, the AI assistant will say:
"I'm sorry, but I don't know the answer to that question."

AI assistant will not apologize for previous responses, but instead will indicate new information was not available.
AI assistant will not invent anything that is not drawn directly from the context.
Answer in markdown syntax, with code snippets if needed.
Be as detailed as possible when answering.
    `,
  });

  for await (const chunk of textStream) {
    stream.update(chunk);
  }

  stream.done();
})();
    console.log("Context:", context);
    return {
        output : stream.value,
        filesReferences : result,
    }
}