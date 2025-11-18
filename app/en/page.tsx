import Link from 'next/link';

export default function EnHome() {
  const courses = [
    {
      id: 1,
      title: 'Master LLM & RAG Complete Course',
      description: 'A comprehensive guide to Retrieval-Augmented Generation systems for computer science students',
      icon: '🤖',
      modules: 10,
      duration: '4 hours 45 minutes',
      href: '/en/rag-lecture',
      level: 'Beginner~Intermediate',
      tags: ['RAG', 'LLM', 'Vector DB', 'NLP'],
    },
  ];

  const stats = [
    { label: 'Total Courses', value: '1' },
    { label: 'Total Study Time', value: '4.75 hours' },
    { label: 'Lecture Modules', value: '10' },
    { label: 'Practice Exercises', value: '50+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">📚 LLM/RAG Education for CS Students</h1>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
                한국어
              </Link>
              <div className="text-sm text-gray-600">v1.0</div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Master LLM and RAG
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A practice-focused learning platform for cutting-edge AI technology.
              Learn everything from theory to hands-on implementation.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Available Courses</h3>
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
                          <div>📦 {course.modules} modules</div>
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
                      View Course →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Course Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Theory to Practice</h4>
              <p className="text-gray-600">
                Comprehensive learning with concept explanations and real-world code examples.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Hands-on Exercises</h4>
              <p className="text-gray-600">
                Learn by doing with Python-based practical examples and implementations.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Industry-Focused</h4>
              <p className="text-gray-600">
                Reflects technologies and trends actually used in the industry.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Learning Path</h3>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Learn Fundamentals</h4>
                  <p className="text-gray-600">Understand the basics of LLM and RAG</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">RAG Architecture</h4>
                  <p className="text-gray-600">Deep dive into retrieval, augmentation, and generation phases</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hands-on Implementation</h4>
                  <p className="text-gray-600">Build your own RAG system with Python</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Optimization & Deployment</h4>
                  <p className="text-gray-600">Learn performance tuning and production deployment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Start Learning Now!</h3>
            <p className="text-lg mb-8 text-blue-100">
              Master cutting-edge AI technology and become a developer of the future.
            </p>
            <Link href="/en/rag-lecture">
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg">
                Start Course
              </button>
            </Link>
          </div>
        </section>
      </main>

      {/* Support Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">🛠️ Learning Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Link href="/en/dashboard">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Learning Dashboard</h3>
              <p className="text-gray-600 text-sm">Track Progress</p>
            </div>
          </Link>

          <Link href="/en/exercises">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-bold text-gray-900 mb-2">Practice Problems</h3>
              <p className="text-gray-600 text-sm">Solve Exercises</p>
            </div>
          </Link>

          <Link href="/en/setup-guide">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="font-bold text-gray-900 mb-2">Setup Guide</h3>
              <p className="text-gray-600 text-sm">Environment Setup</p>
            </div>
          </Link>

          <Link href="/en/faq">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="text-3xl mb-3">❓</div>
              <h3 className="font-bold text-gray-900 mb-2">FAQ</h3>
              <p className="text-gray-600 text-sm">Common Questions</p>
            </div>
          </Link>

          <Link href="/en/certificate">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="font-bold text-gray-900 mb-2">Certificate</h3>
              <p className="text-gray-600 text-sm">Completion Certificate</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Learning Platform</h4>
              <p className="text-gray-400">LLM and RAG education platform for CS students</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Topics Covered</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Large Language Models (LLM)</li>
                <li>• Retrieval-Augmented Generation (RAG)</li>
                <li>• Vector Databases</li>
                <li>• Prompt Engineering</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tech Stack</h4>
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
