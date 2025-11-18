'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: 'RAG 기본 개념',
      questions: [
        {
          q: 'RAG가 없이도 ChatGPT는 잘 작동하는데, RAG가 왜 필요한가요?',
          a: 'ChatGPT는 학습 데이터의 마감 시점까지만 정보를 알고 있습니다(Knowledge Cutoff). 또한 할루시네이션(거짓 정보 생성) 문제가 있습니다. RAG는 최신 정보와 도메인 특화 정보를 추가하여 이런 문제를 해결합니다.',
        },
        {
          q: '벡터 임베딩이란 정확히 무엇인가요?',
          a: '벡터 임베딩은 텍스트를 고차원의 숫자 배열(벡터)로 변환하는 과정입니다. 예를 들어 "좋은"과 "훌륭한"은 의미가 유사하므로 벡터 공간에서 가까이 위치합니다. 이를 통해 의미론적 유사도를 계산할 수 있습니다.',
        },
        {
          q: 'RAG와 파인튜닝의 차이점은?',
          a: 'RAG는 모델을 수정하지 않고 외부 정보를 활용합니다(빠르고 저비용). 파인튜닝은 모델 자체를 학습하여 특정 도메인에 최적화합니다(시간과 비용이 많이 필요하지만 더 깊은 이해 가능).',
        },
      ],
    },
    {
      category: '구현 및 기술',
      questions: [
        {
          q: '청크 크기는 어떻게 정해야 하나요?',
          a: '일반적으로 256~1024 토큰 사이에서 설정합니다. 너무 작으면 컨텍스트 손실, 너무 크면 노이즈가 증가합니다. 도메인에 따라 테스트하여 최적값을 찾아야 합니다.',
        },
        {
          q: 'Top-K 값은 얼마로 설정해야 하나요?',
          a: '보통 3~5 정도가 좋습니다. k=3은 빠르고 비용 효율적이지만 정보 누락 위험이 있고, k=10은 포괄적이지만 노이즈가 많을 수 있습니다.',
        },
        {
          q: 'API 비용을 줄이려면 어떻게 해야 하나요?',
          a: '(1) 저비용 모델 사용(GPT-3.5 vs GPT-4), (2) 캐싱으로 중복 요청 제거, (3) 배치 처리, (4) 로컬 모델 사용, (5) 토큰 수 최소화 등의 방법이 있습니다.',
        },
      ],
    },
    {
      category: '성능 및 최적화',
      questions: [
        {
          q: 'RAG 시스템의 성능을 어떻게 평가하나요?',
          a: '정확도(정답률), 재현율(놓친 정보), BLEU/ROUGE 스코어, 사용자 만족도 등을 측정합니다. 특히 정답이 명확한 경우 정확도, 복잡한 경우 BLEU 스코어를 사용합니다.',
        },
        {
          q: '같은 질문을 여러 번 하면 다른 답변이 나오는데 어떻게 해야 하나요?',
          a: 'Temperature를 낮추세요(0.3~0.5). 또는 top_p를 작게 설정하거나, 동일한 벡터 검색이 같은 문서를 반환하도록 설정할 수 있습니다.',
        },
        {
          q: '응답 시간이 느린데 어떻게 최적화할 수 있나요?',
          a: '(1) 더 빠른 임베딩 모델 사용, (2) k값 감소, (3) 벡터 DB 인덱싱 최적화, (4) 캐싱 추가, (5) 병렬 처리 등이 있습니다.',
        },
      ],
    },
    {
      category: '배포 및 운영',
      questions: [
        {
          q: 'RAG 시스템을 프로덕션에 배포할 때 주의사항은?',
          a: '(1) 보안: API 키 관리, 인증/인가, (2) 모니터링: 응답 시간, 정확도 추적, (3) 에러 처리: 타임아웃, 재시도 로직, (4) 스케일링: 트래픽 증가 대비',
        },
        {
          q: '라이선스와 데이터 프라이버시는 어떻게 관리하나요?',
          a: '외부 API를 사용하는 경우 이용약관을 확인하세요. OpenAI는 기본적으로 프라이빗하지만, 민감한 데이터의 경우 로컬 모델 사용을 고려하세요.',
        },
        {
          q: '벡터 DB를 언제 업데이트해야 하나요?',
          a: '새로운 문서가 추가되면 즉시 임베딩하여 벡터 DB에 저장해야 합니다. 대규모 업데이트는 야간에 배치 처리하는 것이 좋습니다.',
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
          <h1 className="text-4xl font-bold text-gray-900">자주 묻는 질문 (FAQ)</h1>
          <p className="text-gray-600 mt-2">RAG 학습 중 자주 나오는 질문과 답변</p>
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
          <h3 className="text-lg font-bold text-gray-900 mb-3">더 궁금한 점이 있으신가요?</h3>
          <p className="text-gray-700 mb-4">
            위에서 찾을 수 없는 질문이 있다면, 각 모듈의 마지막 섹션에서 추가 질문을 하거나
            참고 자료 페이지에서 더 깊이 있는 학습 자료를 찾아보세요.
          </p>
          <Link
            href="/resources"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            참고 자료 보기
          </Link>
        </section>
      </main>
    </div>
  );
}
