import { TrendingUp, TrendingDown, DollarSign, Package, Users, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SalesReportPage() {
  const salesData = {
    totalRevenue: 15420.50,
    totalOrders: 89,
    avgOrderValue: 173.26,
    revenueGrowth: 12.5,
    ordersGrowth: 8.3,
    conversionRate: 3.2
  }

  const monthlyRevenue = [
    { month: "Jan", revenue: 2450, orders: 15, growth: 8.2 },
    { month: "Feb", revenue: 2890, orders: 18, growth: 12.1 },
    { month: "Mar", revenue: 3200, orders: 22, growth: 15.3 },
    { month: "Apr", revenue: 2750, orders: 16, growth: -2.1 },
    { month: "May", revenue: 3380, orders: 25, growth: 18.7 },
    { month: "Jun", revenue: 2950, orders: 19, growth: 5.4 }
  ]

  const topProducts = [
    { name: "Wireless Headphones", sales: 45, revenue: 4499.55, growth: 23.5 },
    { name: "Smart Watch", sales: 23, revenue: 6899.77, growth: 15.2 },
    { name: "Bluetooth Speaker", sales: 34, revenue: 2719.66, growth: -5.1 },
    { name: "Phone Case", sales: 67, revenue: 1674.33, growth: 8.9 },
    { name: "Laptop Stand", sales: 12, revenue: 599.88, growth: 45.2 }
  ]

  const customerInsights = [
    { metric: "New Customers", value: 45, change: 12.5, trend: "up" },
    { metric: "Returning Customers", value: 34, change: -3.2, trend: "down" },
    { metric: "Customer Lifetime Value", value: "$245.50", change: 8.7, trend: "up" },
    { metric: "Repeat Purchase Rate", value: "28%", change: 5.1, trend: "up" }
  ]

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? 
      <TrendingUp className="h-4 w-4 text-green-500" /> : 
      <TrendingDown className="h-4 w-4 text-red-500" />
  }

  const getTrendColor = (change: number) => {
    return change >= 0 ? "text-green-500" : "text-red-500"
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Sales Reports</h1>
          <p className="text-muted-foreground">Analyze your sales performance and trends</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${salesData.totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={getTrendColor(salesData.revenueGrowth)}>
                    {salesData.revenueGrowth >= 0 ? "+" : ""}{salesData.revenueGrowth}% from last period
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
                <div className="text-2xl font-bold">{salesData.totalOrders}</div>
                <p className="text-xs text-muted-foreground">
                  <span className={getTrendColor(salesData.ordersGrowth)}>
                    {salesData.ordersGrowth >= 0 ? "+" : ""}{salesData.ordersGrowth}% from last period
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${salesData.avgOrderValue}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+5.2% from last period</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Highlights</CardTitle>
                <CardDescription>Key achievements this period</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Best selling product</span>
                  <Badge>Phone Case (67 sales)</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Highest revenue product</span>
                  <Badge>Smart Watch ($6,899)</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Peak sales day</span>
                  <Badge>Saturday</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Conversion rate</span>
                  <Badge className="bg-green-500">{salesData.conversionRate}%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest sales milestones</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Reached $15K revenue milestone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">89th order completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">New customer acquisition up 12%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Average order value increased</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue Breakdown</CardTitle>
              <CardDescription>Revenue trends over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyRevenue.map((month, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 items-center p-4 border rounded-lg">
                    <div className="font-semibold">{month.month} 2024</div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">${month.revenue.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Revenue</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-semibold">{month.orders}</p>
                      <p className="text-xs text-muted-foreground">Orders</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        {getTrendIcon(month.growth >= 0 ? "up" : "down")}
                        <span className={`font-semibold ${getTrendColor(month.growth)}`}>
                          {month.growth >= 0 ? "+" : ""}{month.growth}%
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">Growth</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
              <CardDescription>Your best-selling products and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Units Sold</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Growth</TableHead>
                    <TableHead>Performance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.sales}</TableCell>
                      <TableCell className="font-semibold">${product.revenue.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {getTrendIcon(product.growth >= 0 ? "up" : "down")}
                          <span className={getTrendColor(product.growth)}>
                            {product.growth >= 0 ? "+" : ""}{product.growth}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {product.growth >= 15 ? (
                          <Badge className="bg-green-500">Excellent</Badge>
                        ) : product.growth >= 5 ? (
                          <Badge className="bg-blue-500">Good</Badge>
                        ) : product.growth >= 0 ? (
                          <Badge variant="secondary">Average</Badge>
                        ) : (
                          <Badge variant="destructive">Declining</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerInsights.map((insight, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{insight.metric}</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{insight.value}</div>
                  <p className="text-xs text-muted-foreground">
                    <span className={`flex items-center gap-1 ${getTrendColor(insight.change)}`}>
                      {getTrendIcon(insight.trend)}
                      {insight.change >= 0 ? "+" : ""}{insight.change}% from last period
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Customer Behavior Insights</CardTitle>
              <CardDescription>Understanding your customer patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Purchase Patterns</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Peak shopping hours:</span>
                      <span className="font-medium">2-4 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Most active day:</span>
                      <span className="font-medium">Saturday</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average session duration:</span>
                      <span className="font-medium">8.5 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cart abandonment rate:</span>
                      <span className="font-medium">23%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Demographics</h4>
                  <div className="space-y-2 text-sm\
