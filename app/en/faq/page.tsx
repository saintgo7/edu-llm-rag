'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function EnFAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'RAG Fundamentals',
      questions: [
        {
          q: 'Why do we need RAG if ChatGPT already works well without it?',
          a: 'ChatGPT only knows information up to its training cutoff date (Knowledge Cutoff). It also suffers from hallucination (generating false information). RAG solves these problems by adding the latest and domain-specific information to improve accuracy.',
        },
        {
          q: 'What exactly is vector embedding?',
          a: 'Vector embedding is the process of converting text into a high-dimensional array of numbers (vector). For example, "good" and "excellent" have similar meanings, so they are positioned close to each other in vector space. This allows us to calculate semantic similarity.',
        },
        {
          q: 'What\'s the difference between RAG and fine-tuning?',
          a: 'RAG uses external information without modifying the model (fast and low-cost). Fine-tuning modifies the model itself to optimize for a specific domain (time and cost-intensive but enables deeper understanding).',
        },
      ],
    },
    {
      category: 'Implementation & Technology',
      questions: [
        {
          q: 'How should I determine chunk size?',
          a: 'Generally, set chunk size between 256-1024 tokens. Too small causes context loss, while too large introduces noise. Test with your domain to find the optimal value.',
        },
        {
          q: 'What should the Top-K value be?',
          a: 'Typically 3-5 is good. k=3 is fast and cost-efficient but risks missing information, while k=10 is comprehensive but may introduce noise.',
        },
        {
          q: 'How can I reduce API costs?',
          a: '(1) Use cheaper models (GPT-3.5 vs GPT-4), (2) Implement caching to eliminate duplicate requests, (3) Batch processing, (4) Use local models, (5) Minimize token count.',
        },
      ],
    },
    {
      category: 'Performance & Optimization',
      questions: [
        {
          q: 'How do I evaluate RAG system performance?',
          a: 'Measure accuracy (correct answer rate), recall (information not missed), BLEU/ROUGE scores, and user satisfaction. Use accuracy for clear-cut answers, BLEU scores for complex cases.',
        },
        {
          q: 'Why do I get different answers to the same question?',
          a: 'Lower the Temperature (0.3-0.5), reduce top_p, or configure vector search to return the same documents. This increases response consistency.',
        },
        {
          q: 'How can I optimize slow response times?',
          a: '(1) Use faster embedding models, (2) Reduce k value, (3) Optimize vector DB indexing, (4) Add caching, (5) Implement parallel processing.',
        },
      ],
    },
    {
      category: 'Deployment & Operations',
      questions: [
        {
          q: 'What should I consider when deploying a RAG system to production?',
          a: '(1) Security: API key management, authentication/authorization, (2) Monitoring: track response time and accuracy, (3) Error handling: timeouts and retry logic, (4) Scaling: prepare for traffic spikes.',
        },
        {
          q: 'How do I manage licenses and data privacy?',
          a: 'Check terms of service when using external APIs. OpenAI is private by default, but consider using local models for sensitive data.',
        },
        {
          q: 'When should I update the vector database?',
          a: 'Embed and store new documents immediately when added. For large-scale updates, batch process during off-peak hours (nighttime).',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/en" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions (FAQ)</h1>
          <p className="text-gray-600 mt-2">Common questions and answers about RAG learning</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {faqs.map((category, categoryIdx) => (
          <div key={categoryIdx} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-300">
              {category.category}
            </h2>

            <div className="space-y-4">
              {category.questions.map((faq, qIdx) => {
                const globalIndex = categoryIdx * 100 + qIdx;
                const isOpen = openIndex === globalIndex;

                return (
                  <div key={qIdx} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      className="w-full px-6 py-4 flex items-start justify-between hover:bg-blue-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.q}</h3>
                      <span
                        className={`ml-4 text-2xl text-blue-600 transition-transform flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 py-4 bg-blue-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <section className="bg-blue-50 rounded-lg shadow-md p-8 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Have more questions?</h3>
          <p className="text-gray-700 mb-4">
            If you can't find your answer here, explore the final section of each module for additional questions or
            visit the Resources page for more detailed learning materials.
          </p>
          <Link
            href="/en/resources"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Resources
          </Link>
        </section>
      </main>
    </div>
  );
}
