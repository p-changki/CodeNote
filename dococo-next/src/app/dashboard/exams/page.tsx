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

type Exam = {
  id: string
  name: string
  subject: string
  students: number
  average: number
  date: string
}

const exams: Exam[] = [
  { id: "1", name: "1학기 중간고사", subject: "국어", students: 30, average: 82, date: "2025-05-10" },
  { id: "2", name: "1학기 기말고사", subject: "수학", students: 28, average: 76, date: "2025-06-20" },
  { id: "3", name: "모의고사", subject: "영어", students: 32, average: 85, date: "2025-07-05" },
]

export default function ExamManagementPage() {
  return (
    <main className="p-6 space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-2xl font-bold">시험 관리</h1>
        <p className="text-gray-600">등록된 시험을 관리하고 성적을 확인하세요</p>
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
        <Input placeholder="시험명 검색" className="w-60" />
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">검색</Button>
      </div>

      {/* 시험 요약 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader><CardTitle>총 시험 수</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-orange-500">
            {exams.length}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>평균 점수</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-blue-600">
            {Math.round(exams.reduce((a, b) => a + b.average, 0) / exams.length)}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>최고 점수</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-green-600">
            {Math.max(...exams.map((e) => e.average))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>최저 점수</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-red-600">
            {Math.min(...exams.map((e) => e.average))}
          </CardContent>
        </Card>
      </div>

      {/* 시험 테이블 */}
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>시험명</TableHead>
                <TableHead>과목</TableHead>
                <TableHead>응시 학생 수</TableHead>
                <TableHead>평균 점수</TableHead>
                <TableHead>시험일</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exams.map((e) => (
                <TableRow key={e.id}>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.subject}</TableCell>
                  <TableCell>{e.students}</TableCell>
                  <TableCell>{e.average}</TableCell>
                  <TableCell>{e.date}</TableCell>
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
