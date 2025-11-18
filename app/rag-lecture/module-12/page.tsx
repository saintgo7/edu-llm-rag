import Link from 'next/link';

export default function Module12Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의 목록
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">모듈 12: Haystack과 실시간 RAG 시스템</h1>
          <p className="text-gray-600 mt-2">엔터프라이즈급 RAG 프레임워크 및 스트리밍 구현 (55분)</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Learning Objectives */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 학습 목표</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Haystack 아키텍처 이해</li>
            <li>✓ Pipeline을 이용한 복잡한 워크플로우 구성</li>
            <li>✓ 실시간 RAG 스트리밍 구현</li>
            <li>✓ 문서 검색 및 재순위화 (Reranking)</li>
            <li>✓ 프로덕션 배포 및 모니터링</li>
          </ul>
        </section>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Haystack 소개</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 mb-2">Haystack이란?</h3>
              <p className="text-gray-700">
                Haystack은 NLP와 검색 엔진을 기반으로 한 엔터프라이즈급 RAG 프레임워크입니다.
                선언형 파이프라인 기반으로 복잡한 문서 처리 및 검색 워크플로우를 구성할 수 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-2">🏗️ 아키텍처</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Pipeline 기반</li>
                  <li>• Component 모듈화</li>
                  <li>• 자유로운 구성</li>
                  <li>• 프로덕션 준비</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-gray-900 mb-2">🔌 통합</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 20+ 검색 엔진</li>
                  <li>• 다양한 LLM</li>
                  <li>• 문서 저장소</li>
                  <li>• 커스텀 컴포넌트</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-bold text-gray-900 mb-2">⚙️ 고급 기능</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 하이브리드 검색</li>
                  <li>• 재순위화</li>
                  <li>• 스트리밍</li>
                  <li>• 캐싱</li>
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
              <h3 className="font-bold text-gray-900 mb-2">1. Pipeline (파이프라인)</h3>
              <p className="text-gray-700 mb-3">컴포넌트들을 연결하여 워크플로우를 정의</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`from haystack import Pipeline
from haystack.components.retrievers.in_memory import InMemoryBM25Retriever
from haystack.components.generators import OpenAIGenerator

# 파이프라인 생성
pipeline = Pipeline()

# 컴포넌트 추가
pipeline.add_component("retriever", retriever)
pipeline.add_component("prompt", prompt_builder)
pipeline.add_component("llm", generator)

# 연결
pipeline.connect("retriever.documents", "prompt.documents")
pipeline.connect("prompt.prompt", "llm.prompt")

# 실행
result = pipeline.run({
    "retriever": {"query": "RAG란?"},
})

print(result["llm"]["replies"])`}</pre>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-2">2. Retrievers (검색기)</h3>
              <p className="text-gray-700 mb-3">다양한 검색 알고리즘 지원</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`# BM25 검색기 (키워드 기반)
from haystack.components.retrievers.in_memory import InMemoryBM25Retriever

retriever = InMemoryBM25Retriever(
    document_store=document_store
)

# 벡터 검색기
from haystack.components.retrievers.in_memory import InMemoryEmbeddingRetriever

retriever = InMemoryEmbeddingRetriever(
    document_store=document_store,
    embedding_model="sentence-transformers/..."
)

# 하이브리드 검색 (BM25 + 벡터)
results = combine_results(
    bm25_results=bm25_retriever.run(query),
    embedding_results=embedding_retriever.run(query),
    weights=[0.5, 0.5]
)`}</pre>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-gray-900 mb-2">3. Rerankers (재순위화)</h3>
              <p className="text-gray-700 mb-3">검색 결과의 순서를 개선</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`from haystack.components.rankers.lost_in_the_middle import LostInTheMiddleRanker
from haystack_integrations.components.rankers.cohere import CohereMRRRanker

# 손실 방지 재순위화
ranker = LostInTheMiddleRanker()
ranked_docs = ranker.run(
    documents=retrieved_documents,
    query=query
)

# Cohere 재순위화
ranker = CohereMRRRanker(
    api_key="...",
    top_k=5
)

results = ranker.run(
    documents=documents,
    query=query,
    top_k=5
)`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Real-time RAG */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ 실시간 RAG 스트리밍</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">스트리밍 응답 구현</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`from haystack.components.generators import OpenAIGenerator

# 스트리밍 생성기 설정
generator = OpenAIGenerator(
    api_key="...",
    default_generation_kwargs={
        "model": "gpt-4",
        "temperature": 0.7,
        "stream": True  # 스트리밍 활성화
    }
)

# 파이프라인에서 스트리밍
def stream_responses(query):
    for token in generator.run(prompt=query):
        print(token, end="", flush=True)
        yield token

# FastAPI 엔드포인트
from fastapi.responses import StreamingResponse

@app.post("/stream-query")
async def stream_query(request: QueryRequest):
    async def generate():
        async for token in stream_responses(request.query):
            yield f"data: {token}\\n\\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream"
    )`}</pre>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">문서 검색 + 스트리밍 통합</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`# 실시간 RAG 파이프라인
streaming_rag_pipeline = Pipeline()

streaming_rag_pipeline.add_component(
    "retriever",
    bm25_retriever
)
streaming_rag_pipeline.add_component(
    "prompt_builder",
    prompt_template
)
streaming_rag_pipeline.add_component(
    "llm",
    OpenAIGenerator(stream=True)
)

# 연결
streaming_rag_pipeline.connect("retriever.documents", "prompt_builder.documents")
streaming_rag_pipeline.connect("prompt_builder.prompt", "llm.prompt")

# 스트리밍 실행
def stream_rag_response(query: str):
    for chunk in streaming_rag_pipeline.run(
        {"retriever": {"query": query}},
        include_outputs_from={"llm": ["replies"]}
    ):
        yield chunk`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Patterns */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 고급 패턴</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">다단계 재순위화</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`# 1단계: BM25 검색 (빠름)
bm25_results = bm25_retriever.run(query)

# 2단계: 벡터 검색 (정확함)
embedding_results = embedding_retriever.run(query)

# 3단계: 결합
combined = combine_results(
    bm25_results["documents"],
    embedding_results["documents"],
    weights=[0.3, 0.7]
)

# 4단계: 재순위화 (정교함)
reranked = cohere_ranker.run(
    documents=combined,
    query=query,
    top_k=5
)

# 최종 답변 생성
response = llm.run(
    documents=reranked,
    query=query
)`}</pre>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">비용 최적화 캐싱</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`from functools import lru_cache
import hashlib

@lru_cache(maxsize=1000)
def cached_retrieval(query_hash: str, top_k: int):
    # 캐시된 검색 결과 반환
    return None  # 캐시 미스시 실제 검색 수행

def get_cached_results(query: str, top_k: int = 5):
    # 쿼리 정규화 및 해싱
    normalized_query = query.lower().strip()
    query_hash = hashlib.md5(
        f"{normalized_query}:{top_k}".encode()
    ).hexdigest()

    # 캐시 확인
    cached_result = cached_retrieval(query_hash, top_k)
    if cached_result:
        return cached_result

    # 캐시 미스: 실제 검색 수행
    results = retriever.run(query=query, top_k=top_k)
    cached_retrieval(query_hash, top_k) = results
    return results`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Production Deployment */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏢 프로덕션 배포</h2>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Haystack 서빙</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`# 파이프라인 저장
pipeline.dumps()  # JSON 시리얼화

# Docker로 배포
FROM python:3.11
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY pipeline.json .
COPY app.py .
CMD ["python", "app.py"]

# Kubernetes 배포
apiVersion: apps/v1
kind: Deployment
metadata:
  name: haystack-rag
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: haystack
        image: haystack-rag:latest
        ports:
        - containerPort: 8000
        env:
        - name: OPENAI_API_KEY
          valueFrom:
            secretKeyRef:
              name: api-keys
              key: openai`}</pre>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">모니터링 및 로깅</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <pre>{`import logging
from prometheus_client import Counter, Histogram

# 메트릭 정의
query_counter = Counter('rag_queries_total', 'Total queries')
latency_histogram = Histogram('rag_latency_seconds', 'Query latency')

# 로깅
logger = logging.getLogger("rag_system")

@latency_histogram.time()
def process_query(query: str):
    logger.info(f"Processing query: {query}")

    try:
        results = pipeline.run({"retriever": {"query": query}})
        query_counter.inc()
        logger.info(f"Query completed successfully")
        return results
    except Exception as e:
        logger.error(f"Query failed: {str(e)}", exc_info=True)
        raise`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Practical Project */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💼 최종 프로젝트</h2>

          <div className="space-y-4 mb-6">
            <p className="text-gray-700">
              📝 <strong>프로젝트: 엔터프라이즈 실시간 RAG 시스템</strong>
            </p>
            <p className="text-gray-600">
              Haystack을 이용하여 다단계 재순위화, 실시간 스트리밍, 캐싱이 포함된
              프로덕션 레벨의 RAG 시스템을 구축하세요.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <h3 className="font-bold text-gray-900">요구사항:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Haystack 파이프라인 구성</li>
              <li>✅ BM25 + 벡터 하이브리드 검색</li>
              <li>✅ 재순위화 구현 (2단계 이상)</li>
              <li>✅ 스트리밍 응답 기능</li>
              <li>✅ 캐싱 및 성능 최적화</li>
              <li>✅ Docker 컨테이너화</li>
              <li>✅ 모니터링 및 로깅</li>
            </ul>
          </div>
        </section>

        {/* Framework Comparison */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 RAG 프레임워크 비교</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2 text-left">특징</th>
                  <th className="px-4 py-2 text-left">LlamaIndex</th>
                  <th className="px-4 py-2 text-left">Haystack</th>
                  <th className="px-4 py-2 text-left">LangChain</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-blue-50">
                  <td className="px-4 py-2 font-semibold">학습곡선</td>
                  <td className="px-4 py-2">⭐⭐ 쉬움</td>
                  <td className="px-4 py-2">⭐⭐⭐ 중간</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐ 가파름</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-4 py-2 font-semibold">확장성</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-4 py-2 font-semibold">프로덕션</td>
                  <td className="px-4 py-2">⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐</td>
                </tr>
                <tr className="hover:bg-blue-50">
                  <td className="px-4 py-2 font-semibold">커뮤니티</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐</td>
                  <td className="px-4 py-2">⭐⭐⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎓 핵심 내용</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• Haystack은 엔터프라이즈급 RAG를 위한 최고의 선택입니다</li>
            <li>• 파이프라인 기반 아키텍처로 복잡한 워크플로우를 유연하게 구성할 수 있습니다</li>
            <li>• 다단계 재순위화로 검색 정확도를 크게 향상시킬 수 있습니다</li>
            <li>• 스트리밍 응답으로 사용자 경험을 개선할 수 있습니다</li>
            <li>• 캐싱과 모니터링으로 성능과 비용을 최적화할 수 있습니다</li>
          </ul>
        </section>

        {/* Navigation */}
        <div className="flex gap-4 mt-12 justify-between">
          <Link href="/rag-lecture/module-11">
            <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700">
              ← 이전 모듈
            </button>
          </Link>
          <Link href="/rag-lecture">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              강의 목록 →
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
