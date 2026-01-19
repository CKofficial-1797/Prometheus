<img width="90" height="90" alt="THORFIN2" src="https://github.com/user-attachments/assets/eff6e6c6-854f-4a55-a62c-f1a8c8959e36" />

 # Prometheus  
**The AI Knowledge Engine for GitHub Teams**

> *Prometheus is a full-stack AI SaaS that turns GitHub repositories, commits, and meetings into a single intelligent knowledge system for development teams.*

---

##  Overview

**Prometheus** is an AI-powered GitHub collaboration platform designed to **capture, structure, and surface team knowledge** that is normally lost across commits, pull requests, and meetings.

Modern development teams suffer from:
- Context switching between GitHub, meetings, and documentation  
- Poor onboarding due to lack of summarized project knowledge  
- Lost decisions buried in meeting recordings  
- No persistent memory of discussions and code evolution  

**Prometheus solves this by acting as a shared “AI brain” for your repository.**
<img width="1905" height="912" alt="image" src="https://github.com/user-attachments/assets/a5914447-bc90-4829-b4c9-798b2e1fd3d9" />

---

##  What Problem Does Prometheus Solve?

###  The Problem
- GitHub commits are noisy and hard to follow over time
- Meeting decisions are forgotten or never documented
- New team members struggle to understand project context
- AI chat tools lack **project-specific memory**
- Knowledge is scattered across tools

###  The Solution
Prometheus centralizes all technical knowledge into one AI-driven system:
- Commits are automatically summarized
- Meetings are transcribed and converted into actionable issues
- An AI assistant understands your entire repository via RAG
- Team members can ask context-aware questions anytime
- All AI interactions are saved and reusable

---

##  Key Features

###  GitHub Repository Intelligence (RAG)
- Repository ingestion & indexing
- Code embeddings stored with pgvector
- Retrieval-Augmented Generation for accurate answers

###  Commit Summarization
- Automatic commit summaries using LLMs
- Clear project history & decision tracking

###  AI-Powered Meeting Analysis
- Upload recorded meetings
- AssemblyAI transcribes audio
- Extracts issues, topics & summaries

###  Team Collaboration
- Invite members to projects
- Shared AI context across teams

###  Credits & Billing
- Stripe-powered billing
- Usage-based AI credits
- Secure webhooks

---
## Screenshots 
### Authentication (using Clerk)
<img width="666" height="923" alt="image" src="https://github.com/user-attachments/assets/699c0e6a-f3c3-4abc-9162-c6651571a03d" />

### Team Invite 
<img width="1912" height="929" alt="image" src="https://github.com/user-attachments/assets/01b20589-1049-4d2d-a66b-a0747f9afcc5" />

The profiles of joined members in specific repository project would be shown at just left of the invite button.

<img width="1909" height="909" alt="image" src="https://github.com/user-attachments/assets/6c915f09-6536-4232-9daf-93a4d5424bc3" />

### Make Projects 
Your have to name your project then paste your github repository link in the format shown in image .
<img width="1893" height="762" alt="image" src="https://github.com/user-attachments/assets/498905ab-cf46-4e6b-94d3-54096fa9de00" />

First check whether you have enough amount of credits to make projects or not , if not then you have to buy credits .

<img width="1919" height="847" alt="image" src="https://github.com/user-attachments/assets/c9f016c4-4157-45c2-b1dc-ddb13244d560" />

If sufficient credits are available, the project is processed through a Retrieval-Augmented Generation (RAG) pipeline, where embeddings of the repository’s commits are generated and used to provide contextual summaries and intelligent responses.

<img width="1905" height="912" alt="image" src="https://github.com/user-attachments/assets/32c61d83-ca21-493e-ba17-a9145ccdcd58" />

### Buying Credits to use the Platform (Stripe)
A clean billing dashboard for the Prometheus SaaS app showing the user’s available credits, credit usage rules, and an option to purchase more credits.

<img width="1892" height="975" alt="image" src="https://github.com/user-attachments/assets/979169be-96e2-43fd-9cdc-38ce62d81679" />

<img width="1920" height="980" alt="image" src="https://github.com/user-attachments/assets/73a02c1e-8beb-471a-8a8c-ad624b607fb4" />

### Meetings (record the detailed summary of important issues discussed in the meeting provided as Audio file (handled by Assembly AI ) )

<img width="1913" height="897" alt="image" src="https://github.com/user-attachments/assets/c34c689c-5a5b-47e6-aee5-fc8ecb94bba7" />
<img width="1912" height="1008" alt="image" src="https://github.com/user-attachments/assets/df782dc8-e493-4111-978d-7971b1c78006" />
<!-- <img width="1916" height="980" alt="image" src="https://github.com/user-attachments/assets/a44126be-0150-4067-b139-c28441b7578e" />



<img width="1902" height="899" alt="image" src="https://github.com/user-attachments/assets/b0b98de9-2fa0-4eb0-aed5-7767df389e98" /> -->

By CLicking the View Meeting we would be redirect to the specific meeting page where issues would be enlisted 

<!-- <img width="1899" height="899" alt="image" src="https://github.com/user-attachments/assets/dc76f8c0-2c19-4f09-a913-8c368672d779" /> -->

<!-- <img width="1747" height="912" alt="image" src="https://github.com/user-attachments/assets/8061f3be-4e82-4797-90e1-f44aae004a6f" /> -->
<img width="1916" height="980" alt="image" src="https://github.com/user-attachments/assets/29f6ec37-991a-4944-be3d-0e568a045a4c" />


(I have used a small sample of  meeting audio so it is showing just specific small details only)

### Ask Questions Related to the Repository project selected 
<img width="1905" height="989" alt="image" src="https://github.com/user-attachments/assets/458c87eb-a127-48c9-828a-7fc9dd6ef77d" />
<img width="1878" height="983" alt="image" src="https://github.com/user-attachments/assets/bb007ac9-ba9e-410b-b0ca-2bc678197047" />
<img width="1920" height="991" alt="image" src="https://github.com/user-attachments/assets/0fbceec9-351a-40de-8d66-247d75a6f988" />
<img width="1913" height="987" alt="image" src="https://github.com/user-attachments/assets/8dd76d3f-aca6-4404-a123-ef8c7cf7ac8c" />














##  Tech Stack

### Frontend
- Next.js 15 (App Router)
- React + TypeScript
- Tailwind CSS
- Shadcn UI

### Backend
- Next.js API Routes
- tRPC
- Prisma ORM

### Database
- PostgreSQL (NeonDB)
- pgvector for embeddings

### AI & ML
- Google Gemini
- Hugging Face Embeddings
- RAG pipeline

### Audio
- AssemblyAI

### Auth & Payments
- Clerk
- Stripe

---

##  High-Level Architecture

GitHub Repos + Commits  
→ Embeddings (pgvector)  
→ RAG AI Assistant  

Meeting Audio  
→ AssemblyAI  
→ Issues & Summaries  

> *Deployment pending due to limited availability of production-grade LLM API tokens required for reliable operation.

##  Vision

Prometheus is not a chatbot.  
It is a **long-term knowledge system** for engineering teams.

> *Prometheus gave humanity knowledge — this project gives teams understanding.*
