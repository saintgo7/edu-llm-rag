import Link from 'next/link';

export default function ApiDocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link href="/en" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">API Documentation</h1>
          <p className="text-gray-600 mt-2">Integration guide for RAG systems</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Overview */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">RAG API Overview</h2>
          <p className="text-gray-700 mb-4">
            This documentation provides code examples and integration patterns for building RAG systems using popular libraries and APIs.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-gray-700">
              <strong>Base URL:</strong> Your RAG system endpoint<br/>
              <strong>Authentication:</strong> API Key via headers<br/>
              <strong>Response Format:</strong> JSON
            </p>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Start: Python Implementation</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Basic RAG Chain with LangChain</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.llms import OpenAI
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA

# Initialize components
embeddings = OpenAIEmbeddings(
    openai_api_key="your_api_key"
)

# Create vector store from documents
vector_store = FAISS.from_texts(
    texts=documents,
    embedding=embeddings
)

# Create RAG chain
llm = OpenAI(temperature=0.7)
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_store.as_retriever()
)

# Query
result = qa_chain.run("Your question here")`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Document Loading and Chunking</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.document_loaders import PDFLoader
from langchain.text_splitter import CharacterTextSplitter

# Load documents
loader = PDFLoader("document.pdf")
documents = loader.load()

# Split into chunks
text_splitter = CharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)

chunks = text_splitter.split_documents(documents)

# Now use chunks with embeddings
embeddings = OpenAIEmbeddings()
vector_store = FAISS.from_documents(
    chunks,
    embeddings
)`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Custom Retriever with Metadata</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.schema import Document

# Create documents with metadata
docs = [
    Document(
        page_content="RAG is a technique...",
        metadata={
            "source": "rag_lecture.pdf",
            "page": 1,
            "topic": "RAG Basics"
        }
    ),
    # ... more documents
]

# Create vector store with metadata filtering
vector_store = FAISS.from_documents(docs, embeddings)

# Retrieve with metadata filtering
results = vector_store.similarity_search(
    "What is RAG?",
    k=5,
    filter={"topic": "RAG Basics"}
)`}</pre>
            </div>
          </div>
        </section>

        {/* Advanced Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Patterns</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Hybrid Search (Keyword + Semantic)</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.retrievers import BM25Retriever, EnsembleRetriever
from langchain.vectorstores import FAISS

# Initialize both retrievers
bm25_retriever = BM25Retriever.from_texts(
    texts,
    metadatas=metadatas
)

vector_retriever = FAISS.from_texts(
    texts,
    embeddings
).as_retriever()

# Combine them
ensemble_retriever = EnsembleRetriever(
    retrievers=[bm25_retriever, vector_retriever],
    weights=[0.5, 0.5]  # Equal weight
)

# Use in QA chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=ensemble_retriever
)`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Chain-of-Thought with RAG</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.prompts import PromptTemplate

# Custom prompt with Chain-of-Thought
template = """Use the following documents to answer the question.
Think step by step before providing the answer.

Documents:
{context}

Question: {question}

Answer: Let me think about this step by step:
1. First, I'll identify the key concepts...
2. Then, I'll retrieve relevant information...
3. Finally, I'll synthesize the answer...

Answer: """

prompt = PromptTemplate(
    template=template,
    input_variables=["context", "question"]
)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    chain_type="stuff",
    chain_type_kwargs={"prompt": prompt}
)`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Multi-Query Retriever</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.retrievers.multi_query import MultiQueryRetriever

# Generate multiple perspectives of the question
retriever = MultiQueryRetriever.from_llm(
    retriever=base_retriever,
    llm=llm,
    prompt="""You are an AI assistant. Generate 3 versions of the
given question to retrieve the most relevant documents.
Be concise and varied in your versions."""
)

# Automatically searches with multiple variations
results = retriever.get_relevant_documents(
    "What is RAG and how does it work?"
)`}</pre>
            </div>
          </div>
        </section>

        {/* Integration Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Integration Examples</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">FastAPI Endpoint</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class QueryRequest(BaseModel):
    query: str
    top_k: int = 5

class QueryResponse(BaseModel):
    answer: str
    sources: list[str]

@app.post("/query")
async def query_rag(request: QueryRequest):
    # Run RAG chain
    result = qa_chain.run(
        input_documents=retriever.get_relevant_documents(
            request.query,
            k=request.top_k
        ),
        question=request.query
    )

    return QueryResponse(
        answer=result,
        sources=["doc1.pdf", "doc2.pdf"]
    )

# Usage: curl -X POST http://localhost:8000/query \
#   -H "Content-Type: application/json" \
#   -d '{"query": "What is RAG?"}'`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Async RAG Processing</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`import asyncio
from concurrent.futures import ThreadPoolExecutor

class AsyncRAG:
    def __init__(self, qa_chain):
        self.qa_chain = qa_chain
        self.executor = ThreadPoolExecutor(max_workers=4)

    async def query(self, question: str):
        # Run in thread pool to avoid blocking
        loop = asyncio.get_event_loop()
        result = await loop.run_in_executor(
            self.executor,
            self.qa_chain.run,
            question
        )
        return result

# Usage in FastAPI
async_rag = AsyncRAG(qa_chain)

@app.post("/async-query")
async def async_query(request: QueryRequest):
    answer = await async_rag.query(request.query)
    return {"answer": answer}`}</pre>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Practices</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-bold text-gray-900 mb-2">Error Handling</h4>
              <p className="text-gray-700">Always implement retry logic and timeouts. Set temperature=0 for consistency in production.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-bold text-gray-900 mb-2">Caching</h4>
              <p className="text-gray-700">Cache embeddings and retrieval results to reduce API costs and improve response times.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-bold text-gray-900 mb-2">Monitoring</h4>
              <p className="text-gray-700">Track query latency, token usage, and answer quality metrics for continuous improvement.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-bold text-gray-900 mb-2">Security</h4>
              <p className="text-gray-700">Store API keys in environment variables. Validate and sanitize user inputs. Use rate limiting.</p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h4 className="font-bold text-gray-900 mb-2">Chunk Management</h4>
              <p className="text-gray-700">Use chunk overlap to preserve context. Test different sizes (256-2048 tokens) for your domain.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
