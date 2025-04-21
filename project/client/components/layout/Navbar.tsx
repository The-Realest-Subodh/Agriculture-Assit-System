"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Tractor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Weather Alerts", href: "/weather-alerts" },
  { name: "Equipment", href: "/equipment" },
  { name: "Vet Booking", href: "/vet-booking" },
  { name: "Crop Advisory", href: "/crop-advisory" },
  { name: "Notices", href: "/notices" },
  { name: "Tax Calculator", href: "/tax-calculator" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 shadow backdrop-blur-sm dark:bg-background/90"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Tractor className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">AgroAssist</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-green-600",
                pathname === item.href
                  ? "text-green-600"
                  : "text-foreground/80"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="default" className="bg-green-600 hover:bg-green-700">
            Get Started
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-green-600",
                      pathname === item.href
                        ? "text-green-600"
                        : "text-foreground/80"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}