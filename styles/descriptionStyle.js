import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#2C3E50',
    height: '100%',
  },

  coverImage: {
    width: '100%',
    height: 250,
  },

  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  statsHeading: {
    color: '#fff',
    marginTop: 20,
    fontSize: 18,
    color: '#ff7070',
    fontWeight: 'bold',
  },
  statsText: {
    marginTop: 10,
    color: '#fff',
    textAlign: 'center',
  },

  descHeading: {
    color: '#ff7070',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 30,
    marginLeft: 24,
  },

  synopsisText: {
    color: '#fff',
    marginLeft: 24,
    marginTop: 10,
    fontSize: 14,
    textAlign: 'justify',
    marginRight: 24,
    lineHeight: 20,
  },
});
