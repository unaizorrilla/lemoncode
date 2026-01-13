import type { CountryCottage } from '@/app/api/cottages/route';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const cottagesApiClient = {
  getCottages: async (): Promise<CountryCottage[]> => {
    const response = await fetch(`${BASE_URL}/api/cottages`, {
      next: { 
        revalidate: 60,
        tags: ['cottages']
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch cottages');
    }
    return response.json();
  },
  getCottageById: async (id: string): Promise<CountryCottage> => {
    const response = await fetch(`${BASE_URL}/api/cottages/${id}`, {
      next: { 
      },
    });
    if (!response.ok) {
      throw new Error('Failed to fetch cottage details');
    }
    return response.json();
  }
};