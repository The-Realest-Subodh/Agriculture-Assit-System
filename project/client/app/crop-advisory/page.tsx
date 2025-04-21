import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cropAdvisoryData } from "@/lib/data";
import { Calendar, Info, Sprout, BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function CropAdvisoryPage() {
  const { seasons, bestPractices } = cropAdvisoryData;

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Crop Advisory</h1>
        <p className="text-muted-foreground">
          Seasonal advice, best practices, and tips for crop management
        </p>
      </div>
      
      <div className="mx-auto max-w-5xl">
        <Tabs defaultValue="spring">
          <div className="mb-6 flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-green-600" />
            <h2 className="text-xl font-bold">Seasonal Advisories</h2>
          </div>
          
          <TabsList className="grid w-full grid-cols-4">
            {seasons.map((season) => (
              <TabsTrigger key={season.name} value={season.name.toLowerCase()}>
                {season.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {seasons.map((season) => (
            <TabsContent key={season.name} value={season.name.toLowerCase()}>
              <div className="grid gap-6 md:grid-cols-2">
                {season.advisories.map((advisory) => (
                  <Card key={advisory.id} className="overflow-hidden">
                    <div className="bg-green-600 p-1">
                      <Badge className="bg-white text-green-600">{advisory.crop}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{advisory.title}</CardTitle>
                      <CardDescription>
                        Published: {new Date(advisory.date).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{advisory.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <Separator className="my-12" />
        
        <div>
          <div className="mb-6 flex items-center">
            <Sprout className="mr-2 h-5 w-5 text-green-600" />
            <h2 className="text-xl font-bold">Best Practices</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {bestPractices.map((practice) => (
              <Card key={practice.id}>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <BookOpen className="mr-2 h-5 w-5 text-green-600" />
                    {practice.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{practice.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <Separator className="my-12" />
        
        <Card className="mt-8 bg-muted/50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Info className="mr-2 h-5 w-5 text-amber-500" />
              Need Personalized Advice?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Our agricultural experts can provide personalized recommendations
              based on your specific crops, soil conditions, and local climate.
            </p>
            <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
              <h3 className="mb-2 font-semibold">Contact our Crop Advisory Team</h3>
              <p className="mb-2">
                Phone: (555) 123-4567
              </p>
              <p>
                Email: crops@agroassist.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}