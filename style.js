import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    color: '#fff',
    paddingHorizontal: 50,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
  textInput: {
    backgroundColor: '#eee',
    width: 300,
    paddingHorizontal: 12,
    marginTop: 200,
  },
  passwordInput: {
    backgroundColor: '#eee',
    width: 300,
    paddingHorizontal: 12,
    marginTop: 30,
  },
  error: {
    color: 'red',
    marginTop: 12,
    fontSize: 14,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  HomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HomeContent: {
    color: '#fff',
    paddingHorizontal: 50,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 30,
  },
  contactInfo: {
    color: '#fff',
    paddingHorizontal: 50,
    position: 'absolute',
    bottom: 150,
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
  },
  signUp: {
    position: 'absolute',
    bottom: 25,
    color: '#FF7070',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
