import React from 'react';
import Link from 'next/link';
import { LectureModule } from '@/components/LectureModule';
import { ConceptCard } from '@/components/ConceptCard';
import { CodeExample } from '@/components/CodeExample';

export default function RAGLecturePage() {
  const modules = [
    {
      id: 1,
      title: 'RAG란 무엇인가?',
      duration: '15분',
      description: 'Retrieval-Augmented Generation의 개념과 기본 원리를 배웁니다.',
      completed: false,
      href: '/rag-lecture/module-1',
      level: '초급',
    },
    {
      id: 2,
      title: 'Retrieval (검색) 단계',
      duration: '20분',
      description: '문서에서 관련 정보를 검색하는 방법을 학습합니다.',
      completed: false,
      href: '/rag-lecture/module-2',
      level: '초급',
    },
    {
      id: 3,
      title: 'Augmentation (증강) 단계',
      duration: '15분',
      description: '검색된 정보를 프롬프트에 통합하는 기술을 배웁니다.',
      completed: false,
      href: '/rag-lecture/module-3',
      level: '초급',
    },
    {
      id: 4,
      title: 'Generation (생성) 단계',
      duration: '20분',
      description: 'LLM을 활용한 응답 생성 과정을 이해합니다.',
      completed: false,
      href: '/rag-lecture/module-4',
      level: '초급',
    },
    {
      id: 5,
      title: 'RAG 실제 구현하기',
      duration: '30분',
      description: 'Python으로 RAG 시스템을 직접 구현해봅니다.',
      completed: false,
      href: '/rag-lecture/module-5',
      level: '중급',
    },
    {
      id: 6,
      title: 'RAG 최적화 및 평가',
      duration: '25분',
      description: 'RAG 시스템의 성능을 개선하고 평가하는 방법을 배웁니다.',
      completed: false,
      href: '/rag-lecture/module-6',
      level: '중급',
    },
    {
      id: 7,
      title: '프롬프트 엔지니어링 심화',
      duration: '35분',
      description: 'RAG 시스템에서 최고 품질의 답변을 얻기 위한 고급 프롬프트 기법',
      completed: false,
      href: '/rag-lecture/module-7',
      level: '중급',
    },
    {
      id: 8,
      title: '벡터 DB 비교 및 선택 가이드',
      duration: '40분',
      description: 'Pinecone, Weaviate, Milvus 등 벡터 DB 선택하기',
      completed: false,
      href: '/rag-lecture/module-8',
      level: '중급',
    },
    {
      id: 9,
      title: '실무 RAG 프로젝트',
      duration: '45분',
      description: '기업 문서 기반 QA 시스템 전체 구현',
      completed: false,
      href: '/rag-lecture/module-9',
      level: '고급',
    },
    {
      id: 10,
      title: '고급 기법',
      duration: '45분',
      description: 'GraphRAG, MultiModal RAG, Self-RAG 등 차세대 기법',
      completed: false,
      href: '/rag-lecture/module-10',
      level: '고급',
    },
  ];

  const keyPoints = [
    'LLM의 한계점 극복 (Knowledge Cutoff, 할루시네이션)',
    '외부 지식 데이터베이스 활용',
    '응답의 정확성과 신뢰성 향상',
    '비용 효율적인 AI 시스템 구축',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 홈으로
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">
            LLM RAG 완전 정복 강의
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            컴퓨터공학 학생을 위한 Retrieval-Augmented Generation 시스템 완벽 가이드
          </p>
          <div className="mt-4 flex gap-4 text-sm text-gray-600">
            <span>총 10개 모듈</span>
            <span>|</span>
            <span>약 5시간</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">강의 개요</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-4 text-lg">
              이 강의에서는 대형언어모델(LLM)의 한계를 극복하고 더 정확한 응답을 생성하기 위한
              <span className="font-semibold text-blue-600"> RAG(Retrieval-Augmented Generation)</span> 기술을 완전히 마스터합니다.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              실무에서 사용되는 최신 기법들을 배우고, 직접 RAG 시스템을 구현해보며, 성능 최적화까지 경험할 수 있습니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3">학습 목표</h3>
                <ul className="text-gray-700 space-y-2">
                  {keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-3">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6">
                <h3 className="font-bold text-indigo-900 mb-3">선수 지식</h3>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <span>Python 기본 문법</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <span>벡터(Vector)와 임베딩(Embedding) 개념</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <span>LLM API 사용 경험</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-3">•</span>
                    <span>기본적인 자연어처리(NLP) 개념</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">RAG 아키텍처 개요</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="bg-gray-50 rounded-lg p-6 font-mono text-sm text-gray-700 overflow-x-auto">
              {`┌─────────────────────────────────────────────────────────────┐
│                    RAG System Architecture                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  사용자 질문 입력                                             │
│        ↓                                                       │
│  ┌─────────────────────────────────────────────────┐        │
│  │ 1️⃣  RETRIEVAL (검색)                             │        │
│  │  - 질문과 유사한 문서 검색                        │        │
│  │  - Vector DB에서 관련 청크(chunk) 추출            │        │
│  └─────────────────────────────────────────────────┘        │
│        ↓                                                       │
│  ┌─────────────────────────────────────────────────┐        │
│  │ 2️⃣  AUGMENTATION (증강)                          │        │
│  │  - 원본 질문 + 검색된 문서를 결합                │        │
│  │  - 프롬프트 구성                                  │        │
│  └─────────────────────────────────────────────────┘        │
│        ↓                                                       │
│  ┌─────────────────────────────────────────────────┐        │
│  │ 3️⃣  GENERATION (생성)                            │        │
│  │  - LLM이 정보를 기반으로 응답 생성               │        │
│  │  - 검색된 문서를 참고한 정확한 답변              │        │
│  └─────────────────────────────────────────────────┘        │
│        ↓                                                       │
│  사용자에게 응답 반환                                        │
│                                                               │
└─────────────────────────────────────────────────────────────┘`}
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">강의 커리큘럼</h2>
          <div className="grid grid-cols-1 gap-4">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={module.href}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
                        모듈 {module.id}
                      </span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        module.level === '초급' ? 'bg-green-100 text-green-800' :
                        module.level === '중급' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {module.level}
                      </span>
                      <span className="text-gray-500 text-sm">⏱️ {module.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-gray-600">{module.description}</p>
                  </div>
                  <button className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                    강의 보기
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Key Concepts Preview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">핵심 개념 미리보기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConceptCard
              title="벡터 유사도 (Vector Similarity)"
              description="두 텍스트 임베딩 간의 코사인 유사도를 계산하여 의미적으로 가까운 문서를 찾는 방법"
              icon="📊"
            />
            <ConceptCard
              title="청크 분할 (Chunking)"
              description="긴 문서를 작은 단위로 분할하여 관련성 높은 정보를 효율적으로 검색"
              icon="✂️"
            />
            <ConceptCard
              title="임베딩 (Embedding)"
              description="텍스트를 고차원 벡터로 변환하여 의미론적 정보를 수치화"
              icon="🔢"
            />
            <ConceptCard
              title="프롬프트 엔지니어링"
              description="검색된 정보와 사용자 질문을 효과적으로 조합하여 최고의 응답 유도"
              icon="✍️"
            />
          </div>
        </section>

        {/* Quick Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">RAG 시스템 간단한 예제</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CodeExample
              title="Python으로 RAG 구현하기"
              language="python"
              code={`from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI

# 1. 임베딩 모델 준비
embeddings = OpenAIEmbeddings()

# 2. 벡터 DB 생성 (문서 색인)
vector_store = FAISS.from_documents(
    documents=documents,
    embedding=embeddings
)

# 3. RAG 체인 구성
qa_chain = RetrievalQA.from_chain_type(
    llm=OpenAI(),
    chain_type="stuff",
    retriever=vector_store.as_retriever()
)

# 4. 질문에 답변
result = qa_chain.run(
    "RAG란 무엇인가?"
)`}
            />
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">RAG의 장점</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✓</span>
                  <div>
                    <strong>정확성 향상:</strong> 최신 정보와 구체적인 데이터 기반 응답
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✓</span>
                  <div>
                    <strong>할루시네이션 감소:</strong> 검증된 문서를 기반으로 답변
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✓</span>
                  <div>
                    <strong>비용 절감:</strong> 작은 모델 사용으로 충분한 성능 달성
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3 text-lg">✓</span>
                  <div>
                    <strong>추적 가능성:</strong> 응답의 출처 명시 가능
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">강의를 시작할 준비가 되셨나요?</h2>
            <p className="text-lg mb-6 text-blue-100">
              지금 바로 첫 번째 모듈을 시작하고 RAG 전문가가 되어보세요!
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
              강의 시작하기
            </button>
          </div>
        </section>

        {/* Footer Info */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">이 강의에 대해</h3>
          <p className="text-gray-700 mb-3">
            본 강의는 컴퓨터공학 학생들이 실제 업계에서 사용되는 RAG 기술을 제대로 이해하고
            구현할 수 있도록 설계되었습니다.
          </p>
          <p className="text-gray-700">
            각 모듈은 이론과 실습을 균형있게 구성하여, 완강 후에는 자신의 프로젝트에 RAG를
            적용할 수 있는 능력을 갖추게 됩니다.
          </p>
        </section>
      </main>
    </div>
  );
}
