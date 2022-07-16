import './App.css';
import {FC, useCallback, useEffect} from "react";
import { notification } from 'antd';
import {Layout} from 'antd';
import {Routes} from "./components/Routes";
import {Navigation} from "./components/Navigation";
import {useSelector} from "react-redux";
import {errorActions, errorSelectors} from "./store/slices/errors/config";
import {useAppDispatch} from "./store";
const {Header, Footer, Content} = Layout;

const App: FC = () => {
    const dispatch = useAppDispatch();
    const hasError = useSelector(errorSelectors.selectErrorStatus)
    const errorMessage = useSelector(errorSelectors.selectErrorMessage)

    const openNotification = useCallback(() => {
        notification.open({
            type: 'error',
            message: 'Something went wrong',
            description: errorMessage,
        });
    }, [errorMessage]);
    useEffect(() => {
        if(hasError) {
            openNotification()
            setTimeout(() => {
                dispatch(errorActions.setErrorStatus(false))
                dispatch(errorActions.setErrorMessage(''))
            }, 5000)
        }
    }, [dispatch, hasError, openNotification])




    return (
        <div style={{
            overflowX: 'hidden'
        }}>
            <Layout>
                <Header>
                    <Navigation />
                </Header>
                <Content style={{
                    minHeight: window.innerHeight
                }}>
                    <Routes/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </div>
    );
}

export default App;
