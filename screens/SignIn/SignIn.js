import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import UserSignInIOS from '../../components/UserSignInIOS/UserSignInIOS';
import UserSignInAndroid from '../../components/UserSignInAndroid/UserSignInAndroid';


export default class SignInScreen extends Component {

  
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.title}>
            Sign in to The App
          </Text>
        </View>
      {Platform.select({
        ios: <View style={styles.contents}>
          <UserSignInIOS/>
        </View>,
        android: <View style={styles.content}>
          <UserSignInAndroid/>
        </View>
      })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretcj',
    backgroundColor: '#F5FCFF',
  },

  title: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#669999',
    borderBottomWidth: 2
  },

  titleText: {
    fontSize: 28
  },

  content: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});