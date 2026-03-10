import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const { data } = await axios.get(`${BASE_URL}/character`);
  return data.results;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  // La API es de solo lectura, simulamos el delete
  console.log(`Delete character ${id} - API is read-only`);
  return true;
};
