'use client'
import { useState } from "react";
import Link from 'next/link' 

export default function LoginPage() {
  const [role, setRole] = useState("teacher");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* 제목 */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          로그인
        </h1>

        {/* 역할 선택 */}
        <p className="text-gray-600 mb-3">어떤 분이신가요?</p>
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setRole("teacher")}
            className={`flex-1 py-2 rounded-lg font-semibold border transition ${
              role === "teacher"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
            }`}
          >
            선생님
          </button>
          <button
            onClick={() => setRole("parent")}
            className={`flex-1 py-2 rounded-lg font-semibold border transition ${
              role === "parent"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
            }`}
          >
            학부모
          </button>
          <button
            onClick={() => setRole("student")}
            className={`flex-1 py-2 rounded-lg font-semibold border transition ${
              role === "student"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
            }`}
          >
            학생
          </button>
        </div>

        {/* 입력 폼 */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">이메일</label>
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-4 py-2  text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-4 py-2 text-gray-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            로그인
          </button>

          <Link href="/dashboard" className="text-gray-900 border hover:bg-orange-600">
            dococoTest 대시보드 바로가기 
          </Link>
        </form>

        {/* 회원가입 링크 */}
        <p className="text-center text-sm text-gray-600 mt-6">
          계정이 없으신가요?{" "}
          <a href="/signup" className="text-orange-500 font-semibold hover:underline">
            회원가입
          </a>
        </p>
      </div>
    </div>
  );
}
