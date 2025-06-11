import { Upload, Download, FileText, AlertCircle, CheckCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BulkImportPage() {
  const importHistory = [
    {
      id: 1,
      filename: "products_batch_1.csv",
      date: "2024-01-15",
      status: "completed",
      totalRows: 150,
      successRows: 148,
      errorRows: 2,
    },
    {
      id: 2,
      filename: "electronics_inventory.xlsx",
      date: "2024-01-10",
      status: "completed",
      totalRows: 75,
      successRows: 75,
      errorRows: 0,
    },
    {
      id: 3,
      filename: "accessories_update.csv",
      date: "2024-01-08",
      status: "failed",
      totalRows: 200,
      successRows: 0,
      errorRows: 200,
    },
  ]

  const previewData = [
    { name: "Wireless Headphones", sku: "WH-001", price: 99.99, stock: 25, category: "Electronics", status: "Valid" },
    { name: "Smart Watch", sku: "SW-002", price: 299.99, stock: 12, category: "Electronics", status: "Valid" },
    {
      name: "Bluetooth Speaker",
      sku: "",
      price: 79.99,
      stock: 15,
      category: "Electronics",
      status: "Error: Missing SKU",
    },
    {
      name: "Phone Case",
      sku: "PC-004",
      price: -24.99,
      stock: 150,
      category: "Accessories",
      status: "Error: Invalid Price",
    },
  ]

  const getStatusBadge = (status: string) => {
    if (status === "completed") return <Badge className="bg-green-500">Completed</Badge>
    if (status === "failed") return <Badge variant="destructive">Failed</Badge>
    if (status === "processing") return <Badge variant="secondary">Processing</Badge>
    return <Badge variant="outline">Pending</Badge>
  }

  const getRowStatusIcon = (status: string) => {
    if (status === "Valid") return <CheckCircle className="h-4 w-4 text-green-500" />
    return <AlertCircle className="h-4 w-4 text-red-500" />
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Bulk Import Products</h1>
        <p className="text-muted-foreground">Upload CSV or XLSX files to add multiple products at once</p>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload">Upload File</TabsTrigger>
          <TabsTrigger value="preview">Preview & Validate</TabsTrigger>
          <TabsTrigger value="history">Import History</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          {/* File Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Product File</CardTitle>
              <CardDescription>Upload a CSV or XLSX file containing your product data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Drop your file here</h3>
                <p className="text-muted-foreground mb-4">or click to browse and select a file</p>
                <Button>
                  <FileText className="h-4 w-4 mr-2" />
                  Choose File
                </Button>
                <p className="text-xs text-muted-foreground mt-4">Supported formats: CSV, XLSX (Max size: 10MB)</p>
              </div>

              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Make sure your file includes the required columns: Name, SKU, Price, Stock, Category, Description
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Template Download */}
          <Card>
            <CardHeader>
              <CardTitle>Download Template</CardTitle>
              <CardDescription>Use our template to ensure your data is formatted correctly</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Product Import Template</h4>
                  <p className="text-sm text-muted-foreground">CSV template with all required and optional columns</p>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download CSV Template
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle>File Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Required Columns</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Product Name
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      SKU (Stock Keeping Unit)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Price (numeric value)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Stock Quantity
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Category
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Optional Columns</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Description</li>
                    <li>• Brand</li>
                    <li>• Weight</li>
                    <li>• Dimensions</li>
                    <li>• Tags</li>
                    <li>• Image URLs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preview" className="space-y-6">
          {/* Validation Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Validation Results</CardTitle>
              <CardDescription>Review your data before importing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600">2</div>
                  <div className="text-sm text-green-600">Valid Rows</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="text-2xl font-bold text-red-600">2</div>
                  <div className="text-sm text-red-600">Error Rows</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">4</div>
                  <div className="text-sm text-blue-600">Total Rows</div>
                </div>
              </div>

              <Alert className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>Please fix the errors below before proceeding with the import.</AlertDescription>
              </Alert>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Validation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {previewData.map((row, index) => (
                    <TableRow key={index} className={row.status !== "Valid" ? "bg-red-50" : ""}>
                      <TableCell>{getRowStatusIcon(row.status)}</TableCell>
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell className="font-mono text-sm">{row.sku || "—"}</TableCell>
                      <TableCell>${row.price}</TableCell>
                      <TableCell>{row.stock}</TableCell>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>
                        {row.status === "Valid" ? (
                          <Badge className="bg-green-500">Valid</Badge>
                        ) : (
                          <Badge variant="destructive">{row.status}</Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="flex justify-between mt-6">
                <Button variant="outline">
                  <X className="h-4 w-4 mr-2" />
                  Cancel Import
                </Button>
                <Button disabled>Import Products (Fix errors first)</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Import History</CardTitle>
              <CardDescription>View your previous import attempts</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>File Name</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total Rows</TableHead>
                    <TableHead>Success</TableHead>
                    <TableHead>Errors</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {importHistory.map((import_) => (
                    <TableRow key={import_.id}>
                      <TableCell className="font-medium">{import_.filename}</TableCell>
                      <TableCell>{import_.date}</TableCell>
                      <TableCell>{getStatusBadge(import_.status)}</TableCell>
                      <TableCell>{import_.totalRows}</TableCell>
                      <TableCell className="text-green-600 font-medium">{import_.successRows}</TableCell>
                      <TableCell className="text-red-600 font-medium">{import_.errorRows}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          {import_.errorRows > 0 && (
                            <Button variant="outline" size="sm">
                              Download Errors
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
