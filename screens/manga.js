import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import {
  getTopMangas,
  getTopNovels,
  getTopOneShots,
  getTopManhwa,
  getTopDoujin,
  getMangaData,
  getMangaCharacters,
  getMangaRecommendations,
  getMangaReviews
} from "../service/mangaService";
import HorizontalScroll from "../components/horizontalScroll";
import { Style } from "../styles/mangaStyle";

class Manga extends Component {
  state = {
    topMangas: [],
    topNovels: [],
    topOneShots: [],
    topDoujin: [],
    topManhwa: []
  };

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    const topMangas = await getTopMangas();
    const topNovels = await getTopNovels();
    const topOneShots = await getTopOneShots();
    const topDoujin = await getTopDoujin();
    const topManhwa = await getTopManhwa();
    this.setState({
      topMangas,
      topNovels,
      topOneShots,
      topDoujin,
      topManhwa
    });
  }

  handleClick = async itemId => {
    this.props.navigation.navigate("mangaDetail", { id: itemId });
  };

  render() {
    const {
      topMangas,
      topNovels,
      topOneShots,
      topDoujin,
      topManhwa
    } = this.state;

    return (
      <View style={Style.mangaContainer}>
        <ScrollView>
          <Text style={Style.heading}>Top Mangas</Text>
          <HorizontalScroll
            onClick={this.handleClick}
            data={topMangas}
          ></HorizontalScroll>

          <Text style={Style.heading}>Top Novels</Text>
          <HorizontalScroll
            onClick={this.handleClick}
            data={topNovels}
          ></HorizontalScroll>

          <Text style={Style.heading}>Top OneShots</Text>
          <HorizontalScroll
            onClick={this.handleClick}
            data={topOneShots}
          ></HorizontalScroll>

          <Text style={Style.heading}>Top Doujin</Text>
          <HorizontalScroll
            onClick={this.handleClick}
            data={topDoujin}
          ></HorizontalScroll>

          <Text style={Style.heading}>Top Manhwa</Text>
          <HorizontalScroll
            onClick={this.handleClick}
            data={topManhwa}
          ></HorizontalScroll>
        </ScrollView>
      </View>
    );
  }
}

export default Manga;
