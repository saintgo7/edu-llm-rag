import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';

export default function Module7() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록으로
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full">모듈 7</span>
            <span className="text-gray-500 text-sm">⏱️ 35분</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">프롬프트 엔지니어링 심화</h1>
          <p className="text-gray-600 mt-2">RAG 시스템에서 최고 품질의 답변을 얻기 위한 프롬프트 최적화 기법</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 고급 프롬프트 기법</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 p-4 bg-purple-50">
              <h3 className="font-bold text-gray-900 mb-2">1. Chain-of-Thought (CoT) 프롬프팅</h3>
              <p className="text-gray-700 text-sm mb-3">
                LLM이 단계적으로 추론하도록 유도하는 기법. "단계별로 생각해주세요"라는 명령으로 더 정확한 답변을 유도합니다.
              </p>
              <div className="bg-gray-50 p-3 rounded text-xs text-gray-700">
                <p className="font-mono mb-2">프롬프트 예시:</p>
                <p>"다음 문제를 단계별로 풀어주세요. 먼저 문제를 분석하고, 각 단계를 설명한 후 최종 답변을 제시하세요."</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 p-4 bg-purple-50">
              <h3 className="font-bold text-gray-900 mb-2">2. Few-Shot 프롬프팅</h3>
              <p className="text-gray-700 text-sm mb-3">
                몇 가지 예시를 포함하여 모델에게 원하는 답변 형식을 보여주는 기법입니다.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 p-4 bg-purple-50">
              <h3 className="font-bold text-gray-900 mb-2">3. Role-Based 프롬프팅</h3>
              <p className="text-gray-700 text-sm mb-3">
                "당신은 [역할]입니다"라고 지정하여 특정 관점에서 답변하도록 유도합니다.
              </p>
              <p className="text-gray-600 text-xs">
                예: "당신은 경험 10년의 데이터 과학자입니다. RAG 시스템 설계에 대해..."
              </p>
            </div>

            <div className="border-l-4 border-purple-500 p-4 bg-purple-50">
              <h3 className="font-bold text-gray-900 mb-2">4. 제약 조건 명시</h3>
              <p className="text-gray-700 text-sm mb-3">
                답변의 길이, 형식, 제외할 내용 등을 명확하게 지정합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 프롬프트 템플릿 예제</h2>

          <CodeExample
            title="고급 RAG 프롬프트 템플릿"
            language="markdown"
            code={`당신은 전문적인 AI 어시스턴트입니다.

[역할]: {role}
[전문 분야]: {expertise}

다음은 참고 자료입니다:
---
{context}
---

사용자의 질문:
{question}

지침:
1. 위 참고 자료를 기반으로만 답변하세요.
2. 참고 자료에 없는 정보는 "해당 정보는 제공된 자료에 없습니다"라고 명시하세요.
3. 답변은 다음 형식으로 제시하세요:
   - 핵심 답변 (2-3문장)
   - 세부 설명 (단계별)
   - 실제 예시 또는 적용 방법
   - 참고 자료 출처 명시
4. 기술적 용어를 사용할 때는 괄호에 설명을 포함하세요.
5. 답변 길이: {max_length} 토큰 이내

[단계별 사고 프로세스]
1단계: 질문 분석 - 사용자가 정확히 무엇을 원하는가?
2단계: 관련 정보 추출 - 참고 자료에서 관련 정보 찾기
3단계: 답변 구성 - 논리적 순서대로 배열
4단계: 검증 - 답변이 참고 자료와 일치하는가?

답변:`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 프롬프트 최적화 체크리스트</h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
              <span className="text-green-600">✓</span>
              <p className="text-gray-700"><strong>명확성:</strong> 질문과 요구사항이 명확한가?</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
              <span className="text-green-600">✓</span>
              <p className="text-gray-700"><strong>컨텍스트:</strong> 충분한 배경 정보가 제공되었는가?</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
              <span className="text-green-600">✓</span>
              <p className="text-gray-700"><strong>형식:</strong> 원하는 답변 형식이 명시되었는가?</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
              <span className="text-green-600">✓</span>
              <p className="text-gray-700"><strong>제약:</strong> 길이, 언어, 포함/제외 사항이 명확한가?</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
              <span className="text-green-600">✓</span>
              <p className="text-gray-700"><strong>검증:</strong> 답변이 검증 가능한가?</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
              <span className="text-green-600">✓</span>
              <p className="text-gray-700"><strong>반복성:</strong> 같은 입력에 일관된 결과가 나오는가?</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ 성능 비교</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">기법</th>
                  <th className="px-4 py-2 text-left">정확성</th>
                  <th className="px-4 py-2 text-left">비용</th>
                  <th className="px-4 py-2 text-left">추천 사용</th>
                </tr>
              </thead>
              <tbody className="border-t">
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">기본 프롬프트</td>
                  <td className="px-4 py-2">⭐⭐</td>
                  <td className="px-4 py-2">$</td>
                  <td className="px-4 py-2">빠른 시제</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">CoT 프롬프팅</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">$$</td>
                  <td className="px-4 py-2">복잡한 추론</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-semibold">Few-Shot</td>
                  <td className="px-4 py-2">⭐⭐⭐</td>
                  <td className="px-4 py-2">$$$</td>
                  <td className="px-4 py-2">특정 형식 필요</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Role-Based</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">$$</td>
                  <td className="px-4 py-2">특정 관점 필요</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-2">다음 모듈</h3>
          <p className="text-blue-100 mb-4">모듈 8: 벡터 DB 비교 및 선택 가이드</p>
          <Link
            href="/rag-lecture/module-8"
            className="inline-block px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            다음 강의 보기 →
          </Link>
        </section>
      </main>
    </div>
  );
}
