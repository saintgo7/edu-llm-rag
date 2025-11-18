import Link from 'next/link';

export default function ExercisesPage() {
  const exercises = [
    {
      moduleId: 1,
      moduleName: 'RAG란 무엇인가?',
      difficulty: '초급',
      problems: [
        {
          id: 1,
          title: 'RAG vs 파인튜닝 비교',
          description: 'RAG와 파인튜닝의 장단점을 비교하고 각각 어떤 상황에 사용되는지 설명하세요.',
          difficulty: '초급',
          hints: ['비용', '속도', '정확도', '유지보수'],
          answer: 'RAG는 모델을 수정하지 않아 빠르고 저비용이지만 실시간 정보 필요. 파인튜닝은 오래 걸리지만 도메인 특화.',
        },
        {
          id: 2,
          title: '할루시네이션 사례 분석',
          description: 'LLM의 할루시네이션이 발생할 수 있는 시나리오 3가지를 생각해보세요.',
          difficulty: '초급',
          hints: ['최신 정보', '드물게 나타나는 사실', '전문 분야 지식'],
        },
        {
          id: 3,
          title: '자신의 프로젝트에 RAG 적용하기',
          description: '당신이 현재 진행 중인 프로젝트에 RAG를 어떻게 적용할 수 있을지 구체적으로 계획하세요.',
          difficulty: '중급',
          hints: ['사용할 데이터 소스', '검색 방식', 'LLM 선택'],
        },
      ],
    },
    {
      moduleId: 2,
      moduleName: 'Retrieval (검색) 단계',
      difficulty: '초급',
      problems: [
        {
          id: 1,
          title: '임베딩 차원 선택',
          description: '임베딩 모델을 선택할 때 차원 수가 중요한 이유를 설명하세요. (예: 384차원 vs 1536차원)',
          difficulty: '초급',
          hints: ['메모리 사용량', '검색 정확도', '처리 속도'],
        },
        {
          id: 2,
          title: '코사인 유사도 계산',
          description: '두 벡터의 코사인 유사도를 손으로 계산해보세요. 벡터: A=[1,2,3], B=[4,5,6]',
          difficulty: '중급',
          hints: ['내적', '벡터 크기', 'cos(θ) 공식'],
          answer: '약 0.974 (매우 유사)',
        },
        {
          id: 3,
          title: '청크 크기 최적화 실험',
          description: '같은 문서를 다양한 청크 크기(256, 512, 1024)로 분할하고 검색 결과를 비교하세요.',
          difficulty: '고급',
          tools: ['Python', 'LangChain', 'FAISS'],
        },
      ],
    },
    {
      moduleId: 5,
      moduleName: 'RAG 실제 구현하기',
      difficulty: '중급',
      problems: [
        {
          id: 1,
          title: '로컬 RAG 구축',
          description: '자신의 로컬 문서(PDF 또는 TXT)를 사용하여 RAG 시스템을 구축하세요.',
          difficulty: '중급',
          requirements: [
            '최소 3개 이상의 문서 사용',
            'FAISS 또는 Chroma 사용',
            '최소 5개 테스트 질문',
          ],
          timeEstimate: '2-3시간',
        },
        {
          id: 2,
          title: 'API 서버 구축',
          description: 'FastAPI를 사용하여 RAG 시스템을 REST API로 제공하세요.',
          difficulty: '고급',
          requirements: [
            'POST /ask 엔드포인트',
            'GET /health 헬스체크',
            'Swagger 문서',
            'CORS 설정',
          ],
          timeEstimate: '4-5시간',
        },
      ],
    },
  ];

  const projects = [
    {
      level: '초급',
      title: '개인 노트 검색 시스템',
      description: '자신의 학습 노트를 RAG로 검색 가능하게 만들기',
      duration: '3-4시간',
      requirements: [
        '자신이 작성한 최소 10개의 노트 파일',
        'FAISS 벡터 DB 사용',
        'Gradio 또는 Streamlit UI',
      ],
      learnings: ['기본 RAG 개념', '문서 처리', 'UI 구축'],
    },
    {
      level: '중급',
      title: '회사 정책 QA 봇',
      description: '기업 문서 기반의 질문 응답 시스템 구축',
      duration: '8-10시간',
      requirements: [
        '샘플 회사 정책 문서 수집',
        'Qdrant 또는 Weaviate 사용',
        'FastAPI 백엔드',
        'React 프론트엔드',
      ],
      learnings: ['실무 RAG', 'API 설계', '프론트엔드 통합'],
    },
    {
      level: '고급',
      title: '멀티모달 RAG 시스템',
      description: '텍스트와 이미지를 모두 처리하는 RAG 시스템',
      duration: '15-20시간',
      requirements: [
        'CLIP 또는 GPT-4V 사용',
        '이미지 메타데이터 추출',
        '하이브리드 검색',
        '성능 최적화',
      ],
      learnings: ['고급 기법', '멀티모달 처리', '성능 최적화'],
    },
  ];

  const caseStudies = [
    {
      title: 'OpenAI의 ChatGPT 플러그인 아키텍처',
      description: 'OpenAI가 실제로 구현한 RAG 기반 플러그인 시스템',
      keyLearnings: [
        '플러그인 검색 메커니즘',
        '컨텍스트 윈도우 관리',
        '에러 처리 전략',
      ],
      resources: ['OpenAI 플러그인 문서', 'GitHub 예제'],
    },
    {
      title: 'Langsmith의 LLM 모니터링과 RAG',
      description: 'RAG 시스템의 성능을 모니터링하고 개선하는 방법',
      keyLearnings: [
        '성능 지표 추적',
        '오류 분석',
        '지속적 개선',
      ],
    },
    {
      title: '의료 정보 검색 시스템',
      description: '의료 분야에서의 RAG 적용 사례',
      keyLearnings: [
        '도메인 특화 처리',
        '정확도 중요성',
        '규정 준수',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/rag-lecture" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 강의로 돌아가기
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">실습 문제 모음</h1>
          <p className="text-gray-600 mt-2">각 모듈별 상세 연습 문제, 프로젝트, 케이스 스터디</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* 실습 문제 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📝 모듈별 실습 문제</h2>

          {exercises.map((module, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{module.moduleName}</h3>
                  <p className="text-gray-600">모듈 {module.moduleId}</p>
                </div>
                <span className={`text-sm font-bold px-3 py-1 rounded ${
                  module.difficulty === '초급' ? 'bg-green-100 text-green-800' :
                  module.difficulty === '중급' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {module.difficulty}
                </span>
              </div>

              <div className="space-y-6">
                {module.problems.map((problem, pidx) => (
                  <div key={pidx} className="border-l-4 border-blue-500 pl-4 pb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      문제 {pidx + 1}: {problem.title}
                    </h4>
                    <p className="text-gray-700 mb-3">{problem.description}</p>
                    {'hints' in problem && problem.hints && (
                      <div className="bg-blue-50 p-3 rounded mb-3">
                        <p className="text-sm font-semibold text-gray-900 mb-2">💡 힌트:</p>
                        <ul className="text-sm text-gray-700 space-y-1">
                          {(problem.hints as string[]).map((hint, hidx) => (
                            <li key={hidx}>• {hint}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {'answer' in problem && 'answer' in problem && problem.answer && (
                      <details className="bg-green-50 p-3 rounded">
                        <summary className="cursor-pointer font-semibold text-gray-900">✓ 예시 답변</summary>
                        <p className="text-gray-700 mt-2">{(problem as any).answer}</p>
                      </details>
                    )}
                    {'tools' in problem && (problem as any).tools && (
                      <div className="text-sm text-gray-600 mt-3">
                        🛠️ 도구: {((problem as any).tools as string[]).join(', ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 프로젝트 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🚀 프로젝트 과제</h2>

          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs font-bold px-3 py-1 rounded mb-2 inline-block ${
                      project.level === '초급' ? 'bg-green-100 text-green-800' :
                      project.level === '중급' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.level}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{project.title}</h3>
                  </div>
                  <span className="text-sm text-gray-600">⏱️ {project.duration}</span>
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">📋 요구사항</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {project.requirements.map((req, ridx) => (
                        <li key={ridx}>✓ {req}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">🎓 학습 내용</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {project.learnings.map((learning, lidx) => (
                        <li key={lidx}>📌 {learning}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 케이스 스터디 섹션 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 케이스 스터디</h2>

          <div className="space-y-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-700 mb-4">{study.description}</p>

                <div className="bg-purple-50 p-4 rounded">
                  <h4 className="font-bold text-gray-900 mb-2">🔍 핵심 학습 포인트</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {study.keyLearnings.map((learning, lidx) => (
                      <li key={lidx}>• {learning}</li>
                    ))}
                  </ul>
                </div>

                {study.resources && (
                  <div className="mt-4 text-sm text-gray-600">
                    🔗 참고 자료: {study.resources.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 제출 가이드 */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📤 과제 제출 가이드</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>1. 문제 풀이:</strong> 각 모듈의 문제를 순서대로 풀고 답변을 정리하세요.
            </p>
            <p>
              <strong>2. 프로젝트 구현:</strong> 자신의 레벨에 맞는 프로젝트를 선택하여 완성하세요.
            </p>
            <p>
              <strong>3. 코드 리뷰:</strong> 완성된 코드를 GitHub에 올리고 코드 리뷰를 받으세요.
            </p>
            <p>
              <strong>4. 케이스 분석:</strong> 케이스 스터디를 읽고 자신의 프로젝트에 어떻게 적용할지 논의하세요.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
