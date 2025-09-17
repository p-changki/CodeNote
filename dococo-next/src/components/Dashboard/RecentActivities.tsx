import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, ClipboardList } from "lucide-react"

export default function RecentActivities() {
  const activities = [
    { type: "class", text: "클래스 개설됨: 국어활동" },
    { type: "exam", text: "시험 등록: 205반 중간고사" },
    { type: "class", text: "클래스 개설됨: 205반 1학기 영어" },
    { type: "exam", text: "시험 등록: 205반 학력평가" },
    { type: "class", text: "클래스 개설됨: 수학 탐구 모듈" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 활동</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {activities.map((act, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {act.type === "class" ? (
              <GraduationCap className="text-orange-500" size={20} />
            ) : (
              <ClipboardList className="text-blue-500" size={20} />
            )}
            <span>{act.text}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
