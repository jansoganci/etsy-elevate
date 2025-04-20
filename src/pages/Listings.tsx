
import DashboardLayout from '@/components/DashboardLayout';
import ListingCard from '@/components/ListingCard';
import { useNavigate } from 'react-router-dom';

const MOCK_LISTINGS = [
  {
    id: '1',
    title: 'Handmade Ceramic Mug',
    createdAt: new Date('2024-04-10'),
    description: 'Beautiful handcrafted ceramic mug with a unique glazed finish. Perfect for your morning coffee or tea. Each piece is unique and made with love.',
    tags: ['ceramics', 'handmade', 'mug', 'kitchen', 'gift', 'home decor'],
  },
  {
    id: '2',
    title: 'Macramé Wall Hanging',
    createdAt: new Date('2024-04-12'),
    description: 'Boho-style macramé wall hanging made with 100% cotton rope. A perfect addition to any room seeking a touch of bohemian charm.',
    tags: ['macrame', 'wall decor', 'boho', 'handmade'],
  },
];

const Listings = () => {
  const navigate = useNavigate();
  
  return (
    <DashboardLayout>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-6">My Listings</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_LISTINGS.map((listing) => (
            <ListingCard
              key={listing.id}
              id={listing.id}
              title={listing.title}
              createdAt={listing.createdAt}
              description={listing.description}
              tags={listing.tags}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Listings;
