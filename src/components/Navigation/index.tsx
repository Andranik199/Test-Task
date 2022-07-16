import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {AppRoutes} from "../../constants";
import {Space} from "antd";

export const Navigation: FC = () => {
    return (
        <Space>
            <Link to={AppRoutes.HOME}>Home</Link>
            <Link to={AppRoutes.SEARCH}>Search</Link>
        </Space>
    )
}
