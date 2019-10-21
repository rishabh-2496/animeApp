import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  getAnimeData,
  getAnimeCharacters,
  getAnimeRecommendations,
  getAnimeReviews,
} from '../service/animeService';

import {
  getMangaData,
  getMangaCharacters,
  getMangaRecommendations,
  getMangaReviews,
} from '../service/mangaService';

import {Style} from '../styles/descriptionStyle';
import HorizontalScroll from '../components/horizontalScroll';
import Batch from '../components/common/batch';

class Description extends Component {
  static navigationOptions = {header: null};

  state = {
    data: {},
    characters: [],
    recommendations: [],
    reviews: [],
  };

  pushNewScreen = (
    data,
    characters,
    recommendations,
    reviews,
    previousScreen,
  ) => {
    this.props.navigation.push('Description', {
      data: data,
      characters: characters,
      recommendations: recommendations,
      reviews: reviews,
      previousScreen: previousScreen,
    });
  };

  handleUpdate = async itemId => {
    const previousScreen = this.props.navigation.getParam('previousScreen');
    let dataPromise;
    let charactersPromise;
    let recommendationsPromise;
    let reviewsPromise;
    if (previousScreen === 'anime') {
      dataPromise = getAnimeData(itemId);
      charactersPromise = getAnimeCharacters(itemId);
      recommendationsPromise = getAnimeRecommendations(itemId);
      reviewsPromise = getAnimeReviews(itemId);
      const [data, characters, recommendations, reviews] = await Promise.all([
        dataPromise,
        charactersPromise,
        recommendationsPromise,
        reviewsPromise,
      ]);
      this.pushNewScreen(data, characters, recommendations, reviews, 'anime');
    } else if (previousScreen == 'manga') {
      dataPromise = getMangaData(itemId);
      charactersPromise = getMangaCharacters(itemId);
      recommendationsPromise = getMangaRecommendations(itemId);
      reviewsPromise = getMangaReviews(itemId);
      const [data, characters, recommendations, reviews] = await Promise.all([
        dataPromise,
        charactersPromise,
        recommendationsPromise,
        reviewsPromise,
      ]);
      this.pushNewScreen(data, characters, recommendations, reviews, 'manga');
    }
  };

  componentDidMount() {
    const data = this.props.navigation.getParam('data');
    const characters = this.props.navigation.getParam('characters');
    const recommendations = this.props.navigation.getParam('recommendations');
    const reviews = this.props.navigation.getParam('reviews');
    this.setState({data, characters, recommendations, reviews});
  }

  render() {
    const {data, characters, recommendations, reviews} = this.state;
    return (
      <ScrollView style={Style.scrollViewContainer}>
        <View>
          <ImageBackground
            style={Style.coverImage}
            source={require('../images/cat_girl_nekomimi_art_anime_girl_103991_1920x1080.jpg')}>
            <Batch
              text={'Rating: ' + data.rating}
              color={'#fff'}
              backgroundColor={'#9b59b6'}
              padding={10}
              borderRadius={25}
              top={180}></Batch>

            <Batch
              text={'Score: ' + data.score}
              color={'#fff'}
              backgroundColor={'#3498db'}
              padding={10}
              borderRadius={20}
              top={10}></Batch>
          </ImageBackground>

          <View style={Style.statsContainer}>
            <Text style={Style.statsHeading}>Popularity</Text>
            <Text style={Style.statsHeading}>Favourites</Text>
            <Text style={Style.statsHeading}>Episodes</Text>
          </View>

          <View style={Style.statsContainer}>
            <Text style={Style.statsText}>{data.popularity}</Text>
            <Text style={Style.statsText}>{data.favorites}</Text>
            <Text style={Style.statsText}>{data.episodes || 'unknown'}</Text>
          </View>

          <View>
            <Text style={Style.descHeading}>Synopsis</Text>
            <Text style={Style.synopsisText}>{data.synopsis}</Text>
          </View>

          <View>
            <Text style={Style.descHeading}>Characters</Text>
            <HorizontalScroll
              onClick={() => {
                return null;
              }}
              data={characters}></HorizontalScroll>
          </View>

          {reviews.length !== 0 ? (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Reviews', {data: reviews});
              }}>
              <Text style={Style.descHeading}>See Reviews</Text>
            </TouchableOpacity>
          ) : null}

          <View>
            {recommendations.length > 0 ? (
              <Text style={Style.descHeading}>Similar</Text>
            ) : null}

            <HorizontalScroll
              data={recommendations}
              onClick={this.handleUpdate}></HorizontalScroll>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Description;
