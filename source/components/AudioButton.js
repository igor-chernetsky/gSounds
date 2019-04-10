import React, {Component} from 'react';
import Sound from 'react-native-sound'
import { connect } from 'react-redux';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImageButton from './ImageButton';

import {addFavorite, removeFavorite} from '../storage/actions/favActions';

Sound.setCategory('Playback');

class AudioButton extends Component {

  onPressHandler = () => {
    const soundFile = new Sound(this.props.sound.uri, Sound.MAIN_BUNDLE,
      err => {
        if (err) {
          console.log(err, this.props.sound.uri);
          return;
        }
        soundFile.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
        soundFile.setVolume(1);
      }
    );
  }

  removeFavorite() {
    this.props.removeFavorite(this.props.sound.id);
  }

  addFavorite() {
    this.props.addFavorite(this.props.sound);
  }

  renderFavoriteButton() {
    if (this.props.favorites.find(f => f.id === this.props.sound.id)) {
      return <Button
        type="outline"
        icon={
            <Icon name="trash" size={15} color="#2089dc" />
          }
        onPress={this.removeFavorite.bind(this)} />;
    } else {
      return <Button
        icon={
            <Icon name="heart" color="#ffffff" />
          }
          onPress={this.addFavorite.bind(this)} />;
    }
  }

  render() {
    return (<View style={styles.container}>
      <ImageButton
      style={this.props.style}
      image={this.props.sound.image}
      title={this.props.sound.name}
      onPress={this.onPressHandler}></ImageButton>
      {this.renderFavoriteButton()}
     </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
});

const mapStateToProps = state => ({
  favorites: state.favoritesReducer.favorites
});

const mapDispatchToProps = dispatch => ({
  addFavorite: item => dispatch(addFavorite(item)),
  removeFavorite: id => dispatch(removeFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AudioButton);