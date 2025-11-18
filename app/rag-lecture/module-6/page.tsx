import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';

export default function Module6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록으로
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">모듈 6</span>
            <span className="text-gray-500 text-sm">⏱️ 25분</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">RAG 최적화 및 평가</h1>
          <p className="text-gray-600 mt-2">RAG 시스템의 성능을 개선하고 평가하는 방법을 배웁니다.</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 RAG 성능 지표</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">Relevance (관련성)</h3>
              <p className="text-gray-700 text-sm">
                검색된 문서가 질문과 얼마나 관련이 있는지 평가합니다.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                NDCG (Normalized Discounted Cumulative Gain)를 사용하여 측정
              </p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">Faithfulness (충실도)</h3>
              <p className="text-gray-700 text-sm">
                생성된 답변이 검색된 문서에 기반하는지 평가합니다.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                답변에 포함된 주장이 소스에 존재하는지 확인
              </p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">Accuracy (정확성)</h3>
              <p className="text-gray-700 text-sm">
                생성된 답변이 실제 정보와 일치하는지 평가합니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">BLEU/ROUGE Score</h3>
              <p className="text-gray-700 text-sm">
                생성된 답변과 참조 답변 사이의 유사도를 정량적으로 평가합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 최적화 기법</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">1. 청크 크기 최적화</h3>
              <p className="text-gray-700 text-sm">
                너무 작으면 맥락 손실, 너무 크면 노이즈 증가. 일반적으로 256~1024 토큰이 최적입니다.
              </p>
              <div className="mt-3 p-3 bg-blue-50 rounded text-xs text-gray-700 font-mono">
                chunk_size=512, chunk_overlap=50 권장
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">2. 검색 결과 개수 조정</h3>
              <p className="text-gray-700 text-sm">
                너무 많으면 노이즈, 너무 적으면 관련 정보 누락. k=3~5가 일반적입니다.
              </p>
              <div className="mt-3 p-3 bg-blue-50 rounded text-xs text-gray-700 font-mono">
                retriever=vector_db.as_retriever(search_kwargs=&quot;k:5&quot;)
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">3. 임베딩 모델 선택</h3>
              <p className="text-gray-700 text-sm">
                다양한 임베딩 모델 중 도메인에 맞는 모델을 선택합니다.
              </p>
              <div className="mt-3 space-y-1 text-xs text-gray-700">
                <p>• OpenAI: 가장 강력하지만 비용 높음</p>
                <p>• Sentence Transformers: 무료, 빠름</p>
                <p>• Cohere: 중간 수준의 성능과 비용</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">4. 프롬프트 엔지니어링</h3>
              <p className="text-gray-700 text-sm">
                더 구체적이고 명확한 프롬프트를 작성하면 답변 품질 향상.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">5. 메타데이터 활용</h3>
              <p className="text-gray-700 text-sm">
                문서의 출처, 날짜, 카테고리 등을 활용하여 검색 정확도 개선.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 평가 코드 예제</h2>
          <CodeExample
            title="RAG 시스템 평가"
            language="python"
            code={`from langchain.evaluation import QAEvaluator
from langchain.evaluation.qa import QAEvalChain

# 테스트 데이터셋
test_cases = [
    {
        "question": "RAG의 주요 이점은?",
        "expected_answer": "정확성 향상, 할루시네이션 감소"
    },
    {
        "question": "벡터 임베딩이란?",
        "expected_answer": "텍스트를 고차원 벡터로 변환"
    }
]

# 평가 실행
evaluator = QAEvalChain.from_llm_and_prompt(
    llm=llm,
    prompt=qa_eval_prompt
)

results = []
for test in test_cases:
    result = evaluator.evaluate(
        [test],
        predictions=[qa_chain.run(test["question"])],
        question_key="question"
    )
    results.append(result)

# 결과 분석
for i, result in enumerate(results):
    print(f"테스트 {i+1}: {result}")`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 배포 고려사항</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-600 text-lg">💾</span>
              <p className="text-gray-700"><strong>벡터 DB 관리:</strong> Pinecone, Weaviate 등 클라우드 서비스 활용</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-600 text-lg">⚡</span>
              <p className="text-gray-700"><strong>캐싱 전략:</strong> 자주 검색되는 쿼리 결과를 캐싱</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-600 text-lg">📊</span>
              <p className="text-gray-700"><strong>모니터링:</strong> 사용자 질문과 응답 로깅으로 성능 추적</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-600 text-lg">🔄</span>
              <p className="text-gray-700"><strong>지속적 개선:</strong> 사용자 피드백을 통한 모델 업데이트</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded border-l-4 border-green-500">
              <span className="text-green-600 text-lg">💰</span>
              <p className="text-gray-700"><strong>비용 최적화:</strong> 다양한 LLM과 임베딩 모델 비용 비교</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 완성 체크리스트</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-700">RAG의 기본 개념 이해</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-700">Retrieval 단계 학습</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-700">Augmentation 단계 학습</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-700">Generation 단계 학습</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-700">RAG 시스템 구현 완료</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-5 h-5" />
              <span className="text-gray-700">성능 평가 및 최적화</span>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg p-8 text-white">
          <div className="text-center">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-2">축하합니다!</h3>
            <p className="text-lg mb-6">RAG 강의를 완료했습니다.</p>
            <p className="text-green-100 mb-8">
              이제 당신은 LLM과 RAG의 기본을 이해하고 실제 시스템을 구축할 수 있는 역량을 갖추었습니다.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-white text-green-600 font-bold rounded-lg hover:bg-green-50 transition-colors"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </section>

        <section className="bg-blue-50 rounded-lg shadow-md p-8 mt-8 border-l-4 border-blue-500">
          <h3 className="text-lg font-bold text-gray-900 mb-3">📚 다음 단계</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ 더 복잡한 도메인에 RAG 적용</li>
            <li>✓ 다양한 임베딩 모델 실험</li>
            <li>✓ 멀티모달 RAG 학습</li>
            <li>✓ GraphRAG와 같은 고급 기법 탐색</li>
            <li>✓ 실제 프로젝트에 적용</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
