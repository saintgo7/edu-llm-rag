import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';

export default function Module2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록으로
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">모듈 2</span>
            <span className="text-gray-500 text-sm">⏱️ 20분</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Retrieval (검색) 단계</h1>
          <p className="text-gray-600 mt-2">문서에서 관련 정보를 검색하는 방법을 학습합니다.</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Learning Objectives */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">학습 목표</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">✓</span>
              <p className="text-gray-700">벡터 임베딩(Embedding) 이해</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">✓</span>
              <p className="text-gray-700">벡터 유사도 검색 방식</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">✓</span>
              <p className="text-gray-700">문서 청크 분할 전략</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 text-lg">✓</span>
              <p className="text-gray-700">벡터 데이터베이스 활용</p>
            </div>
          </div>
        </section>

        {/* Core Content */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔍 Retrieval 프로세스</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. 텍스트 임베딩 (Embedding)</h3>
              <p className="text-gray-700 mb-3">
                임베딩은 텍스트를 고차원의 벡터(숫자 배열)로 변환하는 과정입니다. 의미적으로 유사한 텍스트는
                벡터 공간에서 가까이 위치합니다.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm font-mono">
                  "안녕하세요" → [0.2, -0.5, 0.8, 0.1, ..., 0.3] (384차원)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. 문서 청크화 (Chunking)</h3>
              <p className="text-gray-700 mb-3">
                긴 문서를 작은 단위로 분할합니다. 일반적으로 256~1024 토큰 크기의 청크로 나눕니다.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm mb-2">💡 예시:</p>
                <p className="text-gray-700 text-sm">
                  긴 문서 → [청크1: 256토큰], [청크2: 256토큰], [청크3: 256토큰], ...
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. 벡터 저장 (Indexing)</h3>
              <p className="text-gray-700 mb-3">
                각 청크를 임베딩하여 벡터 데이터베이스에 저장합니다. 이는 빠른 검색을 가능하게 합니다.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. 유사도 검색 (Similarity Search)</h3>
              <p className="text-gray-700 mb-3">
                사용자 질문을 임베딩한 후, 벡터 DB에서 가장 유사한 청크들을 검색합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 Python 코드 예제</h2>
          <CodeExample
            title="벡터 DB를 활용한 Retrieval"
            language="python"
            code={`from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.text_splitter import CharacterTextSplitter

# 1단계: 문서 로드
documents = [
    "RAG는 Retrieval-Augmented Generation의 약자입니다.",
    "벡터 데이터베이스는 임베딩된 벡터를 저장합니다.",
    "코사인 유사도는 두 벡터 사이의 각도를 측정합니다."
]

# 2단계: 문서 청크화
splitter = CharacterTextSplitter(chunk_size=100)
chunks = splitter.split_text(" ".join(documents))

# 3단계: 임베딩 및 벡터 DB 생성
embeddings = OpenAIEmbeddings()
vector_db = FAISS.from_texts(chunks, embeddings)

# 4단계: 유사도 검색
query = "RAG가 뭐예요?"
results = vector_db.similarity_search(query, k=2)

for doc in results:
    print(doc.page_content)`}
          />
        </section>

        {/* Key Concepts */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 핵심 개념</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">코사인 유사도 (Cosine Similarity)</h3>
              <p className="text-gray-700 text-sm">
                두 벡터 사이의 각도를 측정하여 유사도를 계산합니다. -1 ~ 1 범위의 값으로 1에 가까울수록 유사합니다.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                공식: cos(θ) = (A·B) / (||A|| ||B||)
              </p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">Top-K 검색</h3>
              <p className="text-gray-700 text-sm">
                가장 유사한 상위 K개의 문서를 반환합니다. 보통 K는 3~5입니다.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900">임베딩 모델</h3>
              <p className="text-gray-700 text-sm">
                OpenAI의 text-embedding-3, Sentence Transformers 등 다양한 모델이 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Next Module */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-2">다음 모듈</h3>
          <p className="text-blue-100 mb-4">모듈 3: Augmentation (증강) 단계</p>
          <Link
            href="/rag-lecture/module-3"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            다음 강의 보기 →
          </Link>
        </section>
      </main>
    </div>
  );
}
