interface CodeExampleProps {
  title: string;
  language: string;
  code: string;
}

export function CodeExample({ title, language, code }: CodeExampleProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gray-800 text-white px-6 py-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">언어: {language}</p>
      </div>
      <pre className="bg-gray-900 text-gray-100 p-6 overflow-x-auto text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
