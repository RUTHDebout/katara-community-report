# RAG Module

This module powers the KATARA documentation assistant.

## Responsibilities

- Ingest project documents.
- Split documents into chunks.
- Store embeddings in a vector database.
- Retrieve relevant context.
- Generate grounded answers with source references.

## Suggested stack

- LlamaIndex for ingestion and retrieval.
- Chroma or Qdrant as vector database.
- FastAPI endpoint for chat.
- Markdown export for generated answers.

## Planned endpoints

```text
POST /rag/ingest      Add documents to knowledge base
POST /rag/query       Ask a question
GET  /rag/sources     List indexed documents
```

## Knowledge base categories

```text
knowledge_base/
  climate/
  flood_management/
  legal_policy/
  municipal_response/
  satellite_remote_sensing/
  donors_grants/
  katara_internal/
```

## Guardrails

- Cite source documents when possible.
- Flag uncertainty.
- Avoid unsupported legal claims.
- Keep personal and sensitive report fields out of public answers.
- Separate public answers from internal strategy.
