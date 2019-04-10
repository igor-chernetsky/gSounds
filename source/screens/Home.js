import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import AudioButton from '../components/AudioButton';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  };

  renderFavoriteSounds() {
    if (this.props.favorites.length) {
      return this.props.favorites.map((sound, index) => {
        return <AudioButton style={styles.favButton} key={index} sound={sound} />;
      });
    } else {
      return <Text style={styles.emptyMessage}>No favorites selected, add move favorites from the games list</Text>
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.favContainer}>
          {this.renderFavoriteSounds()}
          </View>
        </ScrollView>
        <View>
          <View style={styles.caption}>
            <Text style={styles.captionText}>Add More Sounds Here</Text>
            <Icon style={{textAlign: 'center'}} name="arrow-circle-down" size={20} />
          </View>
          <Button title="Games" onPress={() => this.props.navigation.navigate('Games')}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    height: '100%'
  },
  favContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#EFEFEF',
    padding: 10
  },
  favButton: {
  },
  caption: {
    width: '100%',
    marginBottom: 5,
    marginTop: 5
  },
  captionText: {
    fontSize: 20,
    textAlign: 'center'
  },
  emptyMessage: {
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  }
});

const mapStateToProps = state => ({
  favorites: state.favoritesReducer.favorites
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
