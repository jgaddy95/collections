import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CommunityPage() {
  // Mock data for community discussions
  const discussions = [
    { id: 1, title: "Best turntables for beginners?", author: "newCollector", replies: 15 },
    { id: 2, title: "Rare finds at local record stores", author: "vinylHunter", replies: 23 },
    { id: 3, title: "Tips for properly cleaning vinyl records", author: "audioPhile", replies: 42 },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Vinyl Community</h1>
      <p className="text-xl">Connect with fellow vinyl enthusiasts, share experiences, and discuss all things vinyl.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {discussions.map((discussion) => (
          <Card key={discussion.id}>
            <CardHeader>
              <CardTitle>{discussion.title}</CardTitle>
              <CardDescription>Started by: {discussion.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{discussion.replies} replies</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/community/${discussion.id}`}>Join Discussion</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Button className="mt-8">Start New Discussion</Button>
    </div>
  )
}