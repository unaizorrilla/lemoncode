import { faker } from '@faker-js/faker';

type Params = Promise<{ id: string }>;

export async function GET(
  request: Request,
  { params }: { params: Params }
) {

  const { id } = await params;
  
  console.log(`Fetching cottage with id: ${id}...`);

  // We add this artificial delay for testing loading state
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const cottage = {
    id,
    name: faker.string.alpha({ length: 10 }),
    address: faker.location.streetAddress(),
    country: faker.location.country(),
    price: Number(faker.finance.amount({ min: 100, max: 1000 })),
    imageUrl: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
  };

  return Response.json(cottage);
}