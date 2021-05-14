/**
 * @format
 */

//basic
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

const MyApp = () => <App />

AppRegistry.registerComponent(appName, () => App);
