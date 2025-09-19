"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Bell, CheckCircle2, XCircle } from "lucide-react"

type Notification = {
  id: string
  type: "info" | "success" | "error"
  title: string
  message: string
  date: string
  read: boolean
}

const notifications: Notification[] = [
  {
    id: "1",
    type: "info",
    title: "새 클래스 등록",
    message: "영어 A반이 새로 등록되었습니다.",
    date: "2025-09-15",
    read: false,
  },
  {
    id: "2",
    type: "success",
    title: "성적 입력 완료",
    message: "205반 중간고사 성적이 입력되었습니다.",
    date: "2025-09-14",
    read: true,
  },
  {
    id: "3",
    type: "error",
    title: "출석 누락",
    message: "205반 2명의 학생 출석이 누락되었습니다.",
    date: "2025-09-13",
    read: false,
  },
]

export default function NotificationsPage() {
  const unreadCount = notifications.filter((n) => !n.read).length

  return (
    <main className="p-6 space-y-6">
      {/* 헤더 */}
      <div>
        <h1 className="text-2xl font-bold">알림</h1>
        <p className="text-gray-600">시스템에서 발생한 알림을 확인하세요</p>
      </div>

      {/* 요약 카드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader><CardTitle>전체 알림</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-orange-500">
            {notifications.length}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>읽지 않은 알림</CardTitle></CardHeader>
          <CardContent className="text-2xl font-bold text-red-500">
            {unreadCount}
          </CardContent>
        </Card>
      </div>

      {/* 알림 리스트 */}
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>유형</TableHead>
                <TableHead>제목</TableHead>
                <TableHead>내용</TableHead>
                <TableHead>날짜</TableHead>
                <TableHead>상태</TableHead>
                <TableHead>관리</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.map((n) => (
                <TableRow key={n.id}>
                  <TableCell>
                    {n.type === "info" && <Bell className="text-blue-500" size={18} />}
                    {n.type === "success" && <CheckCircle2 className="text-green-500" size={18} />}
                    {n.type === "error" && <XCircle className="text-red-500" size={18} />}
                  </TableCell>
                  <TableCell className="font-semibold">{n.title}</TableCell>
                  <TableCell>{n.message}</TableCell>
                  <TableCell>{n.date}</TableCell>
                  <TableCell>
                    {n.read ? (
                      <Badge variant="secondary">읽음</Badge>
                    ) : (
                      <Badge className="bg-red-500 text-white">안 읽음</Badge>
                    )}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button size="sm" variant="outline">읽음 처리</Button>
                    <Button size="sm" variant="destructive">삭제</Button>
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
