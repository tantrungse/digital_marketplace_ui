"use client"

import { Star, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ProductReviewPage() {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({})
  const [hoveredRatings, setHoveredRatings] = useState<{ [key: string]: number }>({})

  const orderItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "/placeholder.svg?height=80&width=80",
      price: 99.99,
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "/placeholder.svg?height=80&width=80",
      price: 199.99,
    },
  ]

  const handleStarClick = (itemId: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [itemId]: rating }))
  }

  const handleStarHover = (itemId: string, rating: number) => {
    setHoveredRatings((prev) => ({ ...prev, [itemId]: rating }))
  }

  const handleStarLeave = (itemId: string) => {
    setHoveredRatings((prev) => ({ ...prev, [itemId]: 0 }))
  }

  const renderStars = (itemId: string) => {
    const currentRating = ratings[itemId] || 0
    const hoveredRating = hoveredRatings[itemId] || 0
    const displayRating = hoveredRating || currentRating

    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleStarClick(itemId, star)}
            onMouseEnter={() => handleStarHover(itemId, star)}
            onMouseLeave={() => handleStarLeave(itemId)}
            className="focus:outline-none"
          >
            <Star
              className={`h-6 w-6 transition-colors ${
                star <= displayRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-yellow-400"
              }`}
            />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Write Product Reviews</h1>
        <p className="text-muted-foreground">Share your experience with these products</p>
      </div>

      <div className="space-y-6">
        {orderItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 relative overflow-hidden rounded border">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                  <p className="text-muted-foreground">${item.price}</p>
                  <Badge variant="secondary" className="mt-1">
                    Purchased Item
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Rating */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Overall Rating</Label>
                <div className="flex items-center gap-4">
                  {renderStars(item.id.toString())}
                  <span className="text-sm text-muted-foreground">
                    {ratings[item.id.toString()] ? `${ratings[item.id.toString()]} out of 5 stars` : "Click to rate"}
                  </span>
                </div>
              </div>

              {/* Review Title */}
              <div className="space-y-2">
                <Label htmlFor={`title-${item.id}`} className="text-base font-semibold">
                  Review Title
                </Label>
                <input
                  id={`title-${item.id}`}
                  className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Summarize your review in a few words"
                />
              </div>

              {/* Review Text */}
              <div className="space-y-2">
                <Label htmlFor={`review-${item.id}`} className="text-base font-semibold">
                  Your Review
                </Label>
                <Textarea
                  id={`review-${item.id}`}
                  placeholder="Tell others about your experience with this product. What did you like or dislike? How did you use it?"
                  className="min-h-32"
                />
                <p className="text-xs text-muted-foreground">
                  Minimum 20 characters. Be specific and helpful to other buyers.
                </p>
              </div>

              {/* Photo Upload */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Add Photos (Optional)</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">Upload photos to help other customers</p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                </div>
              </div>

              {/* Specific Questions */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">Rate Specific Aspects</Label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm">Quality</Label>
                    {renderStars(`${item.id}-quality`)}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Value for Money</Label>
                    {renderStars(`${item.id}-value`)}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Ease of Use</Label>
                    {renderStars(`${item.id}-ease`)}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm">Design</Label>
                    {renderStars(`${item.id}-design`)}
                  </div>
                </div>
              </div>

              {/* Recommendation */}
              <div className="space-y-2">
                <Label className="text-base font-semibold">Would you recommend this product?</Label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name={`recommend-${item.id}`} value="yes" className="text-primary" />
                    <span>Yes, I recommend this product</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name={`recommend-${item.id}`} value="no" className="text-primary" />
                    <span>No, I don't recommend this product</span>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Submit Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Ready to submit your reviews?</h3>
                <p className="text-sm text-muted-foreground">
                  Your reviews help other customers make informed decisions
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">Save as Draft</Button>
                <Button>Submit Reviews</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
