import React, {useCallback, useState} from 'react';
import {Pagination} from 'antd';
import {useSelector} from "react-redux";
import {CharacterItem} from "./CharacterItem";
import styles from './styles.module.scss'
import {charactersActions, charactersSelectors} from "../../../store/slices/characters/config";
import {useAppDispatch} from "../../../store";


export const Characters: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useAppDispatch()
    const characters = useSelector(charactersSelectors.selectCharacters)
    const totalCount = useSelector(charactersSelectors.selectTotalCount)
    const handleChangePage = useCallback((page: number) => {
        setCurrentPage(page)
        dispatch(charactersActions.getCharacters(page))
    }, [dispatch])
    return (
        <div>
            <div className={styles.charactersMain}>
                {characters.map(item => (
                    <CharacterItem {...item} key={item.id}/>
                ))}

            </div>
            <Pagination

                hideOnSinglePage
                current={currentPage}
                total={totalCount}
                defaultCurrent={1}
                showSizeChanger={false}
                onChange={handleChangePage}
            />
        </div>
    )
}
