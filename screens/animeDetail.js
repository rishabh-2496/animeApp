import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import {
  getAnimeData,
  getAnimeCharacters,
  getAnimeRecommendations,
  getAnimeReviews
} from "../service/animeService";

import { Style } from "../styles/descriptionStyle";
import HorizontalScroll from "../components/horizontalScroll";
import Batch from "../components/common/batch";

class AnimeDetail extends Component {
  static navigationOptions = { header: null };

  state = {
    data: {},
    characters: [],
    recommendations: [],
    reviews: []
  };

  pushNewScreen = () => {
    this.props.navigation.push("animeDetail", { id: itemId });
  };

  fetchData = id => {
    const dataPromise = getAnimeData(id);
    const charactersPromise = getAnimeCharacters(id);
    const recommendationsPromise = getAnimeRecommendations(id);
    const reviewsPromise = getAnimeReviews(id);
    return Promise.all([
      dataPromise,
      charactersPromise,
      recommendationsPromise,
      reviewsPromise
    ]);
  };

  handleUpdate = async itemId => {
    const [data, characters, recommendations, reviews] = await this.fetchData();
    this.setState({ data, characters, recommendations, reviews });
    this.pushNewScreen(itemId);
  };

  async componentDidMount() {
    const id = this.props.navigation.getParam("id");
    const [data, characters, recommendations, reviews] = await this.fetchData();
    this.setState({ data, characters, recommendations, reviews });
  }

  render() {
    const { data, characters, recommendations, reviews } = this.state;
    return (
      <ScrollView style={Style.scrollViewContainer}>
        <View>
          <ImageBackground
            style={Style.coverImage}
            source={require("../images/cat_girl_nekomimi_art_anime_girl_103991_1920x1080.jpg")}
          >
            <Batch
              text={"Rating: " + data.rating}
              color={"#fff"}
              backgroundColor={"#9b59b6"}
              padding={10}
              borderRadius={25}
              top={180}
            ></Batch>

            <Batch
              text={"Score: " + data.score}
              color={"#fff"}
              backgroundColor={"#3498db"}
              padding={10}
              borderRadius={20}
              top={10}
            ></Batch>
          </ImageBackground>

          <View style={Style.statsContainer}>
            <Text style={Style.statsHeading}>Popularity</Text>
            <Text style={Style.statsHeading}>Favourites</Text>
            <Text style={Style.statsHeading}>Episodes</Text>
          </View>

          <View style={Style.statsContainer}>
            <Text style={Style.statsText}>{data.popularity}</Text>
            <Text style={Style.statsText}>{data.favorites}</Text>
            <Text style={Style.statsText}>{data.episodes || "unknown"}</Text>
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
              data={characters}
            ></HorizontalScroll>
          </View>

          {reviews.length !== 0 ? (
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Reviews", { data: reviews });
              }}
            >
              <Text style={Style.descHeading}>See Reviews</Text>
            </TouchableOpacity>
          ) : null}

          <View>
            {recommendations.length > 0 ? (
              <Text style={Style.descHeading}>Similar</Text>
            ) : null}

            <HorizontalScroll
              data={recommendations}
              onClick={this.handleUpdate}
            ></HorizontalScroll>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default AnimeDetail;
