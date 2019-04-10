import React from 'react';
import {Platform, StyleSheet, ScrollView, View, Button} from 'react-native';
import AudioButton from '../components/AudioButton';

import {getSoundByGame} from '../data/collections';

class SoundsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Sounds Collection'),
    };
  };

  renderSoundButton(sound) {
    return <AudioButton style={styles.btn} key={sound.id} sound={sound} />;
  }

  render() {
    const itemId = this.props.navigation.getParam('id', 0);
    const sounds = getSoundByGame(itemId);
    return (
      <ScrollView>
        <View style={styles.container}>
          {sounds.map(s => this.renderSoundButton(s))}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#EFEFEF',
    padding: 10
  }
});

export default SoundsScreen;
