import React, { Component } from 'react';
import { Alert, Text, View, StyleSheet, } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';


export default class Login extends Component {

    componentDidMount() {
        this._setupGoogleSignIn();
    }

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices(
                {showPlayServicesUpdateDialog: true});
        }
    }


    render() {

        return(
            <GoogleSigninButton
            style={{width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={this._signIn}
            disabled={this.state.isSigninInProgress} />
        );
    }
}