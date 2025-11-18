'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CommunityQAPage() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: 'BM25 vs Vector Search 언제 어떤 걸 써야 하나요?',
      author: '김철수',
      avatar: '👨‍💻',
      category: '검색 기법',
      views: 342,
      replies: 8,
      upvotes: 24,
      timestamp: '2시간 전',
      solved: true,
    },
    {
      id: 2,
      title: 'RAG 시스템에서 청크 크기를 어떻게 결정해야 할까요?',
      author: '이영희',
      avatar: '👩‍💻',
      category: '실습',
      views: 289,
      replies: 12,
      upvotes: 31,
      timestamp: '5시간 전',
      solved: true,
    },
    {
      id: 3,
      title: 'OpenAI API 비용 최적화 팁 공유합니다',
      author: '박준호',
      avatar: '👨‍🎓',
      category: '팁',
      views: 567,
      replies: 15,
      upvotes: 47,
      timestamp: '1일 전',
      solved: false,
    },
    {
      id: 4,
      title: '프로덕션 환경에서 RAG 성능 모니터링은 어떻게?',
      author: '최민지',
      avatar: '👩‍🎓',
      category: '배포',
      views: 198,
      replies: 6,
      upvotes: 18,
      timestamp: '2일 전',
      solved: false,
    },
    {
      id: 5,
      title: 'GraphRAG vs Self-RAG 어떤 것이 더 좋나요?',
      author: '정다은',
      avatar: '👨‍💼',
      category: '고급 기법',
      views: 256,
      replies: 9,
      upvotes: 22,
      timestamp: '2일 전',
      solved: false,
    },
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    { name: '검색 기법', color: 'blue' },
    { name: '실습', color: 'purple' },
    { name: '팁', color: 'green' },
    { name: '배포', color: 'orange' },
    { name: '고급 기법', color: 'red' },
  ];

  const handlePostQuestion = () => {
    if (newQuestion.trim()) {
      const question = {
        id: questions.length + 1,
        title: newQuestion,
        author: '당신',
        avatar: '😊',
        category: selectedCategory || '기타',
        views: 0,
        replies: 0,
        upvotes: 0,
        timestamp: '방금',
        solved: false,
      };
      setQuestions([question, ...questions]);
      setNewQuestion('');
      setSelectedCategory('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 홈으로
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">💬 커뮤니티 Q&A</h1>
          <p className="text-gray-600 mt-2">RAG 학습 중 질문하고 함께 배우는 공간</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Post New Question */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ 새로운 질문 작성</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">질문 제목</label>
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="예: RAG 시스템에서 벡터 검색이 느린 이유는?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">카테고리</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">카테고리 선택</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handlePostQuestion}
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              질문 게시하기
            </button>
          </div>
        </section>

        {/* Questions List */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">최신 질문</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200">
                최신순
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
                인기순
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">
                답변 필요
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((q) => (
              <div key={q.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {q.solved && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-semibold">
                          ✓ 해결됨
                        </span>
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold text-white ${
                        q.category === '검색 기법' ? 'bg-blue-500' :
                        q.category === '실습' ? 'bg-purple-500' :
                        q.category === '팁' ? 'bg-green-500' :
                        q.category === '배포' ? 'bg-orange-500' :
                        'bg-red-500'
                      }`}>
                        {q.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">
                      {q.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-4">
                    <span>{q.avatar} {q.author}</span>
                    <span>•</span>
                    <span>{q.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>👁️ {q.views}</span>
                    <span>💬 {q.replies}</span>
                    <span>👍 {q.upvotes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">1,234</div>
            <div className="text-gray-600">총 질문</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">892</div>
            <div className="text-gray-600">답변된 질문</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3,567</div>
            <div className="text-gray-600">커뮤니티 멤버</div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">14,289</div>
            <div className="text-gray-600">전체 댓글</div>
          </div>
        </section>
      </main>
    </div>
  );
}
