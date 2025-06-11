import { TrendingUp, Package, DollarSign, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function SellerDashboardPage() {
  const stats = {
    totalRevenue: 15420.5,
    totalOrders: 89,
    totalProducts: 24,
    totalCustomers: 156,
    revenueGrowth: 12.5,
    ordersGrowth: 8.3,
  }

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      product: "Wireless Headphones",
      amount: 99.99,
      status: "completed",
      date: "2024-01-15",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      product: "Smart Watch",
      amount: 299.99,
      status: "shipped",
      date: "2024-01-14",
    },
    {
      id: "ORD-003",
      customer: "Mike Johnson",
      product: "Bluetooth Speaker",
      amount: 79.99,
      status: "processing",
      date: "2024-01-13",
    },
    {
      id: "ORD-004",
      customer: "Sarah Wilson",
      product: "Phone Case",
      amount: 24.99,
      status: "completed",
      date: "2024-01-12",
    },
  ]

  const topProducts = [
    { name: "Wireless Headphones", sales: 45, revenue: 4499.55, stock: 12 },
    { name: "Smart Watch", sales: 23, revenue: 6899.77, stock: 8 },
    { name: "Bluetooth Speaker", sales: 34, revenue: 2719.66, stock: 15 },
    { name: "Phone Case", sales: 67, revenue: 1674.33, stock: 23 },
  ]

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "default",
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

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Seller Dashboard</h1>
          <p className="text-muted-foreground">Manage your store and track performance</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/seller/products/new">Add Product</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/seller/products">Manage Products</Link>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />+{stats.revenueGrowth}% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />+{stats.ordersGrowth}% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
            <p className="text-xs text-muted-foreground">Active listings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCustomers}</div>
            <p className="text-xs text-muted-foreground">Unique buyers</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest customer orders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-semibold">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                    <p className="text-sm">{order.product}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${order.amount}</p>
                    {getStatusBadge(order.status)}
                    <p className="text-xs text-muted-foreground mt-1">{order.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/seller/orders">View All Orders</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
            <CardDescription>Your best-selling items</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-semibold">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                    <p className="text-sm">Stock: {product.stock}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${product.revenue.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Revenue</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4" asChild>
              <Link href="/seller/products">Manage Products</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2" asChild>
              <Link href="/seller/products/new">
                <Package className="h-6 w-6" />
                Add Product
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2" asChild>
              <Link href="/seller/import">
                <TrendingUp className="h-6 w-6" />
                Bulk Import
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2" asChild>
              <Link href="/seller/reports">
                <DollarSign className="h-6 w-6" />
                View Reports
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2" asChild>
              <Link href="/seller/settings">
                <Users className="h-6 w-6" />
                Store Settings
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
