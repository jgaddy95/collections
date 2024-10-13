import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to Collections</h1>
      <p className="text-xl">Discover, showcase, and manage your vinyl record collection.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Showcase Your Collection</CardTitle>
            <CardDescription>Display your prized vinyl records</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Create a beautiful gallery of your vinyl collection, share details, and connect with other enthusiasts.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/collections">View Collections</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marketplace</CardTitle>
            <CardDescription>Buy, sell, and trade vinyl records</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Explore a vibrant marketplace for rare and valuable vinyl records. Connect with sellers and expand your collection.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/marketplace">Visit Marketplace</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community</CardTitle>
            <CardDescription>Connect with fellow vinyl enthusiasts</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Join discussions, share reviews, and interact with a community of passionate vinyl collectors.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/community">Join Community</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}