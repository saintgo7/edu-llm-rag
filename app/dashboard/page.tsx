'use client';

import Link from 'next/link';
import { ProgressOverview } from '@/components/ProgressTracker';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [stats, setStats] = useState({
    totalModules: 10,
    completedModules: 0,
    totalHours: 5,
    estimatedHoursRemaining: 5,
  });

  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  useEffect(() => {
    const savedProgress = localStorage.getItem('rag_progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      const completed = progress.filter((p: any) => p.completed).length;
      const remaining = Math.round(((10 - completed) / 10) * 5);

      setStats({
        ...stats,
        completedModules: completed,
        estimatedHoursRemaining: remaining,
      });

      setRecentActivity(
        progress
          .filter((p: any) => p.completed)
          .sort((a: any, b: any) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime())
          .slice(0, 5)
      );
    }
  }, []);

  const progressPercentage = Math.round((stats.completedModules / stats.totalModules) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900">📊 학습 대시보드</h1>
          <p className="text-gray-600 mt-2">당신의 RAG 강의 학습 진도를 확인하세요</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">📚</div>
            <p className="text-gray-600 text-sm mb-1">완료한 모듈</p>
            <p className="text-3xl font-bold text-blue-600">{stats.completedModules}/{stats.totalModules}</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">📈</div>
            <p className="text-gray-600 text-sm mb-1">진행도</p>
            <p className="text-3xl font-bold text-green-600">{progressPercentage}%</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">⏱️</div>
            <p className="text-gray-600 text-sm mb-1">학습한 시간</p>
            <p className="text-3xl font-bold text-purple-600">
              {Math.round(((stats.completedModules / stats.totalModules) * stats.totalHours * 10) / 10)}시간
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-3xl mb-2">🎯</div>
            <p className="text-gray-600 text-sm mb-1">남은 시간</p>
            <p className="text-3xl font-bold text-orange-600">
              {stats.estimatedHoursRemaining}시간
            </p>
          </div>
        </div>

        {/* 진행도 개요 */}
        <div className="mb-12">
          <ProgressOverview />
        </div>

        {/* 메인 콘텐츠 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 왼쪽: 최근 활동 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">최근 활동</h2>

              {recentActivity.length > 0 ? (
                <div className="space-y-4">
                  {recentActivity.map((activity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-green-500"
                    >
                      <div className="text-2xl">✓</div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">모듈 {activity.moduleId} 완료</p>
                        <p className="text-sm text-gray-600">
                          {new Date(activity.completedDate).toLocaleDateString('ko-KR')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">아직 완료한 모듈이 없습니다. 강의를 시작해보세요!</p>
              )}
            </div>

            {/* 추천 학습 경로 */}
            <div className="bg-white rounded-lg shadow-md p-8 mt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">📚 추천 학습 경로</h2>

              <div className="space-y-4">
                {stats.completedModules === 0 && (
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="font-semibold text-gray-900">🌟 시작하기</p>
                    <p className="text-gray-700 mt-1">모듈 1: RAG란 무엇인가?부터 시작하세요</p>
                    <Link
                      href="/rag-lecture/module-1"
                      className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      모듈 1 보기
                    </Link>
                  </div>
                )}

                {stats.completedModules >= 1 && stats.completedModules < 4 && (
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <p className="font-semibold text-gray-900">🚀 기초 완성</p>
                    <p className="text-gray-700 mt-1">
                      모듈 {stats.completedModules + 1}을 계속해서 기초를 다지세요
                    </p>
                  </div>
                )}

                {stats.completedModules >= 4 && stats.completedModules < 8 && (
                  <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <p className="font-semibold text-gray-900">⭐ 실무 역량</p>
                    <p className="text-gray-700 mt-1">이제 실무 기반 내용을 학습할 준비가 되었습니다</p>
                    <Link
                      href="/exercises"
                      className="inline-block mt-3 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                    >
                      실습 문제 풀기
                    </Link>
                  </div>
                )}

                {stats.completedModules >= 8 && (
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <p className="font-semibold text-gray-900">🏆 마지막 단계</p>
                    <p className="text-gray-700 mt-1">거의 다 왔습니다! 마지막 모듈을 완료하세요</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 오른쪽: 빠른 링크 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🔗 빠른 링크</h3>
              <div className="space-y-2">
                <Link
                  href="/rag-lecture"
                  className="block px-4 py-2 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
                >
                  → 강의 목록
                </Link>
                <Link
                  href="/exercises"
                  className="block px-4 py-2 bg-green-50 text-green-600 rounded hover:bg-green-100 transition-colors"
                >
                  → 실습 문제
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-2 bg-yellow-50 text-yellow-600 rounded hover:bg-yellow-100 transition-colors"
                >
                  → FAQ
                </Link>
                <Link
                  href="/glossary"
                  className="block px-4 py-2 bg-purple-50 text-purple-600 rounded hover:bg-purple-100 transition-colors"
                >
                  → 용어 사전
                </Link>
                <Link
                  href="/certificate"
                  className="block px-4 py-2 bg-pink-50 text-pink-600 rounded hover:bg-pink-100 transition-colors"
                >
                  → 인증서
                </Link>
              </div>
            </div>

            {/* 목표 설정 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 학습 목표</h3>
              <div className="space-y-3 text-sm text-gray-700">
                {stats.completedModules < 10 && (
                  <>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={stats.completedModules >= 5}
                        readOnly
                        className="w-4 h-4"
                      />
                      <span>5개 모듈 완료</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={stats.completedModules >= 10}
                        readOnly
                        className="w-4 h-4"
                      />
                      <span>전체 과정 완료</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        readOnly
                        className="w-4 h-4"
                      />
                      <span>프로젝트 완성</span>
                    </div>
                  </>
                )}
                {stats.completedModules === 10 && (
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="font-bold text-green-900">🎉 모든 목표 달성!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
