import { faker } from '@faker-js/faker'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id');

  const cottage = {
    id,
    name: faker.string.alpha({ length: 10 }),
    address: faker.location.streetAddress(),
    country: faker.location.country(),
    price: Number(faker.finance.amount({ min: 100, max: 1000 })),
    imageUrl: faker.image.urlPicsumPhotos({ width: 400, height: 300 }),
  };
  
  return cottage
})