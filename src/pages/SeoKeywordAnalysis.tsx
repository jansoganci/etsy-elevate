
import { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  ArrowUpDown, 
  Check, 
  ChevronDown 
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from "@/components/ui/collapsible";

interface FormValues {
  productName: string;
  category: string;
  country: string;
  platform: string;
}

interface Keyword {
  id: string;
  keyword: string;
  popularity: number;
  competition: "High" | "Medium" | "Low";
  trend: "increasing" | "stable" | "declining";
  selected: boolean;
}

const SeoKeywordAnalysis = () => {
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);
  const [sortBy, setSortBy] = useState<string>("popularity");
  const [showSelected, setShowSelected] = useState(false);

  // Sample placeholder data
  const placeholderKeywords: Keyword[] = [
    { 
      id: "1", 
      keyword: "handmade ceramic mug", 
      popularity: 85, 
      competition: "High", 
      trend: "increasing", 
      selected: false 
    },
    { 
      id: "2", 
      keyword: "pottery coffee cup", 
      popularity: 72, 
      competition: "Medium", 
      trend: "stable", 
      selected: false 
    },
    { 
      id: "3", 
      keyword: "artisan drinkware", 
      popularity: 65, 
      competition: "Low", 
      trend: "increasing", 
      selected: false 
    },
    { 
      id: "4", 
      keyword: "ceramic gift", 
      popularity: 58, 
      competition: "Medium", 
      trend: "declining", 
      selected: false 
    },
    { 
      id: "5", 
      keyword: "unique coffee mug", 
      popularity: 79, 
      competition: "High", 
      trend: "stable", 
      selected: false 
    },
  ];
  
  const form = useForm<FormValues>({
    defaultValues: {
      productName: "",
      category: "",
      country: "US",
      platform: "Etsy",
    },
  });

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    // This would be where the API call happens
    setTimeout(() => {
      setKeywords(placeholderKeywords);
      setLoading(false);
    }, 1000);
  };

  const handleToggleKeyword = (keywordId: string) => {
    setKeywords(keywords.map(keyword => 
      keyword.id === keywordId 
        ? { ...keyword, selected: !keyword.selected } 
        : keyword
    ));
    
    // Update selected keywords list
    const updatedKeywords = keywords.map(k => k.id === keywordId ? {...k, selected: !k.selected} : k);
    setSelectedKeywords(updatedKeywords.filter(k => k.selected));
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "increasing":
        return <TrendingUp className="text-green-500" />;
      case "declining":
        return <TrendingDown className="text-red-500" />;
      default:
        return <Minus className="text-gray-500" />;
    }
  };

  const getCompetitionClass = (competition: string) => {
    switch (competition) {
      case "High":
        return "bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs";
      case "Low":
        return "bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      <div className="flex flex-col space-y-8">
        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">SEO & Keyword Analysis</h1>
          <p className="text-muted-foreground">
            Analyze keywords for your product listings and optimize for search engines.
          </p>
        </div>

        {/* Analysis Form */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Analysis Parameters</CardTitle>
            <CardDescription>
              Enter your product details to get keyword suggestions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="productName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Name*</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="E.g., Handmade Ceramic Mug" 
                            {...field} 
                            required
                          />
                        </FormControl>
                        <FormDescription>
                          Enter the main product name or type
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category (Optional)</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="E.g., Home & Living" 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Specify a category to improve results
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Target Country</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="US, UK, CA, etc." 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Enter country code (default: US)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="platform"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Platform</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Etsy, Amazon, eBay, etc." 
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          Platform to optimize for (default: Etsy)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={loading}
                >
                  {loading ? (
                    <>Running Analysis...</>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Run Keyword Analysis
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Results Section - Only show if we have results */}
        {keywords.length > 0 && (
          <Card className="w-full">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Keyword Suggestions</CardTitle>
                  <CardDescription>
                    {keywords.length} keywords found based on your search.
                  </CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <ToggleGroup type="single" defaultValue="popularity">
                    <ToggleGroupItem 
                      value="popularity" 
                      onClick={() => setSortBy("popularity")}
                    >
                      Popularity
                    </ToggleGroupItem>
                    <ToggleGroupItem 
                      value="competition" 
                      onClick={() => setSortBy("competition")}
                    >
                      Competition
                    </ToggleGroupItem>
                    <ToggleGroupItem 
                      value="trend" 
                      onClick={() => setSortBy("trend")}
                    >
                      Trend
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowSelected(!showSelected)}
                  >
                    {showSelected ? "Show All" : "Show Selected"}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12"></TableHead>
                      <TableHead>Keyword</TableHead>
                      <TableHead className="text-center">
                        <div className="flex items-center justify-center">
                          Popularity
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead className="text-center">Competition</TableHead>
                      <TableHead className="text-center">Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {(showSelected ? keywords.filter(k => k.selected) : keywords).map((keyword) => (
                      <TableRow key={keyword.id}>
                        <TableCell>
                          <Checkbox
                            checked={keyword.selected}
                            onCheckedChange={() => handleToggleKeyword(keyword.id)}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{keyword.keyword}</TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center">
                            <div className="w-full max-w-[100px] bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-primary h-2.5 rounded-full" 
                                style={{ width: `${keyword.popularity}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-xs">{keyword.popularity}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className={getCompetitionClass(keyword.competition)}>
                            {keyword.competition}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <div className="flex items-center justify-center">
                            {getTrendIcon(keyword.trend)}
                            <span className="ml-2 text-xs capitalize">{keyword.trend}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {/* Pagination */}
              <Pagination className="mt-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-muted-foreground">
                Data sourced from Google Trends and marketplace analytics.
              </p>
              <Button 
                variant="secondary"
                onClick={() => console.log("Export selected keywords")}
                disabled={!selectedKeywords.length}
              >
                Export Selected ({selectedKeywords.length})
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Selected Keywords Collapsible */}
        {selectedKeywords.length > 0 && (
          <Collapsible className="w-full border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Selected Keywords ({selectedKeywords.length})</h3>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <ChevronDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="mt-4">
              <div className="flex flex-wrap gap-2">
                {selectedKeywords.map((keyword) => (
                  <div 
                    key={keyword.id}
                    className="flex items-center gap-2 bg-secondary px-3 py-1 rounded-full text-sm"
                  >
                    <span>{keyword.keyword}</span>
                    <button 
                      onClick={() => handleToggleKeyword(keyword.id)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Check className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-right">
                <Button 
                  size="sm"
                  onClick={() => console.log("Copy to clipboard")}
                >
                  Copy All
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    </div>
  );
};

export default SeoKeywordAnalysis;
