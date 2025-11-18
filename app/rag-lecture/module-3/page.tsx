import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';

export default function Module3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록으로
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">모듈 3</span>
            <span className="text-gray-500 text-sm">⏱️ 15분</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Augmentation (증강) 단계</h1>
          <p className="text-gray-600 mt-2">검색된 정보를 프롬프트에 통합하는 기술을 배웁니다.</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Augmentation이란?</h2>
          <p className="text-gray-700 mb-4">
            Augmentation은 검색된 관련 문서들을 원본 질문과 함께 조합하여 LLM에 입력할 프롬프트를 구성하는 단계입니다.
            이를 통해 LLM이 검색된 정보를 기반으로 더 정확한 답변을 생성할 수 있습니다.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 Augmentation 기법</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">Stuff 방식</h3>
              <p className="text-gray-700 text-sm">
                검색된 모든 문서를 프롬프트에 포함시키는 방식입니다. 간단하지만 프롬프트 길이가 길어질 수 있습니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">MapReduce 방식</h3>
              <p className="text-gray-700 text-sm">
                각 문서에 대해 독립적으로 질문하고, 결과를 종합하는 방식입니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">Refine 방식</h3>
              <p className="text-gray-700 text-sm">
                문서를 하나씩 처리하면서 답변을 점진적으로 개선하는 방식입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 프롬프트 템플릿</h2>
          <CodeExample
            title="RAG 프롬프트 템플릿"
            language="markdown"
            code={`당신은 유용한 AI 어시스턴트입니다.

다음은 질문에 대한 컨텍스트입니다:
{context}

사용자의 질문: {question}

지침:
1. 위의 컨텍스트를 기반으로만 답변하세요.
2. 컨텍스트에 없는 정보는 답변하지 마세요.
3. 답변이 끝나면 사용한 참고 자료를 명시하세요.

답변:`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 좋은 프롬프트 작성 팁</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
              <span className="text-green-600 font-bold">1</span>
              <p className="text-gray-700">컨텍스트와 질문을 명확하게 구분하세요.</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
              <span className="text-green-600 font-bold">2</span>
              <p className="text-gray-700">컨텍스트 기반으로만 답변할 것을 명시하세요.</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
              <span className="text-green-600 font-bold">3</span>
              <p className="text-gray-700">답변 형식을 명확하게 지정하세요.</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded">
              <span className="text-green-600 font-bold">4</span>
              <p className="text-gray-700">필요시 출처 표기를 요청하세요.</p>
            </div>
          </div>
        </section>

        {/* Next Module */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-2">다음 모듈</h3>
          <p className="text-blue-100 mb-4">모듈 4: Generation (생성) 단계</p>
          <Link
            href="/rag-lecture/module-4"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            다음 강의 보기 →
          </Link>
        </section>
      </main>
    </div>
  );
}
