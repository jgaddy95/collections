import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CollectionsPage() {
  // Mock data for collections
  const collections = [
    { id: 1, title: "Classic Rock Gems", description: "A curated collection of timeless rock albums", recordCount: 42 },
    { id: 2, title: "Jazz Essentials", description: "The must-have jazz records for any enthusiast", recordCount: 28 },
    { id: 3, title: "80s Pop Hits", description: "Relive the 80s with these iconic pop albums", recordCount: 35 },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Vinyl Collections</h1>
      <p className="text-xl">Explore curated collections from vinyl enthusiasts around the world.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Card key={collection.id}>
            <CardHeader>
              <CardTitle>{collection.title}</CardTitle>
              <CardDescription>{collection.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{collection.recordCount} records in this collection</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/collections/${collection.id}`}>View Collection</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Button className="mt-8">Create New Collection</Button>
    </div>
  )
}