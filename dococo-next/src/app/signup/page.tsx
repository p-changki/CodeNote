'use client'
import { useState } from "react";

export default function SignUpPage() {
  const [role, setRole] = useState("teacher");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* 제목 */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          회원가입
        </h1>

        {/* 역할 선택 */}
        <p className="text-gray-600 mb-3">어떤 분야신가요?</p>
        <div className="space-y-3 mb-6">
          <button
            onClick={() => setRole("teacher")}
            className={`w-full text-left px-4 py-3 rounded-lg border transition ${
              role === "teacher"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <p className="font-semibold">선생님</p>
            <p className="text-sm">
              학생을 가르치고 관리합니다
            </p>
          </button>
          <button
            onClick={() => setRole("student")}
            className={`w-full text-left px-4 py-3 rounded-lg border transition ${
              role === "student"
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <p className="font-semibold">학생</p>
            <p className="text-sm">
              나의 학습 현황을 확인합니다
            </p>
          </button>
        </div>

        {/* 입력 폼 */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">이름</label>
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">이메일</label>
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              className="w-full px-4 py-2 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            회원가입
          </button>
        </form>

        {/* 로그인 링크 */}
        <p className="text-center text-sm text-gray-600 mt-6">
          이미 계정이 있다면?{" "}
          <a href="/login" className="text-orange-500 font-semibold hover:underline">
            로그인
          </a>
        </p>
      </div>
    </div>
  );
}
