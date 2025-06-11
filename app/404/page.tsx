"use client"

import Link from "next/link"
import { Home, Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <Card className="w-full max-w-md text-center">
        <CardContent className="p-8">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the
              wrong URL.
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
              <Link href="/browse">
                <Search className="h-4 w-4 mr-2" />
                Browse Products
              </Link>
            </Button>

            <Button variant="ghost" onClick={() => window.history.back()} className="w-full">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              Need help?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact our support team
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
