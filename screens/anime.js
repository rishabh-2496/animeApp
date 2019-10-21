import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {
  getTopAiringAnimes,
  getTopUpcomingAnimes,
  getTopAnimeMovies,
  getTopSpecials,
  getTopTv,
  getAnimeData,
  getAnimeCharacters,
  getAnimeRecommendations,
  getAnimeReviews,
} from '../service/animeService';
import HorizontalScroll from '../components/horizontalScroll';
import {Style} from '../styles/animeStyle';

class Anime extends Component {
  state = {
    topAiringAnimes: [],
    topUpcomingAnimes: [],
    topAnimeMovies: [],
    topSpecials: [],
    topTv: [],
    currentScreen: 'anime',
  };

  static navigationOptions = {
    header: null,
  };

  async componentDidMount() {
    const topUpcomingAnimes = await getTopUpcomingAnimes();
    const topAiringAnimes = await getTopAiringAnimes();
    const topAnimeMovies = await getTopAnimeMovies();
    const topSpecials = await getTopSpecials();
    const topTv = await getTopTv();

    this.setState({
      topUpcomingAnimes,
      topAiringAnimes,
      topAnimeMovies,
      topSpecials,
      topTv,
    });
  }

  handleUpdate = itemId => {
    this.handleClick(itemId);
  };

  handleClick = async itemId => {
    const dataPromise = getAnimeData(itemId);
    const charactersPromise = getAnimeCharacters(itemId);
    const recommendationsPromise = getAnimeRecommendations(itemId);
    const reviewsPromise = getAnimeReviews(itemId);

    const [data, characters, recommendations, reviews] = await Promise.all([
      dataPromise,
      charactersPromise,
      recommendationsPromise,
      reviewsPromise,
    ]);

    this.props.navigation.navigate('Description', {
      data: data,
      characters: characters,
      recommendations: recommendations,
      reviews: reviews,
      handleUpdate: this.handleUpdate,
      previousScreen: this.state.currentScreen,
    });
  };

  render() {
    const {
      topUpcomingAnimes,
      topAiringAnimes,
      topAnimeMovies,
      topSpecials,
      topTv,
    } = this.state;
    return (
      <View style={Style.animeContainer}>
        <ScrollView>
          <Text style={Style.heading}>Top Upcoming</Text>
          <HorizontalScroll
            onClick={this.handleClick}
            data={topUpcomingAnimes}></HorizontalScroll>

          <Text style={Style.heading}>Top Airing</Text>
          <HorizontalScroll
            onClick={this.handleClick}
            data={topAiringAnimes}></HorizontalScroll>

          <Text style={Style.heading}>Top Anime Movies</Text>
          <HorizontalScroll
            onClick={this.handleClick}
            data={topAnimeMovies}></HorizontalScroll>

          <Text style={Style.heading}>Top Specials</Text>
          <HorizontalScroll
            onClick={this.handleClick}
            data={topSpecials}></HorizontalScroll>

          <Text style={Style.heading}>Top Tv</Text>
          <HorizontalScroll
            onClick={this.handleClick}
            data={topTv}></HorizontalScroll>
        </ScrollView>
      </View>
    );
  }
}

export default Anime;
