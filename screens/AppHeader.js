import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class AppHeader extends React.Component{
 render(){ 
    return (
      <View >
        <Text style={styles.heading}>Story Hub</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading:{
    backgroundColor:'orange',
    textAlign:'center',
    height:50,
    fontSize:35,
    fontWeight:"bold"
  },
});