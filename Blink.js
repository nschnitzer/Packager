import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

class Blink extends Component { 
    componentDidMount(){
        // Toggle the state every second
        setInterval(() => (
          this.setState(previousState => (
            { isShowingText: !previousState.isShowingText }
          ))
        ), 1000);
      }

      //State object
      state = {isShowingText: true};

      render() {
          if (!this.state.isShowingText) {
              return null;
          }

          return(
              <Text style={{alignSelf: 'center', paddingTop:80}}>{this.props.text}</Text>
          );
      }
}

export default class BlinkApp extends Component {
  render() {
        return(
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes Blinking is fun' />
            </View>
        );
  }
}
