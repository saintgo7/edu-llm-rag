'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function EnGlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const terms = [
    {
      term: 'Embedding',
      definition: 'Process of converting text into a high-dimensional vector. Represents semantic meaning as numerical data.',
      category: 'Basics',
    },
    {
      term: 'Vector Database',
      definition: 'Database that stores vectorized data and enables fast similarity search. Examples: Pinecone, Weaviate, Qdrant.',
      category: 'Technology',
    },
    {
      term: 'Cosine Similarity',
      definition: 'Method of measuring similarity by calculating the angle between two vectors. Values range from -1 to 1.',
      category: 'Mathematics',
    },
    {
      term: 'Chunk',
      definition: 'Small text segments created by splitting long documents for processing. Typically 256-1024 tokens in size.',
      category: 'Processing',
    },
    {
      term: 'Hallucination',
      definition: 'Phenomenon where LLM generates false information without factual basis. RAG reduces this problem.',
      category: 'Issues',
    },
    {
      term: 'Knowledge Cutoff',
      definition: 'The training data endpoint for an LLM. The model has no knowledge of events after this date.',
      category: 'Issues',
    },
    {
      term: 'Prompt',
      definition: 'Instructions or questions provided to an LLM. Prompt engineering optimizes prompts for better responses.',
      category: 'Basics',
    },
    {
      term: 'Token',
      definition: 'Smallest unit of text processed by LLMs. Represented as words or subword units.',
      category: 'Basics',
    },
    {
      term: 'Temperature',
      definition: 'Parameter controlling LLM creativity. Values near 0 are deterministic, near 1 are creative.',
      category: 'Parameters',
    },
    {
      term: 'Top-K Sampling',
      definition: 'Sampling method that selects only the top K most likely tokens to control diversity.',
      category: 'Parameters',
    },
    {
      term: 'BM25',
      definition: 'Traditional information retrieval algorithm. Used for keyword-based search.',
      category: 'Algorithms',
    },
    {
      term: 'FAISS',
      definition: 'Facebook AI Similarity Search - efficient vector similarity search library.',
      category: 'Tools',
    },
    {
      term: 'LangChain',
      definition: 'Python framework for easily building LLM applications.',
      category: 'Tools',
    },
    {
      term: 'Self-RAG',
      definition: 'Technique where LLM evaluates its own response and re-retrieves if needed for improvement.',
      category: 'Advanced',
    },
    {
      term: 'GraphRAG',
      definition: 'RAG technique converting documents to graph structures to capture complex relationships.',
      category: 'Advanced',
    },
    {
      term: 'MultiModal RAG',
      definition: 'RAG handling multiple formats: text, images, videos, tables, etc.',
      category: 'Advanced',
    },
    {
      term: 'Chain-of-Thought (CoT)',
      definition: 'Prompting technique encouraging LLM to reason step-by-step.',
      category: 'Techniques',
    },
    {
      term: 'Few-Shot Prompting',
      definition: 'Technique providing examples to show LLM the desired response format.',
      category: 'Techniques',
    },
    {
      term: 'Retrieval',
      definition: 'First phase of RAG. Searches vector DB for documents similar to user query.',
      category: 'RAG Phases',
    },
    {
      term: 'Augmentation',
      definition: 'Second phase of RAG. Combines retrieved documents with original query to create enhanced prompt.',
      category: 'RAG Phases',
    },
    {
      term: 'Generation',
      definition: 'Third phase of RAG. LLM generates final answer using augmented prompt.',
      category: 'RAG Phases',
    },
    {
      term: 'API',
      definition: 'Application Programming Interface - interface for communication between programs. Examples: REST API, GraphQL.',
      category: 'Technology',
    },
  ];

  const categories = ['All', ...new Set(terms.map(t => t.category))];

  const filteredTerms = terms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTerms = filteredTerms.sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/en" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Glossary</h1>
          <p className="text-gray-600 mt-2">Key terms and concepts for RAG learning</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Search Box */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Results Display */}
        <div className="mb-4 text-sm text-gray-600">
          {sortedTerms.length} terms found.
        </div>

        {/* Terms List */}
        <div className="space-y-4">
          {sortedTerms.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">{item.term}</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-700">{item.definition}</p>
            </div>
          ))}
        </div>

        {sortedTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No results found.</p>
          </div>
        )}

        {/* Category Summary */}
        {searchTerm === '' && (
          <section className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.slice(1).map((category, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-blue-600 mb-3">{category}</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {terms
                      .filter(t => t.category === category)
                      .map((term, tidx) => (
                        <li key={tidx}>• {term.term}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
