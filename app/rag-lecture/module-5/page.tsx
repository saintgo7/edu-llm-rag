import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';
import { PracticeExercise } from '@/components/PracticeExercise';

export default function Module5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록으로
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">모듈 5</span>
            <span className="text-gray-500 text-sm">⏱️ 30분</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">RAG 실제 구현하기</h1>
          <p className="text-gray-600 mt-2">Python으로 RAG 시스템을 직접 구현해봅니다.</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 필수 라이브러리</h2>
          <CodeExample
            title="설치 명령어"
            language="bash"
            code={`pip install langchain openai faiss-cpu python-dotenv
# 또는 GPU 지원 FAISS:
# pip install faiss-gpu`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 완전한 RAG 시스템 구현</h2>
          <CodeExample
            title="RAG 시스템 전체 코드"
            language="python"
            code={`import os
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.text_splitter import CharacterTextSplitter
from langchain.llms import OpenAI
from langchain.chains import RetrievalQA
from dotenv import load_dotenv

# 1. 환경 설정
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")

# 2. 문서 준비
documents = """
RAG는 Retrieval-Augmented Generation의 약자입니다.
검색(Retrieval), 증강(Augmentation), 생성(Generation)의 3단계로 구성됩니다.
벡터 데이터베이스는 빠른 유사도 검색을 가능하게 합니다.
임베딩은 텍스트를 수치 벡터로 변환합니다.
"""

# 3. 문서 청크화
splitter = CharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=20
)
chunks = splitter.split_text(documents)

# 4. 임베딩 및 벡터 DB 생성
embeddings = OpenAIEmbeddings(openai_api_key=api_key)
vector_db = FAISS.from_texts(chunks, embeddings)

# 5. RAG 체인 구성
llm = OpenAI(
    openai_api_key=api_key,
    temperature=0.7
)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_db.as_retriever(
        search_kwargs={"k": 3}
    )
)

# 6. 질문에 답변
question = "RAG의 3가지 단계를 설명해주세요."
answer = qa_chain.run(question)
print(f"질문: {question}")
print(f"답변: {answer}")`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📁 파일에서 문서 로드</h2>
          <CodeExample
            title="파일 기반 RAG"
            language="python"
            code={`from langchain.document_loaders import PDFPlumberLoader, TextLoader

# PDF 파일 로드
loader = PDFPlumberLoader("documents/guide.pdf")
documents = loader.load()

# 텍스트 파일 로드
loader = TextLoader("documents/manual.txt")
documents = loader.load()

# 이후 과정은 위와 동일...
splitter = CharacterTextSplitter(chunk_size=1000)
chunks = splitter.split_documents(documents)
vector_db = FAISS.from_documents(chunks, embeddings)`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 검색 결과 확인</h2>
          <CodeExample
            title="검색 결과 상세 보기"
            language="python"
            code={`# 검색 결과 확인
question = "RAG가 뭔가요?"
results = vector_db.similarity_search_with_scores(question, k=3)

for i, (doc, score) in enumerate(results):
    print(f"\\n결과 {i+1} (유사도: {score:.2f})")
    print(f"내용: {doc.page_content}")
    print("-" * 50)`}
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💡 실습 연습</h2>
          <PracticeExercise
            title="간단한 RAG 시스템 만들기"
            description="주어진 문서들로 간단한 RAG 시스템을 만들고 질문에 답변하세요."
            starterCode={`# 다음 코드를 완성하세요
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.text_splitter import CharacterTextSplitter

documents = """
파이썬은 1991년 귀도 반 로섬이 개발했습니다.
파이썬은 배우기 쉬운 프로그래밍 언어입니다.
파이썬은 데이터 과학과 머신러닝에 널리 사용됩니다.
"""

# TODO: 문서를 청크로 분할하세요
# TODO: 벡터 DB를 생성하세요
# TODO: "파이썬을 누가 개발했나요?" 질문에 답변하세요`}
            expectedOutput={`파이썬은 1991년 귀도 반 로섐이 개발했습니다.`}
            hint="CharacterTextSplitter를 사용하여 문서를 분할하고, FAISS.from_texts()로 벡터 DB를 생성하세요."
          />
        </section>

        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⭐ 핵심 체크리스트</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">OpenAI API 키 설정</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">필요한 라이브러리 설치</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">문서 준비 및 청크화</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">임베딩 모델 설정</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">벡터 DB 구성</span>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-gray-700">RAG 체인 생성 및 테스트</span>
            </div>
          </div>
        </section>

        {/* Next Module */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-xl font-bold mb-2">마지막 모듈</h3>
          <p className="text-blue-100 mb-4">모듈 6: RAG 최적화 및 평가</p>
          <Link
            href="/rag-lecture/module-6"
            className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            마지막 강의 보기 →
          </Link>
        </section>
      </main>
    </div>
  );
}
