interface LectureContentProps {
  title: string;
  duration: string;
  content: React.ReactNode;
  previousModule?: {
    title: string;
    href: string;
  };
  nextModule?: {
    title: string;
    href: string;
  };
}

export function LectureContent({
  title,
  duration,
  content,
  previousModule,
  nextModule,
}: LectureContentProps) {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 mb-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-2 mb-2 text-blue-100">
            <span>📖 강의 수강</span>
            <span>⏱️ {duration}</span>
          </div>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {content}
      </div>

      {/* Navigation */}
      <div className="bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center gap-4">
            {previousModule ? (
              <a
                href={previousModule.href}
                className="flex-1 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <div className="text-sm text-gray-600">← 이전</div>
                <div className="font-semibold text-gray-900">{previousModule.title}</div>
              </a>
            ) : (
              <div className="flex-1"></div>
            )}

            {nextModule ? (
              <a
                href={nextModule.href}
                className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-right"
              >
                <div className="text-sm text-blue-100">다음 →</div>
                <div className="font-semibold">{nextModule.title}</div>
              </a>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
