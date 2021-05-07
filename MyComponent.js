import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import getStyleSheet from './MyComponentStyles';    

export default class MyComponent extends Component {

  constructor(props) {
      super(props);
      //기본 테마 색을 밝은 색으로 컴포넌트 state 초기화
      this.state = {
          darkTheme: false    
      };
      this.toggleTheme = this.toggleTheme.bind(this);    
  }

  toggleTheme() {
      this.setState({darkTheme: !this.state.darkTheme})    
  };

  render() {

    const styles = getStyleSheet(this.state.darkTheme);    
    const backgroundColor =
          StyleSheet.flatten(styles.container).backgroundColor;    

    return (
        <View style={styles.container}>    
            <View style={styles.box}>    
                <Button title={backgroundColor}    
                        onPress={this.toggleTheme}/>    
            </View>
        </View>
    );
  }
}