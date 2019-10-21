import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./screens/Home";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import Anime from "./screens/anime";
import Manga from "./screens/manga";
import { createBottomTabNavigator } from "react-navigation-tabs";
import * as firebase from "firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import SignOut from "./screens/SignOut";
import AnimeDetail from "./screens/animeDetail";
import MangaDetail from "./screens/mangaDetail";
import { firebaseConfig } from "./config";
import Reviews from "./screens/Reviews";
import AuthLoading from "./screens/authLoading";

const AnimeStackNavigator = createStackNavigator({
  Anime: {
    screen: Anime
  },
  AnimeDetail: {
    screen: AnimeDetail
  },
  Reviews: {
    screen: Reviews
  }
});

const MangaStackNavigator = createStackNavigator({
  Manga: {
    screen: Manga
  },
  MangaDetail: {
    screen: MangaDetail
  },
  Reviews: {
    screen: Reviews
  }
});

const BottomTabNavigator = createBottomTabNavigator({
  Anime: {
    screen: AnimeStackNavigator,
    navigationOptions: {
      headerTransparent: true,
      tabBarIcon: () => (
        <Icon name="video-camera" size={22} color="#ff7070"></Icon>
      ),
      tabBarOptions: {
        //other properties
        pressColor: "#ff7070", //for click (ripple) effect color
        activeTintColor: "#FF7070",
        style: {
          backgroundColor: "#34495e", //color you want to change
          paddingTop: 2
        }
      },
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        navigation.navigate("Manga");
        defaultHandler();
      }
    }
  },
  Manga: {
    screen: MangaStackNavigator,
    navigationOptions: {
      headerTransparent: true,
      tabBarIcon: () => <Icon name="book" size={22} color="#ff7070"></Icon>,
      tabBarOptions: {
        activeTintColor: "#FF7070",
        style: {
          backgroundColor: "#34495e", //color you want to change
          paddingTop: 2
        }
      },
      tabBarOnPress: ({ navigation, defaultHandler }) => {
        navigation.navigate("Anime");
        defaultHandler();
      }
    }
  },
  SignOut: {
    screen: SignOut,
    navigationOptions: {
      headerTransparent: true,
      tabBarIcon: () => <Icon name="user" size={22} color="#ff7070"></Icon>,
      tabBarOptions: {
        activeTintColor: "#FF7070",
        style: {
          backgroundColor: "#34495e", //color you want to change
          paddingTop: 2
        }
      }
    }
  }
});

const AppStack = createStackNavigator({
  Anime: {
    screen: BottomTabNavigator,
    navigationOptions: {
      header: null
    }
  }
});

const AuthStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerVisible: false
    }
  },
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      headerTransparent: true,
      headerTintColor: "#fff"
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerTransparent: true,
      headerTintColor: "#fff"
    }
  }
});

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
