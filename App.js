/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// 예 2.16
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component{
  constructor(){
    super()
    this.state={loading:true, data:{}}
  }
  componentDidMount(){
    //   #simulate ajex call
      setTimeout(()=>{
          this.setState({
              loading:false,
              data:{name:'Nader Dabit',age:35}
          })
      },2000)
  }
    render(){
        if(this.state.loading){
            return <Text>Loading</Text>
        }
        const {name,age} = this.state.data
        return(
            <View >
                <Text>name:{name}</Text>
                <Text>age:{age}</Text>
            </View>
        )
    }
}

export default App;

