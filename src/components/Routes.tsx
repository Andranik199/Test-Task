import React from "react";
import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { Main } from "./Main";
import { CharacterInformation } from "./Main/Characters/CharacterInformation/CharacterInformation";
import {AppRoutes} from "../constants";
import {Search} from "./Search";

export const Routes: React.FC = () => {
  return (
    <RoutesWrapper>
      <Route path={AppRoutes.HOME} element={<Main />} />
      <Route path={AppRoutes.SPECIFIC_CHARACTER} element={<CharacterInformation />} />
      <Route path={AppRoutes.SEARCH} element={<Search />} />
    </RoutesWrapper>
  );
};
