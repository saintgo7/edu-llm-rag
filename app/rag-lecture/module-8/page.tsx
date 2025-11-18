import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';

export default function Module8() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록으로
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full">모듈 8</span>
            <span className="text-gray-500 text-sm">⏱️ 40분</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">벡터 DB 비교 및 선택 가이드</h1>
          <p className="text-gray-600 mt-2">RAG 시스템에 최적의 벡터 데이터베이스 선택하기</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🗄️ 주요 벡터 DB 비교</h2>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Pinecone</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>특징:</strong> 완전 관리형 클라우드 서비스, 가장 사용하기 쉬움</p>
                <p><strong>장점:</strong> 설정 간단, 높은 신뢰성, 자동 스케일링</p>
                <p><strong>단점:</strong> 비용 높음, 데이터 이동 어려움</p>
                <p><strong>적합:</strong> 빠른 프로토타입, 소규모 프로젝트</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Weaviate</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>특징:</strong> 오픈소스, 온프레미스 또는 클라우드</p>
                <p><strong>장점:</strong> 유연함, 메타데이터 검색 우수</p>
                <p><strong>단점:</strong> 설정 복잡함, 스케일링 어려움</p>
                <p><strong>적합:</strong> 중규모 프로젝트, 복잡한 쿼리</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Milvus</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>특징:</strong> 오픈소스, 고성능 벡터 검색</p>
                <p><strong>장점:</strong> 빠른 검색 속도, 확장성 우수</p>
                <p><strong>단점:</strong> 설정 복잡, 학습곡선 가파름</p>
                <p><strong>적합:</strong> 대규모 프로젝트, 높은 성능 필요</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">FAISS</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>특징:</strong> Facebook의 오픈소스 라이브러리</p>
                <p><strong>장점:</strong> 로컬 사용 간단, 빠름, 무료</p>
                <p><strong>단점:</strong> 분산 처리 어려움, 메모리 기반</p>
                <p><strong>적합:</strong> 로컬 개발, 소규모 데이터</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Chroma</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>특징:</strong> 경량 오픈소스, LLM 애플리케이션 최적화</p>
                <p><strong>장점:</strong> 간단함, LangChain 통합 우수</p>
                <p><strong>단점:</strong> 기능 제한적, 대규모 처리 어려움</p>
                <p><strong>적합:</strong> 프로토타입, 학습용</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Qdrant</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>특징:</strong> 러스트로 작성된 고성능 벡터 DB</p>
                <p><strong>장점:</strong> 빠름, 메모리 효율적</p>
                <p><strong>단점:</strong> 생태계 작음, 커뮤니티 소규모</p>
                <p><strong>적합:</strong> 고성능이 필요한 프로젝트</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔄 선택 기준</h2>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">1. 데이터 규모</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>• 소규모 (&lt;1M): FAISS, Chroma</p>
                <p>• 중규모 (1M-100M): Weaviate, Qdrant</p>
                <p>• 대규모 (&gt;100M): Milvus, Elasticsearch</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">2. 배포 환경</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>• 클라우드 전용: Pinecone</p>
                <p>• 하이브리드: Weaviate, Qdrant</p>
                <p>• 온프레미스: Milvus, Weaviate, Chroma</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">3. 기능 요구사항</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>• 메타데이터 필터링: Weaviate, Qdrant</p>
                <p>• 실시간 업데이트: Pinecone, Weaviate</p>
                <p>• 높은 검색 정확도: Milvus</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">4. 예산</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p>• 무료: FAISS, Milvus, Weaviate, Chroma</p>
                <p>• 저비용: Qdrant (셀프 호스팅)</p>
                <p>• 관리형: Pinecone (고비용)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 벡터 DB 설정 예제</h2>

          <CodeExample
            title="다양한 벡터 DB 사용 비교"
            language="python"
            code={`# 1. FAISS 사용 (로컬)
from langchain.vectorstores import FAISS
vector_db = FAISS.from_texts(chunks, embeddings)

# 2. Pinecone 사용 (클라우드)
import pinecone
pinecone.init(api_key="YOUR_API_KEY", environment="us-west1-gcp")
from langchain.vectorstores import Pinecone
vector_db = Pinecone.from_texts(
    chunks,
    embeddings,
    index_name="my-index"
)

# 3. Weaviate 사용 (온프레미스/클라우드)
import weaviate
client = weaviate.Client("http://localhost:8080")
from langchain.vectorstores import Weaviate
vector_db = Weaviate.from_texts(
    chunks,
    embeddings,
    client=client,
    index_name="Documents"
)

# 4. Qdrant 사용
from langchain.vectorstores import Qdrant
from qdrant_client import QdrantClient

client = QdrantClient(":memory:")
vector_db = Qdrant.from_texts(
    chunks,
    embeddings,
    client=client,
    collection_name="documents"
)

# 검색은 모두 동일한 인터페이스
results = vector_db.similarity_search(query, k=5)`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 빠른 의사결정 가이드</h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 font-bold">Q1</span>
              <p className="text-gray-700"><strong>클라우드 관리형을 원하나요?</strong> → YES: Pinecone | NO: 다음으로</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 font-bold">Q2</span>
              <p className="text-gray-700"><strong>설정의 단순함이 중요한가?</strong> → YES: Chroma | NO: 다음으로</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 font-bold">Q3</span>
              <p className="text-gray-700"><strong>매우 큰 데이터셋인가? (&gt;50M)</strong> → YES: Milvus | NO: 다음으로</p>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
              <span className="text-yellow-600 font-bold">Q4</span>
              <p className="text-gray-700"><strong>메타데이터 필터링이 필요한가?</strong> → YES: Weaviate | NO: Qdrant</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-2">다음 모듈</h3>
          <p className="text-blue-100 mb-4">모듈 9: 실무 RAG 프로젝트</p>
          <Link
            href="/rag-lecture/module-9"
            className="inline-block px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            다음 강의 보기 →
          </Link>
        </section>
      </main>
    </div>
  );
}
