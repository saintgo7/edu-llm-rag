'use client';

import { useEffect, useState } from 'react';

export interface Progress {
  moduleId: number;
  completed: boolean;
  score?: number;
  completedDate?: string;
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loaded, setLoaded] = useState(false);

  // 초기 로드
  useEffect(() => {
    const saved = localStorage.getItem('rag_progress');
    if (saved) {
      setProgress(JSON.parse(saved));
    }
    setLoaded(true);
  }, []);

  // 저장
  const saveProgress = (newProgress: Progress[]) => {
    setProgress(newProgress);
    localStorage.setItem('rag_progress', JSON.stringify(newProgress));
  };

  // 모듈 완료 표시
  const completeModule = (moduleId: number, score?: number) => {
    const updated = progress.filter(p => p.moduleId !== moduleId);
    updated.push({
      moduleId,
      completed: true,
      score,
      completedDate: new Date().toISOString(),
    });
    saveProgress(updated.sort((a, b) => a.moduleId - b.moduleId));
  };

  // 진행도 계산
  const getProgress = () => {
    const total = 10; // 총 10개 모듈
    const completed = progress.filter(p => p.completed).length;
    return { completed, total, percentage: Math.round((completed / total) * 100) };
  };

  // 배지 획득
  const getBadges = () => {
    const { completed } = getProgress();
    const badges = [];

    if (completed >= 3) badges.push({ name: '시작', icon: '🚀' });
    if (completed >= 5) badges.push({ name: '중급자', icon: '⭐' });
    if (completed >= 8) badges.push({ name: '전문가', icon: '🏆' });
    if (completed === 10) badges.push({ name: '마스터', icon: '👑' });

    return badges;
  };

  return {
    progress,
    loaded,
    completeModule,
    getProgress,
    getBadges,
    saveProgress,
  };
}

interface ProgressTrackerProps {
  moduleId: number;
  moduleName: string;
}

export function ProgressTrackerComponent({ moduleId, moduleName }: ProgressTrackerProps) {
  const { progress, loaded, completeModule } = useProgress();
  const isCompleted = progress.some(p => p.moduleId === moduleId && p.completed);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleComplete = () => {
    completeModule(moduleId);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  if (!loaded) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-gray-900">{moduleName}</h3>
          <p className="text-sm text-gray-600">모듈 {moduleId}</p>
        </div>

        {isCompleted ? (
          <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg">
            <span className="text-lg">✓</span>
            <span className="font-semibold">완료됨</span>
          </div>
        ) : (
          <button
            onClick={handleComplete}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            완료 표시
          </button>
        )}
      </div>

      {showConfetti && (
        <div className="mt-4 text-center animate-bounce">
          <span className="text-4xl">🎉</span>
        </div>
      )}
    </div>
  );
}

export function ProgressOverview() {
  const { progress, loaded, getProgress, getBadges } = useProgress();
  const { completed, total, percentage } = getProgress();
  const badges = getBadges();

  if (!loaded) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 학습 진행도</h2>

      {/* 진행률 바 */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-900">{completed}/{total} 모듈 완료</span>
          <span className="text-blue-600 font-bold">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      {/* 배지 */}
      {badges.length > 0 && (
        <div className="mb-8">
          <h3 className="font-bold text-gray-900 mb-3">🏅 획득 배지</h3>
          <div className="flex gap-3">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-yellow-200 to-orange-200 p-4 rounded-lg text-center"
              >
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="font-semibold text-gray-900 text-sm">{badge.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 완료한 모듈 목록 */}
      {progress.filter(p => p.completed).length > 0 && (
        <div>
          <h3 className="font-bold text-gray-900 mb-3">✅ 완료한 모듈</h3>
          <ul className="space-y-2">
            {progress
              .filter(p => p.completed)
              .map((p) => (
                <li key={p.moduleId} className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>모듈 {p.moduleId}</span>
                  {p.completedDate && (
                    <span className="text-sm text-gray-600">
                      ({new Date(p.completedDate).toLocaleDateString('ko-KR')})
                    </span>
                  )}
                </li>
              ))}
          </ul>
        </div>
      )}

      {/* 다음 추천 모듈 */}
      {completed < total && (
        <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="text-gray-700">
            <strong>다음 추천:</strong> 모듈 {completed + 1}을 완료해보세요!
          </p>
        </div>
      )}

      {completed === total && (
        <div className="mt-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
          <p className="text-green-900 font-bold">
            🎓 축하합니다! 모든 모듈을 완료했습니다!
          </p>
        </div>
      )}
    </div>
  );
}
