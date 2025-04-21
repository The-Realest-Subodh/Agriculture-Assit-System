import Image from "next/image";
import { Check } from "lucide-react";

export default function About() {
  const benefits = [
    "Real-time weather alerts tailored for farmers",
    "Access to agricultural equipment listings",
    "Veterinary services booking for livestock",
    "Seasonal crop advice from experts",
    "Agricultural notices and updates",
    "Tax calculation assistance for farmers"
  ];

  return (
    <section className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            About AgroAssist
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded bg-green-600"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Our platform is designed to support farmers with tools and resources
            to improve agricultural productivity and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 flex flex-col space-y-6 md:order-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Supporting Farmers, Growing Communities
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              AgroAssist was created to address the challenges faced by modern
              farmers. We believe that by providing accessible tools and
              information, we can help farmers improve yields, reduce costs, and
              adopt sustainable practices.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 flex-shrink-0 rounded-full bg-green-100 p-1 dark:bg-green-900">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative h-[400px] overflow-hidden rounded-xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Farmer using modern technology"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}