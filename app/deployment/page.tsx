import Link from 'next/link';

export default function DeploymentPage() {
  const platforms = [
    {
      name: 'Vercel',
      difficulty: '초급',
      time: '5분',
      description: 'Next.js 개발사가 만든 플랫폼으로 가장 간단합니다.',
      steps: [
        '1. GitHub에 코드를 푸시',
        '2. vercel.com에 로그인',
        '3. "Import Project" 클릭',
        '4. GitHub 저장소 선택',
        '5. 자동으로 배포됨',
      ],
      pros: ['무료', '자동 배포', '커스텀 도메인', '성능 최적화'],
      cons: ['서버 제어 제한'],
      url: 'https://vercel.com',
    },
    {
      name: 'Docker + AWS',
      difficulty: '중급',
      time: '30분',
      description: 'Docker 컨테이너를 AWS EC2에 배포',
      steps: [
        '1. AWS EC2 인스턴스 생성',
        '2. Docker 설치',
        '3. docker build -t rag-platform .',
        '4. docker run -p 3000:3000 rag-platform',
        '5. Elastic IP 연결',
      ],
      pros: ['완전한 제어', '확장성', 'S3 연동'],
      cons: ['비용', '관리 필요'],
      url: 'https://aws.amazon.com',
    },
    {
      name: 'Docker + GCP',
      difficulty: '중급',
      time: '25분',
      description: 'Cloud Run으로 Docker 자동 배포',
      steps: [
        '1. Google Cloud 프로젝트 생성',
        '2. gcloud auth login',
        '3. docker build -t rag-platform .',
        '4. gcloud run deploy',
        '5. 자동으로 배포됨',
      ],
      pros: ['자동 스케일링', '간단함', 'Google 서비스'],
      cons: ['가격 정책'],
      url: 'https://cloud.google.com',
    },
    {
      name: 'Railway',
      difficulty: '초급',
      time: '10분',
      description: '초보자 친화적인 플랫폼',
      steps: [
        '1. railway.app 가입',
        '2. GitHub 연결',
        '3. New Project',
        '4. Deploy',
        '5. 도메인 설정',
      ],
      pros: ['매우 간단', 'GitHub 연동', '합리적 가격'],
      cons: ['제한된 기능'],
      url: 'https://railway.app',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 홈으로
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">배포 가이드</h1>
          <p className="text-gray-600 mt-2">RAG 강의 플랫폼을 인터넷에 배포하기</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* 빠른 시작 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 가장 간단한 방법: Vercel</h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gradient-to-r from-black to-gray-800 text-white p-6 rounded-lg">
              <p className="font-mono text-sm mb-4">
                # GitHub에 푸시만 하면 자동 배포됨
              </p>
              <p className="text-gray-300 text-sm">
                Vercel은 GitHub과 자동 연동되어 푸시할 때마다 자동으로 배포합니다.
              </p>
            </div>
          </div>

          <ol className="space-y-4 mb-8">
            {platforms[0].steps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <span className="font-bold text-blue-600 text-lg">{idx + 1}</span>
                <span className="text-gray-700">{step}</span>
              </li>
            ))}
          </ol>

          <a
            href={platforms[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Vercel에서 배포하기 →
          </a>
        </section>

        {/* 플랫폼 비교 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">🌍 배포 플랫폼 비교</h2>

          <div className="space-y-6">
            {platforms.map((platform, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{platform.name}</h3>
                    <p className="text-gray-600 text-sm mt-1">{platform.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-bold px-3 py-1 rounded ${
                      platform.difficulty === '초급' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {platform.difficulty}
                    </span>
                    <p className="text-sm text-gray-600 mt-2">⏱️ {platform.time}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">✅ 장점</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {platform.pros.map((pro, pidx) => (
                        <li key={pidx}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">⚠️ 단점</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {platform.cons.map((con, cidx) => (
                        <li key={cidx}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-3">배포 단계</h4>
                  <ol className="space-y-2 text-sm text-gray-700">
                    {platform.steps.map((step, sidx) => (
                      <li key={sidx}>{step}</li>
                    ))}
                  </ol>
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  자세히 보기 →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Docker 배포 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🐳 Docker 배포</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">로컬에서 테스트</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <p>$ docker build -t rag-platform .</p>
                <p>$ docker run -p 3000:3000 rag-platform</p>
              </div>
              <p className="text-gray-600 text-sm mt-2">이제 http://localhost:3000 접속 가능</p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Docker Hub에 푸시</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <p>$ docker build -t yourusername/rag-platform .</p>
                <p>$ docker push yourusername/rag-platform</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">프로덕션 배포</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
                <p>$ docker-compose up -d</p>
              </div>
            </div>
          </div>
        </section>

        {/* 도메인 설정 */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🌐 커스텀 도메인 연결</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900 mb-2">Vercel</h3>
              <ol className="text-sm text-gray-700 space-y-2">
                <li>1. Vercel 대시보드에서 Settings → Domains</li>
                <li>2. 도메인 입력</li>
                <li>3. DNS 레코드 추가 (DNS 공급자에서)</li>
                <li>4. 자동 인증</li>
              </ol>
            </div>

            <div className="border-l-4 border-blue-500 p-4 bg-blue-50">
              <h3 className="font-bold text-gray-900 mb-2">AWS + Docker</h3>
              <ol className="text-sm text-gray-700 space-y-2">
                <li>1. Route 53에서 호스팅 존 생성</li>
                <li>2. A 레코드에 Elastic IP 지정</li>
                <li>3. SSL 인증서 (ACM) 설정</li>
              </ol>
            </div>
          </div>
        </section>

        {/* 환경 변수 */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🔐 환경 변수 설정</h2>

          <div className="space-y-4">
            <p className="text-gray-700">
              각 배포 플랫폼에서 민감한 정보를 환경 변수로 관리합니다:
            </p>

            <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm overflow-x-auto">
              <p>NODE_ENV=production</p>
              <p>OPENAI_API_KEY=sk-...</p>
              <p>DATABASE_URL=postgresql://...</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="font-bold text-yellow-900 mb-2">⚠️ 보안 주의</p>
              <p className="text-gray-700 text-sm">
                .env 파일은 절대 GitHub에 커밋하지 마세요!
                배포 플랫폼의 설정에서 환경 변수를 직접 입력하세요.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
