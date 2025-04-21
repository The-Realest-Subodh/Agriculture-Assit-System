import { noticesData } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, Bell, Bookmark, ExternalLink } from "lucide-react";

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case "financial":
      return "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300";
    case "education":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300";
    case "weather":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300";
    case "regulatory":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300";
    case "animal health":
      return "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300";
    case "administrative":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  }
};

export default function NoticesPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Agricultural Notices</h1>
        <p className="text-muted-foreground">
          Stay updated with important notices and announcements for farmers
        </p>
      </div>
      
      <div className="mx-auto max-w-5xl">
        {/* Search and Filter */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
              <div className="flex-1 space-y-2">
                <label htmlFor="search" className="text-sm font-medium">
                  Search Notices
                </label>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="search" placeholder="Search by keyword..." className="pl-8" />
                </div>
              </div>
              
              <div className="w-full space-y-2 md:w-[200px]">
                <label htmlFor="category-filter" className="text-sm font-medium">
                  Category
                </label>
                <Select>
                  <SelectTrigger id="category-filter">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="financial">Financial</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="weather">Weather</SelectItem>
                    <SelectItem value="regulatory">Regulatory</SelectItem>
                    <SelectItem value="animalhealth">Animal Health</SelectItem>
                    <SelectItem value="administrative">Administrative</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="w-full space-y-2 md:w-[150px]">
                <label htmlFor="date-filter" className="text-sm font-medium">
                  Date
                </label>
                <Select>
                  <SelectTrigger id="date-filter">
                    <SelectValue placeholder="Newest First" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="all">All Notices</TabsTrigger>
            <TabsTrigger value="important">Important Alerts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="space-y-4">
              {noticesData.map((notice) => (
                <Card key={notice.id} className="overflow-hidden">
                  <div className="flex items-center justify-between border-b p-4">
                    <div className="flex items-center">
                      <Bell className="mr-2 h-5 w-5 text-green-600" />
                      <Badge className={getCategoryColor(notice.category)}>
                        {notice.category}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {new Date(notice.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle>{notice.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p>{notice.content}</p>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between border-t bg-muted/50 px-4 py-3">
                    <Button variant="outline" size="sm">
                      <Bookmark className="mr-2 h-4 w-4" />
                      Save
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="important" className="mt-6">
            <div className="space-y-4">
              {noticesData
                .filter(notice => 
                  notice.category === "Weather" || 
                  notice.category === "Animal Health" || 
                  notice.category === "Regulatory"
                )
                .map((notice) => (
                  <Card key={notice.id} className="overflow-hidden">
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="flex items-center">
                        <Bell className="mr-2 h-5 w-5 text-amber-500" />
                        <Badge className={getCategoryColor(notice.category)}>
                          {notice.category}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(notice.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle>{notice.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p>{notice.content}</p>
                    </CardContent>
                    
                    <CardFooter className="flex justify-between border-t bg-muted/50 px-4 py-3">
                      <Button variant="outline" size="sm">
                        <Bookmark className="mr-2 h-4 w-4" />
                        Save
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Subscribe Card */}
        <Card className="bg-green-50 dark:bg-green-900/20">
          <CardHeader>
            <CardTitle>Stay Updated</CardTitle>
            <CardDescription>
              Subscribe to receive notifications for new notices and alerts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
              <Input 
                placeholder="Enter your email" 
                type="email"
                className="bg-white dark:bg-gray-800" 
              />
              <Button className="bg-green-600 hover:bg-green-700 sm:w-auto">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}