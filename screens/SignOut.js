import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Button from '../components/common/button';
import {Style} from '../styles/signOutStyle';
import * as firebase from 'firebase';

class SignOut extends Component {
  handleSignOut = async () => {
    const {navigate} = this.props.navigation;
    try {
      await firebase.auth().signOut();
      navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={Style.container}>
        <Button
          title="Sign Out"
          backgroundColor={'#f07070'}
          color={'#fff'}
          width={180}
          paddingVertical={10}
          handlePress={this.handleSignOut}></Button>
      </View>
    );
  }
}

export default SignOut;
