# CLAUDE.md - AI Assistant Guide for edu-llm-rag

**Last Updated**: 2025-11-18
**Repository**: edu-llm-rag
**Purpose**: Educational LLM RAG (Retrieval-Augmented Generation) System

---

## Project Overview

This is an educational project focused on building a Retrieval-Augmented Generation (RAG) system using Large Language Models. RAG systems enhance LLM responses by retrieving relevant information from a knowledge base before generating answers.

### Key Objectives
- Demonstrate RAG architecture patterns
- Provide educational examples of LLM integration
- Implement document retrieval and embedding systems
- Show best practices for vector databases and semantic search

---

## Current Repository State

**Status**: Early Development / Initial Setup
The repository is currently in its initial state with minimal files.

### Existing Files
- `README.md` - Basic project description
- `.git/` - Git version control

### Expected Structure

As this project develops, expect to see:

```
edu-llm-rag/
├── README.md                 # Project documentation
├── CLAUDE.md                 # This file - AI assistant guide
├── requirements.txt          # Python dependencies
├── pyproject.toml           # Python project configuration
├── .env.example             # Environment variable template
├── .gitignore              # Git ignore patterns
│
├── src/                    # Source code
│   ├── __init__.py
│   ├── embeddings/         # Document embedding logic
│   ├── retrieval/          # Document retrieval systems
│   ├── llm/               # LLM integration
│   ├── vectordb/          # Vector database interface
│   └── utils/             # Utility functions
│
├── data/                   # Data storage
│   ├── documents/         # Source documents
│   ├── processed/         # Processed/chunked documents
│   └── embeddings/        # Stored embeddings
│
├── notebooks/             # Jupyter notebooks for exploration
├── tests/                # Unit and integration tests
├── config/               # Configuration files
└── docs/                 # Additional documentation
```

---

## Technology Stack (Expected)

### Core Technologies
- **Python 3.9+**: Primary programming language
- **LLM Providers**: OpenAI, Anthropic Claude, or open-source models
- **Vector Databases**: ChromaDB, Pinecone, Weaviate, or FAISS
- **Embedding Models**: OpenAI embeddings, Sentence Transformers, or HuggingFace models
- **Frameworks**: LangChain, LlamaIndex, or custom implementations

### Common Dependencies
```
# LLM and Embedding
openai
anthropic
langchain
llama-index
sentence-transformers

# Vector Databases
chromadb
pinecone-client
weaviate-client
faiss-cpu

# Data Processing
pandas
numpy
tiktoken

# Testing
pytest
pytest-cov
```

---

## Development Workflows

### 1. Setting Up the Development Environment

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys
```

### 2. Working with Documents

**Document Ingestion Pipeline**:
1. Load documents from `data/documents/`
2. Chunk documents into appropriate sizes (typically 512-1024 tokens)
3. Generate embeddings for each chunk
4. Store embeddings in vector database
5. Index for efficient retrieval

**Code Pattern**:
```python
# Example workflow
documents = load_documents("data/documents/")
chunks = chunk_documents(documents, chunk_size=512)
embeddings = generate_embeddings(chunks)
store_in_vectordb(embeddings, metadata=chunks)
```

### 3. RAG Query Pipeline

**Typical RAG Flow**:
1. User submits a query
2. Query is embedded using the same model as documents
3. Vector similarity search retrieves relevant chunks
4. Retrieved context + query sent to LLM
5. LLM generates contextually-aware response

### 4. Testing Strategy

- **Unit Tests**: Test individual components (embeddings, chunking, retrieval)
- **Integration Tests**: Test full RAG pipeline
- **Evaluation**: Measure retrieval accuracy and answer quality

```bash
# Run tests
pytest tests/

# Run with coverage
pytest --cov=src tests/
```

---

## Key Conventions for AI Assistants

### Code Style

1. **Python Standards**
   - Follow PEP 8 style guide
   - Use type hints for function signatures
   - Docstrings for all public functions (Google or NumPy style)
   - Maximum line length: 100 characters

2. **Naming Conventions**
   - Classes: `PascalCase` (e.g., `DocumentRetriever`)
   - Functions/methods: `snake_case` (e.g., `generate_embeddings`)
   - Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_CHUNK_SIZE`)
   - Private methods: `_leading_underscore`

3. **Import Organization**
   ```python
   # Standard library
   import os
   from typing import List, Dict

   # Third-party
   import numpy as np
   from langchain import ...

   # Local imports
   from src.embeddings import EmbeddingGenerator
   ```

### Security Best Practices

1. **API Keys**: NEVER commit API keys or secrets
   - Use environment variables
   - Keep `.env` in `.gitignore`
   - Provide `.env.example` template

2. **Input Validation**: Always validate user inputs
   - Sanitize queries before sending to LLM
   - Validate document types before processing
   - Limit query and document sizes

3. **Rate Limiting**: Implement rate limits for API calls
   - Use exponential backoff for retries
   - Monitor API usage and costs

### RAG-Specific Best Practices

1. **Chunk Size Optimization**
   - Typical range: 256-1024 tokens
   - Consider overlap between chunks (10-20%)
   - Balance between context and precision

2. **Embedding Model Selection**
   - Use same model for documents and queries
   - Consider domain-specific models for specialized content
   - Cache embeddings to avoid regeneration

3. **Retrieval Strategy**
   - Start with top-k similarity search (k=3-5)
   - Implement re-ranking for better results
   - Consider hybrid search (semantic + keyword)

4. **Context Window Management**
   - Know your LLM's context limit
   - Reserve space for system prompts and responses
   - Truncate or summarize if context exceeds limit

5. **Prompt Engineering**
   ```python
   # Good RAG prompt template
   prompt = f"""
   Context information is below:
   ---------------------
   {retrieved_context}
   ---------------------

   Given the context information and not prior knowledge,
   answer the following question:
   {user_query}

   If the answer is not in the context, say "I don't have
   enough information to answer this question."
   """
   ```

---

## Common Tasks and Patterns

### Adding New Document Types

1. Create parser in `src/utils/parsers.py`
2. Add document loader in `src/retrieval/loaders.py`
3. Update chunking strategy if needed
4. Add tests for new document type

### Implementing a New Vector Database

1. Create interface in `src/vectordb/base.py`
2. Implement specific database in `src/vectordb/<db_name>.py`
3. Follow the interface contract (store, retrieve, delete, update)
4. Add configuration in `config/`

### Evaluating RAG Performance

Key metrics:
- **Retrieval Accuracy**: Are we retrieving relevant chunks?
- **Answer Relevance**: Is the LLM response relevant to the query?
- **Faithfulness**: Is the response grounded in retrieved context?
- **Response Time**: End-to-end latency

### Debugging Common Issues

1. **Poor Retrieval Results**
   - Check embedding model quality
   - Adjust chunk size and overlap
   - Verify document preprocessing
   - Tune similarity threshold

2. **Irrelevant Answers**
   - Improve prompt engineering
   - Increase number of retrieved chunks
   - Implement re-ranking
   - Filter low-confidence results

3. **Slow Performance**
   - Cache embeddings
   - Use approximate nearest neighbor search
   - Batch API calls
   - Optimize chunk size

---

## Git Workflow

### Branch Strategy

- `main`: Production-ready code
- `develop`: Integration branch for features
- `feature/*`: New features
- `fix/*`: Bug fixes
- `docs/*`: Documentation updates

### Commit Message Convention

Follow conventional commits:
```
feat: add ChromaDB integration
fix: resolve embedding dimension mismatch
docs: update RAG pipeline documentation
test: add integration tests for retrieval
refactor: optimize chunking algorithm
```

### Before Committing

1. Run tests: `pytest`
2. Check code style: `black . && flake8`
3. Update documentation if needed
4. Review changes: `git diff`

---

## Environment Variables

Create a `.env` file with:

```bash
# LLM API Keys
OPENAI_API_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key

# Vector Database
PINECONE_API_KEY=your_pinecone_key
PINECONE_ENVIRONMENT=your_environment

# Application Settings
CHUNK_SIZE=512
CHUNK_OVERLAP=50
TOP_K_RETRIEVAL=5
EMBEDDING_MODEL=text-embedding-3-small
LLM_MODEL=gpt-4-turbo-preview

# Paths
DATA_DIR=./data
EMBEDDINGS_DIR=./data/embeddings
```

---

## Performance Optimization

### Caching Strategies

1. **Embedding Cache**: Store computed embeddings
2. **Query Cache**: Cache common queries and responses
3. **Model Cache**: Cache model instances

### Batch Processing

- Process multiple documents in batches
- Batch API calls to reduce latency
- Use async/await for concurrent operations

### Memory Management

- Stream large documents instead of loading entirely
- Clear embeddings from memory after storage
- Use generators for large datasets

---

## Testing Guidelines

### Unit Test Example

```python
import pytest
from src.embeddings import EmbeddingGenerator

def test_embedding_generation():
    generator = EmbeddingGenerator(model="test-model")
    text = "This is a test document."
    embedding = generator.generate(text)

    assert embedding is not None
    assert len(embedding) == generator.dimension
    assert isinstance(embedding, np.ndarray)
```

### Integration Test Example

```python
def test_rag_pipeline():
    # Setup
    documents = ["Test document content"]
    query = "What is the test about?"

    # Execute RAG pipeline
    result = rag_system.query(query, documents)

    # Assertions
    assert result is not None
    assert len(result) > 0
    assert "test" in result.lower()
```

---

## Useful Resources

### RAG Concepts
- [RAG Paper (Lewis et al.)](https://arxiv.org/abs/2005.11401)
- [LangChain RAG Tutorial](https://python.langchain.com/docs/use_cases/question_answering/)
- [LlamaIndex Documentation](https://docs.llamaindex.ai/)

### Vector Databases
- ChromaDB: Lightweight, embedded database
- Pinecone: Managed, scalable solution
- FAISS: Fast similarity search library
- Weaviate: Open-source vector search engine

### Embedding Models
- OpenAI embeddings: High quality, paid
- Sentence Transformers: Open-source, customizable
- Cohere embeddings: Multilingual support

---

## AI Assistant Guidelines

### When Working on This Project

1. **Always Check Context**: Before making changes, understand the current RAG pipeline flow
2. **Maintain Consistency**: Follow existing patterns for new components
3. **Test Thoroughly**: RAG systems need both unit and integration tests
4. **Document Changes**: Update this CLAUDE.md when architecture changes
5. **Consider Costs**: Be mindful of API costs when adding LLM calls
6. **Security First**: Never expose API keys or sensitive data

### Making Architectural Decisions

When implementing new features, consider:
- **Modularity**: Can this be a separate, reusable component?
- **Scalability**: Will this work with 10x more documents?
- **Maintainability**: Is this easy to understand and modify?
- **Cost**: What's the API cost impact?
- **Performance**: What's the latency impact?

### Communication

- Explain RAG-specific decisions clearly
- Reference relevant documentation
- Provide code examples for complex patterns
- Suggest optimizations when appropriate

---

## Troubleshooting

### Common Issues

1. **Embedding dimension mismatch**
   - Ensure same model for indexing and querying
   - Check vector database configuration

2. **Out of context errors**
   - Reduce chunk size or number of retrieved chunks
   - Implement smart truncation

3. **Poor answer quality**
   - Improve document chunking strategy
   - Enhance prompt engineering
   - Increase retrieval quality

4. **API rate limits**
   - Implement exponential backoff
   - Add caching layer
   - Consider batching requests

---

## Project Maturity Checklist

As this project develops, aim to implement:

- [ ] Basic document loading and chunking
- [ ] Embedding generation pipeline
- [ ] Vector database integration
- [ ] Query retrieval system
- [ ] LLM integration
- [ ] End-to-end RAG pipeline
- [ ] Unit tests (>80% coverage)
- [ ] Integration tests
- [ ] Performance benchmarks
- [ ] Evaluation metrics
- [ ] API or web interface
- [ ] Documentation (README, API docs)
- [ ] Deployment configuration
- [ ] Monitoring and logging
- [ ] Cost tracking
- [ ] Error handling and recovery

---

## Questions to Consider

Before implementing features, ask:

1. **Data**: What types of documents will we support?
2. **Scale**: How many documents? How often do they update?
3. **Users**: Who will use this? What are their queries?
4. **Performance**: What are acceptable latency requirements?
5. **Budget**: What are the cost constraints for APIs?
6. **Accuracy**: What level of accuracy is needed?

---

## Contributing

When contributing to this project:

1. Create a feature branch from `main`
2. Implement changes with tests
3. Update documentation
4. Submit pull request with clear description
5. Ensure all tests pass
6. Get code review before merging

---

## Conclusion

This CLAUDE.md file serves as a living document for AI assistants working on this educational RAG project. Update it as the project evolves, architecture changes, or new patterns emerge.

For questions or clarifications, refer to the README.md or project documentation.

**Remember**: The goal is education. Prioritize clarity, best practices, and well-documented code over complex optimizations.
