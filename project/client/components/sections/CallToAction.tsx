import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-green-600 py-24 text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          alt="Farm field"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-600 opacity-90"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Ready to Transform Your Farming?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-green-50">
          Join thousands of farmers who are already using AgroAssist to improve
          productivity, manage resources efficiently, and grow their agricultural
          business.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50"
          >
            Get Started Today
          </Button>
          <Button
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}