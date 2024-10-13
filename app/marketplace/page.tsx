import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function MarketplacePage() {
  // Mock data for marketplace listings
  const listings = [
    { id: 1, title: "The Beatles - Abbey Road", condition: "Near Mint", price: 150, seller: "vinylKing" },
    { id: 2, title: "Pink Floyd - Dark Side of the Moon", condition: "Very Good Plus", price: 80, seller: "recordCollector" },
    { id: 3, title: "Miles Davis - Kind of Blue", condition: "Excellent", price: 120, seller: "jazzLover" },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Vinyl Marketplace</h1>
      <p className="text-xl">Buy, sell, and trade rare and valuable vinyl records.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <Card key={listing.id}>
            <CardHeader>
              <CardTitle>{listing.title}</CardTitle>
              <CardDescription>Condition: {listing.condition}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Price: ${listing.price}</p>
              <p>Seller: {listing.seller}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/marketplace/${listing.id}`}>View Listing</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Button className="mt-8">Create New Listing</Button>
    </div>
  )
}