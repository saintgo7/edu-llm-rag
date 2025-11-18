import Link from 'next/link';

export default function Home() {
  const courses = [
    {
      id: 1,
      title: 'LLM RAG 완전 정복 강의',
      description: '컴퓨터공학 학생을 위한 Retrieval-Augmented Generation 시스템 완벽 가이드',
      icon: '🤖',
      modules: 6,
      duration: '2시간 15분',
      href: '/rag-lecture',
      level: '초급~중급',
      tags: ['RAG', 'LLM', 'Vector DB', 'NLP'],
    },
  ];

  const stats = [
    { label: '총 강의 수', value: '1' },
    { label: '총 학습 시간', value: '2.25시간' },
    { label: '강의 모듈', value: '6개' },
    { label: '실습 예제', value: '5개' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">📚 CS 학생을 위한 LLM/RAG 교육</h1>
            <div className="text-sm text-gray-600">v1.0</div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              LLM과 RAG를 마스터하세요
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              최신 AI 기술을 실무 중심으로 배우는 맞춤형 강의 플랫폼.
              이론부터 실습까지 완벽하게 학습하세요.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-4 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Courses Grid */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">이용 가능한 강의</h3>
          <div className="grid grid-cols-1 gap-6">
            {courses.map((course) => (
              <Link key={course.id} href={course.href}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden cursor-pointer group">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-5xl mb-4">{course.icon}</div>
                        <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {course.title}
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-2">
                          {course.level}
                        </span>
                        <div className="text-gray-600 text-sm">
                          <div>📦 {course.modules}개 모듈</div>
                          <div>⏱️ {course.duration}</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{course.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg group-hover:bg-blue-700 transition-colors">
                      강의 보기 →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">강의의 특징</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">이론부터 실습까지</h4>
              <p className="text-gray-600">
                개념 설명과 실제 코드 예제를 통해 깊이 있는 학습을 제공합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">실습 코드 제공</h4>
              <p className="text-gray-600">
                Python을 활용한 실습 예제로 직접 구현하고 실험할 수 있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">실무 중심 커리큘럼</h4>
              <p className="text-gray-600">
                업계에서 실제로 사용되는 기술과 최신 트렌드를 반영합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">학습 경로</h3>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">기본 개념 학습</h4>
                  <p className="text-gray-600">LLM과 RAG의 기본 원리를 이해합니다</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">RAG 아키텍처 분석</h4>
                  <p className="text-gray-600">검색, 증강, 생성 3단계를 상세히 학습합니다</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">직접 구현하기</h4>
                  <p className="text-gray-600">Python으로 RAG 시스템을 직접 만들어봅니다</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">최적화 및 배포</h4>
                  <p className="text-gray-600">성능 개선과 실제 운영 방법을 배웁니다</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">지금 바로 시작하세요!</h3>
            <p className="text-lg mb-8 text-blue-100">
              최신 AI 기술을 배우고 미래의 개발자가 되어보세요.
            </p>
            <Link href="/rag-lecture">
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg">
                강의 시작하기
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">강의 플랫폼</h4>
              <p className="text-gray-400">컴공 학생을 위한 LLM과 RAG 교육 플랫폼</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">다루는 주제</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• 대형언어모델(LLM)</li>
                <li>• 검색증강생성(RAG)</li>
                <li>• 벡터 데이터베이스</li>
                <li>• 프롬프트 엔지니어링</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">기술 스택</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Python</li>
                <li>• LangChain</li>
                <li>• OpenAI API</li>
                <li>• Vector Databases</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2024 CS Student LLM/RAG Education Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
