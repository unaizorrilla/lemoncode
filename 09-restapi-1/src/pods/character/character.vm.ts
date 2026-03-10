export interface Character {
  id: string;
  image: string;
  name: string;
  status: string;
  gender: string;
  type: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  image: '',
  name: '',
  status: '',
  gender: '',
  type: '',
});
