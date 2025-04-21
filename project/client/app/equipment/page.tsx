import Image from "next/image";
import { equipmentData } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, MapPin, Info } from "lucide-react";
import Link from "next/link";

export default function EquipmentPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Agricultural Equipment</h1>
        <p className="text-muted-foreground">
          Browse and rent equipment for your farming needs
        </p>
      </div>

      <div className="mb-8 rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">Find the right equipment</h2>
            <p className="text-muted-foreground">
              We offer a wide range of agricultural equipment for rent
            </p>
          </div>
          <Button>Filter Equipment</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {equipmentData.map((equipment) => (
          <Card key={equipment.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <img
                src={equipment.image}
                alt={equipment.name}
                className="h-full w-full object-cover"
              />
              
              <div className="absolute right-2 top-2">
                <Badge
                  className={
                    equipment.availability
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-red-500 text-white hover:bg-red-600"
                  }
                >
                  {equipment.availability ? "Available" : "Unavailable"}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{equipment.name}</CardTitle>
                  <CardDescription>{equipment.type}</CardDescription>
                </div>
                <p className="font-bold text-green-600">${equipment.pricePerDay}/day</p>
              </div>
            </CardHeader>

            <CardContent>
              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {equipment.description}
              </p>
              
              <div className="mb-4 flex items-center text-sm text-gray-500">
                <MapPin className="mr-1 h-4 w-4" />
                {equipment.location}
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Features:</h4>
                <ul className="grid grid-cols-2 gap-1 text-sm">
                  {equipment.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>

            <CardFooter className="border-t bg-muted/50 p-4">
              <div className="flex w-full gap-2">
                <Button variant="outline" className="flex-1">
                  <Info className="mr-2 h-4 w-4" />
                  Details
                </Button>
                <Button 
                  className="flex-1 bg-green-600 text-white hover:bg-green-700"
                  disabled={!equipment.availability}
                >
                  {equipment.availability ? "Book Now" : "Unavailable"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}