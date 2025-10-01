import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Settings } from "lucide-react"

type ClassInfo = {
  id: string
  name: string
  level: string
  focus: string
  period: string
  status: string
}

const summary = [
  { label: "운영 클래스 수", value: 4 },
  { label: "수업 수", value: 60 },
  { label: "자료 수", value: 28 },
  { label: "학생 수", value: 15 },
]

const classes: ClassInfo[] = [
  {
    id: "a",
    name: "영어 A반",
    level: "고2",
    focus: "수능 영어 독해 기본 학습",
    period: "2023-03-02 ~ 2023-07-15",
    status: "관리 중",
  },
  {
    id: "b",
    name: "영어 B반",
    level: "고2",
    focus: "수능 영어 독해 기본 학습",
    period: "2023-03-02 ~ 2023-07-15",
    status: "관리 중",
  },
  {
    id: "c",
    name: "영어 C반",
    level: "고1",
    focus: "고등학교 1학년 영어 기본반",
    period: "2023-03-02 ~ 2023-07-15",
    status: "관리 중",
  },
  {
    id: "d",
    name: "영어 D반",
    level: "중3",
    focus: "중학교 3학년 영어 기본 학습",
    period: "2023-03-02 ~ 2023-07-15",
    status: "관리 중",
  },
]

export default function ClassManagementPage() {
  return (
    <main className="p-6 space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-2xl font-bold">클래스 관리</h1>
        <p className="text-gray-600">운영 중인 클래스와 자료를 관리하세요</p>
      </div>

      {/* 요약 카드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {summary.map((s, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{s.label}</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-orange-500">
              {s.value}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 버튼 */}
      <div className="flex justify-end gap-2">
        <Button variant="outline">출석 관리</Button>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          새 클래스 등록
        </Button>
      </div>

      {/* 클래스 카드 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {classes.map((c) => (
          <Card key={c.id}>
            <CardHeader>
              <CardTitle>{c.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p><strong>레벨:</strong> {c.level}</p>
              <p><strong>학습 목표:</strong> {c.focus}</p>
              <p><strong>기간:</strong> {c.period}</p>
              <p><strong>상태:</strong> {c.status}</p>

              {/* 관리 아이콘 */}
              <div className="flex gap-3 pt-2">
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Settings size={16} /> 관리
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <FileText size={16} /> 자료
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
