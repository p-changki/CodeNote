import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Pencil } from "lucide-react"

// type Props = {
//   params: { id: string }
// }

export default function StudentDetailPage() {
  // 실제로는 params.id를 이용해 DB에서 학생 데이터 fetch
  const student = {
    name: "홍길동",
    address: "광주광역시 북구 문산로 232",
    phone: "010-1234-5678",
    email: "hong123@gmail.com",
    school: "광주중학교",
    gradeClass: "2학년 3반 15번",
    birth: "2008-07-15",
    gender: "남",
    grade: "A",
    attendance: 95,
    notes: "없음",
    scores: [
      { subject: "국어", date: "2025-09-01", score: 92 },
      { subject: "수학", date: "2025-09-01", score: 88 },
      { subject: "영어", date: "2025-09-01", score: 85 },
      { subject: "과학", date: "2025-09-01", score: 90 },
      { subject: "사회", date: "2025-09-01", score: 87 },
    ],
    attendanceLog: [
      { date: "2025-09-01", status: "출석" },
      { date: "2025-09-02", status: "출석" },
      { date: "2025-09-03", status: "지각" },
    ],
  }

  return (
    <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 왼쪽 패널 */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>학생 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>이름:</strong> {student.name}</p>
            <p><strong>주소:</strong> {student.address}</p>
            <p><strong>전화번호:</strong> {student.phone}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>학교:</strong> {student.school}</p>
            <p><strong>학년/반/번호:</strong> {student.gradeClass}</p>
            <p><strong>생년월일:</strong> {student.birth}</p>
            <p><strong>성별:</strong> {student.gender}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>통계</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p><strong>전체 성적:</strong> {student.grade}</p>
            <p><strong>출석률:</strong> {student.attendance}%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>특이사항</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            {student.notes}
          </CardContent>
        </Card>
      </div>

      {/* 오른쪽 패널 */}
      <div className="md:col-span-2 space-y-6">
        {/* 버튼 */}
        <div className="flex justify-end gap-2">
          <Button variant="outline">
            <Download size={16} className="mr-2" /> PDF 다운로드
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Pencil size={16} className="mr-2" /> 정보 수정
          </Button>
        </div>

        {/* 성적 */}
        <Card>
          <CardHeader>
            <CardTitle>최근 성적</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">과목</th>
                  <th className="text-left py-2">시험일</th>
                  <th className="text-left py-2">점수</th>
                </tr>
              </thead>
              <tbody>
                {student.scores.map((s, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{s.subject}</td>
                    <td>{s.date}</td>
                    <td>{s.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* 출석 */}
        <Card>
          <CardHeader>
            <CardTitle>출석 현황</CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">날짜</th>
                  <th className="text-left py-2">상태</th>
                </tr>
              </thead>
              <tbody>
                {student.attendanceLog.map((a, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{a.date}</td>
                    <td>{a.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
