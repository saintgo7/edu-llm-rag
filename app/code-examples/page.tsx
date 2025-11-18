import Link from 'next/link';

export default function CodeExamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 홈으로
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">코드 예제 모음</h1>
          <p className="text-gray-600 mt-2">RAG 시스템 구현을 위한 실용적인 코드 예제</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Setup Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">1️⃣ 환경 설정</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">필수 라이브러리 설치</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`# 기본 RAG 라이브러리
pip install langchain openai python-dotenv

# 벡터 데이터베이스
pip install pinecone-client faiss-cpu

# 문서 처리
pip install pypdf python-pptx python-docx

# 웹 크롤링
pip install beautifulsoup4 requests

# API 서버
pip install fastapi uvicorn pydantic

# .env 파일 사용 예
# OPENAI_API_KEY=sk-...
# PINECONE_API_KEY=...
# PINECONE_ENVIRONMENT=us-west1-gcp`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">환경 변수 로드</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`import os
from dotenv import load_dotenv

# .env 파일에서 환경 변수 로드
load_dotenv()

# API 키 가져오기
openai_api_key = os.getenv("OPENAI_API_KEY")
pinecone_api_key = os.getenv("PINECONE_API_KEY")

if not openai_api_key:
    raise ValueError("OPENAI_API_KEY not found in environment")`}</pre>
            </div>
          </div>
        </section>

        {/* Document Processing */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">2️⃣ 문서 처리</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">PDF 문서 로드</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

# PDF 로드
loader = PyPDFLoader("document.pdf")
documents = loader.load()

print(f"로드된 문서 수: {len(documents)}")
print(f"첫 번째 문서: {documents[0].page_content[:100]}")

# 문서 청킹
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,      # 청크 크기
    chunk_overlap=200,    # 겹침 크기
    separators=[
        "\\n\\n",         # 문단
        "\\n",           # 줄
        ".",             # 문장
        " "              # 단어
    ]
)

chunks = text_splitter.split_documents(documents)
print(f"생성된 청크 수: {len(chunks)}")`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">다양한 파일 형식 처리</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.document_loaders import (
    TextLoader,
    UnstructuredHTMLLoader,
    CSVLoader
)

# 텍스트 파일
text_loader = TextLoader("document.txt")
text_docs = text_loader.load()

# HTML 파일
html_loader = UnstructuredHTMLLoader("document.html")
html_docs = html_loader.load()

# CSV 파일
csv_loader = CSVLoader("data.csv")
csv_docs = csv_loader.load()

# 모든 문서 합치기
all_documents = text_docs + html_docs + csv_docs`}</pre>
            </div>
          </div>
        </section>

        {/* Embeddings & Vector Store */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">3️⃣ 임베딩 및 벡터 저장소</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">OpenAI 임베딩 사용</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
import pickle

# 임베딩 모델 초기화
embeddings = OpenAIEmbeddings(
    model="text-embedding-3-small",  # 또는 text-embedding-3-large
    api_key=os.getenv("OPENAI_API_KEY")
)

# 벡터 저장소 생성
vector_store = FAISS.from_documents(
    documents=chunks,
    embedding=embeddings
)

# 저장
vector_store.save_local("vector_store")

# 로드
vector_store = FAISS.load_local(
    "vector_store",
    embeddings
)

# 임베딩 차원 확인
embedding = embeddings.embed_query("테스트")
print(f"임베딩 차원: {len(embedding)}")`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">로컬 임베딩 모델 (Hugging Face)</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.embeddings import HuggingFaceEmbeddings

# 로컬 임베딩 모델 사용 (API 비용 없음)
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-MiniLM-L6-v2",
    model_kwargs={"device": "cpu"},
    encode_kwargs={"normalize_embeddings": True}
)

# 벡터 저장소 생성
vector_store = FAISS.from_documents(
    documents=chunks,
    embedding=embeddings
)

# 단일 쿼리 임베딩
query_embedding = embeddings.embed_query("RAG란 무엇인가?")
print(f"쿼리 임베딩 생성 완료: {len(query_embedding)}차원")`}</pre>
            </div>
          </div>
        </section>

        {/* RAG Chain */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">4️⃣ RAG 체인</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">기본 RAG 체인</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.llms import OpenAI
from langchain.chains import RetrievalQA

# LLM 초기화
llm = OpenAI(
    temperature=0.7,
    api_key=os.getenv("OPENAI_API_KEY")
)

# RAG 체인 생성
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",  # 또는 "map_reduce", "refine"
    retriever=vector_store.as_retriever(
        search_kwargs={"k": 5}  # 상위 5개 문서 검색
    ),
    return_source_documents=True
)

# 쿼리 실행
result = qa_chain({
    "query": "RAG의 장점은 무엇인가?",
    "max_tokens": 500
})

print(f"답변: {result['result']}")
print(f"출처: {result['source_documents']}")`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">메모리를 포함한 대화형 RAG</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain

# 메모리 생성 (대화 히스토리 유지)
memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)

# 대화형 RAG 체인
chat_chain = ConversationalRetrievalChain.from_llm(
    llm=llm,
    retriever=vector_store.as_retriever(),
    memory=memory,
    verbose=True
)

# 대화
response1 = chat_chain({
    "question": "RAG란 무엇인가?"
})
print(f"답변 1: {response1['answer']}")

# 이전 대화를 기억함
response2 = chat_chain({
    "question": "그것의 장점은?"
})
print(f"답변 2: {response2['answer']}")`}</pre>
            </div>
          </div>
        </section>

        {/* Advanced Patterns */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">5️⃣ 고급 패턴</h2>

          <div className="bg-white rounded-lg shadow-md p-8 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">임베딩 캐싱으로 비용 절감</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.cache import SQLiteCache
import langchain

# 캐시 활성화
langchain.llm_cache = SQLiteCache(
    database_path=".langchain.db"
)

# 이제 같은 쿼리에 대한 API 호출이 캐시됨
result1 = qa_chain({"query": "RAG란?"})
print("첫 번째 호출: API 사용")

result2 = qa_chain({"query": "RAG란?"})
print("두 번째 호출: 캐시에서 로드 (API 호출 없음)")

# 캐시 비우기
langchain.llm_cache = None`}</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">커스텀 프롬프트 템플릿</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`from langchain.prompts import PromptTemplate
from langchain.chains import RetrievalQA

# 커스텀 프롬프트 생성
template = """다음 문서를 참고하여 질문에 답해주세요.
문서에 없는 내용은 '해당 정보가 없습니다'라고 답하세요.

문서:
{context}

질문: {question}

답변: """

PROMPT = PromptTemplate(
    template=template,
    input_variables=["context", "question"]
)

# RAG 체인에 프롬프트 적용
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_store.as_retriever(),
    chain_type_kwargs={"prompt": PROMPT}
)

result = qa_chain({"query": "RAG의 정의는?"})
print(result["result"])`}</pre>
            </div>
          </div>
        </section>

        {/* Error Handling */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">6️⃣ 에러 처리 및 로깅</h2>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">프로덕션 수준의 에러 처리</h3>
            <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>{`import logging
from typing import Optional
import time

# 로깅 설정
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

def query_rag_safe(
    qa_chain,
    query: str,
    max_retries: int = 3,
    timeout: int = 30
) -> Optional[str]:
    """에러 처리를 포함한 안전한 RAG 쿼리"""

    for attempt in range(max_retries):
        try:
            logger.info(f"쿼리 실행: {query} (시도: {attempt + 1})")

            result = qa_chain(
                {"query": query},
                timeout=timeout
            )

            logger.info(f"쿼리 성공: {query}")
            return result["result"]

        except TimeoutError:
            logger.warning(f"타임아웃 발생 (시도: {attempt + 1}/{max_retries})")
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)  # 지수 백오프

        except Exception as e:
            logger.error(f"에러 발생: {str(e)}", exc_info=True)
            if attempt < max_retries - 1:
                time.sleep(2 ** attempt)

    logger.error(f"최대 재시도 횟수 초과: {query}")
    return None

# 사용
answer = query_rag_safe(qa_chain, "RAG란?")
if answer:
    print(f"답변: {answer}")
else:
    print("쿼리 실패")`}</pre>
            </div>
          </div>
        </section>

        {/* Performance Tips */}
        <section className="bg-blue-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ 성능 최적화 팁</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-gray-900 mb-2">임베딩 최적화</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 로컬 임베딩 모델 사용 (API 비용 절감)</li>
                <li>• 배치 임베딩 처리</li>
                <li>• 임베딩 결과 캐싱</li>
              </ul>
            </div>

            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-gray-900 mb-2">검색 최적화</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Top-K 값 조정 (보통 3-5)</li>
                <li>• 스코어 필터링</li>
                <li>• 하이브리드 검색 사용</li>
              </ul>
            </div>

            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-gray-900 mb-2">LLM 최적화</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Temperature=0 (일관성)</li>
                <li>• 토큰 수 제한</li>
                <li>• 더 빠른 모델 선택</li>
              </ul>
            </div>

            <div className="bg-white rounded p-4">
              <h4 className="font-bold text-gray-900 mb-2">시스템 최적화</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• 비동기 처리</li>
                <li>• 청크 크기 튜닝</li>
                <li>• 병렬 처리</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
