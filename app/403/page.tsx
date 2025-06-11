"use client"

import Link from "next/link"
import { Shield, Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function UnauthorizedPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <Card className="w-full max-w-md text-center">
        <CardContent className="p-8">
          <div className="mb-6">
            <Shield className="h-16 w-16 text-destructive mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-destructive mb-2">403</h1>
            <h2 className="text-2xl font-semibold mb-4">Access Denied</h2>
            <p className="text-muted-foreground mb-6">
              You don't have permission to access this page. Please check your account permissions or contact an
              administrator.
            </p>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Link>
            </Button>

            <Button variant="outline" asChild className="w-full">
              <Link href="/login">Sign In</Link>
            </Button>

            <Button variant="ghost" onClick={() => window.history.back()} className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              Need access?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Request permissions
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
