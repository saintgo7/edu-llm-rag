interface LectureModuleProps {
  id: number;
  title: string;
  duration: string;
  description: string;
  completed: boolean;
}

export function LectureModule({
  id,
  title,
  duration,
  description,
  completed,
}: LectureModuleProps) {
  return (
    <div className={`rounded-lg shadow-md p-6 transition-all ${
      completed
        ? 'bg-green-50 border-2 border-green-200'
        : 'bg-white hover:shadow-lg'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-bold px-3 py-1 rounded-full">
              모듈 {id}
            </span>
            {completed && (
              <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full">
                ✓ 완료
              </span>
            )}
            <span className="text-gray-500 text-sm">⏱️ {duration}</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
        <button className={`ml-4 px-6 py-2 rounded-lg transition-colors whitespace-nowrap font-semibold ${
          completed
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}>
          {completed ? '복습하기' : '강의 보기'}
        </button>
      </div>
    </div>
  );
}
