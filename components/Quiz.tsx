'use client';

import { useState } from 'react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  title: string;
}

export function Quiz({ questions, title }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    setAnswered(optionIndex);
    setShowExplanation(true);
    if (optionIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  if (completed) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">퀴즈 완료!</h3>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <p className="text-4xl font-bold text-blue-600 mb-2">
            {Math.round((score / questions.length) * 100)}%
          </p>
          <p className="text-gray-700">
            {score}/{questions.length} 문제 맞음
          </p>
        </div>
        <button
          onClick={() => {
            setCurrentQuestion(0);
            setScore(0);
            setAnswered(null);
            setShowExplanation(false);
            setCompleted(false);
          }}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          다시 풀기
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {currentQuestion + 1} / {questions.length}
        </p>
      </div>

      <h4 className="text-xl font-semibold text-gray-900 mb-6">
        {question.question}
      </h4>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !answered && handleAnswer(index)}
            disabled={answered !== null}
            className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
              answered === null
                ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                : index === question.correctAnswer
                ? 'border-green-500 bg-green-50'
                : index === answered && answered !== question.correctAnswer
                ? 'border-red-500 bg-red-50'
                : 'border-gray-200'
            } ${answered !== null ? 'cursor-default' : 'cursor-pointer'}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{option}</span>
              {answered !== null && index === question.correctAnswer && (
                <span className="text-green-600">✓</span>
              )}
              {answered !== null && index === answered && answered !== question.correctAnswer && (
                <span className="text-red-600">✗</span>
              )}
            </div>
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className={`rounded-lg p-4 mb-6 ${
          answered === question.correctAnswer
            ? 'bg-green-50 border-l-4 border-green-500'
            : 'bg-yellow-50 border-l-4 border-yellow-500'
        }`}>
          <p className="text-gray-700">
            <strong>설명:</strong> {question.explanation}
          </p>
        </div>
      )}

      {answered !== null && (
        <button
          onClick={handleNext}
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          {currentQuestion < questions.length - 1 ? '다음 문제' : '결과 보기'}
        </button>
      )}
    </div>
  );
}
