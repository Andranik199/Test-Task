import React, {useEffect} from 'react'
import {charactersActions} from "../../store/slices/characters/config";
import {useAppDispatch} from "../../store";
import {Characters} from "./Characters";


export const Main:React.FC = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(charactersActions.getCharacters(1))

        return () => {
            dispatch(charactersActions.setItems([]));

            dispatch(charactersActions.setTotalCount(0));
        }
    },  [dispatch])

    return (
        <div>
            <Characters />
        </div>
    )
}
