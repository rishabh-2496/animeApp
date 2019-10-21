import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Card from './card';

const HorizontalScroll = ({data, onClick}) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{marginTop: 5}}>
      {data.map(item => (
        <Card
          uri={item.image_url || item.large} // if image url is not a property use large
          onClick={() => onClick(item.mal_id)}
          title={item.title || item.name} //if anime use title if characters use name
          malId={item.mal_id}></Card>
      ))}
    </ScrollView>
  );
};

export default HorizontalScroll;
