import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';

export default function Module10() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록으로
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full">모듈 10</span>
            <span className="text-gray-500 text-sm">⏱️ 45분</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">고급 기법</h1>
          <p className="text-gray-600 mt-2">GraphRAG, MultiModal RAG, Self-RAG 등 차세대 RAG 기법</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 차세대 RAG 기법</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-indigo-500 p-4 bg-indigo-50">
              <h3 className="font-bold text-gray-900 mb-2">1. GraphRAG</h3>
              <p className="text-gray-700 text-sm mb-3">
                문서를 그래프 구조로 변환하여 더 복잡한 관계를 파악할 수 있습니다.
                엔티티, 관계, 속성 등을 구조화하여 저장합니다.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <p><strong>장점:</strong> 복잡한 쿼리 처리, 컨텍스트 이해 향상</p>
                <p><strong>단점:</strong> 구축 복잡도 높음, 유지보수 비용 증가</p>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 p-4 bg-indigo-50">
              <h3 className="font-bold text-gray-900 mb-2">2. MultiModal RAG</h3>
              <p className="text-gray-700 text-sm mb-3">
                텍스트뿐만 아니라 이미지, 비디오, 테이블 등 다양한 형식의 데이터를
                처리할 수 있습니다.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <p><strong>활용:</strong> 차트 분석, 이미지 검색, 문서 이해</p>
                <p><strong>기술:</strong> CLIP, LLaVA, GPT-4V</p>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 p-4 bg-indigo-50">
              <h3 className="font-bold text-gray-900 mb-2">3. Self-RAG</h3>
              <p className="text-gray-700 text-sm mb-3">
                LLM이 자신의 응답을 평가하고, 필요하면 자동으로 재검색하여 답변을
                개선하는 기법입니다.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <p><strong>프로세스:</strong> 생성 → 평가 → 필요시 재검색 → 개선</p>
                <p><strong>개선효과:</strong> 정확도 15-25% 향상</p>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 p-4 bg-indigo-50">
              <h3 className="font-bold text-gray-900 mb-2">4. Adaptive RAG</h3>
              <p className="text-gray-700 text-sm mb-3">
                질문의 복잡도에 따라 자동으로 검색 전략을 조정합니다.
                간단한 질문은 직접 답변, 복잡한 질문만 검색합니다.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <p><strong>이점:</strong> 응답 시간 단축, 비용 감소</p>
                <p><strong>구현:</strong> 질문 복잡도 분류 모델 필요</p>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 p-4 bg-indigo-50">
              <h3 className="font-bold text-gray-900 mb-2">5. Hybrid Search</h3>
              <p className="text-gray-700 text-sm mb-3">
                벡터 검색과 키워드 검색을 결합하여 더 정확한 결과를 얻습니다.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <p><strong>방식:</strong> 벡터 검색 (70%) + BM25 (30%)</p>
                <p><strong>결과:</strong> 정확도 및 재현율 동시 향상</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 고급 기법 구현</h2>

          <CodeExample
            title="Self-RAG 구현 예제"
            language="python"
            code={`from langchain.llms import OpenAI
from langchain.evaluation import QAEvalChain

class SelfRAG:
    def __init__(self, qa_chain, evaluator):
        self.qa_chain = qa_chain
        self.evaluator = evaluator
        self.max_iterations = 3

    def answer_with_self_evaluation(self, question):
        """자체 평가를 통한 개선된 답변"""

        for iteration in range(self.max_iterations):
            # 1단계: 초기 답변 생성
            result = self.qa_chain(question)
            answer = result["result"]
            sources = result["source_documents"]

            # 2단계: 답변 평가
            evaluation = self.evaluator.evaluate(
                [{"question": question}],
                predictions=[answer],
                question_key="question"
            )

            # 3단계: 품질 확인
            score = evaluation[0].get("score", 0)

            if score >= 0.8:  # 충분히 좋은 답변
                return {
                    "answer": answer,
                    "sources": sources,
                    "confidence": score,
                    "iterations": iteration + 1
                }
            elif iteration < self.max_iterations - 1:
                # 4단계: 필요시 재검색
                print(f"점수 {score}: 재검색 필요...")
                # 재검색 로직 (k값 증가, 다른 쿼리 등)
                continue

        return {
            "answer": answer,
            "sources": sources,
            "confidence": score,
            "iterations": self.max_iterations,
            "note": "최대 반복 횟수 도달"
        }

# 사용 예
evaluator = QAEvalChain.from_llm_and_prompt(llm, qa_eval_prompt)
self_rag = SelfRAG(qa_chain, evaluator)

result = self_rag.answer_with_self_evaluation("RAG의 장점은?")
print(f"답변: {result['answer']}")
print(f"신뢰도: {result['confidence']:.2%}")
print(f"반복 횟수: {result['iterations']}")`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔀 Hybrid Search 구현</h2>

          <CodeExample
            title="벡터 검색 + 키워드 검색 결합"
            language="python"
            code={`from rank_bm25 import BM25Okapi
import numpy as np

class HybridSearch:
    def __init__(self, vector_db, documents):
        self.vector_db = vector_db
        self.documents = documents

        # BM25 초기화
        tokenized_docs = [doc.split() for doc in documents]
        self.bm25 = BM25Okapi(tokenized_docs)

    def hybrid_search(self, query, k=5, vector_weight=0.7):
        """벡터 검색과 BM25 결합"""

        # 1. 벡터 검색 (의미론적 유사도)
        vector_results = self.vector_db.similarity_search_with_scores(query, k=k)
        vector_scores = {i: score for i, (_, score) in enumerate(vector_results)}

        # 2. BM25 검색 (키워드 유사도)
        query_tokens = query.split()
        bm25_scores = self.bm25.get_scores(query_tokens)

        # 3. 점수 정규화 및 결합
        combined_scores = {}

        # 벡터 점수 추가
        for i, score in vector_scores.items():
            combined_scores[i] = (score / max(vector_scores.values())) * vector_weight

        # BM25 점수 추가
        max_bm25 = max(bm25_scores) if max(bm25_scores) > 0 else 1
        for i, score in enumerate(bm25_scores):
            if i in combined_scores:
                combined_scores[i] += (score / max_bm25) * (1 - vector_weight)
            else:
                combined_scores[i] = (score / max_bm25) * (1 - vector_weight)

        # 4. 상위 K개 반환
        top_indices = sorted(combined_scores.keys(),
                            key=lambda x: combined_scores[x],
                            reverse=True)[:k]

        return [self.documents[i] for i in top_indices]

# 사용 예
hybrid_search = HybridSearch(vector_db, documents)
results = hybrid_search.hybrid_search("RAG 임베딩", k=5, vector_weight=0.6)`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 기법 비교표</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">기법</th>
                  <th className="px-4 py-2 text-left">정확도</th>
                  <th className="px-4 py-2 text-left">속도</th>
                  <th className="px-4 py-2 text-left">복잡도</th>
                  <th className="px-4 py-2 text-left">추천</th>
                </tr>
              </thead>
              <tbody className="border-t">
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">기본 RAG</td>
                  <td className="px-4 py-2">⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">낮음</td>
                  <td className="px-4 py-2">시작</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">Self-RAG</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐</td>
                  <td className="px-4 py-2">중간</td>
                  <td className="px-4 py-2">고정확도</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">Hybrid</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐⭐</td>
                  <td className="px-4 py-2">낮음</td>
                  <td className="px-4 py-2">균형</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">GraphRAG</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐</td>
                  <td className="px-4 py-2">높음</td>
                  <td className="px-4 py-2">복잡한 쿼리</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">MultiModal</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐</td>
                  <td className="px-4 py-2">높음</td>
                  <td className="px-4 py-2">이미지/표 포함</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 기법 선택 가이드</h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 font-bold">1</span>
              <p className="text-gray-700"><strong>정확도가 가장 중요하면?</strong> → Self-RAG + GraphRAG</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 font-bold">2</span>
              <p className="text-gray-700"><strong>속도와 비용이 중요하면?</strong> → Hybrid Search + Adaptive RAG</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 font-bold">3</span>
              <p className="text-gray-700"><strong>복잡한 관계를 파악해야 하면?</strong> → GraphRAG</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 font-bold">4</span>
              <p className="text-gray-700"><strong>다양한 미디어를 다루어야 하면?</strong> → MultiModal RAG</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 font-bold">5</span>
              <p className="text-gray-700"><strong>균형잡힌 성능을 원하면?</strong> → Hybrid Search + 기본 RAG</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 추가 학습 자료</h2>

          <div className="space-y-3">
            <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
              <p className="text-gray-700">
                <strong>GraphRAG 논문:</strong> "From Local to Global: A Graph RAG Approach to Query-Focused Summarization"
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
              <p className="text-gray-700">
                <strong>Self-RAG 논문:</strong> "Self-RAG: Learning to Retrieve, Generate, and Critique for Self-Improve RAG"
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-500">
              <p className="text-gray-700">
                <strong>LangChain 공식 문서:</strong> https://python.langchain.com/docs/modules/retrieval/
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-lg p-8 text-white">
          <div className="text-center">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold mb-2">전체 과정 완료!</h3>
            <p className="text-lg mb-6">
              이제 당신은 기초부터 고급까지 RAG의 모든 것을 마스터했습니다!
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
          <h3 className="text-lg font-bold text-gray-900 mb-3">🚀 다음 도전</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✓ 자신의 프로젝트에 RAG 적용</li>
            <li>✓ 고급 기법 중 하나 깊이 있게 학습</li>
            <li>✓ 오픈소스 RAG 프로젝트 기여</li>
            <li>✓ RAG 커뮤니티 참여</li>
            <li>✓ RAG 관련 논문 읽기</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
