import Link from 'next/link';
import { CodeExample } from '@/components/CodeExample';

export default function SetupGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 홈으로
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">실습 환경 설정 가이드</h1>
          <p className="text-gray-600 mt-2">RAG 시스템 개발을 위한 로컬 환경 설정</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* 사전 요구사항 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">✅ 사전 요구사항</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900 mb-2">필수 설치</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Python 3.10 이상</li>
                <li>• pip (Python 패키지 관리자)</li>
                <li>• Git (선택사항 but 추천)</li>
                <li>• 텍스트 에디터 (VS Code, PyCharm 등)</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 p-4 bg-green-50">
              <h3 className="font-bold text-gray-900 mb-2">계정 준비</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• OpenAI API 키 (챗봇 사용)</li>
                <li>• Pinecone 계정 (선택: 클라우드 벡터 DB)</li>
                <li>• GitHub 계정 (선택: 코드 버전관리)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 1: Python 설치 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🐍 Step 1: Python 설치</h2>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <p className="text-sm text-gray-700 mb-3">
              <strong>Windows:</strong> <a href="https://python.org" className="text-blue-600 hover:underline">python.org</a>에서 설치 프로그램 다운로드
            </p>
            <p className="text-sm text-gray-700 mb-3">
              <strong>Mac (Homebrew):</strong>
            </p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono mb-3">
              brew install python@3.10
            </div>

            <p className="text-sm text-gray-700 mb-3">
              <strong>Linux (Ubuntu):</strong>
            </p>
            <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono">
              sudo apt-get install python3.10 python3.10-venv
            </div>
          </div>

          <CodeExample
            title="Python 설치 확인"
            language="bash"
            code={`# Python 버전 확인
python --version
# 또는
python3 --version

# pip 버전 확인
pip --version
# 또는
pip3 --version`}
          />
        </section>

        {/* Step 2: 가상 환경 생성 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📦 Step 2: 가상 환경 설정</h2>

          <CodeExample
            title="가상 환경 생성 및 활성화"
            language="bash"
            code={`# 1. 가상 환경 생성
python -m venv rag_env

# 2. 가상 환경 활성화
# Windows:
rag_env\\Scripts\\activate

# macOS/Linux:
source rag_env/bin/activate

# 3. pip 업그레이드
pip install --upgrade pip

# 4. 가상 환경 비활성화 (나중에)
deactivate`}
          />

          <div className="bg-blue-50 p-4 rounded-lg mt-4 text-sm text-gray-700">
            💡 가상 환경은 프로젝트별 독립적인 패키지 환경을 만듭니다.
            여러 프로젝트를 할 때 패키지 충돌을 방지할 수 있습니다.
          </div>
        </section>

        {/* Step 3: 필수 패키지 설치 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 Step 3: 필수 패키지 설치</h2>

          <CodeExample
            title="requirements.txt"
            language="txt"
            code={`# 기본 RAG 개발 패키지
langchain==0.0.340
openai==1.0.0
python-dotenv==1.0.0

# 벡터 검색
faiss-cpu==1.7.4.post1
# 또는 GPU 지원:
# faiss-gpu==1.7.4.post1

# 추가 벡터 DB (선택)
pinecone-client==2.2.4
weaviate-client==4.1.1
qdrant-client==2.4.0

# 문서 처리
pypdf==3.16.0
python-pptx==0.6.21

# 웹 프레임워크 (API 서버용)
fastapi==0.104.0
uvicorn==0.24.0
pydantic==2.0.0

# 데이터 처리
pandas==2.0.0
numpy==1.24.0

# 개발 도구
jupyter==1.0.0
black==23.0.0
flake8==6.0.0
pytest==7.4.0`}
          />

          <p className="text-sm text-gray-700 mt-6 mb-3">
            위 내용을 <code className="bg-gray-100 px-2 py-1 rounded">requirements.txt</code> 파일로 저장 후 설치:
          </p>

          <CodeExample
            title="패키지 설치"
            language="bash"
            code={`# 모든 패키지 설치
pip install -r requirements.txt

# 또는 개별 설치
pip install langchain openai python-dotenv faiss-cpu`}
          />
        </section>

        {/* Step 4: API 키 설정 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔑 Step 4: API 키 설정</h2>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-purple-500 p-4 bg-purple-50">
              <h3 className="font-bold text-gray-900 mb-2">OpenAI API 키</h3>
              <ol className="text-sm text-gray-700 space-y-2">
                <li>1. <a href="https://platform.openai.com/api-keys" className="text-blue-600 hover:underline">OpenAI Platform</a>에 로그인</li>
                <li>2. API Keys 페이지에서 새 키 생성</li>
                <li>3. 키를 복사하여 안전하게 저장</li>
              </ol>
            </div>
          </div>

          <CodeExample
            title=".env 파일 생성"
            language="bash"
            code={`# 프로젝트 디렉토리에 .env 파일 생성
touch .env

# .env 파일 내용
OPENAI_API_KEY=sk-your-api-key-here
PINECONE_API_KEY=your-pinecone-key-here
PINECONE_ENVIRONMENT=us-west1-gcp

# (선택) 다른 API 키들
ANTHROPIC_API_KEY=your-claude-key-here`}
          />

          <div className="bg-red-50 p-4 rounded-lg mt-4 text-sm border-l-4 border-red-500">
            <strong className="text-red-900">⚠️ 보안 주의:</strong> .env 파일을 git에 커밋하지 마세요!
            <div className="mt-2 bg-gray-900 text-gray-100 p-2 rounded text-xs font-mono">
              # .gitignore에 추가
              echo ".env" &gt;&gt; .gitignore
            </div>
          </div>
        </section>

        {/* Step 5: Python에서 환경변수 사용 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💻 Step 5: Python에서 환경변수 사용</h2>

          <CodeExample
            title="Python 코드에서 .env 로드"
            language="python"
            code={`import os
from dotenv import load_dotenv
from langchain.llms import OpenAI
from langchain.embeddings import OpenAIEmbeddings

# .env 파일 로드
load_dotenv()

# API 키 가져오기
api_key = os.getenv("OPENAI_API_KEY")

# LLM 초기화
llm = OpenAI(
    openai_api_key=api_key,
    model_name="gpt-3.5-turbo"
)

# 임베딩 초기화
embeddings = OpenAIEmbeddings(openai_api_key=api_key)`}
          />
        </section>

        {/* Step 6: 첫 번째 RAG 실행 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 Step 6: 첫 번째 RAG 실행</h2>

          <CodeExample
            title="quickstart.py"
            language="python"
            code={`import os
from dotenv import load_dotenv
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.text_splitter import CharacterTextSplitter
from langchain.llms import OpenAI
from langchain.chains import RetrievalQA

# 환경 설정
load_dotenv()

# 샘플 문서
documents_text = """
RAG는 Retrieval-Augmented Generation의 약자입니다.
검색(Retrieval), 증강(Augmentation), 생성(Generation)의 3단계로 구성됩니다.
RAG는 LLM의 정확성을 높이고 할루시네이션을 감소시킵니다.
"""

# 1. 문서 처리
splitter = CharacterTextSplitter(chunk_size=100, chunk_overlap=20)
chunks = splitter.split_text(documents_text)

# 2. 임베딩
embeddings = OpenAIEmbeddings()
vector_db = FAISS.from_texts(chunks, embeddings)

# 3. RAG 체인 설정
llm = OpenAI()
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vector_db.as_retriever()
)

# 4. 질문
result = qa_chain.run("RAG란 무엇인가?")
print(result)`}
          />

          <p className="text-sm text-gray-700 mt-6">
            다음 명령어로 실행:
          </p>

          <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs font-mono">
            python quickstart.py
          </div>
        </section>

        {/* Step 7: Jupyter Notebook 설정 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📓 Step 7: Jupyter Notebook 설정 (선택)</h2>

          <CodeExample
            title="Jupyter 설치 및 실행"
            language="bash"
            code={`# Jupyter 설치
pip install jupyter jupyterlab

# Jupyter Lab 시작
jupyter lab

# 또는 기본 Jupyter 노트북
jupyter notebook

# 특정 포트에서 실행
jupyter lab --port 8888`}
          />

          <div className="bg-blue-50 p-4 rounded-lg mt-4 text-sm text-gray-700">
            💡 Jupyter는 대화형 환경에서 코드를 실행하고 결과를 즉시 확인할 수 있습니다.
            학습과 실험에 매우 유용합니다.
          </div>
        </section>

        {/* 문제 해결 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔧 문제 해결</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 p-4 bg-orange-50">
              <h3 className="font-bold text-gray-900 mb-2">
                ModuleNotFoundError: No module named 'langchain'
              </h3>
              <p className="text-sm text-gray-700">
                가상 환경이 활성화되지 않았을 수 있습니다.
                <code className="bg-gray-100 px-1 rounded">source rag_env/bin/activate</code> (Mac/Linux)
                또는
                <code className="bg-gray-100 px-1 rounded">rag_env\Scripts\activate</code> (Windows) 실행하세요.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 p-4 bg-orange-50">
              <h3 className="font-bold text-gray-900 mb-2">
                AuthenticationError: Invalid API key
              </h3>
              <p className="text-sm text-gray-700">
                .env 파일에 올바른 API 키가 설정되어 있는지 확인하세요.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 p-4 bg-orange-50">
              <h3 className="font-bold text-gray-900 mb-2">
                Memory Error with FAISS
              </h3>
              <p className="text-sm text-gray-700">
                큰 데이터셋의 경우 <code className="bg-gray-100 px-1 rounded">faiss-gpu</code>를 사용하거나
                클라우드 벡터 DB (Pinecone, Weaviate)를 사용하세요.
              </p>
            </div>
          </div>
        </section>

        {/* 다음 단계 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 다음 단계</h2>

          <ol className="space-y-3 text-gray-700">
            <li>
              <strong>1. 강의 모듈 1-3 진행:</strong>
              <p className="text-sm mt-1">RAG의 기본 개념을 이해합니다.</p>
            </li>
            <li>
              <strong>2. 간단한 RAG 구현:</strong>
              <p className="text-sm mt-1">자신의 문서로 RAG 시스템을 구축해봅니다.</p>
            </li>
            <li>
              <strong>3. 모듈 4-6 진행:</strong>
              <p className="text-sm mt-1">고급 기법들을 학습합니다.</p>
            </li>
            <li>
              <strong>4. 실무 프로젝트:</strong>
              <p className="text-sm mt-1">모듈 9의 프로젝트를 직접 구현해봅니다.</p>
            </li>
          </ol>

          <Link
            href="/rag-lecture"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            강의 시작하기
          </Link>
        </section>
      </main>
    </div>
  );
}
