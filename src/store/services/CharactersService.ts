import { apiInstance } from "../axiosInstance";
import { Characters } from "../slices/characters";
// @ts-ignore
import {} from "swapi-wrapper";
import {Character, Film} from "../../components/Main/Characters/types";

type CharactersResponse = {
  count: number;
  results: Characters;
};
export class CharactersService {
  static async getCharacters(page: number): Promise<CharactersResponse> {
    try {
      const response = await apiInstance.get<CharactersResponse>(
        `people/?page=${page}`
      );
      return response.data;
    } catch (err) {
      throw new Error("Something went wrong");
    }
  }
  static async getInformationPerCharacter(id: number):Promise<Character> {
    try {
      const response = await apiInstance.get<Character>(`people/${id}`);
      return response.data;
    } catch (err) {
      throw new Error("Something went wrong");
    }
  }

  static async getSpecificFilm(id: number):Promise<any> {
    try {
      const response = await apiInstance.get<Film>(`films/${id}`);
      return response.data;
    } catch (err) {
      throw new Error("Something went wrong");
    }
  }


  static async searchCharacter(search: string):Promise<CharactersResponse> {
    try {
      const response = await apiInstance.get<CharactersResponse>(`people/?search=${search}`);
      return response.data;
    } catch (err) {
      throw new Error("Something went wrong");
    }
  }
}
