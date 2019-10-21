import React, {Component} from 'react';
import {View} from 'react-native';
import Review from '../components/review';
import {Style} from '../styles/reviewsStyle';
import {ScrollView} from 'react-native-gesture-handler';

class Reviews extends Component {
  static navigationOptions = {header: null};

  state = {
    data: [],
  };

  componentDidMount() {
    const data = this.props.navigation.getParam('data');
    this.setState({data});
  }

  render() {
    const {data} = this.state;
    return (
      <View style={Style.reviewContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.map(review => (
            <Review data={review}></Review>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default Reviews;
