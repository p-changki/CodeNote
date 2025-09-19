import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


export default function UpcomingSchedule() {
  const schedules = [
    { title: "국어활동", date: "2023.05.01" },
    { title: "205반 중간고사", date: "2023.05.02" },
    { title: "205반 1학기 영어", date: "2023.05.03" },
    { title: "205반 학력평가", date: "2023.05.04" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>다가오는 일정</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {schedules.map((s, idx) => (
          <div key={idx} className="flex justify-between">
            <span>{s.title}</span>
            <span className="text-gray-500">{s.date}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
