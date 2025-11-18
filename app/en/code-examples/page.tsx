import Link from 'next/link';

export default function EnCodeExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link href="/en" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Code Examples</h1>
          <p className="text-gray-600 mt-2">Practical code examples for RAG system implementation</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Setup Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1️⃣ Environment Setup</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Install Required Libraries</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`# Core RAG libraries
pip install langchain openai python-dotenv

# Vector databases
pip install pinecone-client faiss-cpu

# Document processing
pip install pypdf python-pptx python-docx

# Web scraping
pip install beautifulsoup4 requests

# API server
pip install fastapi uvicorn pydantic

# Example .env file content
# OPENAI_API_KEY=sk-...
# PINECONE_API_KEY=...
# PINECONE_ENVIRONMENT=us-west1-gcp`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Load Environment Variables</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get API keys
openai_api_key = os.getenv("OPENAI_API_KEY")
pinecone_api_key = os.getenv("PINECONE_API_KEY")

if not openai_api_key:
    raise ValueError("OPENAI_API_KEY not found in environment")`}</pre>
            </div>
          </div>
        </section>

        {/* Document Processing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2️⃣ Document Processing</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Load PDF Documents</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Load PDF
loader = PyPDFLoader("document.pdf")
documents = loader.load()

print(f"Documents loaded: {len(documents)}")
print(f"First document: {documents[0].page_content[:100]}")

# Split into chunks
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,      # chunk size
    chunk_overlap=200,    # overlap size
    separators=[
        "\\n\\n",         # paragraphs
        "\\n",           # lines
        ".",             # sentences
        " "              # words
    ]
)

chunks = text_splitter.split_documents(documents)
print(f"Chunks created: {len(chunks)}")`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Handle Multiple File Formats</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.document_loaders import (
    TextLoader,
    UnstructuredHTMLLoader,
    CSVLoader
)

# Text files
text_loader = TextLoader("document.txt")
text_docs = text_loader.load()

# HTML files
html_loader = UnstructuredHTMLLoader("document.html")
html_docs = html_loader.load()

# CSV files
csv_loader = CSVLoader("data.csv")
csv_docs = csv_loader.load()

# Combine all documents
all_documents = text_docs + html_docs + csv_docs`}</pre>
            </div>
          </div>
        </section>

        {/* Embeddings & Vector Store */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3️⃣ Embeddings & Vector Store</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Use OpenAI Embeddings</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
import pickle

# Initialize embeddings
embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small",
    api_key=os.getenv("OPENAI_API_KEY")
)

# Create vector store
vector_store = FAISS.from_documents(
    documents=chunks,
    embedding=embeddings
)

# Save
vector_store.save_local("vector_store")

# Load
vector_store = FAISS.load_local(
    "vector_store",
    embeddings
)

# Check embedding dimensions
embedding = embeddings.embed_query("test")
print(f"Embedding dimensions: {len(embedding)}")`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Local Embedding Model (Hugging Face)</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.embeddings import HuggingFaceEmbeddings

# Use local embedding model (no API cost)
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2",
    model_kwargs={"device": "cpu"},
    encode_kwargs={"normalize_embeddings": True}
)

# Create vector store
vector_store = FAISS.from_documents(
    documents=chunks,
    embedding=embeddings
)

# Embed single query
query_embedding = embeddings.embed_query("What is RAG?")
print(f"Query embedding created: {len(query_embedding)} dimensions")`}</pre>
            </div>
          </div>
        </section>

        {/* RAG Chain */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4️⃣ RAG Chain</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Basic RAG Chain</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.llms import OpenAI
from langchain.chains import RetrievalQA

# Initialize LLM
llm = OpenAI(
    temperature=0.7,
    api_key=os.getenv("OPENAI_API_KEY")
)

# Create RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_store.as_retriever(
        search_kwargs={"k": 5}
    ),
    return_source_documents=True
)

# Execute query
result = qa_chain({
    "query": "What are the benefits of RAG?",
    "max_tokens": 500
})

print(f"Answer: {result['result']}")
print(f"Sources: {result['source_documents']}")`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Conversational RAG with Memory</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain

# Create memory for conversation history
memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)

# Create conversational RAG chain
chat_chain = ConversationalRetrievalChain.from_llm(
    llm=llm,
    retriever=vector_store.as_retriever(),
    memory=memory,
    verbose=True
)

# First question
response1 = chat_chain({
    "question": "What is RAG?"
})
print(f"Answer 1: {response1['answer']}")

# Follow-up question (remembers previous context)
response2 = chat_chain({
    "question": "What are its benefits?"
})
print(f"Answer 2: {response2['answer']}")`}</pre>
            </div>
          </div>
        </section>

        {/* Advanced Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5️⃣ Advanced Patterns</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Embedding Caching for Cost Savings</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.cache import SQLiteCache
import langchain

# Enable caching
langchain.llm_cache = SQLiteCache(
    database_path=".langchain.db"
)

# Same query uses cache (no API call)
result1 = qa_chain({"query": "What is RAG?"})
print("First call: API used")

result2 = qa_chain({"query": "What is RAG?"})
print("Second call: Loaded from cache (no API)")

# Clear cache
langchain.llm_cache = None`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Prompt Template</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.prompts import PromptTemplate
from langchain.chains import RetrievalQA

# Create custom prompt
template = """Answer the question based on the following document.
If information is not in the document, say 'Information not available'.

Document:
{context}

Question: {question}

Answer: """

PROMPT = PromptTemplate(
    template=template,
    input_variables=["context", "question"]
)

# Apply prompt to RAG chain
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_store.as_retriever(),
    chain_type_kwargs={"prompt": PROMPT}
)

result = qa_chain({"query": "What is RAG's definition?"})
print(result["result"])`}</pre>
            </div>
          </div>
        </section>

        {/* Error Handling */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6️⃣ Error Handling & Logging</h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Production-Level Error Handling</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`import logging
from typing import Optional
import time

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def query_rag_safe(
    qa_chain,
    query: str,
    max_retries: int = 3,
    timeout: int = 30
) -> Optional[str]:
    """Safe RAG query with error handling"""

    for attempt in range(max_retries):
        try:
            logger.info(f"Executing query: {query} (attempt: {attempt + 1})")

            result = qa_chain(
                {"query": query},
                timeout=timeout
            )

            logger.info(f"Query successful: {query}")
            return result["result"]

        except TimeoutError:
            logger.warning(f"Timeout (attempt: {attempt + 1}/{max_retries})")
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)

        except Exception as e:
            logger.error(f"Error: {str(e)}", exc_info=True)
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)

    logger.error(f"Max retries exceeded: {query}")
    return None

# Usage
answer = query_rag_safe(qa_chain, "What is RAG?")
if answer:
    print(f"Answer: {answer}")
else:
    print("Query failed")`}</pre>
            </div>
          </div>
        </section>

        {/* Performance Tips */}
        <section className="bg-blue-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ Performance Optimization Tips</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-gray-900 mb-2">Embedding Optimization</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Use local embedding models (reduce API costs)</li>
                <li>• Batch embedding processing</li>
                <li>• Cache embedding results</li>
              </ul>
            </div>

            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-gray-900 mb-2">Search Optimization</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Tune Top-K values (usually 3-5)</li>
                <li>• Filter by score threshold</li>
                <li>• Use hybrid search</li>
              </ul>
            </div>

            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-gray-900 mb-2">LLM Optimization</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Set Temperature=0 (consistency)</li>
                <li>• Limit token count</li>
                <li>• Choose faster models</li>
              </ul>
            </div>

            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-gray-900 mb-2">System Optimization</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Async processing</li>
                <li>• Tune chunk sizes</li>
                <li>• Parallel processing</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
