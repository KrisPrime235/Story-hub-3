import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import WriteStory from './screens/WriteStory'
import ReadStory from './screens/ReadStory'
import AppHeader from './screens/AppHeader'



export default class App extends React.Component{
 render(){ 
    return ( 
        <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write : {screen :WriteStory },
  Read: {screen : ReadStory}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      if (routeName === "Write"){
        return(
          <Image source={require("./assets/write.png")} style={{width:30, height:30}}/>
        )
      } else {
        return(
          <Image source={require("./assets/read.png")} style={{width:30, height:30}}/>
        )
      }
    }
  })
});

const AppContainer = createAppContainer(TabNavigator)

