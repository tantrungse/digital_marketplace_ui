import { Package, Truck, CheckCircle, XCircle, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function OrderHistoryPage() {
  const orders = [
    {
      id: "ORD-001",
      date: "2024-01-15",
      status: "delivered",
      total: 299.99,
      items: [
        { name: "Wireless Headphones", quantity: 1, price: 99.99 },
        { name: "Smart Watch", quantity: 1, price: 199.99 },
      ],
    },
    {
      id: "ORD-002",
      date: "2024-01-10",
      status: "shipped",
      total: 159.98,
      items: [{ name: "Bluetooth Speaker", quantity: 2, price: 79.99 }],
    },
    {
      id: "ORD-003",
      date: "2024-01-05",
      status: "processing",
      total: 49.99,
      items: [{ name: "Phone Case", quantity: 1, price: 49.99 }],
    },
    {
      id: "ORD-004",
      date: "2023-12-28",
      status: "cancelled",
      total: 129.99,
      items: [{ name: "Laptop Stand", quantity: 1, price: 129.99 }],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "shipped":
        return <Truck className="h-4 w-4 text-blue-500" />
      case "processing":
        return <Package className="h-4 w-4 text-yellow-500" />
      case "cancelled":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <Package className="h-4 w-4" />
    }
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      delivered: "default",
      shipped: "secondary",
      processing: "outline",
      cancelled: "destructive",
    } as const

    return (
      <Badge variant={variants[status as keyof typeof variants] || "outline"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const filterOrdersByStatus = (status: string) => {
    if (status === "all") return orders
    return orders.filter((order) => order.status === status)
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Order History</h1>
        <p className="text-muted-foreground">Track and manage your orders</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex items-center justify-between mb-6">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="shipped">Shipped</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>

          <Select defaultValue="newest">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="highest">Highest Amount</SelectItem>
              <SelectItem value="lowest">Lowest Amount</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="all" className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div>
                      <CardTitle className="text-lg">Order {order.id}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Placed on {new Date(order.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(order.status)}
                      {getStatusBadge(order.status)}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">${order.total}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/orders/${order.id}`}>
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-semibold">Items:</h4>
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>
                        {item.name} × {item.quantity}
                      </span>
                      <span>${item.price}</span>
                    </div>
                  ))}
                </div>

                {order.status === "delivered" && (
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      Reorder
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/review/${order.id}`}>Leave Review</Link>
                    </Button>
                  </div>
                )}

                {order.status === "shipped" && (
                  <div className="mt-4">
                    <Button variant="outline" size="sm">
                      Track Package
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {["processing", "shipped", "delivered", "cancelled"].map((status) => (
          <TabsContent key={status} value={status} className="space-y-4">
            {filterOrdersByStatus(status).map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <CardTitle className="text-lg">Order {order.id}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Placed on {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(order.status)}
                        {getStatusBadge(order.status)}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">${order.total}</p>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/orders/${order.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Items:</h4>
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span>${item.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
