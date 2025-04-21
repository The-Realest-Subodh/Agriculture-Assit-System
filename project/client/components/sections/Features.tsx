import {
  Cloud,
  Tractor,
  Stethoscope,
  Sprout,
  Bell,
  Calculator,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const features = [
  {
    name: "Weather Alerts",
    description:
      "Get real-time weather alerts and forecasts tailored for agricultural needs.",
    icon: Cloud,
    href: "/weather-alerts",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
  },
  {
    name: "Equipment",
    description:
      "Browse and book agricultural equipment and machinery from local providers.",
    icon: Tractor,
    href: "/equipment",
    color: "bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
  },
  {
    name: "Vet Booking",
    description:
      "Schedule appointments with veterinarians for livestock health services.",
    icon: Stethoscope,
    href: "/vet-booking",
    color: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400",
  },
  {
    name: "Crop Advisory",
    description:
      "Access seasonal advice, best practices, and tips for crop management.",
    icon: Sprout,
    href: "/crop-advisory",
    color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
  },
  {
    name: "Notices",
    description:
      "Stay updated with agricultural notices, policies, and announcements.",
    icon: Bell,
    href: "/notices",
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
  },
  {
    name: "Tax Calculator",
    description:
      "Estimate agricultural taxes and access information on tax benefits for farmers.",
    icon: Calculator,
    href: "/tax-calculator",
    color: "bg-gray-50 text-gray-600 dark:bg-gray-800/40 dark:text-gray-400",
  },
];

export default function Features() {
  return (
    <section className="py-24" id="features">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Our Services
          </h2>
          <div className="mx-auto mb-6 h-1 w-24 rounded bg-green-600"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Explore our comprehensive suite of services designed to support all
            aspects of modern farming.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Link
              key={feature.name}
              href={feature.href}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
            >
              <div
                className={cn(
                  "mb-4 flex h-12 w-12 items-center justify-center rounded-lg",
                  feature.color
                )}
              >
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.name}</h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
              <div className="mt-auto text-sm font-medium text-green-600 transition group-hover:translate-x-2 dark:text-green-400">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}