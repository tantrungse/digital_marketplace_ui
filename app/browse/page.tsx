"use client"

import { Search, Filter, Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { MultiSelect } from "@/components/multi-select";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";
import { useState } from "react"

export default function BrowsePage() {
  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 99.99,
      rating: 4.5,
      reviews: 128,
      image: "/placeholder.svg?height=200&width=200",
      category: "Electronics",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 299.99,
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=200&width=200",
      category: "Electronics",
    },
    {
      id: 3,
      title: "Running Shoes",
      price: 129.99,
      rating: 4.3,
      reviews: 256,
      image: "/placeholder.svg?height=200&width=200",
      category: "Sports",
    },
    {
      id: 4,
      title: "Coffee Maker",
      price: 79.99,
      rating: 4.6,
      reviews: 94,
      image: "/placeholder.svg?height=200&width=200",
      category: "Home",
    },
    {
      id: 5,
      title: "Laptop Backpack",
      price: 49.99,
      rating: 4.4,
      reviews: 167,
      image: "/placeholder.svg?height=200&width=200",
      category: "Accessories",
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      price: 59.99,
      rating: 4.2,
      reviews: 203,
      image: "/placeholder.svg?height=200&width=200",
      category: "Electronics",
    },
  ]

  const frameworksList = [
    { value: "react", label: "React", icon: Turtle },
    { value: "angular", label: "Angular", icon: Cat },
    { value: "vue", label: "Vue", icon: Dog },
    { value: "svelte", label: "Svelte", icon: Rabbit },
    { value: "ember", label: "Ember", icon: Fish },
  ];

  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>(["react", "angular"]);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Browse Products</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search for products..." className="pl-10 pr-4 py-2 w-full max-w-md" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <Label className="font-medium">Filters:</Label>
          </div>

          <div className="flex items-center gap-2">
            <Label htmlFor="category" className="text-sm">
              Category:
            </Label>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <Label className="text-sm">Price Range:</Label>
            <div className="w-32">
              <Slider defaultValue={[0, 500]} max={500} step={10} />
            </div>
            <span className="text-sm text-muted-foreground">$0 - $500</span>
          </div>

          <div className="flex items-center gap-2">
            <Label htmlFor="rating" className="text-sm">
              Min Rating:
            </Label>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Rating</SelectItem>
                <SelectItem value="4">4+ Stars</SelectItem>
                <SelectItem value="3">3+ Stars</SelectItem>
                <SelectItem value="2">2+ Stars</SelectItem>
              </SelectContent>
            </Select>
            <div className="p-4 max-w-xl">
      <MultiSelect
        options={frameworksList}
        onValueChange={setSelectedFrameworks}
        defaultValue={selectedFrameworks}
        placeholder="Select tags"
        variant="inverted"
        animation={2}
        maxCount={3}
      />
    </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-2 left-2" variant="secondary">
                  {product.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <Link href={`/product/${product.id}`}>
                <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer">{product.title}</h3>
              </Link>
              <div className="flex items-center gap-1 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews})
                </span>
              </div>
              <p className="text-2xl font-bold text-primary">${product.price}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" size="sm">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
