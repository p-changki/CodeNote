"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  id: number
  sender: "me" | "other"
  text: string
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "other", text: "안녕하세요! 오늘 수업 준비되셨나요?" },
    { id: 2, sender: "me", text: "네, 준비 다 했습니다 😊" },
    { id: 3, sender: "other", text: "좋습니다. 그럼 곧 시작하죠!" },
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { id: Date.now(), sender: "me", text: input }])
    setInput("")
  }

  return (
    <main className="p-6 flex justify-center">
      <Card className="w-full max-w-2xl flex flex-col h-[80vh]">
        {/* 헤더 */}
        <CardHeader className="border-b">
          <CardTitle>채팅방 (참여자 2명)</CardTitle>
        </CardHeader>

        {/* 메시지 영역 */}
        <CardContent className="flex-1 flex flex-col">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-lg max-w-[70%] ${
                      msg.sender === "me"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* 입력창 */}
          <div className="flex gap-2 mt-4">
            <Input
              placeholder="메시지를 입력하세요..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button
              onClick={sendMessage}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              전송
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
