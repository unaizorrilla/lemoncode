import { CharacterApiModel } from './character.api-model';
import axios from 'axios';
import { Lookup } from '#common/models';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacter = async (id: string): Promise<CharacterApiModel> => {
    const { data } = await axios.get(`${BASE_URL}/character/${id}`);
    return data;
};

// export const getCities = async (): Promise<Lookup[]> => {
//   return mockCities;
// };

export const saveCharacter = async (character: CharacterApiModel): Promise<boolean> => {
  return true;
};
