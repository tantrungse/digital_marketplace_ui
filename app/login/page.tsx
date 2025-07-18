"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { loginUser } from "@/apis/auth/authService"
import { useUser } from "@/context/UserContext"

export default function LoginPage() {
  const router = useRouter()
  const { setUser } = useUser()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("")
  const [error, setError] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!role) {
      setError("Please select a role")
      return
    }
    console.log(localStorage)

    try {
      const { token, res } = await loginUser({ user: { email, password, role } })

      const user = res.status.data.user.attributes
      const roles = user.roles

      localStorage.setItem("token", token || "")
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("roles", JSON.stringify(roles));

      if (roles.includes("buyer")) {
        router.push("/browse");
      } else if (roles.includes("seller")) {
        router.push("/seller/dashboard");
      } else if (roles.includes("admin")) {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      if (err.status === 403) {
        router.push("/403");
      } else {
        setError(err.message || "Invalid email or password");
      }
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" required value={email}
                onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" required value={password}
                onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buyer">Buyer</SelectItem>
                <SelectItem value="seller">Seller</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" className="w-full" size="lg">
            Login
          </Button>
          </form>
          <div className="text-center text-sm">
            <span className="text-muted-foreground">{"Don't have an account? "}</span>
            <Link href="/signup" className="text-primary hover:underline">
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
