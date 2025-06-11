import { TrendingUp, TrendingDown, ShoppingBag, DollarSign, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PersonalReportPage() {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()

  const monthlyData = [
    { month: "Jan", spending: 450, orders: 8, savings: 50 },
    { month: "Feb", spending: 320, orders: 5, savings: 80 },
    { month: "Mar", spending: 680, orders: 12, savings: 20 },
    { month: "Apr", spending: 290, orders: 4, savings: 110 },
    { month: "May", spending: 520, orders: 9, savings: 30 },
    { month: "Jun", spending: 380, orders: 6, savings: 70 },
  ]

  const topCategories = [
    { category: "Electronics", amount: 1240, percentage: 35, orders: 8 },
    { category: "Clothing", amount: 890, percentage: 25, orders: 12 },
    { category: "Home & Garden", amount: 650, percentage: 18, orders: 6 },
    { category: "Sports", amount: 420, percentage: 12, orders: 4 },
    { category: "Books", amount: 350, percentage: 10, orders: 15 },
  ]

  const recentPurchases = [
    { name: "Wireless Headphones", date: "2024-01-15", amount: 99.99, category: "Electronics" },
    { name: "Running Shoes", date: "2024-01-12", amount: 129.99, category: "Sports" },
    { name: "Coffee Maker", date: "2024-01-08", amount: 79.99, category: "Home & Garden" },
    { name: "Programming Book", date: "2024-01-05", amount: 45.99, category: "Books" },
  ]

  const totalSpending = monthlyData.reduce((sum, month) => sum + month.spending, 0)
  const totalOrders = monthlyData.reduce((sum, month) => sum + month.orders, 0)
  const totalSavings = monthlyData.reduce((sum, month) => sum + month.savings, 0)
  const avgOrderValue = totalSpending / totalOrders

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Personal Shopping Report</h1>
          <p className="text-muted-foreground">Track your spending patterns and shopping habits</p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="2024">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spending</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalSpending}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    12% from last year
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalOrders}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    8% from last year
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
                <div className="text-2xl font-bold">${avgOrderValue.toFixed(2)}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500 flex items-center">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    5% from last year
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalSavings}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    From discounts & deals
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Purchases */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Purchases</CardTitle>
              <CardDescription>Your latest shopping activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPurchases.map((purchase, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <ShoppingBag className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">{purchase.name}</p>
                        <p className="text-sm text-muted-foreground">{purchase.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${purchase.amount}</p>
                      <Badge variant="secondary" className="text-xs">
                        {purchase.category}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Spending Breakdown</CardTitle>
              <CardDescription>Your spending patterns throughout the year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((month, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 items-center p-4 border rounded-lg">
                    <div className="font-semibold">{month.month} 2024</div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">${month.spending}</p>
                      <p className="text-xs text-muted-foreground">Spent</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-semibold">{month.orders}</p>
                      <p className="text-xs text-muted-foreground">Orders</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-green-500">${month.savings}</p>
                      <p className="text-xs text-muted-foreground">Saved</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Spending by Category</CardTitle>
              <CardDescription>Where your money goes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.category}</span>
                      <div className="text-right">
                        <span className="font-bold">${category.amount}</span>
                        <span className="text-sm text-muted-foreground ml-2">({category.orders} orders)</span>
                      </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${category.percentage}%` }} />
                    </div>
                    <div className="text-sm text-muted-foreground">{category.percentage}% of total spending</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Shopping Patterns</CardTitle>
                <CardDescription>Your buying behavior insights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Most active shopping day</span>
                  <Badge>Saturday</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Preferred shopping time</span>
                  <Badge>Evening (6-9 PM)</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Average days between orders</span>
                  <Badge>12 days</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Seasonal peak</span>
                  <Badge>December</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Money-Saving Insights</CardTitle>
                <CardDescription>How you can save more</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-medium text-green-800">Great job!</p>
                  <p className="text-sm text-green-600">You saved $360 this year using discounts and deals</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-800">Tip</p>
                  <p className="text-sm text-blue-600">Consider bulk buying for frequently purchased items</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm font-medium text-yellow-800">Opportunity</p>
                  <p className="text-sm text-yellow-600">You could save 15% more by using our loyalty program</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
