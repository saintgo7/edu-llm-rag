import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      category: '공식 문서',
      items: [
        {
          title: 'LangChain 공식 문서',
          description: 'LLM 애플리케이션 개발을 위한 핵심 프레임워크',
          url: 'https://python.langchain.com/',
          tags: ['LangChain', '프레임워크'],
        },
        {
          title: 'OpenAI API 문서',
          description: 'GPT 모델과 API 사용 방법',
          url: 'https://platform.openai.com/docs/api-reference',
          tags: ['OpenAI', 'API'],
        },
        {
          title: 'Pinecone 문서',
          description: '클라우드 벡터 DB 사용 가이드',
          url: 'https://docs.pinecone.io/',
          tags: ['벡터DB', '클라우드'],
        },
        {
          title: 'Weaviate 문서',
          description: '오픈소스 벡터 DB 문서',
          url: 'https://weaviate.io/developers/weaviate/',
          tags: ['벡터DB', '오픈소스'],
        },
      ],
    },
    {
      category: '논문 및 연구',
      items: [
        {
          title: 'RAG: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',
          description: 'RAG의 원본 논문 (Facebook AI Research)',
          url: 'https://arxiv.org/abs/2005.11401',
          tags: ['논문', 'RAG'],
        },
        {
          title: 'Self-RAG: Learning to Retrieve, Generate, and Critique for Self-Improve RAG',
          description: 'Self-RAG 기법 논문',
          url: 'https://arxiv.org/abs/2310.11511',
          tags: ['논문', '고급기법'],
        },
        {
          title: 'From Local to Global: A Graph RAG Approach',
          description: 'GraphRAG 기법 논문',
          url: 'https://arxiv.org/abs/2404.16130',
          tags: ['논문', '그래프'],
        },
        {
          title: 'Attention is All You Need',
          description: 'Transformer 아키텍처 기초 논문',
          url: 'https://arxiv.org/abs/1706.03762',
          tags: ['논문', 'Transformer'],
        },
      ],
    },
    {
      category: '튜토리얼 및 가이드',
      items: [
        {
          title: 'Building RAG Systems with LangChain',
          description: 'LangChain으로 RAG 구축하는 단계별 가이드',
          url: 'https://python.langchain.com/docs/use_cases/question_answering/',
          tags: ['튜토리얼', 'LangChain'],
        },
        {
          title: 'RAG Implementation Guide',
          description: '실무용 RAG 구현 가이드',
          url: 'https://www.deeplearning.ai/short-courses/langchain-for-llm-application-development/',
          tags: ['가이드', '실전'],
        },
        {
          title: 'Vector Database Comparison',
          description: '벡터 DB 비교 및 선택 가이드',
          url: 'https://myscale.com/blog/vector-databases-comparison/',
          tags: ['비교', '벡터DB'],
        },
      ],
    },
    {
      category: '커뮤니티 및 블로그',
      items: [
        {
          title: 'Hugging Face Transformers',
          description: '사전학습된 모델 및 도구 제공',
          url: 'https://huggingface.co/docs/transformers/',
          tags: ['커뮤니티', '모델'],
        },
        {
          title: 'Towards Data Science - RAG Articles',
          description: 'RAG 관련 다양한 아티클',
          url: 'https://towardsdatascience.com/',
          tags: ['블로그', 'RAG'],
        },
        {
          title: '스탠포드 CS224N: NLP with Deep Learning',
          description: '자연어처리 기초 강의',
          url: 'https://web.stanford.edu/class/cs224n/',
          tags: ['강의', 'NLP'],
        },
      ],
    },
    {
      category: '오픈소스 프로젝트',
      items: [
        {
          title: 'LlamaIndex',
          description: 'LLM 애플리케이션용 데이터 프레임워크',
          url: 'https://github.com/run-llama/llama_index',
          tags: ['오픈소스', '프레임워크'],
        },
        {
          title: 'Haystack',
          description: '엔드-투-엔드 검색 시스템 프레임워크',
          url: 'https://github.com/deepset-ai/haystack',
          tags: ['오픈소스', '검색'],
        },
        {
          title: 'Milvus',
          description: '오픈소스 벡터 데이터베이스',
          url: 'https://github.com/milvus-io/milvus',
          tags: ['오픈소스', '벡터DB'],
        },
        {
          title: 'Chromadb',
          description: '경량 벡터 DB (Python)',
          url: 'https://github.com/chroma-core/chroma',
          tags: ['오픈소스', '벡터DB'],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 홈으로
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">참고 자료</h1>
          <p className="text-gray-600 mt-2">RAG 학습과 구현을 위한 추천 자료 및 링크</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {resources.map((category, catIdx) => (
          <section key={catIdx} className="mb-12">
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
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                    <span className="ml-2 text-gray-400">↗</span>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}

        {/* 학습 경로 */}
        <section className="bg-white rounded-lg shadow-md p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 추천 학습 경로</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">초급자 (RAG 처음 배우는 경우)</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. 이 강의의 모듈 1-3 완료</li>
                <li>2. LangChain 튜토리얼 읽기</li>
                <li>3. FAISS를 활용한 간단한 RAG 구현</li>
                <li>4. RAG 원본 논문 읽기</li>
              </ol>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">중급자 (기본 RAG 이해하고 있는 경우)</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. 이 강의의 모듈 4-8 완료</li>
                <li>2. 다양한 벡터 DB 비교 및 실습</li>
                <li>3. 프롬프트 엔지니어링 깊이 있게 학습</li>
                <li>4. 실무 프로젝트 구현 (모듈 9)</li>
              </ol>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">고급자 (RAG 전문화 원하는 경우)</h3>
              <ol className="space-y-2 text-gray-700 text-sm">
                <li>1. 이 강의의 모든 모듈 완료</li>
                <li>2. 최신 논문(Self-RAG, GraphRAG) 학습</li>
                <li>3. 오픈소스 프로젝트 기여</li>
                <li>4. 자신의 도메인에 맞게 커스터마이징</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 추가 학습 팁 */}
        <section className="bg-blue-50 rounded-lg shadow-md p-8 mt-8 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-gray-900 mb-4">💡 효과적인 학습 팁</h3>
          <ul className="space-y-3 text-gray-700">
            <li>✓ <strong>실습과 이론의 균형:</strong> 읽기만 하지 말고 직접 구현해보세요</li>
            <li>✓ <strong>작은 프로젝트부터 시작:</strong> 작은 규모의 RAG부터 시작하여 복잡도를 높이세요</li>
            <li>✓ <strong>논문 읽기:</strong> 개념을 깊이 있게 이해하려면 원본 논문을 읽는 것이 중요합니다</li>
            <li>✓ <strong>커뮤니티 참여:</strong> GitHub 이슈, 토론에 참여하며 배우세요</li>
            <li>✓ <strong>정기적인 복습:</strong> 배운 내용을 정기적으로 복습하세요</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
