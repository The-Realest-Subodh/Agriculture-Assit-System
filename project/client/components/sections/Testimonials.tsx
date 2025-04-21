import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader
} from "@/components/ui/card";

const testimonials = [
  {
    quote: "AgroAssist has completely transformed how I manage my farm. The weather alerts have saved my crops multiple times, and the equipment rental platform is incredibly convenient.",
    name: "James Wilson",
    role: "Dairy Farmer",
    avatar: "JW"
  },
  {
    quote: "The crop advisory service provides excellent seasonal tips. I've seen at least a 20% increase in yield since following their recommendations.",
    name: "Maria Rodriguez",
    role: "Organic Produce Farmer",
    avatar: "MR"
  },
  {
    quote: "The tax calculator saved me hours of work and helped me discover deductions I didn't know about. This platform is truly built with farmers' needs in mind.",
    name: "Robert Johnson",
    role: "Family Farm Owner",
    avatar: "RJ"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Trusted by Farmers
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded bg-green-600"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Here's what farmers are saying about their experience with AgroAssist.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 bg-white transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800">
              <CardHeader className="pb-2">
                <div className="mb-2 text-lg text-green-600 dark:text-green-400">❝</div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {testimonial.quote}
                </p>
              </CardContent>
              <CardFooter className="border-t border-gray-100 pt-4 dark:border-gray-700">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 border-2 border-green-600">
                    <AvatarFallback className="bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="text-sm font-medium">{testimonial.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}