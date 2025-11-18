import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';

export default function Module4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록으로
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">모듈 4</span>
            <span className="text-gray-500 text-sm">⏱️ 20분</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Generation (생성) 단계</h1>
          <p className="text-gray-600 mt-2">LLM을 활용한 응답 생성 과정을 이해합니다.</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">✨ Generation 단계</h2>
          <p className="text-gray-700 mb-4">
            Generation은 증강된 프롬프트를 LLM에 입력하여 최종 답변을 생성하는 단계입니다.
            이전 단계에서 검색하고 조합한 정보를 기반으로 LLM이 자연스러운 답변을 만듭니다.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 LLM 모델 선택</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">GPT-4 / GPT-3.5</h3>
              <p className="text-gray-700 text-sm">OpenAI의 최신 모델. 매우 강력하지만 비용이 높습니다.</p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">Llama 2</h3>
              <p className="text-gray-700 text-sm">Meta의 오픈소스 모델. 온프레미스 배포 가능합니다.</p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">Claude</h3>
              <p className="text-gray-700 text-sm">Anthropic의 모델. 안전성과 성능이 뛰어납니다.</p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">Gemini</h3>
              <p className="text-gray-700 text-sm">Google의 모델. 멀티모달 기능을 지원합니다.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 Generation 구현</h2>
          <CodeExample
            title="LangChain으로 RAG 완성"
            language="python"
            code={`from langchain.llms import OpenAI
from langchain.chains import RetrievalQA

# LLM 설정
llm = OpenAI(temperature=0.7)

# RAG 체인 구성
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_db.as_retriever(
        search_kwargs={"k": 3}
    )
)

# 질문에 답변 생성
question = "RAG의 주요 이점은?"
result = qa_chain.run(question)

print(result)`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 생성 파라미터 조정</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Temperature (온도)</h3>
              <p className="text-gray-700 text-sm mb-2">
                창의성을 조절합니다. 0에 가까울수록 일관성 있고, 높을수록 다양합니다.
              </p>
              <div className="text-gray-600 text-xs space-y-1">
                <p>• 0.0: 완전히 결정적 (같은 입력 → 항상 같은 출력)</p>
                <p>• 0.7: 균형잡힌 창의성 (권장)</p>
                <p>• 1.0 이상: 매우 창의적 (할루시네이션 위험)</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Max Tokens</h3>
              <p className="text-gray-700 text-sm">
                생성할 수 있는 최대 토큰 수를 제한합니다. 비용 제어에 유용합니다.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">Top-P (Nucleus Sampling)</h3>
              <p className="text-gray-700 text-sm">
                가능도가 높은 상위 P% 토큰만 선택합니다. 0.9 권장.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚠️ 주의사항</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 text-lg">⚠️</span>
              <p className="text-gray-700">여전히 할루시네이션이 발생할 수 있으므로 검증이 필요합니다.</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 text-lg">⚠️</span>
              <p className="text-gray-700">검색된 문서의 품질이 최종 답변의 품질을 결정합니다.</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 text-lg">⚠️</span>
              <p className="text-gray-700">API 비용을 고려하여 적절한 모델과 파라미터를 선택하세요.</p>
            </div>
          </div>
        </section>

        {/* Next Module */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-2">다음 모듈</h3>
          <p className="text-blue-100 mb-4">모듈 5: RAG 실제 구현하기</p>
          <Link
            href="/rag-lecture/module-5"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            다음 강의 보기 →
          </Link>
        </section>
      </main>
    </div>
  );
}
