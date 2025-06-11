import { User, Mail, Phone, MapPin, Calendar, Edit, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function ProfilePage() {
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, City, State 12345",
    joinDate: "January 15, 2024",
    role: "buyer",
    verified: true,
    stats: {
      totalOrders: 24,
      totalSpent: 2499.99,
      savedAmount: 350.5,
      reviewsWritten: 18,
    },
  }

  const recentOrders = [
    { id: "ORD-001", date: "2024-01-20", total: 299.99, status: "delivered" },
    { id: "ORD-002", date: "2024-01-18", total: 149.99, status: "shipped" },
    { id: "ORD-003", date: "2024-01-15", total: 79.99, status: "delivered" },
  ]

  const getStatusBadge = (status: string) => {
    const variants = {
      delivered: "default",
      shipped: "secondary",
      processing: "outline",
    } as const

    return (
      <Badge variant={variants[status as keyof typeof variants] || "outline"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button asChild>
          <Link href="/settings">
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="relative inline-block mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarFallback className="text-2xl">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>

              <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge className="bg-blue-500">{user.role.charAt(0).toUpperCase() + user.role.slice(1)}</Badge>
                {user.verified && <Badge variant="secondary">Verified</Badge>}
              </div>

              <div className="space-y-3 text-sm text-left">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{user.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Account Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Orders</span>
                <span className="font-semibold">{user.stats.totalOrders}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Spent</span>
                <span className="font-semibold">${user.stats.totalSpent}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount Saved</span>
                <span className="font-semibold text-green-600">${user.stats.savedAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reviews Written</span>
                <span className="font-semibold">{user.stats.reviewsWritten}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Orders */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your latest purchases</CardDescription>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/orders">View All</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-semibold">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${order.total}</p>
                      {getStatusBadge(order.status)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Account Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Account Management</CardTitle>
              <CardDescription>Manage your account settings and preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline" className="h-20 flex flex-col gap-2" asChild>
                  <Link href="/settings">
                    <Edit className="h-6 w-6" />
                    Account Settings
                  </Link>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col gap-2" asChild>
                  <Link href="/orders">
                    <User className="h-6 w-6" />
                    Order History
                  </Link>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col gap-2" asChild>
                  <Link href="/reports">
                    <Calendar className="h-6 w-6" />
                    Shopping Reports
                  </Link>
                </Button>
                <Button variant="outline" className="h-20 flex flex-col gap-2" asChild>
                  <Link href="/wishlist">
                    <Mail className="h-6 w-6" />
                    Wishlist
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Security Info */}
          <Card>
            <CardHeader>
              <CardTitle>Security & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Button variant="outline" size="sm">
                  Enable
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Manage your notification preferences</p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/settings">Configure</Link>
                </Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Privacy Settings</p>
                  <p className="text-sm text-muted-foreground">Control your data and privacy</p>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/settings">Manage</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
