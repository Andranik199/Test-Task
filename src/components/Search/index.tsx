import React, {useCallback, useEffect, useState} from 'react'
import {Input, Typography} from "antd";
import {useAppDispatch} from "../../store";
import {charactersActions} from "../../store/slices/characters/config";
import {Characters} from "../Main/Characters";

export const Search: React.FC = () => {
    const [search, setSearch] = useState('')
    const dispatch = useAppDispatch()
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }, [])
    const handlePressEnter = () => {
        dispatch(charactersActions.searchCharacter(search))
    }

    useEffect(() => {
        return () => {
            dispatch(charactersActions.setItems([]));

            dispatch(charactersActions.setTotalCount(0));
        }
    }, [dispatch])
    return (
        <>
            <Typography.Title>Search</Typography.Title>
            <Input value={search} onChange={handleChange} onPressEnter={handlePressEnter} />

            <Characters />
        </>
    )
}
