import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDetailsPage() {
  const product = {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.6,
    reviews: 1247,
    description:
      "Experience premium sound quality with our latest wireless headphones featuring active noise cancellation, 30-hour battery life, and premium comfort padding.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium comfort padding",
      "Bluetooth 5.0 connectivity",
      "Quick charge - 5 min for 2 hours playback",
    ],
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    category: "Electronics",
    brand: "AudioTech",
    inStock: true,
    stockCount: 15,
  }

  const reviews = [
    {
      id: 1,
      rating: 5,
      comment: "Excellent sound quality and very comfortable to wear for long periods.",
      buyerName: "John D.",
      date: "2024-01-15",
      verified: true,
    },
    {
      id: 2,
      rating: 4,
      comment: "Great headphones, noise cancellation works well. Battery life is as advertised.",
      buyerName: "Sarah M.",
      date: "2024-01-10",
      verified: true,
    },
    {
      id: 3,
      rating: 5,
      comment: "Best purchase I've made this year. Highly recommend!",
      buyerName: "Mike R.",
      date: "2024-01-08",
      verified: true,
    },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg border">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square relative overflow-hidden rounded border cursor-pointer hover:border-primary"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-muted-foreground mb-4">by {product.brand}</p>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">${product.price}</span>
              <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
              <Badge variant="destructive">25% OFF</Badge>
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            <div className="space-y-2 mb-6">
              <h3 className="font-semibold">Key Features:</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-2 mb-6">
              {product.inStock ? (
                <Badge variant="default" className="bg-green-500">
                  In Stock ({product.stockCount} available)
                </Badge>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>

            <div className="flex gap-3 mb-6">
              <Button size="lg" className="flex-1" disabled={!product.inStock}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Truck className="h-6 w-6 text-primary" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="text-sm">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RotateCcw className="h-6 w-6 text-primary" />
                <span className="text-sm">30 Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <Tabs defaultValue="reviews" className="w-full">
        <TabsList>
          <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="shipping">Shipping Info</TabsTrigger>
        </TabsList>

        <TabsContent value="reviews" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <Button variant="outline">Write a Review</Button>
          </div>

          <div className="space-y-4">
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback>{review.buyerName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{review.buyerName}</span>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified Purchase
                          </Badge>
                        )}
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="specifications">
          <Card>
            <CardHeader>
              <CardTitle>Product Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Technical Specs</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Driver Size: 40mm</li>
                    <li>Frequency Response: 20Hz - 20kHz</li>
                    <li>Impedance: 32 Ohms</li>
                    <li>Sensitivity: 110dB</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Physical</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Weight: 250g</li>
                    <li>Dimensions: 18 x 15 x 8 cm</li>
                    <li>Cable Length: 1.2m</li>
                    <li>Color: Black/Silver</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shipping">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Delivery Options</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Standard Shipping (5-7 business days) - Free</li>
                    <li>• Express Shipping (2-3 business days) - $9.99</li>
                    <li>• Next Day Delivery - $19.99</li>
                  </ul>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Return Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    30-day return policy. Items must be in original condition with all accessories included.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
