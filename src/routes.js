import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Recuperar from './pages/Recuperar';

const Routes =  createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions: {
                title: 'CENSUS',
                headerTitleAlign: 'center',
            },
        },
        Cadastro:{
            screen: Cadastro,
            navigationOptions: {
                title: 'Cadastro',
                headerTitleAlign: 'center',
        },
        Recuperar:{
            screen: Recuperar,
            navigationOptions: {
                title: 'Recuperar senha',
                headerTitleAlign: 'center',
            }
        },
        }
    }, {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#FBBC05'
            },
        },
    })
);

export default Routes;
