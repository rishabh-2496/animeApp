import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as firebase from 'firebase';

class AuthLoading extends React.Component {
  componentDidMount() {
    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const {navigate} = this.props.navigation;
    firebase.auth().onAuthStateChanged(function(user) {
      navigate(user ? 'App' : 'Auth');
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#2C3E50',
        }}>
        <ActivityIndicator size="large" color="#ff7070" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoading;
