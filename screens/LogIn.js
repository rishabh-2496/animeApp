import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import Button from '../components/common/button';
import * as firebase from 'firebase';
import {Style} from '../style';

class LogIn extends Component {
  state = {
    email: '',
    password: '',
    error: '',
  };

  handleLogIn = async () => {
    const {email, password} = this.state;
    try {
      const result = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      this.setState({error: ''});
      this.props.navigation.replace('Anime');
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
            title="Log In"
            backgroundColor="#FF7070"
            color="#fff"
            width={300}
            paddingVertical={12}
            marginTop={30}
            handlePress={this.handleLogIn}></Button>

          <Text style={Style.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt, ex id mattis pharetra, dolor arcu venenatis nunc, id
          </Text>

          {!!error && <Text style={Style.error}>{error}</Text>}

          <Text
            style={{
              position: 'absolute',
              color: '#FF7070',
              bottom: 25,
              fontSize: 16,
              fontWeight: 'bold',
            }}
            onPress={() => navigate('SignUp')}>
            Don't have a Account
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   content: {
//     color: '#fff',
//     paddingHorizontal: 50,
//     marginTop: 20,
//     textAlign: 'center',
//     fontSize: 16,
//     fontStyle: 'italic',
//   },
//   textInput: {
//     backgroundColor: '#fff',
//     width: 300,
//     paddingHorizontal: 12,
//     marginTop: 200,
//   },
//   passwordInput: {
//     backgroundColor: '#fff',
//     width: 300,
//     paddingHorizontal: 12,
//     marginTop: 30,
//   },
//   error: {
//     color: 'red',
//     marginTop: 12,
//     fontSize: 14,
//     paddingHorizontal: 50,
//     textAlign: 'center'
//   },
// });

export default LogIn;
