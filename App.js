import React from 'react'
import { Text, View } from 'react-native'

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Yoooo! What is happening
      </Text>
    </View>
  )
}

export default App;







/*import React from 'react';
import {Button, Text, View} from 'react-native';
export default class App extends React.Component {
  /*
  Initialize state object
  with variable 'number'
  set to 0 and variable name
  with value of empty string
   
  state = {number: 0};
  render() {
    return (
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        padding: 20
    }}>
        <Button title='Decrement'
                color='#e57373'
                onPress={() => this.decrement()}/>
          <Text>
            {/*
              Text will be automatically
              updated whenever state.number
              has changed value
            
            Value = {this.state.number}
          </Text>
          <Button title='Increment'
                  color='#64B5F6'
                  onPress={() => this.increment()}/>
      </View>
    );
}
   //Declaration of decrement function
  decrement() {
       //To update the state we need invoke this.setState
       //with new value for variable 'number'
      this.setState({number: this.state.number - 1});
  }
  increment() {
      this.setState({number: this.state.number + 1});
  }
}*/
