import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  scoreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  reviewContainer: {
    padding: 12,
    marginTop: 10,
  },
  content: {
    color: '#fff',
    textAlign: 'justify',
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },
  heading: {
    color: '#ff7070',
    fontSize: 22,
    marginTop: 20,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10,
  },
  rateHeading: {
    color: '#ff7070',
    fontSize: 16,
  },
  rateText: {
    color: '#fff',
    fontSize: 16,
  },
  imgCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
