'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function GlossaryPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const terms = [
    {
      term: '임베딩 (Embedding)',
      definition: '텍스트를 고차원의 벡터로 변환하는 과정. 의미론적 의미를 수치 데이터로 표현합니다.',
      category: '기본 개념',
    },
    {
      term: '벡터 DB (Vector Database)',
      definition: '벡터로 변환된 데이터를 저장하고 빠르게 검색할 수 있는 데이터베이스. Pinecone, Weaviate, Qdrant 등이 있습니다.',
      category: '기술',
    },
    {
      term: '코사인 유사도 (Cosine Similarity)',
      definition: '두 벡터 사이의 각도를 측정하여 유사도를 계산하는 방식. -1에서 1 사이의 값을 가집니다.',
      category: '수학',
    },
    {
      term: '청크 (Chunk)',
      definition: '긴 문서를 처리하기 위해 작은 단위로 분할한 텍스트. 일반적으로 256~1024 토큰 크기입니다.',
      category: '처리',
    },
    {
      term: '할루시네이션 (Hallucination)',
      definition: 'LLM이 근거 없이 거짓 정보를 생성하는 현상. RAG는 이를 감소시킵니다.',
      category: '문제점',
    },
    {
      term: 'Knowledge Cutoff',
      definition: 'LLM이 학습된 데이터의 마감 시점. 그 이후의 정보는 알 수 없습니다.',
      category: '문제점',
    },
    {
      term: '프롬프트 (Prompt)',
      definition: 'LLM에 입력하는 지시사항이나 질문. 프롬프트 엔지니어링은 더 좋은 답변을 얻기 위해 프롬프트를 최적화하는 것입니다.',
      category: '기본 개념',
    },
    {
      term: '토큰 (Token)',
      definition: '텍스트를 처리하기 위해 분할한 가장 작은 단위. 단어나 부분단어로 표현됩니다.',
      category: '기본 개념',
    },
    {
      term: 'Temperature',
      definition: 'LLM의 창의성을 제어하는 파라미터. 0에 가까우면 결정적, 1에 가까우면 창의적입니다.',
      category: '파라미터',
    },
    {
      term: 'Top-K Sampling',
      definition: '가능도가 높은 상위 K개 토큰만 선택하여 다양성을 제어하는 방식.',
      category: '파라미터',
    },
    {
      term: 'BM25',
      definition: '전통적인 정보 검색 알고리즘. 키워드 기반 검색에 사용됩니다.',
      category: '알고리즘',
    },
    {
      term: 'FAISS (Facebook AI Similarity Search)',
      definition: 'Facebook에서 개발한 효율적인 벡터 유사도 검색 라이브러리.',
      category: '도구',
    },
    {
      term: 'LangChain',
      definition: 'LLM 애플리케이션을 쉽게 구축하기 위한 Python 프레임워크.',
      category: '도구',
    },
    {
      term: 'Self-RAG',
      definition: 'LLM이 자신의 응답을 평가하고 필요하면 재검색하여 개선하는 기법.',
      category: '고급 기법',
    },
    {
      term: 'GraphRAG',
      definition: '문서를 그래프 구조로 변환하여 복잡한 관계를 파악할 수 있는 RAG 기법.',
      category: '고급 기법',
    },
    {
      term: 'MultiModal RAG',
      definition: '텍스트뿐만 아니라 이미지, 비디오, 테이블 등 다양한 형식을 처리하는 RAG.',
      category: '고급 기법',
    },
    {
      term: 'Chain-of-Thought (CoT)',
      definition: 'LLM이 단계적으로 추론하도록 유도하는 프롬프팅 기법.',
      category: '기법',
    },
    {
      term: 'Few-Shot Prompting',
      definition: '몇 가지 예시를 포함하여 모델에게 원하는 답변 형식을 보여주는 기법.',
      category: '기법',
    },
    {
      term: 'Retrieval (검색)',
      definition: 'RAG의 첫 번째 단계. 사용자 질문과 유사한 문서를 벡터 DB에서 검색합니다.',
      category: 'RAG 단계',
    },
    {
      term: 'Augmentation (증강)',
      definition: 'RAG의 두 번째 단계. 검색된 문서를 원본 질문과 결합하여 프롬프트를 구성합니다.',
      category: 'RAG 단계',
    },
    {
      term: 'Generation (생성)',
      definition: 'RAG의 세 번째 단계. 증강된 프롬프트를 받은 LLM이 최종 답변을 생성합니다.',
      category: 'RAG 단계',
    },
    {
      term: 'API (Application Programming Interface)',
      definition: '프로그램 간 통신을 위한 인터페이스. REST API, GraphQL 등이 있습니다.',
      category: '기술',
    },
  ];

  const categories = ['전체', ...new Set(terms.map(t => t.category))];

  const filteredTerms = terms.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedTerms = filteredTerms.sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 mb-4 inline-block">
            ← 홈으로
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">용어 사전 (Glossary)</h1>
          <p className="text-gray-600 mt-2">RAG 학습에 필요한 주요 용어 및 개념 정의</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* 검색 박스 */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="용어 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 결과 표시 */}
        <div className="mb-4 text-sm text-gray-600">
          {sortedTerms.length}개의 용어가 검색되었습니다.
        </div>

        {/* 용어 목록 */}
        <div className="space-y-4">
          {sortedTerms.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">{item.term}</h3>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-700">{item.definition}</p>
            </div>
          ))}
        </div>

        {sortedTerms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">검색 결과가 없습니다.</p>
          </div>
        )}

        {/* 카테고리별 요약 */}
        {searchTerm === '' && (
          <section className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">카테고리별 용어</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.slice(1).map((category, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-blue-600 mb-3">{category}</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {terms
                      .filter(t => t.category === category)
                      .map((term, tidx) => (
                        <li key={tidx}>• {term.term}</li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
