import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AppDispatch } from "store";
import {
  charactersActions,
  charactersSelectors,
} from "store/slices/characters/config";
import {Card, Typography} from "antd";
import styles from "./style.module.scss";
import {Link} from "react-router-dom";
import {AppRoutes} from "../../../../constants";


export const CharacterInformation = () => {
  const params = useParams();
  const dispatch: AppDispatch = useDispatch();
  const perCharachter = useSelector(charactersSelectors.selectPerCharachter);

  useEffect(() => {
      dispatch(charactersActions.getCharacter(params.id));
  }, [dispatch, params.id]);

  return (
    <div className={styles.characterInformation}>
      <Link to={AppRoutes.HOME}>Back To Home</Link>
      <h1 className={styles.characterName}>{perCharachter.name}</h1>
      <Card hoverable title="Personal Information" cover={
          <img alt={`${perCharachter.name} icon`} src={perCharachter.image} style={{
              maxHeight: '250px',
              maxWidth: '250px',
          }}/>
      }>
        Birth:<h2>{perCharachter.birth_year}</h2>
        Height:<h2>{perCharachter.height}</h2>
        Gender:<h2>{perCharachter.gender}</h2>
        Mass:<h2>{perCharachter.mass}</h2>
        Hair Color:<h2>{perCharachter.hair_color}</h2>
      </Card>

      <h1 className={styles.category}>Films</h1>
        <div style={{display: 'flex'}}>
            {perCharachter.modifiedFilms?.map((item) => {
                return (
                    <div className={styles.filmimage} key={item.id}>
                        <img src={item.image} alt='film icon' />
                        <Typography.Text>{item.title}</Typography.Text>
                    </div>
                );
            })}
        </div>

    </div>
  );
};
