import React from 'react';
import {View, Image, Text} from 'react-native';
import {Style} from '../styles/reviewStyle';

const Review = ({data}) => {
  const {content} = data;
  const {username, image_url} = data.reviewer;
  const {overall, story, character, enjoyment} = data.reviewer.scores;

  return (
    <View style={Style.reviewContainer}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: image_url}} style={Style.imgCircle}></Image>
        <Text style={Style.userName}>{username}</Text>
      </View>
      <View style={Style.scoreContainer}>
        <Text style={Style.rateHeading}>Overall</Text>
        <Text style={Style.rateHeading}>Story</Text>
        <Text style={Style.rateHeading}>Character</Text>
        <Text style={Style.rateHeading}>Enjoyment</Text>
      </View>

      <View style={Style.scoreContainer}>
        <Text style={Style.rateText}>{overall}</Text>
        <Text style={Style.rateText}>{story}</Text>
        <Text style={Style.rateText}>{character}</Text>
        <Text style={Style.rateText}>{enjoyment}</Text>
      </View>

      <View>
        <Text style={Style.heading}>Review</Text>
        <Text style={Style.content}>{content}</Text>
      </View>
    </View>
  );
};

export default Review;
