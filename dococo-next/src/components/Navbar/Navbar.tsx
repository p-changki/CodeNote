"use client";

import Link from "next/link";
import { Home, User, BarChart3, BookOpenCheck, Target, Bot, Bell, ChevronDown, GraduationCap, UserPen, Flag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      {/* 로고 */}
      <div className="flex gap-6 items-center">
        <GraduationCap className="text-orange-800" size={60} />
        <div className="text-xl font-bold text-orange-500">에듀 매니저</div>
      </div>

      {/* 메뉴 */}
      <div className="flex gap-6 text-gray-700 font-medium items-center">
        <Link href="/dashboard" className="flex items-center gap-1 hover:text-orange-500">
          <Home size={18} /> 대시보드
        </Link>
        <Link href="/dashboard/mystudents" className="flex items-center gap-1 hover:text-orange-500">
          <User size={18} /> 학생 관리
        </Link>
        <Link href="/dashboard/classes" className="flex items-center gap-1 hover:text-orange-500">
          <BookOpenCheck size={18} /> 클래스 관리
        </Link>
        <Link href="/dashboard/attendance" className="flex items-center gap-1 hover:text-orange-500">
          <Flag size={18} /> 출석 관리
        </Link>
        <Link href="/dashboard/grades" className="flex items-center gap-1 hover:text-orange-500">
          <BarChart3 size={18} /> 성적 관리
        </Link>
        <Link href="/diagnosis" className="flex items-center gap-1 hover:text-orange-500">
          <Target size={18} /> 시험 관리
        </Link>

        <div className="flex gap-4">
          <Link href="/ai-grading" className="flex items-center gap-1 hover:text-orange-500">
            <Bot size={18} /> 채팅
          </Link>
          <Link href="/notifications" className="flex items-center gap-1 hover:text-orange-500 relative">
            <Bell size={18} /> 알림
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">3</span>
          </Link>
          <div className="flex justify-center items-center gap-1 cursor-pointer hover:text-orange-200 bg-orange-400 rounded-full">
            <UserPen />
            이유리 선생 <ChevronDown size={16} />
          </div>
        </div>

      </div>
    </nav>
  );
}
