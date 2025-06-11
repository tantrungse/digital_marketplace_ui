import { Users, Package, DollarSign, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

export default function AdminDashboardPage() {
  const systemStats = {
    totalUsers: 12547,
    totalSellers: 1234,
    totalProducts: 45678,
    totalRevenue: 2456789.5,
    monthlyGrowth: 15.2,
    activeOrders: 892,
  }

  const recentActivity = [
    { type: "user", action: "New user registration", user: "john.doe@email.com", time: "2 minutes ago" },
    { type: "product", action: "Product approved", user: "TechStore", time: "5 minutes ago" },
    { type: "order", action: "High-value order placed", user: "Premium Customer", time: "8 minutes ago" },
    { type: "seller", action: "Seller verification completed", user: "ElectronicsHub", time: "12 minutes ago" },
  ]

  const pendingActions = [
    { type: "Product Review", count: 23, priority: "high" },
    { type: "Seller Verification", count: 8, priority: "medium" },
    { type: "Dispute Resolution", count: 5, priority: "high" },
    { type: "Refund Requests", count: 12, priority: "medium" },
  ]

  const topSellers = [
    { name: "TechWorld", revenue: 45678.9, orders: 234, rating: 4.8 },
    { name: "FashionHub", revenue: 38901.23, orders: 189, rating: 4.7 },
    { name: "HomeDecor", revenue: 32456.78, orders: 156, rating: 4.9 },
    { name: "SportsGear", revenue: 28734.56, orders: 143, rating: 4.6 },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "user":
        return <Users className="h-4 w-4 text-blue-500" />
      case "product":
        return <Package className="h-4 w-4 text-green-500" />
      case "order":
        return <DollarSign className="h-4 w-4 text-yellow-500" />
      case "seller":
        return <CheckCircle className="h-4 w-4 text-purple-500" />
      default:
        return <AlertTriangle className="h-4 w-4" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    return priority === "high" ? <Badge variant="destructive">High</Badge> : <Badge variant="secondary">Medium</Badge>
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">System overview and management</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/admin/users">Manage Users</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/admin/reports">View Reports</Link>
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1" />+{systemStats.monthlyGrowth}% this month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sellers</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalSellers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Verified sellers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{systemStats.totalProducts.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Live listings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Platform Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(systemStats.totalRevenue / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">Total processed</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest system events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  {getActivityIcon(activity.type)}
                  <div className="flex-1">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.user}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Actions</CardTitle>
            <CardDescription>Items requiring admin attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingActions.map((action, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{action.type}</p>
                    <p className="text-sm text-muted-foreground">{action.count} pending items</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {getPriorityBadge(action.priority)}
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Sellers */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Sellers</CardTitle>
          <CardDescription>Highest revenue generating sellers this month</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Seller Name</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topSellers.map((seller, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{seller.name}</TableCell>
                  <TableCell className="font-semibold">${seller.revenue.toLocaleString()}</TableCell>
                  <TableCell>{seller.orders}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-medium">{seller.rating}</span>
                      <span className="text-yellow-500">★</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
