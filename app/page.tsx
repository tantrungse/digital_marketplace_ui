import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const screens = [
    { id: "G-01", name: "Login", path: "/login", category: "General" },
    { id: "G-02", name: "Sign Up", path: "/signup", category: "General" },
    { id: "G-03", name: "Browse Products", path: "/browse", category: "General" },
    { id: "G-04", name: "Product Details", path: "/product/1", category: "General" },
    { id: "B-01", name: "Cart", path: "/cart", category: "Buyer" },
    { id: "B-02", name: "Checkout", path: "/checkout", category: "Buyer" },
    { id: "B-03", name: "Order History", path: "/orders", category: "Buyer" },
    { id: "B-04", name: "Product Review", path: "/review/1", category: "Buyer" },
    { id: "B-05", name: "Personal Report", path: "/reports", category: "Buyer" },
    { id: "S-01", name: "Seller Dashboard", path: "/seller/dashboard", category: "Seller" },
    { id: "S-02", name: "Manage Products", path: "/seller/products", category: "Seller" },
    { id: "S-03", name: "Bulk Import", path: "/seller/import", category: "Seller" },
    { id: "S-04", name: "Sales Report", path: "/seller/reports", category: "Seller" },
    { id: "A-01", name: "Admin Dashboard", path: "/admin/dashboard", category: "Admin" },
    { id: "A-02", name: "User Management", path: "/admin/users", category: "Admin" },
    { id: "A-03", name: "Product Management", path: "/admin/products", category: "Admin" },
    { id: "A-04", name: "System Report", path: "/admin/reports", category: "Admin" },
    { id: "404", name: "404 Not Found", path: "/404", category: "Shared" },
    { id: "403", name: "403 Unauthorized", path: "/403", category: "Shared" },
    { id: "Profile", name: "My Profile", path: "/profile", category: "Shared" },
    { id: "Settings", name: "Account Settings", path: "/settings", category: "Shared" },
  ]

  const categories = ["General", "Buyer", "Seller", "Admin", "Shared"]

  return (
    <div className="container mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Digital Marketplace</h1>
        <p className="text-muted-foreground text-lg">Complete UI screens for a multi-role marketplace application</p>
      </div>

      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{category} Screens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {screens
              .filter((screen) => screen.category === category)
              .map((screen) => (
                <Card key={screen.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">{screen.id}</CardTitle>
                    <CardDescription>{screen.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href={screen.path}>View Screen</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
