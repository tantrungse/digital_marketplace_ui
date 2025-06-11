import { Search, Filter, MoreHorizontal, UserCheck, UserX, Shield, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function UserManagementPage() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      role: "buyer",
      status: "active",
      joinDate: "2024-01-15",
      lastActive: "2024-01-20",
      orders: 12,
      totalSpent: 1299.99,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@email.com",
      role: "seller",
      status: "active",
      joinDate: "2024-01-10",
      lastActive: "2024-01-19",
      orders: 0,
      totalSpent: 0,
      products: 45,
      revenue: 15420.5,
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.j@email.com",
      role: "buyer",
      status: "suspended",
      joinDate: "2023-12-20",
      lastActive: "2024-01-18",
      orders: 8,
      totalSpent: 899.99,
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah.w@email.com",
      role: "seller",
      status: "pending",
      joinDate: "2024-01-18",
      lastActive: "2024-01-20",
      orders: 0,
      totalSpent: 0,
      products: 0,
      revenue: 0,
    },
    {
      id: 5,
      name: "Admin User",
      email: "admin@marketplace.com",
      role: "admin",
      status: "active",
      joinDate: "2023-01-01",
      lastActive: "2024-01-20",
      orders: 0,
      totalSpent: 0,
    },
  ]

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "default",
      suspended: "destructive",
      pending: "secondary",
      blocked: "destructive",
    } as const

    return (
      <Badge variant={variants[status as keyof typeof variants] || "outline"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const getRoleBadge = (role: string) => {
    const colors = {
      buyer: "bg-blue-500",
      seller: "bg-green-500",
      admin: "bg-purple-500",
    } as const

    return (
      <Badge className={colors[role as keyof typeof colors] || "bg-gray-500"}>
        {role.charAt(0).toUpperCase() + role.slice(1)}
      </Badge>
    )
  }

  const getUserInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">User Management</h1>
          <p className="text-muted-foreground">Manage users, sellers, and administrators</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export Users</Button>
          <Button>Add Admin</Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search users by name or email..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="buyer">Buyers</SelectItem>
                <SelectItem value="seller">Sellers</SelectItem>
                <SelectItem value="admin">Admins</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="blocked">Blocked</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Users ({users.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead>Activity</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{getUserInitials(user.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {user.role === "buyer" && (
                        <>
                          <p>{user.orders} orders</p>
                          <p className="text-muted-foreground">${user.totalSpent}</p>
                        </>
                      )}
                      {user.role === "seller" && (
                        <>
                          <p>{user.products || 0} products</p>
                          <p className="text-muted-foreground">${user.revenue || 0}</p>
                        </>
                      )}
                      {user.role === "admin" && <p className="text-muted-foreground">System admin</p>}
                    </div>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <UserCheck className="h-4 w-4 mr-2" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="h-4 w-4 mr-2" />
                          Send Message
                        </DropdownMenuItem>
                        {user.status === "active" ? (
                          <DropdownMenuItem className="text-orange-600">
                            <UserX className="h-4 w-4 mr-2" />
                            Suspend User
                          </DropdownMenuItem>
                        ) : (
                          <DropdownMenuItem className="text-green-600">
                            <UserCheck className="h-4 w-4 mr-2" />
                            Activate User
                          </DropdownMenuItem>
                        )}
                        {user.role !== "admin" && (
                          <DropdownMenuItem className="text-destructive">
                            <Shield className="h-4 w-4 mr-2" />
                            Block User
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
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
