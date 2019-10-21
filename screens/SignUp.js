import React, {Component} from 'react';
import {StyleSheet, ImageBackground, View, Text, TextInput} from 'react-native';
import Button from '../components/common/button';
import * as firebase from 'firebase';
import {Style} from '../style';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  SignUp = async () => {
    const {email, password} = this.state;
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(result);
      this.setState({error: ''});
      this.props.navigation.navigate('LogIn');
    } catch (error) {
      this.setState({error: error.message});
    }
  };

  render() {
    const {navigate} = this.props.navigation;
    const {error} = this.state;
    return (
      <ImageBackground
        source={require('../images/98721.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{width: '100%', height: '100%'}}>
        <View style={Style.container}>
          <TextInput
            style={Style.textInput}
            placeholder="Email"
            onChangeText={text => this.setState({email: text})}></TextInput>
          <TextInput
            style={Style.passwordInput}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => this.setState({password: text})}></TextInput>
          <Button
            title="Sign Up"
            backgroundColor="#FF7070"
            color="#fff"
            width={300}
            paddingVertical={12}
            marginTop={25}
            handlePress={this.SignUp}></Button>

          {!!error && <Text style={Style.error}>{error}</Text>}

          <Text
            style={{
              position: 'absolute',
              color: '#FF7070',
              bottom: 25,
              fontSize: 16,
            }}
            onPress={() => navigate('LogIn')}>
            Already have a account
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

export default SignUp;
