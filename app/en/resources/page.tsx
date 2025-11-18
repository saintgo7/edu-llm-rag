import Link from 'next/link';

export default function EnResourcesPage() {
  const resources = [
    {
      category: 'Official Documentation',
      items: [
        {
          title: 'OpenAI API Documentation',
          description: 'Official docs for GPT-3.5, GPT-4, and embeddings API',
          url: 'https://platform.openai.com/docs',
          type: 'Documentation'
        },
        {
          title: 'LangChain Documentation',
          description: 'Complete guide to building LLM applications with LangChain',
          url: 'https://python.langchain.com',
          type: 'Documentation'
        },
        {
          title: 'Hugging Face Transformers',
          description: 'State-of-the-art NLP models and documentation',
          url: 'https://huggingface.co/docs/transformers',
          type: 'Documentation'
        },
      ]
    },
    {
      category: 'Vector Databases',
      items: [
        {
          title: 'Pinecone Documentation',
          description: 'Managed vector database with simple API',
          url: 'https://docs.pinecone.io',
          type: 'Documentation'
        },
        {
          title: 'Weaviate Documentation',
          description: 'Open-source vector search engine',
          url: 'https://weaviate.io/developers/weaviate',
          type: 'Documentation'
        },
        {
          title: 'FAISS Documentation',
          description: 'Facebook AI Similarity Search library',
          url: 'https://github.com/facebookresearch/faiss',
          type: 'Tool'
        },
        {
          title: 'Qdrant Documentation',
          description: 'Vector database for similarity search',
          url: 'https://qdrant.tech/documentation',
          type: 'Documentation'
        },
      ]
    },
    {
      category: 'Research Papers',
      items: [
        {
          title: 'Retrieval-Augmented Generation (2020)',
          description: 'Original RAG paper introducing the technique',
          url: 'https://arxiv.org/abs/2005.11401',
          type: 'Paper'
        },
        {
          title: 'REALM: Retrieval-Augmented Language Model Pre-Training',
          description: 'Pre-training with retrieval augmentation',
          url: 'https://arxiv.org/abs/2002.08909',
          type: 'Paper'
        },
        {
          title: 'Self-RAG: Learning to Retrieve, Generate, and Critique',
          description: 'Self-evaluating RAG systems',
          url: 'https://arxiv.org/abs/2310.11511',
          type: 'Paper'
        },
        {
          title: 'LLaMA 2: Open Foundation and Fine-tuned Chat Models',
          description: 'Meta\'s open-source LLM',
          url: 'https://arxiv.org/abs/2307.09288',
          type: 'Paper'
        },
      ]
    },
    {
      category: 'Tutorials & Guides',
      items: [
        {
          title: 'Building RAG Applications with LangChain',
          description: 'Step-by-step guide to RAG implementation',
          url: 'https://blog.langchain.dev/rag-from-scratch',
          type: 'Tutorial'
        },
        {
          title: 'Prompt Engineering Guide',
          description: 'Comprehensive guide to prompt optimization',
          url: 'https://www.promptingguide.ai',
          type: 'Guide'
        },
        {
          title: 'Vector Database Comparison Guide',
          description: 'Comparing different vector database solutions',
          url: 'https://superlinked.com/vector-databases-guide',
          type: 'Guide'
        },
        {
          title: 'DeepLearning.AI Short Courses',
          description: 'Free short courses on LLMs and RAG',
          url: 'https://www.deeplearning.ai/short-courses',
          type: 'Course'
        },
      ]
    },
    {
      category: 'Open Source Projects',
      items: [
        {
          title: 'LlamaIndex',
          description: 'Data framework for LLM applications',
          url: 'https://github.com/run-llama/llama_index',
          type: 'Tool'
        },
        {
          title: 'Haystack by Deepset',
          description: 'RAG framework for production applications',
          url: 'https://github.com/deepset-ai/haystack',
          type: 'Tool'
        },
        {
          title: 'ChromaDB',
          description: 'Lightweight vector database',
          url: 'https://github.com/chroma-core/chroma',
          type: 'Tool'
        },
        {
          title: 'Milvus',
          description: 'Open-source vector database for production',
          url: 'https://github.com/milvus-io/milvus',
          type: 'Tool'
        },
      ]
    },
    {
      category: 'Community & Discussion',
      items: [
        {
          title: 'LangChain Discord Community',
          description: 'Active community for LangChain discussions',
          url: 'https://discord.gg/cU2adEyC7w',
          type: 'Community'
        },
        {
          title: 'r/MachineLearning',
          description: 'Reddit community for ML discussions',
          url: 'https://reddit.com/r/MachineLearning',
          type: 'Community'
        },
        {
          title: 'Hugging Face Forums',
          description: 'Community for NLP and transformers',
          url: 'https://huggingface.co/spaces',
          type: 'Community'
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link href="/en" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">Resources</h1>
          <p className="text-gray-600 mt-2">Curated links to documentation, papers, and tools</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Learning Path Overview */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recommended Learning Path</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">1</div>
              <div>
                <p className="font-semibold text-gray-900">Start with Fundamentals</p>
                <p className="text-sm text-gray-600">Read OpenAI docs and LangChain introduction</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">2</div>
              <div>
                <p className="font-semibold text-gray-900">Explore DeepLearning.AI Courses</p>
                <p className="text-sm text-gray-600">Take short courses on specific topics</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">3</div>
              <div>
                <p className="font-semibold text-gray-900">Study Research Papers</p>
                <p className="text-sm text-gray-600">Read original RAG and transformer papers</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex-shrink-0">4</div>
              <div>
                <p className="font-semibold text-gray-900">Join Communities</p>
                <p className="text-sm text-gray-600">Engage with Discord and Reddit communities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources by Category */}
        {resources.map((category, categoryIdx) => (
          <section key={categoryIdx} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-300">
              {category.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item, itemIdx) => (
                <a
                  key={itemIdx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow hover:border-blue-300 border border-transparent"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 text-left">{item.title}</h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800 flex-shrink-0 ml-2">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <span className="text-blue-600 text-sm font-semibold hover:text-blue-800">
                    Visit →
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}

        {/* Additional Tips */}
        <section className="bg-blue-50 rounded-lg shadow-md p-8 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 Tips for Effective Learning</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span>Start with official documentation to understand core concepts</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span>Take notes while reading and implement examples locally</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span>Join communities to ask questions and learn from others</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span>Regularly read research papers to understand advanced techniques</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold flex-shrink-0">•</span>
              <span>Build small projects to practice what you've learned</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
