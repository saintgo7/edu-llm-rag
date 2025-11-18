import Link from 'next/link';

export default function JaHome() {
  const courses = [
    {
      id: 1,
      title: 'LLM RAG完全習得講座',
      description: 'コンピュータサイエンス学生向けの検索増強型生成システムの完全ガイド',
      icon: '🤖',
      modules: 12,
      duration: '6時間40分',
      href: '/ja/rag-lecture',
      level: '初級~上級',
      tags: ['RAG', 'LLM', 'Vector DB', 'LlamaIndex', 'Haystack'],
    },
  ];

  const stats = [
    { label: '総講座数', value: '1' },
    { label: '総学習時間', value: '6.67時間' },
    { label: '講座モジュール', value: '12' },
    { label: '実践演習', value: '50+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">📚 CS学生向けLLM/RAG教育</h1>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
                日本語
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
              LLMとRAGをマスターしよう
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              最先端のAI技術を実務的に学べるカスタマイズ講座プラットフォーム。
              理論から実装まで完璧に習得できます。
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">利用可能な講座</h3>
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
                          <div>📦 {course.modules}個のモジュール</div>
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
                      講座を表示 →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">講座の特徴</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">理論から実装まで</h4>
              <p className="text-gray-600">
                概念説明と実際のコード例を通じた深い学習を提供します。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">実践演習提供</h4>
              <p className="text-gray-600">
                Pythonを活用した実践例で直接実装と実験ができます。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">実務中心のカリキュラム</h4>
              <p className="text-gray-600">
                業界で実際に使用されている技術と最新トレンドを反映します。
              </p>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">学習パス</h3>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">基本概念を学ぶ</h4>
                  <p className="text-gray-600">LLMとRAGの基本原理を理解します</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">RAGアーキテクチャ</h4>
                  <p className="text-gray-600">検索、拡張、生成の3段階について詳しく学びます</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">実装演習</h4>
                  <p className="text-gray-600">Pythonで独自のRAGシステムを構築します</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">最適化と配備</h4>
                  <p className="text-gray-600">パフォーマンス改善と本番運用方法を学びます</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">今すぐ始めましょう!</h3>
            <p className="text-lg mb-8 text-blue-100">
              最先端のAI技術を習得し、未来の開発者になってみませんか。
            </p>
            <Link href="/ja/rag-lecture">
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg">
                講座開始
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
              <h4 className="font-bold mb-4">学習プラットフォーム</h4>
              <p className="text-gray-400">CS学生向けのLLMとRAG教育プラットフォーム</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">対象トピック</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• 大規模言語モデル（LLM）</li>
                <li>• 検索増強型生成（RAG）</li>
                <li>• ベクトルデータベース</li>
                <li>• プロンプトエンジニアリング</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">技術スタック</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Python</li>
                <li>• LangChain</li>
                <li>• OpenAI API</li>
                <li>• ベクトルデータベース</li>
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
