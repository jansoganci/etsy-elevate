
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon, Download } from "lucide-react";

const EditProductImage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would call the AI service
    // For now, we'll just set the generated image to be the same as the selected image
    setGeneratedImage(selectedImage);
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Edit Product Image</h1>
        <p className="text-muted-foreground">
          Upload an image and enter a prompt. The AI will process your image accordingly.
        </p>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Image Enhancement</CardTitle>
          <CardDescription>Improve your product images with AI</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="image-upload">Upload Image</Label>
              <Input
                id="image-upload"
                type="file"
                accept=".jpeg,.jpg,.png"
                onChange={handleImageChange}
                className="bg-background"
              />
              <Alert variant="default" className="bg-muted/50 border-muted">
                <InfoIcon className="h-4 w-4" />
                <AlertDescription className="text-xs">
                  Only JPEG or PNG files are supported (max 5MB).
                </AlertDescription>
              </Alert>
            </div>

            {selectedImage && (
              <div className="mt-4 rounded-md overflow-hidden border">
                <img 
                  src={selectedImage} 
                  alt="Preview" 
                  className="w-full h-auto object-contain max-h-[300px]" 
                />
              </div>
            )}

            <div className="space-y-2 pt-2">
              <Label htmlFor="prompt">What would you like to do?</Label>
              <Textarea
                id="prompt"
                placeholder="Remove background"
                className="min-h-[80px]"
              />
            </div>

            <Button type="submit" className="w-full">
              Generate Image
            </Button>
          </form>

          {generatedImage && (
            <div className="mt-8 space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-lg font-medium">Generated Image</Label>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              <div className="rounded-md overflow-hidden border">
                <img
                  src={generatedImage}
                  alt="Generated Result"
                  className="w-full h-auto object-contain max-h-[300px]"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EditProductImage;
