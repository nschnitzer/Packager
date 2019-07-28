import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import UserSignInIOS from './components/UserSignInIOS/UserSignInIOS';
import { Provider as PaperProvider } from 'react-native-paper';
import UserSignInAndroid from './components/UserSignInAndroid/UserSignInAndroid';
import PropTypes from 'prop-types';
import { Container, Content, List, ListItem, Text, Button } from 'native-base';

export default class App extends Component {

  
  render() {
    return(
      Platform.select({
        ios: <View style={styles.container}>
          <Text>IOS</Text>
          <UserSignInIOS/>
        </View>,
        android: <View style={styles.container}>
          <Text>ANDROID</Text>
          <UserSignInAndroid/>
        </View>
      })
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});