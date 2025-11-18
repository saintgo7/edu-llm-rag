import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';
import { PracticeExercise } from '@/components/PracticeExercise';

export default function Module9() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록으로
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full">모듈 9</span>
            <span className="text-gray-500 text-sm">⏱️ 45분</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">실무 RAG 프로젝트</h1>
          <p className="text-gray-600 mt-2">기업 문서 기반 QA 시스템 전체 구현</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📌 프로젝트 개요</h2>
          <p className="text-gray-700 mb-4">
            이 프로젝트는 회사의 정책 문서, FAQ, 기술 가이드 등을 학습한 RAG 시스템을 구축합니다.
            직원들의 질문에 자동으로 정확한 답변을 제공할 수 있습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-50 p-4 rounded-lg">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">목표</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ 자동 문서 처리</li>
                <li>✓ 90% 이상 정확도</li>
                <li>✓ 2초 이내 응답</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">기술 스택</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Python 3.10+</li>
                <li>• LangChain</li>
                <li>• Qdrant (벡터 DB)</li>
                <li>• FastAPI (API)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏗️ 아키텍처 설계</h2>

          <div className="bg-gray-50 p-6 rounded-lg font-mono text-xs text-gray-700 overflow-x-auto mb-6">
            {`문서 수집 (PDF, TXT)
    ↓
문서 전처리 (청크화, 정제)
    ↓
임베딩 생성
    ↓
벡터 DB 저장 (Qdrant)
    ↓
┌─────────────────────────────┐
│   RAG 시스템 (LangChain)     │
├─────────────────────────────┤
│ · 질문 수신                  │
│ · 벡터 검색                  │
│ · 프롬프트 구성              │
│ · LLM 호출                   │
│ · 답변 반환                  │
└─────────────────────────────┘
    ↓
FastAPI 서버 (REST API)`}
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 전체 구현 코드</h2>

          <CodeExample
            title="기업 문서 기반 RAG 시스템"
            language="python"
            code={`# requirements.txt
langchain==0.0.340
openai==1.0.0
qdrant-client==2.4.0
fastapi==0.104.0
uvicorn==0.24.0
python-multipart==0.0.6
pydantic==2.0.0

# main.py - 백엔드 API
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Qdrant
from langchain.llms import OpenAI
from langchain.chains import RetrievalQA
import os

# 설정
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
QDRANT_URL = "http://localhost:6333"

app = FastAPI()

# RAG 시스템 초기화
embeddings = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
vector_db = Qdrant(
    client=Qdrant(url=QDRANT_URL),
    collection_name="company_docs",
    embeddings=embeddings
)

llm = OpenAI(
    openai_api_key=OPENAI_API_KEY,
    temperature=0.7,
    model_name="gpt-3.5-turbo"
)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_db.as_retriever(
        search_kwargs={"k": 5}
    ),
    return_source_documents=True
)

# 요청/응답 스키마
class Question(BaseModel):
    question: str
    language: str = "ko"

class Answer(BaseModel):
    answer: str
    sources: list[str]
    confidence: float

# API 엔드포인트
@app.post("/ask", response_model=Answer)
async def ask_question(q: Question):
    try:
        result = qa_chain(q.question)
        return Answer(
            answer=result["result"],
            sources=[doc.metadata.get("source", "Unknown")
                    for doc in result["source_documents"]],
            confidence=0.85  # 실제로는 계산 필요
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 문서 처리 파이프라인</h2>

          <CodeExample
            title="문서 로드 및 색인화"
            language="python"
            code={`from langchain.document_loaders import (
    DirectoryLoader, TextLoader, PDFPlumberLoader
)
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Qdrant
from qdrant_client import QdrantClient
import os

# 1. 문서 로드
loader = DirectoryLoader(
    path="./documents",
    glob="**/*.{pdf,txt}",
    loader_cls=TextLoader,
    recursive=True
)
documents = loader.load()

# 2. 문서 청크화
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200,
    separators=["\n\n", "\n", " ", ""]
)
chunks = splitter.split_documents(documents)

# 3. 메타데이터 추가
for chunk in chunks:
    chunk.metadata["document_type"] = "policy"
    chunk.metadata["version"] = "1.0"

# 4. 벡터 생성 및 저장
embeddings = OpenAIEmbeddings()
client = QdrantClient(url="http://localhost:6333")

vector_db = Qdrant.from_documents(
    chunks,
    embeddings,
    client=client,
    collection_name="company_docs"
)

print(f"✓ {len(chunks)}개의 청크 색인화 완료")`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🧪 테스트 및 평가</h2>

          <CodeExample
            title="시스템 테스트"
            language="python"
            code={`# 테스트 케이스
test_cases = [
    {
        "question": "연차는 몇 일인가요?",
        "expected_keywords": ["연차", "날"]
    },
    {
        "question": "원격 근무 정책은?",
        "expected_keywords": ["원격", "근무"]
    },
    {
        "question": "휴가 신청 방법은?",
        "expected_keywords": ["휴가", "신청"]
    }
]

# 테스트 실행
from langchain.evaluation import QAEvalChain

results = []
for test in test_cases:
    result = qa_chain(test["question"])
    answer = result["result"]

    # 키워드 매칭 확인
    has_keywords = all(
        keyword.lower() in answer.lower()
        for keyword in test["expected_keywords"]
    )

    results.append({
        "question": test["question"],
        "passed": has_keywords,
        "answer": answer
    })

# 결과 출력
for r in results:
    status = "✓ PASS" if r["passed"] else "✗ FAIL"
    print(f"{status}: {r['question']}")`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 배포 체크리스트</h2>

          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">환경 변수 설정 (.env 파일)</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">Qdrant 벡터 DB 실행</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">문서 색인화 완료</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">API 엔드포인트 테스트</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">로깅 및 모니터링 설정</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">보안 및 인증 설정</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">Docker 컨테이너화</span>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 성능 모니터링</h2>

          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-2">응답 시간 모니터링</h3>
              <p className="text-sm text-gray-700">
                목표: &lt;2초 | 알림: &gt;3초 | 에러: &gt;5초
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-2">정확도 추적</h3>
              <p className="text-sm text-gray-700">
                사용자 피드백을 수집하여 월별 정확도 측정
              </p>
            </div>

            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-2">오류 로깅</h3>
              <p className="text-sm text-gray-700">
                모든 실패한 쿼리를 기록하여 모델 개선에 활용
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-2">마지막 모듈</h3>
          <p className="text-blue-100 mb-4">모듈 10: 고급 기법 (GraphRAG, MultiModal RAG 등)</p>
          <Link
            href="/rag-lecture/module-10"
            className="inline-block px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            마지막 강의 보기 →
          </Link>
        </section>
      </main>
    </div>
  );
}
