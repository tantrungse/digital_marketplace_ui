import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 99.99,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
      inStock: true,
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 299.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      inStock: true,
    },
    {
      id: 3,
      title: "Bluetooth Speaker",
      price: 59.99,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      inStock: false,
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
        <p className="text-muted-foreground">{cartItems.length} items in your cart</p>
      </div>

      {cartItems.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>
            <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-4">Add some products to get started</p>
            <Button asChild>
              <Link href="/browse">Continue Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 relative overflow-hidden rounded border">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground">{item.inStock ? "In Stock" : "Out of Stock"}</p>
                      <p className="text-lg font-bold text-primary">${item.price}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input type="number" value={item.quantity} className="w-16 text-center" min="1" />
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-right">
                      <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="space-y-2 pt-4">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/checkout">Proceed to Checkout</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/browse">Continue Shopping</Link>
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground pt-4">
                  <p>Free shipping on orders over $100</p>
                  <p>30-day return policy</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
