'use client';

import { useEffect, useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function CertificatePage() {
  const [userName, setUserName] = useState('');
  const [completionDate, setCompletionDate] = useState(new Date().toISOString().split('T')[0]);
  const [certificateReady, setCertificateReady] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedProgress = localStorage.getItem('rag_progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      const allCompleted = progress.filter((p: any) => p.completed).length === 10;
      setCertificateReady(allCompleted);
    }
  }, []);

  const downloadPDF = async () => {
    if (!certificateRef.current) return;

    const canvas = await html2canvas(certificateRef.current, {
      backgroundColor: '#ffffff',
      scale: 2,
    });

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    });

    const imgData = canvas.toDataURL('image/png');
    pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
    pdf.save(`RAG_Certificate_${userName || 'Student'}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">📜 완료 인증서</h1>
          <p className="text-gray-600 mt-2">RAG 완전 정복 강의 이수 인증서</p>
        </div>

        {!certificateReady ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-5xl mb-4">📚</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">아직 강의를 완료하지 않았습니다</h2>
            <p className="text-gray-600 mb-6">모든 10개 모듈을 완료하면 인증서를 발급받을 수 있습니다.</p>
            <a
              href="/rag-lecture"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              강의 계속하기
            </a>
          </div>
        ) : (
          <div>
            {/* 입력 폼 */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">인증서 정보</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">이름</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="이름을 입력하세요"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">수료 날짜</label>
                  <input
                    type="date"
                    value={completionDate}
                    onChange={(e) => setCompletionDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* 인증서 미리보기 */}
            <div
              ref={certificateRef}
              className="bg-gradient-to-br from-yellow-50 via-white to-yellow-50 rounded-lg shadow-2xl p-12 mb-8 text-center border-8 border-yellow-200"
              style={{
                aspectRatio: '16/9',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Ctext x="10" y="50" font-size="80" fill="rgba(251,191,36,0.1)" font-family="serif"%3E❋%3C/text%3E%3C/svg%3E")',
              }}
            >
              {/* 장식 */}
              <div className="text-6xl mb-4">🏆</div>

              {/* 제목 */}
              <h1 className="text-5xl font-bold text-gray-900 mb-2 font-serif">
                Certificate of Completion
              </h1>
              <p className="text-gray-700 mb-8">수료 인증서</p>

              {/* 본문 */}
              <div className="mb-12">
                <p className="text-gray-700 mb-4">
                  This is to certify that
                </p>
                <p className="text-4xl font-bold text-blue-600 mb-4 min-h-12">
                  {userName || '________________'}
                </p>
                <p className="text-gray-700 mb-8">
                  has successfully completed the comprehensive
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-8">
                  LLM RAG Complete Mastery Lecture
                </p>
                <p className="text-gray-700">
                  consisting of 10 modules covering Retrieval-Augmented Generation systems,
                  <br />
                  from foundational concepts to advanced techniques
                </p>
              </div>

              {/* 날짜 및 서명 */}
              <div className="flex justify-between items-end mt-12 px-8">
                <div>
                  <p className="text-gray-700 text-sm">Date / 수료일</p>
                  <p className="text-gray-900 font-semibold">{completionDate}</p>
                </div>
                <div className="text-center">
                  <p className="text-6xl mb-2">✨</p>
                  <p className="text-gray-700 text-sm">Authorized Signature</p>
                </div>
              </div>
            </div>

            {/* 다운로드 버튼 */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={downloadPDF}
                className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <span>📥</span> PDF로 다운로드
              </button>
              <button
                onClick={() => window.print()}
                className="px-8 py-3 bg-gray-600 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <span>🖨️</span> 인쇄
              </button>
            </div>

            {/* 안내 */}
            <div className="mt-8 bg-blue-50 rounded-lg shadow-md p-6 text-center text-gray-700">
              <p>
                축하합니다! 🎉 모든 강의를 완료했습니다.<br />
                이 인증서를 LinkedIn, GitHub 또는 포트폴리오에 추가할 수 있습니다.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
