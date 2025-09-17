'use client'
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8f5f0]">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md text-center">
        {/* 아이콘 */}
        <div className="flex justify-center mb-6">
          <GraduationCap className="text-orange-500" size={60} />
        </div>

        {/* 타이틀 */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">에듀 매니저</h1>
        <p className="text-gray-500 text-sm mb-8">학원 통합 관리 시스템</p>

        {/* 버튼 */}
        <div className="space-y-4">
          <Link href='/login'>
            <button className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
              로그인
            </button>
          </Link>
          <Link href='/signup'>
            <button className="w-full py-3 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </div >
  );
}
