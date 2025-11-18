import Link from 'next/link';

export default function ZhHome() {
  const courses = [
    {
      id: 1,
      title: 'LLM RAG 完全掌握讲座',
      description: '计算机科学学生的检索增强型生成系统完整指南',
      icon: '🤖',
      modules: 12,
      duration: '6小时40分',
      href: '/zh/rag-lecture',
      level: '初级~高级',
      tags: ['RAG', 'LLM', 'Vector DB', 'LlamaIndex', 'Haystack'],
    },
  ];

  const stats = [
    { label: '总课程数', value: '1' },
    { label: '总学习时间', value: '6.67小时' },
    { label: '讲座模块', value: '12' },
    { label: '实践练习', value: '50+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">📚 计算机学生LLM/RAG教育</h1>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
                中文
              </Link>
              <Link href="/en" className="text-sm text-blue-600 hover:text-blue-800">
                English
              </Link>
              <div className="text-sm text-gray-600">v2.0</div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              掌握 LLM 和 RAG
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              以实战为中心学习最新AI技术的定制化课程平台。
              从理论到实现完全掌握。
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">可用课程</h3>
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
                          <div>📦 {course.modules} 个模块</div>
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
                      查看课程 →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">课程特点</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">从理论到实践</h4>
              <p className="text-gray-600">
                通过概念解释和实际代码示例提供深入学习。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">实践练习</h4>
              <p className="text-gray-600">
                通过Python实践示例直接实现和实验。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">行业导向课程</h4>
              <p className="text-gray-600">
                反映行业实际使用的技术和最新趋势。
              </p>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">学习路径</h3>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">学习基础概念</h4>
                  <p className="text-gray-600">理解LLM和RAG的基本原理</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">RAG 架构</h4>
                  <p className="text-gray-600">详细学习检索、增强、生成三个阶段</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">动手实现</h4>
                  <p className="text-gray-600">用Python构建自己的RAG系统</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">优化和部署</h4>
                  <p className="text-gray-600">学习性能改进和生产运营方法</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">立即开始!</h3>
            <p className="text-lg mb-8 text-blue-100">
              掌握最新的AI技术，成为未来的开发者。
            </p>
            <Link href="/zh/rag-lecture">
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg">
                开始课程
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
              <h4 className="font-bold mb-4">学习平台</h4>
              <p className="text-gray-400">计算机学生的LLM和RAG教育平台</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">涵盖主题</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• 大型语言模型（LLM）</li>
                <li>• 检索增强型生成（RAG）</li>
                <li>• 向量数据库</li>
                <li>• 提示工程</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">技术栈</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Python</li>
                <li>• LangChain</li>
                <li>• OpenAI API</li>
                <li>• 向量数据库</li>
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
