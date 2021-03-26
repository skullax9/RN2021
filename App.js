/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  render() {
    let book = "React Native in Action"
    return (
        <BookDisplay book={book}/>
    )
  }
}

class BookDisplay extends React.Component {
  render() {
    return(
    <View>
      <Text>{this.props.book}</Text>
    </View>
    )
  }
}

export default App;