import React, {Component} from 'react';
import {View, Text} from 'react-native';

const Batch = ({text, backgroundColor, color, padding, borderRadius, top}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          padding,
          borderRadius,
          zIndex: 4,
          position: 'absolute',
          top,
          alignSelf: 'flex-start',
          marginLeft: 20,
          marginTop: 10,
        }}>
        <Text style={{color}}>{text}</Text>
      </View>
    </View>
  );
};

export default Batch;
