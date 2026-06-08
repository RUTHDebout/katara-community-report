# KATARA RAG Assistant

The KATARA RAG assistant is designed to help the team query project, climate, flood, legal, municipal, and donor documentation.

## Goal

Create an assistant that answers questions from a curated knowledge base instead of relying only on a general LLM.

## Example questions

- What are the main flood risks in coastal West Africa?
- Which communes have repeated flood reports?
- What should a municipality do after a flood alert?
- What documents should KATARA prepare for a ministry meeting?
- What climate justice arguments support community flood reporting?
- What are the priority indicators for a flood resilience dashboard?

## Suggested stack

### Option A — Simple RAG

- LlamaIndex
- Chroma or Qdrant
- PDF/Markdown/CSV ingestion
- Streamlit or FastAPI interface

### Option B — Agent workflow

- LangGraph
- Tool nodes for search, retrieval, summarization, and report generation
- Human review before external communication

## Knowledge base folders

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

## Ingestion pipeline

```text
1. Add source documents.
2. Extract text.
3. Chunk documents.
4. Generate embeddings.
5. Store in vector database.
6. Retrieve relevant chunks.
7. Generate answer with citations.
```

## Minimum metadata

Each document should include:

- title
- source
- publication year
- country or region
- document type
- topic
- license or usage status

## Guardrails

- Do not invent legal or technical claims.
- Show citations or document sources.
- Flag uncertain answers.
- Separate internal strategy from public communication.
- Do not expose sensitive personal data from community reports.

## MVP implementation

1. Start with Markdown and PDF documents.
2. Add 10 to 20 high-quality flood/climate documents.
3. Build a local retrieval script.
4. Add a simple chat interface.
5. Add export: answer to Markdown or PDF.

## Future use cases

- Ministry briefing generator.
- Donor application assistant.
- Community education content generator.
- Flood response checklist assistant.
- Research paper assistant for KATARA.
