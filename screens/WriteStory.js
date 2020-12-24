import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput , TouchableOpacity} from 'react-native';
import AppHeader from './AppHeader'
import db from '../Config';



export default class WriteStory extends React.Component{
  constructor(){
   super();
   this.state={
     title:'',
     author:'',
     story:''}
  }

  submitStory(){
    db.collection("storyBooks").doc(this.state.author).update({
      'storyAuthor':this.state.author
    })

    db.collection("storyBooks").doc(this.state.title).update({
      'storyName':this.state.title
    })

    db.collection("storyBooks").doc(this.state.story).update({
      'storyBody':this.state.story
    })
  }

  render(){ 
    return (
      <View >
          <AppHeader/>
           <View style ={{justifyContent:'center'}}>

            <Image source={require("../assets/fire-book-logo.png")} style={{width:350, height:350, alignSelf:'center'}}/>

              <TextInput placeholder="Story Title" 
              style={styles.inputText}
              onChangeText={text =>this.setState({title:text})}/>

              <TextInput placeholder="Author" 
              style={styles.inputText}
              onChangeText={text =>this.setState({author:text})}
              
              value = {this.state.author}/>

              <TextInput placeholder="Write your story here" 
              multiline = {true} 
              style={{
                width: '60%',
                height:150,  
                borderWidth:2, 
                alignSelf: "center", 
                marginTop:10}}
                onChangeText={text => this.setState({story:text})}/>
            </View>
          
          <TouchableOpacity style={styles.submitButton} onPress={this.submitStory}>
                <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  submitButton: {
    alignSelf: "center",
    backgroundColor: "yellow",
    height: 30,
    width: 100,
    borderRadius:10,
    marginTop: 10,
    
  },
  inputText: {
    width: '60%',
    height:35,
    marginTop:10,
    borderWidth:2,
    alignSelf: "center",  
  },
  text: {
    textAlign: 'center',
    marginTop:5,
    fontWeight: 'bold',
    alignSelf:'center',
},
});