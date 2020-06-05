//imports
import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

//create
class App extends React.Component{
  state = {
    text: "",
    todo: []
  }
  addTodo = () => {
    // this.setState({todo: this.state.text})
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr, text: ""});
  }
  deleteTodo = (t) => {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () => {
    return this.state.todo.map(t=>{
      return (
        <TouchableOpacity key={t}>
        <Text 
          style={styles.todo}
          key={t}
          onPress={()=>{this.deleteTodo(t)}}
        >{t}</Text>
        </TouchableOpacity>
      )
    })
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
      <View style={styles.viewStyle}>
        <Text style={styles.header}>Checklist App :)</Text>
        <TextInput 
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
          value={this.state.text}
        />
        <Button
          title="Add ToDo"
          color="#ee0290"
          onPress={this.addTodo}
          />
        <View style={{marginTop: 100}}/>
        {this.renderTodos()}
        {/* <Button
        title="Remove from list"
        /> */}
      </View>
      </View>
    )
  }
}

const styles = {
  wholeStyle: {
    backgroundColor: "#F2FDE4",
    flex:1
  },
  viewStyle: {
    marginTop: 50, 
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 10
  },
  inputStyle: {
    height: 40,
    width: "90%",
    borderColor: "#ee0290",
    borderWidth: 1
  },
  header:{
    fontSize: 30,
    color: "#ee0290",
    fontWeight: "bold"
  },
  todo:{
    fontSize: 22,
    color: "gray"
  }
}

//exports
export default App;