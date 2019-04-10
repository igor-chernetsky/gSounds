import React from 'react';
import {Platform, StyleSheet, View, Button} from 'react-native';
import ImageButton from '../components/ImageButton';

import {games} from '../data/collections';

class GamesScreen extends React.Component {
  static navigationOptions = {
    title: 'Games Collection'
  };

  renderGameButton(info) {
    const onPressData = {id: info.id, name: info.name};
    return <ImageButton image={info.image} key={info.id} style={styles.button}
      onPress={() => this.props.navigation.navigate('Sounds', onPressData)} />;
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        {games.map(g => this.renderGameButton(g))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  },
  button: {
    margin: 10
  }
});

export default GamesScreen;
