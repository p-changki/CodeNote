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
import { Pencil, Trash2 } from "lucide-react"

type Grade = {
  id: string
  student: string
  subject: string
  score: number
  date: string
}

const grades: Grade[] = [
  { id: "1", student: "김민지", subject: "국어", score: 92, date: "2025-09-01" },
  { id: "2", student: "이수현", subject: "수학", score: 88, date: "2025-09-01" },
  { id: "3", student: "박지훈", subject: "영어", score: 85, date: "2025-09-01" },
  { id: "4", student: "최유리", subject: "과학", score: 90, date: "2025-09-01" },
  { id: "5", student: "정현우", subject: "사회", score: 87, date: "2025-09-01" },
]

export default function GradeManagementPage() {
  return (
    <main className="p-6 space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-2xl font-bold">성적 관리</h1>
        <p className="text-gray-600">학생들의 성적을 관리하고 분석하세요</p>
      </div>

      {/* 필터 영역 */}
      <div className="flex flex-wrap gap-4">
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="학기 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2025-1">2025년 1학기</SelectItem>
            <SelectItem value="2025-2">2025년 2학기</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="과목 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="korean">국어</SelectItem>
            <SelectItem value="math">수학</SelectItem>
            <SelectItem value="english">영어</SelectItem>
            <SelectItem value="science">과학</SelectItem>
            <SelectItem value="social">사회</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="학생 이름 검색" className="w-60" />
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">검색</Button>
      </div>

      {/* 성적 요약 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader><CardTitle>평균 점수</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-orange-500">
            {Math.round(grades.reduce((a, b) => a + b.score, 0) / grades.length)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>최고 점수</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-green-600">
            {Math.max(...grades.map((g) => g.score))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>최저 점수</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-red-600">
            {Math.min(...grades.map((g) => g.score))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>시험 수</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-blue-600">
            {grades.length}
          </CardContent>
        </Card>
      </div>

      {/* 성적 테이블 */}
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>학생</TableHead>
                <TableHead>과목</TableHead>
                <TableHead>점수</TableHead>
                <TableHead>시험일</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grades.map((g) => (
                <TableRow key={g.id}>
                  <TableCell>{g.student}</TableCell>
                  <TableCell>{g.subject}</TableCell>
                  <TableCell>{g.score}</TableCell>
                  <TableCell>{g.date}</TableCell>
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
