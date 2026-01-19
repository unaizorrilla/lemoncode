import { faker } from '@faker-js/faker'

interface CountryCottage {
  id: string;
  name: string;
  address: string;
  country: string;
  price: number;
  imageUrl: string;
}

console.log('Fetching cottages...');

faker.seed(12345);

const countryCottages: CountryCottage[] = Array.from({ length: 6 }).map((_, index) => ({
    id: `cottage-${index + 1}`,
    name: faker.string.alpha({ length: 10 }),
    address: faker.location.streetAddress(),
    country: faker.location.country(),
    price: Number(faker.finance.amount({ min: 100, max: 1000 })),
    imageUrl: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
    }));
  
export default defineEventHandler(() => {
  return countryCottages;
})