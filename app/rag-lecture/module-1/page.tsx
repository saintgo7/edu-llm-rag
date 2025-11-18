import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';
import { ConceptCard } from '@/components/ConceptCard';
import { Quiz } from '@/components/Quiz';

const quizQuestions = [
  {
    id: 1,
    question: 'RAG의 주요 목적은 무엇인가?',
    options: [
      'LLM을 더 빠르게 만들기',
      'LLM의 정확성을 높이고 할루시네이션 감소',
      'LLM의 크기를 줄이기',
      'LLM의 비용을 무조건 줄이기',
    ],
    correctAnswer: 1,
    explanation: 'RAG는 LLM이 최신 정보와 특정 도메인의 지식에 접근하도록 하여 정확성을 높이고 할루시네이션(거짓 정보 생성)을 감소시킵니다.',
  },
  {
    id: 2,
    question: 'RAG는 3단계로 구성됩니다. 올바른 순서는?',
    options: [
      'Generation → Retrieval → Augmentation',
      'Retrieval → Augmentation → Generation',
      'Augmentation → Retrieval → Generation',
      'Generation → Augmentation → Retrieval',
    ],
    correctAnswer: 1,
    explanation: 'RAG의 3단계는 (1) Retrieval: 관련 문서 검색, (2) Augmentation: 검색된 정보를 질문과 결합, (3) Generation: LLM이 응답 생성입니다.',
  },
  {
    id: 3,
    question: 'LLM의 Knowledge Cutoff 문제란?',
    options: [
      'LLM이 최신 정보를 모르는 문제',
      'LLM의 프로세싱 속도 저하',
      'LLM의 토큰 한계',
      'LLM의 메모리 부족',
    ],
    correctAnswer: 0,
    explanation: 'Knowledge Cutoff는 LLM이 학습된 데이터에 있는 정보까지만 알고, 그 이후의 최신 정보는 모르는 문제입니다.',
  },
];

export default function Module1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록으로
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
              모듈 1
            </span>
            <span className="text-gray-500 text-sm">⏱️ 15분</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">RAG란 무엇인가?</h1>
          <p className="text-gray-600 mt-2">
            Retrieval-Augmented Generation의 기본 개념과 필요성을 배웁니다.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Learning Objectives */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">학습 목표</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">✓</span>
              <p className="text-gray-700">RAG의 정의와 기본 개념 이해</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">✓</span>
              <p className="text-gray-700">LLM의 한계점 파악</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">✓</span>
              <p className="text-gray-700">RAG가 해결하는 문제들</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">✓</span>
              <p className="text-gray-700">RAG의 실제 적용 사례</p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📖 RAG 소개</h2>

          <div className="prose max-w-none text-gray-700 space-y-4">
            <p>
              <strong>RAG (Retrieval-Augmented Generation)</strong>는 대형언어모델(LLM)이 외부의 정보 출처에서
              관련 데이터를 검색(retrieval)한 후, 그 정보를 활용하여 더 정확하고 신뢰할 수 있는 답변을
              생성(generation)하는 기술입니다.
            </p>

            <p>
              간단히 말해서, RAG는 LLM에 "책장(외부 데이터)"을 제공하고, 사용자의 질문이 있을 때
              관련된 페이지를 찾아서(검색) 그 정보를 기반으로 답변(생성)하도록 하는 방식입니다.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
              <p className="font-semibold text-blue-900 mb-2">💡 생활 속의 예시</p>
              <p className="text-gray-700">
                학생이 시험 문제를 푼다고 생각해보세요. RAG가 없으면 학생은 자신의 기억력(LLM의 학습 데이터)에만
                의존합니다. 하지만 RAG를 사용하면, 학생은 교과서(외부 데이터)를 찾아보고 그 내용을 바탕으로
                더 정확한 답변을 할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* LLM의 한계점 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚠️ LLM의 한계점</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-red-500 p-4 bg-red-50">
              <h3 className="font-bold text-red-900 mb-2">Knowledge Cutoff</h3>
              <p className="text-gray-700 text-sm">
                LLM은 학습 데이터의 마감 시점까지만 정보를 알고 있습니다. 최신 뉴스나 사건은 알 수 없습니다.
              </p>
            </div>

            <div className="border-l-4 border-red-500 p-4 bg-red-50">
              <h3 className="font-bold text-red-900 mb-2">할루시네이션</h3>
              <p className="text-gray-700 text-sm">
                LLM은 때때로 근거 없이 그럴듯한 거짓 정보를 생성합니다. 예: 존재하지 않는 논문 인용.
              </p>
            </div>

            <div className="border-l-4 border-red-500 p-4 bg-red-50">
              <h3 className="font-bold text-red-900 mb-2">도메인 특화 지식 부족</h3>
              <p className="text-gray-700 text-sm">
                특정 회사의 내부 정책이나 비공개 문서에 대해서는 답변할 수 없습니다.
              </p>
            </div>

            <div className="border-l-4 border-red-500 p-4 bg-red-50">
              <h3 className="font-bold text-red-900 mb-2">출처 추적 불가</h3>
              <p className="text-gray-700 text-sm">
                답변이 어디서 나온 정보인지 알 수 없어서 검증이 어렵습니다.
              </p>
            </div>
          </div>
        </section>

        {/* RAG의 해결책 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">✨ RAG의 해결책</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <span className="text-2xl">1️⃣</span>
              <div>
                <h3 className="font-bold text-gray-900">최신 정보 접근</h3>
                <p className="text-gray-700">외부 데이터베이스에서 최신 정보를 실시간으로 검색할 수 있습니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <span className="text-2xl">2️⃣</span>
              <div>
                <h3 className="font-bold text-gray-900">할루시네이션 감소</h3>
                <p className="text-gray-700">실제 존재하는 문서를 기반으로 답변하므로 거짓 정보 생성 가능성이 낮습니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <span className="text-2xl">3️⃣</span>
              <div>
                <h3 className="font-bold text-gray-900">도메인 특화</h3>
                <p className="text-gray-700">특정 분야의 문서를 시스템에 추가하여 전문적인 답변이 가능합니다.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <span className="text-2xl">4️⃣</span>
              <div>
                <h3 className="font-bold text-gray-900">투명성 확보</h3>
                <p className="text-gray-700">어떤 문서를 기반으로 답변했는지 추적할 수 있습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Example */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 간단한 예제</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">시나리오: 회사의 정책 질문</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 font-mono">
                사용자 질문: "우리 회사의 휴가 정책은 어떻게 되나요?"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-red-200 p-6 rounded-lg">
              <h4 className="font-bold text-red-900 mb-3">❌ RAG 없이</h4>
              <p className="text-gray-700 mb-2 text-sm">
                LLM이 일반적인 휴가 정책이나 기억하고 있는 정보로 답변합니다.
              </p>
              <p className="text-red-600 text-sm italic">
                "보통 회사에서는 연 20일의 휴가를..."
              </p>
              <p className="text-gray-600 text-xs mt-2">
                → 정확하지 않고 할루시네이션 위험
              </p>
            </div>

            <div className="border-2 border-green-200 p-6 rounded-lg">
              <h4 className="font-bold text-green-900 mb-3">✅ RAG 사용</h4>
              <p className="text-gray-700 mb-2 text-sm">
                먼저 회사의 정책 문서에서 휴가 정책을 검색하고, 그 내용을 바탕으로 답변합니다.
              </p>
              <p className="text-green-600 text-sm italic">
                "우리 회사의 정책에 따르면 연 25일의 연차가 있으며..."
              </p>
              <p className="text-gray-600 text-xs mt-2">
                → 정확하고 신뢰할 수 있는 답변
              </p>
            </div>
          </div>
        </section>

        {/* Key Concepts */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 핵심 개념</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ConceptCard
              title="Retrieval (검색)"
              description="사용자의 질문과 의미적으로 유사한 문서나 데이터를 데이터베이스에서 찾아내는 과정"
              icon="🔍"
            />
            <ConceptCard
              title="Augmentation (증강)"
              description="검색된 관련 문서를 원본 질문과 함께 프롬프트에 포함시키는 과정"
              icon="📝"
            />
            <ConceptCard
              title="Generation (생성)"
              description="증강된 프롬프트를 받은 LLM이 최종 응답을 생성하는 과정"
              icon="✨"
            />
            <ConceptCard
              title="Vector Database"
              description="텍스트를 벡터로 변환하여 저장하고, 유사도 검색을 빠르게 수행하는 DB"
              icon="📦"
            />
          </div>
        </section>

        {/* Real World Examples */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🌍 실제 적용 사례</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">고객 지원 챗봇</h3>
              <p className="text-gray-700">
                회사의 FAQ와 정책 문서를 학습하여, 고객 질문에 정확하고 일관성 있는 답변을 제공합니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">의료 진단 시스템</h3>
              <p className="text-gray-700">
                최신 의료 논문과 임상 가이드라인을 검색하여, 의사의 진단을 돕는 정보를 제공합니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">법률 조언 시스템</h3>
              <p className="text-gray-700">
                판례와 법령을 검색하여, 정확한 법률 정보에 기반한 조언을 제공합니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">학습 보조 시스템</h3>
              <p className="text-gray-700">
                교과서와 참고 자료를 검색하여, 학생의 질문에 신뢰할 수 있는 답변을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📌 핵심 요약</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600">•</span>
              <span><strong>RAG</strong>는 LLM이 외부 정보를 검색하고 활용하여 더 정확한 답변을 생성하도록 합니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600">•</span>
              <span>LLM의 <strong>Knowledge Cutoff, 할루시네이션, 도메인 지식 부족</strong> 등의 문제를 해결합니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600">•</span>
              <span>RAG는 <strong>검색(Retrieval) → 증강(Augmentation) → 생성(Generation)</strong> 3단계로 작동합니다.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600">•</span>
              <span>고객 지원, 의료, 법률, 교육 등 많은 분야에서 실제로 활용되고 있습니다.</span>
            </li>
          </ul>
        </section>

        {/* Quiz */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">✅ 학습 확인</h2>
          <Quiz questions={quizQuestions} title="모듈 1 퀴즈" />
        </section>

        {/* Next Module */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-2">다음 모듈</h3>
          <p className="text-blue-100 mb-4">모듈 2: Retrieval (검색) 단계</p>
          <Link
            href="/rag-lecture/module-2"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            다음 강의 보기 →
          </Link>
        </section>
      </main>
    </div>
  );
}
