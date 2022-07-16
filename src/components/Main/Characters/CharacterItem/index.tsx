import React, { memo } from "react";
import { Character } from "../types";
import { Card } from "antd";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { charactersActions } from "store/slices/characters/config";
import {AppRoutes} from "../../../../constants";

export const CharacterItem: React.FC<Character> = memo((character) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(charactersActions.setPerCharachter(character));
  };
  return (
    <Link to={AppRoutes.SPECIFIC_CHARACTER.replace(':id', character.id.toString())} onClick={handleClick}>
      <div className={styles.characterItem}>
        <Card
          title={character.name}
          hoverable
          cover={<img alt={`${character.name} icon`} src={character.image} />}
        />
      </div>
    </Link>
  );
});
