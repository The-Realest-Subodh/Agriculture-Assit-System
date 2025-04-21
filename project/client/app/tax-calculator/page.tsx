"use client";

import { useState } from "react";
import { taxInformationData } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator, ExternalLink, DollarSign, Info } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export default function TaxCalculatorPage() {
  const { deductions, credits, resources } = taxInformationData;
  
  const [formData, setFormData] = useState({
    farmIncome: "",
    equipmentExpenses: "",
    seedsAndPlants: "",
    fertilizersAndChemicals: "",
    fuelAndUtilities: "",
    laborCosts: "",
    livestockCosts: "",
    insuranceCosts: "",
    otherExpenses: ""
  });
  
  const [results, setResults] = useState<{
    grossIncome: number;
    totalExpenses: number;
    taxableIncome: number;
    estimatedTax: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const grossIncome = Number(formData.farmIncome) || 0;
    
    const expenses = [
      Number(formData.equipmentExpenses) || 0,
      Number(formData.seedsAndPlants) || 0,
      Number(formData.fertilizersAndChemicals) || 0,
      Number(formData.fuelAndUtilities) || 0,
      Number(formData.laborCosts) || 0,
      Number(formData.livestockCosts) || 0,
      Number(formData.insuranceCosts) || 0,
      Number(formData.otherExpenses) || 0
    ];
    
    const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);
    const taxableIncome = Math.max(0, grossIncome - totalExpenses);
    
    // Simple progressive tax calculation (for demonstration)
    let estimatedTax = 0;
    if (taxableIncome > 0) {
      if (taxableIncome <= 10000) {
        estimatedTax = taxableIncome * 0.10;
      } else if (taxableIncome <= 40000) {
        estimatedTax = 1000 + (taxableIncome - 10000) * 0.12;
      } else if (taxableIncome <= 85000) {
        estimatedTax = 4600 + (taxableIncome - 40000) * 0.22;
      } else if (taxableIncome <= 165000) {
        estimatedTax = 14500 + (taxableIncome - 85000) * 0.24;
      } else {
        estimatedTax = 33700 + (taxableIncome - 165000) * 0.32;
      }
    }
    
    setResults({
      grossIncome,
      totalExpenses,
      taxableIncome,
      estimatedTax
    });
  };

  const handleReset = () => {
    setFormData({
      farmIncome: "",
      equipmentExpenses: "",
      seedsAndPlants: "",
      fertilizersAndChemicals: "",
      fuelAndUtilities: "",
      laborCosts: "",
      livestockCosts: "",
      insuranceCosts: "",
      otherExpenses: ""
    });
    setResults(null);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-24">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Agricultural Tax Information</h1>
        <p className="text-muted-foreground">
          Estimate taxes and find information on agricultural tax benefits
        </p>
      </div>
      
      <div className="mx-auto max-w-6xl">
        <Tabs defaultValue="calculator">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="calculator">Tax Calculator</TabsTrigger>
            <TabsTrigger value="deductions">Deductions & Credits</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          
          <TabsContent value="calculator" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader className="space-y-1">
                  <CardTitle className="text-2xl">Farm Tax Estimator</CardTitle>
                  <CardDescription>
                    Enter your income and expenses to estimate your taxes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCalculate}>
                    <div className="mb-6 space-y-4">
                      <div>
                        <Label htmlFor="farmIncome" className="text-base">
                          Farm Income
                        </Label>
                        <div className="relative mt-1">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="farmIncome"
                            name="farmIncome"
                            type="number"
                            placeholder="0.00"
                            value={formData.farmIncome}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <Separator />
                      <h3 className="font-medium">Farm Expenses</h3>
                      
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="equipmentExpenses">
                            Equipment & Machinery
                          </Label>
                          <div className="relative mt-1">
                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="equipmentExpenses"
                              name="equipmentExpenses"
                              type="number"
                              placeholder="0.00"
                              value={formData.equipmentExpenses}
                              onChange={handleInputChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="seedsAndPlants">
                            Seeds & Plants
                          </Label>
                          <div className="relative mt-1">
                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="seedsAndPlants"
                              name="seedsAndPlants"
                              type="number"
                              placeholder="0.00"
                              value={formData.seedsAndPlants}
                              onChange={handleInputChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="fertilizersAndChemicals">
                            Fertilizers & Chemicals
                          </Label>
                          <div className="relative mt-1">
                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="fertilizersAndChemicals"
                              name="fertilizersAndChemicals"
                              type="number"
                              placeholder="0.00"
                              value={formData.fertilizersAndChemicals}
                              onChange={handleInputChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="fuelAndUtilities">
                            Fuel & Utilities
                          </Label>
                          <div className="relative mt-1">
                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="fuelAndUtilities"
                              name="fuelAndUtilities"
                              type="number"
                              placeholder="0.00"
                              value={formData.fuelAndUtilities}
                              onChange={handleInputChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="laborCosts">
                            Labor Costs
                          </Label>
                          <div className="relative mt-1">
                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="laborCosts"
                              name="laborCosts"
                              type="number"
                              placeholder="0.00"
                              value={formData.laborCosts}
                              onChange={handleInputChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="livestockCosts">
                            Livestock Costs
                          </Label>
                          <div className="relative mt-1">
                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="livestockCosts"
                              name="livestockCosts"
                              type="number"
                              placeholder="0.00"
                              value={formData.livestockCosts}
                              onChange={handleInputChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="insuranceCosts">
                            Insurance Costs
                          </Label>
                          <div className="relative mt-1">
                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="insuranceCosts"
                              name="insuranceCosts"
                              type="number"
                              placeholder="0.00"
                              value={formData.insuranceCosts}
                              onChange={handleInputChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="otherExpenses">
                            Other Expenses
                          </Label>
                          <div className="relative mt-1">
                            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="otherExpenses"
                              name="otherExpenses"
                              type="number"
                              placeholder="0.00"
                              value={formData.otherExpenses}
                              onChange={handleInputChange}
                              className="pl-10"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                      <Button
                        type="submit"
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <Calculator className="mr-2 h-4 w-4" />
                        Calculate
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={handleReset}
                      >
                        Reset
                      </Button>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-center border-t pt-4 text-center text-sm text-muted-foreground">
                  <p>
                    Note: This is an estimate only. Consult a tax professional 
                    for accurate tax calculations.
                  </p>
                </CardFooter>
              </Card>
              
              {results ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Tax Calculation Results</CardTitle>
                    <CardDescription>
                      Based on the information you provided
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="mb-2 flex items-center justify-between">
                        <Label>Gross Income:</Label>
                        <span className="font-semibold">
                          {formatCurrency(results.grossIncome)}
                        </span>
                      </div>
                      <div className="mb-2 flex items-center justify-between">
                        <Label>Total Expenses:</Label>
                        <span className="font-semibold">
                          {formatCurrency(results.totalExpenses)}
                        </span>
                      </div>
                      <Separator className="my-4" />
                      <div className="mb-2 flex items-center justify-between">
                        <Label>Taxable Income:</Label>
                        <span className="text-lg font-semibold">
                          {formatCurrency(results.taxableIncome)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="rounded-lg bg-muted p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium">Estimated Tax:</span>
                        <span className="text-xl font-bold text-green-600">
                          {formatCurrency(results.estimatedTax)}
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="text-sm text-muted-foreground">
                          Effective Tax Rate:
                        </span>
                        <span className="ml-2 text-sm font-medium">
                          {results.grossIncome > 0
                            ? ((results.estimatedTax / results.grossIncome) * 100).toFixed(2)
                            : "0"}
                          %
                        </span>
                      </div>
                      
                      <div className="mt-4">
                        <div className="mb-1 flex justify-between text-xs">
                          <span>0%</span>
                          <span>Tax Burden</span>
                          <span>40%</span>
                        </div>
                        <Progress
                          value={
                            results.grossIncome > 0
                              ? Math.min(
                                  100,
                                  ((results.estimatedTax / results.grossIncome) * 100 * 2.5)
                                )
                              : 0
                          }
                          className="h-2"
                        />
                      </div>
                    </div>
                    
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-900/20">
                      <div className="flex">
                        <Info className="mr-2 h-5 w-5 text-amber-500" />
                        <div>
                          <h4 className="font-medium text-amber-800 dark:text-amber-300">
                            Tax Saving Opportunities
                          </h4>
                          <p className="mt-1 text-sm text-amber-700 dark:text-amber-400">
                            You may qualify for agricultural tax credits and deductions.
                            Check the Deductions & Credits tab for more information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Tax Information</CardTitle>
                    <CardDescription>
                      Important information for agricultural taxation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
                      <h3 className="mb-2 font-semibold">Filing Schedule F</h3>
                      <p className="text-sm">
                        As a farmer, you'll likely need to file Schedule F (Profit or Loss
                        From Farming) with your tax return. This form is used to report
                        farm income and expenses.
                      </p>
                    </div>
                    
                    <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                      <h3 className="mb-2 font-semibold">Quarterly Estimated Taxes</h3>
                      <p className="text-sm">
                        Most farmers who expect to owe tax of $1,000 or more need to make
                        quarterly estimated tax payments. Special rules may apply to farmers.
                      </p>
                    </div>
                    
                    <div className="rounded-lg bg-amber-50 p-4 dark:bg-amber-900/20">
                      <h3 className="mb-2 font-semibold">Important Dates</h3>
                      <ul className="list-inside list-disc space-y-1 text-sm">
                        <li>January 15: Fourth quarter estimated tax payment due</li>
                        <li>March 1: Farmers who don't make estimated tax payments must file and pay by this date</li>
                        <li>April 15: Standard tax filing deadline if estimated payments were made</li>
                      </ul>
                    </div>
                    
                    <div className="rounded-lg border border-green-200 p-4 dark:border-green-900/50">
                      <h3 className="mb-2 font-semibold text-green-700 dark:text-green-400">
                        Enter your farm income and expenses in the calculator to estimate your taxes.
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="deductions" className="mt-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <DollarSign className="mr-2 h-5 w-5 text-green-600" />
                      Common Farm Deductions
                    </CardTitle>
                    <CardDescription>
                      Expenses that may be deductible on your tax return
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {deductions.map((deduction) => (
                        <AccordionItem key={deduction.id} value={`deduction-${deduction.id}`}>
                          <AccordionTrigger>{deduction.title}</AccordionTrigger>
                          <AccordionContent>
                            {deduction.description}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calculator className="mr-2 h-5 w-5 text-green-600" />
                      Agricultural Tax Credits
                    </CardTitle>
                    <CardDescription>
                      Tax credits that may reduce your tax liability
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {credits.map((credit) => (
                        <AccordionItem key={credit.id} value={`credit-${credit.id}`}>
                          <AccordionTrigger>{credit.title}</AccordionTrigger>
                          <AccordionContent>
                            {credit.description}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 dark:bg-green-900/20">
                  <CardHeader>
                    <CardTitle>Tax Savings Tip</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Keep detailed records of all farm income and expenses throughout the year,
                      including receipts, invoices, and mileage logs. Good recordkeeping can help
                      maximize your deductions and simplify tax preparation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="resources" className="mt-6">
            <div className="grid gap-8 md:grid-cols-3">
              {resources.map((resource) => (
                <Card key={resource.id}>
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm">{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Access Resource
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Tax Preparation Assistance</CardTitle>
                <CardDescription>
                  Get help with your agricultural tax preparation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="mb-2 text-lg font-medium">Local Extension Office</h3>
                    <p className="mb-4 text-sm">
                      Many agricultural extension offices offer tax preparation assistance
                      and workshops specifically for farmers.
                    </p>
                    <Button variant="outline" className="w-full">
                      Find Local Office
                    </Button>
                  </div>
                  
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="mb-2 text-lg font-medium">Farm Tax Specialists</h3>
                    <p className="mb-4 text-sm">
                      Consider working with a tax professional who specializes in agricultural
                      taxation for personalized advice.
                    </p>
                    <Button variant="outline" className="w-full">
                      Find Specialists
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}