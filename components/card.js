import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {Style} from '../styles/cardStyle';

const Card = ({uri, title, onClick}) => {
  return (
    <TouchableOpacity
      style={Style.cardContainer}
      onPress={malId => onClick(malId) || null}>
      <Image
        style={{
          width: 220,
          height: 317,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: '#eee',
        }}
        source={{uri}}></Image>
      <Text style={Style.cardText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;
