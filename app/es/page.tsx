import Link from 'next/link';

export default function EsHome() {
  const courses = [
    {
      id: 1,
      title: 'Domina LLM & RAG Completamente',
      description: 'Guía completa de sistemas de generación aumentada por recuperación para estudiantes de informática',
      icon: '🤖',
      modules: 12,
      duration: '6 horas 40 minutos',
      href: '/es/rag-lecture',
      level: 'Principiante~Avanzado',
      tags: ['RAG', 'LLM', 'Vector DB', 'LlamaIndex', 'Haystack'],
    },
  ];

  const stats = [
    { label: 'Cursos Totales', value: '1' },
    { label: 'Tiempo de Estudio Total', value: '6.67 horas' },
    { label: 'Módulos', value: '12' },
    { label: 'Ejercicios Prácticos', value: '50+' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">📚 Educación LLM/RAG para Estudiantes CS</h1>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
                Español
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
              Domina LLM y RAG
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plataforma de aprendizaje personalizada con enfoque práctico para las tecnologías AI más recientes.
              Aprende desde la teoría hasta la implementación completa.
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Cursos Disponibles</h3>
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
                          <div>📦 {course.modules} módulos</div>
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
                      Ver Curso →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Características del Curso</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">📖</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Teoría a Práctica</h4>
              <p className="text-gray-600">
                Proporcionamos aprendizaje profundo a través de explicaciones conceptuales y ejemplos de código reales.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Ejercicios Prácticos</h4>
              <p className="text-gray-600">
                Implementa y experimenta directamente con ejemplos prácticos basados en Python.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Currículo Orientado a la Industria</h4>
              <p className="text-gray-600">
                Refleja las tecnologías realmente utilizadas en la industria y las tendencias más recientes.
              </p>
            </div>
          </div>
        </section>

        {/* Learning Path */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Ruta de Aprendizaje</h3>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Aprende los Conceptos Fundamentales</h4>
                  <p className="text-gray-600">Comprende los principios básicos de LLM y RAG</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Arquitectura RAG</h4>
                  <p className="text-gray-600">Aprende en profundidad las 3 fases: recuperación, aumento, generación</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Implementación Práctica</h4>
                  <p className="text-gray-600">Construye tu propio sistema RAG con Python</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Optimización e Implementación</h4>
                  <p className="text-gray-600">Aprende mejoras de rendimiento y métodos de operación en producción</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">¡Comienza Ahora!</h3>
            <p className="text-lg mb-8 text-blue-100">
              Domina la tecnología AI más reciente y conviértete en el desarrollador del futuro.
            </p>
            <Link href="/es/rag-lecture">
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg">
                Iniciar Curso
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
              <h4 className="font-bold mb-4">Plataforma de Aprendizaje</h4>
              <p className="text-gray-400">Plataforma educativa de LLM y RAG para estudiantes de informática</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Temas Cubiertos</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Modelos de Lenguaje Grande (LLM)</li>
                <li>• Generación Aumentada por Recuperación (RAG)</li>
                <li>• Bases de Datos Vectoriales</li>
                <li>• Ingeniería de Prompts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Stack de Tecnología</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li>• Python</li>
                <li>• LangChain</li>
                <li>• OpenAI API</li>
                <li>• Bases de Datos Vectoriales</li>
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
