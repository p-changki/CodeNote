import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SummaryCards() {
  const stats = [
    { label: "총 클래스 수", value: 24, color: "text-orange-500" },
    { label: "진행 중 클래스 수", value: 3, color: "text-orange-500" },
    { label: "다가오는 일정 수", value: 12, color: "text-orange-500" },
    { label: "평균 성적 향상률", value: "+10%", color: "text-green-600" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((item, idx) => (
        <Card key={idx}>
          <CardHeader>
            <CardTitle>{item.label}</CardTitle>
          </CardHeader>
          <CardContent className={`text-2xl font-bold ${item.color}`}>
            {item.value}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
