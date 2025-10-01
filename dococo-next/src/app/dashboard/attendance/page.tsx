"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Pencil, Trash2, User } from "lucide-react"

type Student = {
  id: string
  name: string
  school: string
  className: string
  status: "출석" | "지각" | "결석"
  note?: string
  contact: string
}

const students: Student[] = [
  {
    id: "1",
    name: "이유리",
    school: "여자대학교",
    className: "영어 A반",
    status: "출석",
    note: "출석 이유",
    contact: "010-1234-5678",
  },
  {
    id: "2",
    name: "박창기",
    school: "학교",
    className: "영어 A반",
    status: "지각",
    note: "개인 사정 이유",
    contact: "010-2345-6789",
  },
  {
    id: "3",
    name: "김윤기",
    school: "어딘가",
    className: "영어 A반",
    status: "결석",
    note: "아파유",
    contact: "010-3456-7890",
  },
]

export default function AttendancePage() {
  return (
    <main className="p-6 space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-2xl font-bold">출석 관리</h1>
        <p className="text-gray-600">학생들의 출석 현황을 관리하세요</p>
      </div>

      {/* 필터 영역 */}
      <div className="flex flex-wrap gap-4">
        <Input type="date" defaultValue="2023-09-14" className="w-48" />
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="클래스 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a">영어 A반</SelectItem>
            <SelectItem value="b">영어 B반</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="출석 상태" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">전체</SelectItem>
            <SelectItem value="present">출석</SelectItem>
            <SelectItem value="late">지각</SelectItem>
            <SelectItem value="absent">결석</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 출석 요약 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader><CardTitle>총 학생 수</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-orange-500">14</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>출석</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-green-600">11</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>지각</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-yellow-500">2</CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>결석</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-red-500">1</CardContent>
        </Card>
      </div>

      {/* 학생 출석 테이블 */}
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>학생</TableHead>
                <TableHead>학교</TableHead>
                <TableHead>클래스</TableHead>
                <TableHead>출석 상태</TableHead>
                <TableHead>비고</TableHead>
                <TableHead>연락처</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="flex items-center gap-2">
                    <User size={20} className="text-gray-500" />
                    {s.name}
                  </TableCell>
                  <TableCell>{s.school}</TableCell>
                  <TableCell>{s.className}</TableCell>
                  <TableCell>
                    {s.status === "출석" && (
                      <span className="text-green-600 font-semibold">{s.status}</span>
                    )}
                    {s.status === "지각" && (
                      <span className="text-yellow-600 font-semibold">{s.status}</span>
                    )}
                    {s.status === "결석" && (
                      <span className="text-red-600 font-semibold">{s.status}</span>
                    )}
                  </TableCell>
                  <TableCell>{s.note || "-"}</TableCell>
                  <TableCell>{s.contact}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <Pencil size={16} />
                    </Button>
                    <Button size="icon" variant="destructive">
                      <Trash2 size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  )
}
