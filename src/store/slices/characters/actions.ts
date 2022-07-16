import {CharactersService} from "../../services/CharactersService";
import {charactersActions} from "./config";
import {objectConvertation} from "utills/objectConvertation";
import {extractIdFromUrl} from "../../../utills/extractIdFromUrl";
import {errorActions} from "../errors/config";

export const getCharacters = (page: number) => async (dispatch: any) => {
    try {
        const response = await CharactersService.getCharacters(page);
        dispatch(charactersActions.setItems(objectConvertation(response)));

        dispatch(charactersActions.setTotalCount(response.count));
    } catch (err: any) {
        dispatch(errorActions.setErrorStatus(true))
        dispatch(errorActions.setErrorMessage(err.message))
    }
};
export const getCharacter = (id: any) => async (dispatch: any) => {
    try {
        if (!id) {
            return;
        }
        const response = await CharactersService.getInformationPerCharacter(id);
        dispatch(
            charactersActions.setPerCharachter({
                ...response,
                id: extractIdFromUrl(response.url),
                modifiedFilms: await Promise.all(response.films.map(async (item) => {
                    return {
                        ...(await CharactersService.getSpecificFilm(extractIdFromUrl(String(item)))),
                        image: `https://starwars-visualguide.com/assets/img/films/${extractIdFromUrl(String(item))}.jpg`,
                        id: extractIdFromUrl(String(item))
                    };
                })),
                image: `https://starwars-visualguide.com/assets/img/characters/${extractIdFromUrl(
                    response.url
                )}.jpg`,
            })
        );
    } catch (err: any) {
        dispatch(errorActions.setErrorStatus(true))
        dispatch(errorActions.setErrorMessage(err.message))
    }
};


export const searchCharacter = (search: string) => async (dispatch: any) => {
    try {
        const response = await CharactersService.searchCharacter(search)
        dispatch(charactersActions.setItems(objectConvertation(response)));

        dispatch(charactersActions.setTotalCount(response.count));
    } catch (err: any) {
        dispatch(errorActions.setErrorStatus(true))
        dispatch(errorActions.setErrorMessage(err.message))
    }
}
