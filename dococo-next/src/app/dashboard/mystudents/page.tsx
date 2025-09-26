import  Link  from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil, Trash2 } from "lucide-react"

type Student = {
  id: string 
  name: string
  registered: string
  school: string
  grade: string
  className: string
  attendance: number
  average: number
  contact: string
}

const students: Student[] = [
  {
    id: "1",
    name: "이유리",
    registered: "2023-04-01",
    school: "여자대학교",
    grade: "4학년",
    className: "사회 실험",
    attendance: 95,
    average: 92,
    contact: "010-1234-5678",
  },
  {
    id: "2",
    name: "박창기",
    registered: "2015-04-02",
    school: "대학교",
    grade: "6학년",
    className: "MBA 실험",
    attendance: 60,
    average: 70,
    contact: "010-2345-6789",
  },
  {
    id: "3",
    name: "김윤기",
    registered: "2023-04-03",
    school: "고등학교",
    grade: "2학년",
    className: "핵 개발",
    attendance: 70,
    average: 70,
    contact: "010-3456-7890",
  },
]

export default function StudentManagementPage() {
  return (
    <main className="p-6 space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-2xl font-bold">학생 관리</h1>
        <p className="text-gray-600">등록된 학생들을 간편하게 관리하세요</p>
      </div>

      {/* 검색 + 버튼 */}
      <div className="flex justify-between items-center">
        <Input placeholder="전체 학생 검색" className="w-1/3" />
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          새 학생 등록
        </Button>
      </div>

      {/* 학생 테이블 */}
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>학생 정보</TableHead>
                <TableHead>학교/학년</TableHead>
                <TableHead>클래스</TableHead>
                <TableHead>출석률</TableHead>
                <TableHead>평균</TableHead>
                <TableHead>연락처</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((s, idx) => (
                <TableRow key={idx}>
                  <TableCell>
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-xs text-gray-500">
                      등록일: {s.registered}
                    </div>
                  </TableCell>
                  <TableCell>
                    {s.school} / {s.grade}
                  </TableCell>
                  <TableCell>{s.className}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{s.attendance}%</span>
                      <Progress value={s.attendance} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span>{s.average}%</span>
                      <Progress value={s.average} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>{s.contact}</TableCell>
                  <TableCell className="flex gap-2">
                    <Link href={`/dashboard/mystudents/${s.id}`}>
                      <Button size="icon" variant="outline">
                        <Pencil size={16} />
                      </Button>
                      <Button size="icon" variant="destructive">
                        <Trash2 size={16} />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* 하단 정보 */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <span>총 150명의 학생이 있습니다. 아마도요</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">이전</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">다음</Button>
        </div>
      </div>
    </main>
  )
}
