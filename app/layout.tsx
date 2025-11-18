import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CS 학생을 위한 LLM/RAG 교육 플랫폼",
  description: "컴퓨터공학 학생들을 위한 LLM과 RAG(Retrieval-Augmented Generation) 완벽 가이드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
