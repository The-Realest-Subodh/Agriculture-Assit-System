"use client";

import { useState } from "react";
import { veterinariansData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  vetId: z.string().min(1, { message: "Please select a veterinarian" }),
  date: z.date({
    required_error: "Please select a date for the appointment",
  }),
  time: z.string().min(1, { message: "Please select an appointment time" }),
  animalType: z.string().min(1, { message: "Please specify animal type" }),
  reason: z.string().min(5, { message: "Please provide a reason for the visit" }),
  contactName: z.string().min(2, { message: "Please enter your name" }),
  contactPhone: z.string().min(10, { message: "Please enter a valid phone number" }),
  contactEmail: z.string().email({ message: "Please enter a valid email" }),
});

export default function VetBookingPage() {
  const [selectedVet, setSelectedVet] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vetId: "",
      reason: "",
      animalType: "",
      contactName: "",
      contactPhone: "",
      contactEmail: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // This would normally be a server action or API call
    console.log(values);
    toast.success("Appointment scheduled successfully!", {
      description: `Your appointment with ${veterinariansData.find(v => v.id.toString() === values.vetId)?.name} is confirmed for ${values.date.toLocaleDateString()} at ${values.time}.`,
    });
    form.reset();
    setOpenDialog(false);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Veterinary Services</h1>
        <p className="text-muted-foreground">
          Book appointments with experienced veterinarians for your livestock
        </p>
      </div>

      <Tabs defaultValue="vets" className="mx-auto max-w-4xl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="vets">Available Veterinarians</TabsTrigger>
          <TabsTrigger value="services">Services Offered</TabsTrigger>
        </TabsList>
        <TabsContent value="vets">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {veterinariansData.map((vet) => (
              <Card key={vet.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <img
                    src={vet.image}
                    alt={vet.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex justify-between">
                    <div>
                      <CardTitle>{vet.name}</CardTitle>
                      <CardDescription>{vet.specialty}</CardDescription>
                    </div>
                    <Badge variant="outline">{vet.experience} Experience</Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="mb-4 text-sm">{vet.bio}</p>
                  
                  <div>
                    <h4 className="mb-2 text-sm font-medium">Available Days:</h4>
                    <div className="flex flex-wrap gap-1">
                      {vet.availability.map((day) => (
                        <Badge key={day} variant="secondary">
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="border-t bg-muted/50 p-4">
                  <Dialog open={openDialog && selectedVet === vet.id} onOpenChange={(open) => {
                    setOpenDialog(open);
                    if (open) setSelectedVet(vet.id);
                    if (!open) form.reset();
                  }}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Book Appointment
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[520px]">
                      <DialogHeader>
                        <DialogTitle>Book an Appointment with {vet.name}</DialogTitle>
                        <DialogDescription>
                          Please fill out the form below to schedule your appointment.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                          <input type="hidden" value={vet.id} {...form.register("vetId")} />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <FormField
                              control={form.control}
                              name="date"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Appointment Date</FormLabel>
                                  <FormControl>
                                    <Calendar
                                      mode="single"
                                      selected={field.value}
                                      onSelect={field.onChange}
                                      disabled={(date) => {
                                        const day = date.toLocaleDateString('en-US', { weekday: 'long' });
                                        return !vet.availability.includes(day) || 
                                               date < new Date() ||
                                               date > new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
                                      }}
                                      className="rounded-md border"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <div className="space-y-4">
                              <FormField
                                control={form.control}
                                name="time"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Appointment Time</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select time" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        <SelectItem value="09:00">9:00 AM</SelectItem>
                                        <SelectItem value="10:00">10:00 AM</SelectItem>
                                        <SelectItem value="11:00">11:00 AM</SelectItem>
                                        <SelectItem value="13:00">1:00 PM</SelectItem>
                                        <SelectItem value="14:00">2:00 PM</SelectItem>
                                        <SelectItem value="15:00">3:00 PM</SelectItem>
                                        <SelectItem value="16:00">4:00 PM</SelectItem>
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="animalType"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Animal Type</FormLabel>
                                    <FormControl>
                                      <Input placeholder="e.g., Cattle, Horse, Poultry" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              
                              <FormField
                                control={form.control}
                                name="reason"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Reason for Visit</FormLabel>
                                    <FormControl>
                                      <Textarea 
                                        placeholder="Briefly describe the issue or reason for appointment"
                                        {...field} 
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <h3 className="text-sm font-medium">Contact Information</h3>
                            <div className="grid grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="contactName"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Your full name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="contactPhone"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Your phone number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                            <FormField
                              control={form.control}
                              name="contactEmail"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="Your email address" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <DialogFooter>
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={() => setOpenDialog(false)}
                            >
                              Cancel
                            </Button>
                            <Button type="submit" className="bg-green-600 hover:bg-green-700">
                              Confirm Booking
                            </Button>
                          </DialogFooter>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Veterinary Services Offered</CardTitle>
              <CardDescription>
                Our team provides a wide range of services for all your livestock needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-medium">Preventative Care</h3>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  <li>Vaccination programs tailored for your livestock</li>
                  <li>Regular health check-ups and wellness exams</li>
                  <li>Parasite prevention and control strategies</li>
                  <li>Nutritional counseling and feed analysis</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-medium">Diagnostic Services</h3>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  <li>On-farm laboratory testing and analysis</li>
                  <li>Ultrasound and radiographic imaging</li>
                  <li>Disease outbreak investigation</li>
                  <li>Fertility and reproductive assessments</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-medium">Treatment Services</h3>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  <li>Emergency medical care</li>
                  <li>Surgical procedures and post-operative care</li>
                  <li>Lameness evaluation and treatment</li>
                  <li>Obstetric services and neonatal care</li>
                  <li>Dental procedures</li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2 text-lg font-medium">Herd Health Programs</h3>
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  <li>Customized vaccination and health protocols</li>
                  <li>Production medicine and efficiency analysis</li>
                  <li>Biosecurity planning and implementation</li>
                  <li>Disease prevention strategies</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-muted-foreground">
                For special cases or services not listed, please contact us directly to discuss your needs.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}