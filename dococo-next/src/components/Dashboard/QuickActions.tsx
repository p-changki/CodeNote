import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function QuickActions() {
  const actions = ["새 클래스", "성적 입력", "수업 자료 업로드", "시험 등록"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>빠른 작업</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, idx) => (
          <Button
            key={idx}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            {action}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
