import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './AppHeader'



export default class ReadStory extends React.Component{
 render(){ 
    return (
      <View >
          <AppHeader/>
        <Text >Read Story</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});