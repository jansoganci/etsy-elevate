
import { format } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/DashboardLayout';
import { Tag } from 'lucide-react';

// Mock data for development - will be replaced with real data later
const MOCK_LISTING = {
  id: '1',
  title: 'Handmade Ceramic Mug',
  createdAt: new Date('2024-04-10'),
  description: 'Beautiful handcrafted ceramic mug with a unique glazed finish. Perfect for your morning coffee or tea. Each piece is unique and made with love.',
  tags: ['ceramics', 'handmade', 'mug', 'kitchen', 'gift', 'home decor'],
  altTexts: [
    'White ceramic mug with blue glaze drips',
    'Side view showing handle design',
    'Close-up of glazed texture'
  ],
  originalPrompt: 'Create a listing for a handmade ceramic mug with a unique blue glaze design, perfect for coffee lovers and home decor enthusiasts.'
};

const ListingDetailPage = () => {
  const listing = MOCK_LISTING;

  return (
    <DashboardLayout>
      <div className="py-8 px-4 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{listing.title}</CardTitle>
            <p className="text-sm text-muted-foreground">
              Created on {format(listing.createdAt, 'MMMM d, yyyy')}
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Description Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-muted-foreground whitespace-pre-wrap">{listing.description}</p>
            </div>
            
            {/* Tags Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {listing.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Alt Texts Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Alt Texts</h2>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                {listing.altTexts.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
            
            {/* Original Prompt Section */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Original Prompt</h2>
              <Card className="bg-muted">
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{listing.originalPrompt}</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ListingDetailPage;
