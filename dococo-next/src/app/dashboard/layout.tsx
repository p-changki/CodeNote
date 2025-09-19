import type { Metadata } from "next"
import Navbar from "@/components/Navbar/Navbar"

export const metadata: Metadata = {
  title: "에듀 매니저 다시방",
  description: "학원 통합 관리 시스템 DASHBOARD",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-100">
        {/* 공통 NavBar */}
        <Navbar />
        {/* 페이지별 콘텐츠 */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
