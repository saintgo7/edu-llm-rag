'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function InstructorDashboardPage() {
  const [studentStats, setStudentStats] = useState({
    totalStudents: 0,
    activeToday: 0,
    completionRate: 0,
    avgProgress: 0,
  });

  const [moduleStats, setModuleStats] = useState({
    mostPopular: '',
    leastPopular: '',
    avgCompletion: 0,
    totalCompletions: 0,
  });

  const [topStudents, setTopStudents] = useState<any[]>([]);
  const [strugglingStudents, setStrugglingStudents] = useState<any[]>([]);

  useEffect(() => {
    // 데이터 로드 시뮬레이션
    setStudentStats({
      totalStudents: 324,
      activeToday: 47,
      completionRate: 68,
      avgProgress: 45,
    });

    setModuleStats({
      mostPopular: '모듈 5: RAG 실제 구현하기',
      leastPopular: '모듈 12: Haystack 고급',
      avgCompletion: 62,
      totalCompletions: 2108,
    });

    setTopStudents([
      { id: 1, name: '김철수', progress: 100, lastActive: '2분 전', completedModules: 12 },
      { id: 2, name: '이영희', progress: 95, lastActive: '15분 전', completedModules: 11 },
      { id: 3, name: '박준호', progress: 88, lastActive: '1시간 전', completedModules: 10 },
      { id: 4, name: '최민지', progress: 85, lastActive: '2시간 전', completedModules: 10 },
      { id: 5, name: '장혜은', progress: 80, lastActive: '3시간 전', completedModules: 9 },
    ]);

    setStrugglingStudents([
      { id: 101, name: '박현준', progress: 15, lastActive: '5일 전', completedModules: 2, issue: '이해도 부족' },
      { id: 102, name: '정다은', progress: 20, lastActive: '3일 전', completedModules: 2, issue: '장기 미접속' },
      { id: 103, name: '오준식', progress: 25, lastActive: '1일 전', completedModules: 3, issue: '실습 어려움' },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 홈으로
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">🏆 인스트럭터 대시보드</h1>
          <p className="text-gray-600 mt-2">수강생 관리 및 강의 성과 분석</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Key Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">{studentStats.totalStudents}</div>
            <div className="text-gray-600">총 수강생</div>
            <div className="text-sm text-green-600 mt-2">↑ 12% 증가</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">{studentStats.activeToday}</div>
            <div className="text-gray-600">오늘 활성</div>
            <div className="text-sm text-gray-500 mt-2">지난 24시간</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">{studentStats.completionRate}%</div>
            <div className="text-gray-600">전체 완료율</div>
            <div className="text-sm text-gray-500 mt-2">전 수강생 평균</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl font-bold text-orange-600 mb-2">{studentStats.avgProgress}%</div>
            <div className="text-gray-600">평균 진행도</div>
            <div className="text-sm text-gray-500 mt-2">현재 진행 중</div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Module Statistics */}
          <div className="lg:col-span-2">
            <section className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 모듈별 통계</h2>

              <div className="space-y-4 mb-8">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-semibold">모듈 5: RAG 실제 구현하기</span>
                    <span className="text-blue-600 font-semibold">89%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-semibold">모듈 1: RAG란 무엇인가?</span>
                    <span className="text-green-600 font-semibold">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-semibold">모듈 2: Retrieval 단계</span>
                    <span className="text-purple-600 font-semibold">87%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-semibold">모듈 12: Haystack 고급</span>
                    <span className="text-orange-600 font-semibold">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                <div>
                  <p className="text-gray-600 text-sm">가장 인기 있는 모듈</p>
                  <p className="text-lg font-bold text-gray-900">{moduleStats.mostPopular}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">보충이 필요한 모듈</p>
                  <p className="text-lg font-bold text-gray-900">{moduleStats.leastPopular}</p>
                </div>
              </div>
            </section>

            {/* Recent Activity */}
            <section className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 최근 활동</h2>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">김철수</p>
                    <p className="text-sm text-gray-600">모듈 12 완료</p>
                  </div>
                  <span className="text-xs bg-blue-200 text-blue-800 px-3 py-1 rounded-full">2분 전</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">이영희</p>
                    <p className="text-sm text-gray-600">인증서 다운로드</p>
                  </div>
                  <span className="text-xs bg-green-200 text-green-800 px-3 py-1 rounded-full">15분 전</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-gray-900">박준호</p>
                    <p className="text-sm text-gray-600">실습 문제 제출</p>
                  </div>
                  <span className="text-xs bg-purple-200 text-purple-800 px-3 py-1 rounded-full">1시간 전</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-8">
            {/* Top Students */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⭐ 우수 수강생</h3>

              <div className="space-y-3">
                {topStudents.map((student, idx) => (
                  <div key={student.id} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{student.name}</p>
                      <p className="text-xs text-gray-600">{student.progress}% 완료</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Struggling Students */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚠️ 도움이 필요한 학생</h3>

              <div className="space-y-3">
                {strugglingStudents.map((student) => (
                  <div key={student.id} className="p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <p className="font-semibold text-gray-900 text-sm">{student.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{student.progress}% 진행도</p>
                    <p className="text-xs text-red-700 mt-1">🔔 {student.issue}</p>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm font-semibold">
                학생들에게 알림 보내기
              </button>
            </section>

            {/* Quick Actions */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">⚙️ 빠른 작업</h3>

              <div className="space-y-2">
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold">
                  📧 공지 발송
                </button>
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm font-semibold">
                  📊 보고서 생성
                </button>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-semibold">
                  📈 분석 내보내기
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Detailed Student List */}
        <section className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">👥 수강생 목록</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-3 text-left">이름</th>
                  <th className="px-4 py-3 text-left">이메일</th>
                  <th className="px-4 py-3 text-left">진행도</th>
                  <th className="px-4 py-3 text-left">완료 모듈</th>
                  <th className="px-4 py-3 text-left">마지막 활동</th>
                  <th className="px-4 py-3 text-left">상태</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { name: '김철수', email: 'kim@example.com', progress: 100, modules: 12, lastActive: '2분 전', status: '완료' },
                  { name: '이영희', email: 'lee@example.com', progress: 95, modules: 11, lastActive: '15분 전', status: '진행 중' },
                  { name: '박준호', email: 'park@example.com', progress: 88, modules: 10, lastActive: '1시간 전', status: '진행 중' },
                  { name: '최민지', email: 'choi@example.com', progress: 75, modules: 9, lastActive: '3시간 전', status: '진행 중' },
                  { name: '박현준', email: 'park2@example.com', progress: 15, modules: 2, lastActive: '5일 전', status: '주의' },
                ].map((student, idx) => (
                  <tr key={idx} className="hover:bg-blue-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">{student.name}</td>
                    <td className="px-4 py-3 text-gray-600">{student.email}</td>
                    <td className="px-4 py-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-600">{student.progress}%</span>
                    </td>
                    <td className="px-4 py-3">{student.modules} / 12</td>
                    <td className="px-4 py-3 text-gray-600">{student.lastActive}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        student.status === '완료' ? 'bg-green-100 text-green-800' :
                        student.status === '진행 중' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
