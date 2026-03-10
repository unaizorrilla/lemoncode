import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterApiModel
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  image: character.image,
  status: character.status,
  gender: character.gender,
  type: character.type,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.CharacterApiModel =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    image: character.image,
    status: character.status,
    gender: character.gender,
    type: character.type,
  } as unknown) as apiModel.CharacterApiModel);
