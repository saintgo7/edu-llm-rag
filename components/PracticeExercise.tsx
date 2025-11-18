'use client';

import { useState } from 'react';

interface PracticeExerciseProps {
  title: string;
  description: string;
  starterCode: string;
  expectedOutput: string;
  hint: string;
}

export function PracticeExercise({
  title,
  description,
  starterCode,
  expectedOutput,
  hint,
}: PracticeExerciseProps) {
  const [code, setCode] = useState(starterCode);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white px-6 py-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-blue-100 text-sm mt-1">{description}</p>
      </div>

      <div className="p-6">
        {/* Problem Description */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">문제</h4>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Code Editor */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">코드 작성</h4>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-4 bg-gray-900 text-gray-100 font-mono text-sm rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
            rows={12}
            placeholder="여기에 코드를 작성하세요..."
          />
        </div>

        {/* Expected Output */}
        <div className="mb-6 bg-gray-50 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">예상 출력</h4>
          <pre className="text-gray-700 font-mono text-sm overflow-x-auto">
            {expectedOutput}
          </pre>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setShowHint(!showHint)}
            className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg hover:bg-yellow-200 transition-colors font-semibold text-sm"
          >
            💡 힌트
          </button>
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition-colors font-semibold text-sm"
          >
            ✓ 풀이 보기
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm ml-auto">
            실행
          </button>
        </div>

        {/* Hint */}
        {showHint && (
          <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <p className="text-gray-700">
              <strong>💡 힌트:</strong> {hint}
            </p>
          </div>
        )}

        {/* Solution */}
        {showSolution && (
          <div className="mt-4">
            <h4 className="font-semibold text-gray-900 mb-2">풀이 예시</h4>
            <pre className="bg-gray-900 text-gray-100 font-mono text-sm p-4 rounded-lg overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
