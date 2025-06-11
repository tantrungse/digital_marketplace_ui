import { Plus, Search, Filter, Eye, Edit, Trash2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

export default function ManageProductsPage() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      sku: "WH-001",
      price: 99.99,
      stock: 25,
      status: "published",
      sales: 45,
      image: "/placeholder.svg?height=50&width=50",
      category: "Electronics",
      dateAdded: "2024-01-10",
    },
    {
      id: 2,
      name: "Smart Watch",
      sku: "SW-002",
      price: 299.99,
      stock: 12,
      status: "published",
      sales: 23,
      image: "/placeholder.svg?height=50&width=50",
      category: "Electronics",
      dateAdded: "2024-01-08",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      sku: "BS-003",
      price: 79.99,
      stock: 0,
      status: "unpublished",
      sales: 34,
      image: "/placeholder.svg?height=50&width=50",
      category: "Electronics",
      dateAdded: "2024-01-05",
    },
    {
      id: 4,
      name: "Phone Case",
      sku: "PC-004",
      price: 24.99,
      stock: 150,
      status: "published",
      sales: 67,
      image: "/placeholder.svg?height=50&width=50",
      category: "Accessories",
      dateAdded: "2024-01-03",
    },
    {
      id: 5,
      name: "Laptop Stand",
      sku: "LS-005",
      price: 49.99,
      stock: 8,
      status: "draft",
      sales: 0,
      image: "/placeholder.svg?height=50&width=50",
      category: "Accessories",
      dateAdded: "2024-01-01",
    },
  ]

  const getStatusBadge = (status: string) => {
    const variants = {
      published: "default",
      unpublished: "secondary",
      draft: "outline",
    } as const

    return (
      <Badge variant={variants[status as keyof typeof variants] || "outline"}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    )
  }

  const getStockStatus = (stock: number) => {
    if (stock === 0) return <Badge variant="destructive">Out of Stock</Badge>
    if (stock < 10) return <Badge variant="outline">Low Stock</Badge>
    return <Badge variant="secondary">In Stock</Badge>
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manage Products</h1>
          <p className="text-muted-foreground">Add, edit, and manage your product listings</p>
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/seller/products/new">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/seller/import">Bulk Import</Link>
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search products..." className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="unpublished">Unpublished</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Products ({products.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative overflow-hidden rounded border">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.category}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                  <TableCell className="font-semibold">${product.price}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <p className="font-medium">{product.stock}</p>
                      {getStockStatus(product.stock)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(product.status)}
                      <Switch checked={product.status === "published"} size="sm" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{product.sales}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/product/${product.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Product
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/seller/products/${product.id}/edit`}>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit Product
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Product
                        </DropdownMenuItem>
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
