/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from './source/screens/Home';
import GamesScreen from './source/screens/Games';
import SoundsScreen from './source/screens/Sounds';

import rootReducer from './source/storage/reducers/root';
import {ADD_FAVORITE} from './source/storage/actions/favActions';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Games: {screen: GamesScreen},
  Sounds: {screen: SoundsScreen}
});

const store = createStore(rootReducer);

const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component {

  async componentDidMount() {
    let favorites = await AsyncStorage.getItem('favorites');
    if (favorites) {
      favorites.forEach(f => {
        store.dispatch(ADD_FAVORITE, f);
      });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
