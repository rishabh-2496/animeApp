import React, {Component} from 'react';
import {StyleSheet, ImageBackground, View, Text} from 'react-native';
import Button from '../components/common/button';
import {Style} from '../style';

class Home extends Component {
  static navigationOptions = {header: null};

  handleNavigation = () => {
    this.props.navigation.navigate('LogIn');
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground
        source={require('../images/98721.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={{width: '100%', height: '100%'}}>
        <View style={Style.HomeContainer}>
          <Button
            title="Log In"
            backgroundColor="#FF7070"
            color="#fff"
            width={300}
            paddingVertical={12}
            handlePress={this.handleNavigation}></Button>
          <Text style={Style.HomeContent}>
            Right now, Estate Clarity requires an invitation from a professional
            to get Started.
          </Text>

          <Text style={Style.contactInfo}>
            Email{' '}
            <Text style={{textDecorationLine: 'underline'}}>
              hello@estateclarity.com
            </Text>{' '}
            for more information
          </Text>

          <Text style={Style.signUp} onPress={() => navigate('SignUp')}>
            Create Account
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

export default Home;
