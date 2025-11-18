import Link from 'next/link';

export default function Module11Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">모듈 11: LlamaIndex와 데이터 프레임워크</h1>
          <p className="text-gray-600 mt-2">프로덕션 레벨의 데이터 관리 및 인덱싱 (50분)</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Learning Objectives */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 학습 목표</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✓ LlamaIndex의 핵심 개념과 장점 이해</li>
            <li>✓ Document Loaders, Indexes, Query Engines 활용</li>
            <li>✓ 다양한 데이터 소스 연결 및 관리</li>
            <li>✓ 프로덕션 환경에서의 최적화 기법</li>
            <li>✓ 다른 RAG 프레임워크와의 비교</li>
          </ul>
        </section>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 LlamaIndex 소개</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-bold text-gray-900 mb-2">LlamaIndex란?</h3>
              <p className="text-gray-700">
                LlamaIndex(구 GPT Index)는 LLM 애플리케이션을 위한 데이터 프레임워크입니다.
                문서를 구조화된 인덱스로 변환하고, 이를 통해 효율적인 RAG 시스템을 구축할 수 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-2">⚡ 주요 특징</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 간단한 API</li>
                  <li>• 다양한 인덱스 타입</li>
                  <li>• 자동 최적화</li>
                  <li>• 데이터 연결</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-2">🔗 지원 데이터</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• PDF, 텍스트</li>
                  <li>• 웹 페이지</li>
                  <li>• 데이터베이스</li>
                  <li>• API 연결</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-gray-900 mb-2">🎓 학습곡선</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 초보자 친화</li>
                  <li>• 빠른 프로토타이핑</li>
                  <li>• 무한 확장성</li>
                  <li>• 커뮤니티 지원</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Concepts */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 핵심 개념</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-2">1. Document Loaders</h3>
              <p className="text-gray-700 mb-3">다양한 소스에서 데이터를 로드하는 인터페이스</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`from llama_index import SimpleDirectoryReader

# PDF 파일 로드
documents = SimpleDirectoryReader(
    input_dir="./documents"
).load_data()

# 웹 페이지 로드
from llama_index.readers.web import SimpleWebPageReader
documents = SimpleWebPageReader().load_data(
    urls=["https://example.com"]
)`}</pre>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-2">2. Indexes (인덱스)</h3>
              <p className="text-gray-700 mb-3">문서를 검색 가능한 구조로 변환</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`from llama_index import VectorStoreIndex, GPTVectorStoreIndex

# Vector Index 생성
index = VectorStoreIndex.from_documents(
    documents=documents,
    service_context=service_context
)

# 저장
index.storage_context.persist(
    persist_dir="./storage"
)

# 로드
from llama_index import load_index_from_storage
index = load_index_from_storage(
    storage_context=storage_context
)`}</pre>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-2">3. Query Engines (쿼리 엔진)</h3>
              <p className="text-gray-700 mb-3">인덱스에서 정보를 검색하고 답변 생성</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`# 쿼리 엔진 생성
query_engine = index.as_query_engine()

# 쿼리 실행
response = query_engine.query(
    "RAG의 장점은 무엇인가?"
)

# 결과 확인
print(response.response)
print(response.source_nodes)  # 출처 문서`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Index Types */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 인덱스 타입 비교</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-100 text-gray-900">
                <tr>
                  <th className="px-4 py-2 text-left">인덱스 타입</th>
                  <th className="px-4 py-2 text-left">사용 사례</th>
                  <th className="px-4 py-2 text-left">속도</th>
                  <th className="px-4 py-2 text-left">정확도</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-blue-50">
                  <td className="px-4 py-2 font-semibold">VectorIndex</td>
                  <td className="px-4 py-2">일반적인 RAG</td>
                  <td className="px-4 py-2">⚡ 빠름</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-4 py-2 font-semibold">TreeIndex</td>
                  <td className="px-4 py-2">계층적 문서</td>
                  <td className="px-4 py-2">⚡ 중간</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-4 py-2 font-semibold">KeywordIndex</td>
                  <td className="px-4 py-2">키워드 검색</td>
                  <td className="px-4 py-2">⚡⚡ 매우 빠름</td>
                  <td className="px-4 py-2">⭐⭐⭐</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-4 py-2 font-semibold">GraphIndex</td>
                  <td className="px-4 py-2">복잡한 관계</td>
                  <td className="px-4 py-2">⚡ 느림</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Advanced Patterns */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 고급 패턴</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">다중 인덱스 쿼리</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`from llama_index import QueryBundle
from llama_index.query_engine import SubQuestionQueryEngine

# 여러 인덱스 생성
pdf_index = VectorStoreIndex.from_documents(pdf_docs)
web_index = VectorStoreIndex.from_documents(web_docs)

# 메타 쿼리 엔진
query_engines = [
    ("PDF Documents", pdf_index.as_query_engine()),
    ("Web Content", web_index.as_query_engine())
]

# 자동으로 적절한 인덱스 선택
query_engine = SubQuestionQueryEngine.from_defaults(
    query_engine_tools=query_engines
)

response = query_engine.query(
    "PDF와 웹 콘텐츠에서 RAG에 대해 찾아줘"
)`}</pre>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">RAG + 대화형 메모리</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`from llama_index.memory import ChatMemoryBuffer
from llama_index.chat_engine import ContextChatEngine

# 메모리 설정
memory = ChatMemoryBuffer.from_defaults(
    token_limit=4000
)

# 대화형 채팅 엔진
chat_engine = index.as_chat_engine(
    memory=memory,
    system_prompt="너는 유용한 AI 어시스턴트다."
)

# 대화
response = chat_engine.chat("RAG가 뭐야?")
response = chat_engine.chat("그것의 단점은?")  # 이전 대화 기억`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Project */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💼 실습 프로젝트</h2>

          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              📝 <strong>프로젝트: 멀티소스 문서 검색 시스템</strong>
            </p>
            <p className="text-gray-600">
              PDF 파일, 웹 페이지, 데이터베이스에서 데이터를 로드하고,
              통합된 인덱스로 검색할 수 있는 시스템을 구축하세요.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-4">요구사항:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 최소 3가지 데이터 소스 연결</li>
              <li>✅ 적절한 인덱스 타입 선택 (최소 2가지)</li>
              <li>✅ 메타데이터 필터링 구현</li>
              <li>✅ 응답 시간 측정 및 최적화</li>
              <li>✅ 에러 처리 및 로깅</li>
            </ul>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎓 핵심 내용</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• LlamaIndex는 LLM 애플리케이션 개발을 단순화합니다</li>
            <li>• 다양한 인덱스 타입을 목적에 맞게 선택할 수 있습니다</li>
            <li>• Document Loaders로 다양한 데이터 소스를 통합할 수 있습니다</li>
            <li>• Query Engines를 커스터마이징하여 고급 기능을 구현할 수 있습니다</li>
            <li>• 메모리와 메타데이터를 활용하여 더 나은 검색 결과를 얻을 수 있습니다</li>
          </ul>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 mt-12 justify-between">
          <Link href="/rag-lecture/module-10">
            <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
              ← 이전 모듈
            </button>
          </Link>
          <Link href="/rag-lecture/module-12">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              다음 모듈 →
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
