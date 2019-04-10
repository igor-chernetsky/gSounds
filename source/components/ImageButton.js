import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View, StyleSheet} from 'react-native';

class ImageButton extends Component {
  renderText() {
    if (this.props.title) {
      return <View style={styles.absoluteView}>
        <Text style={styles.caption}>{this.props.title}</Text>
      </View>;
    }
  }

  renderImage() {
    if (this.props.image) {
      return <Image source={this.props.image}  style={styles.img}/>
    }
  }

  render() {
    const buttonStyle = {...styles.btn, ...this.props.style};
    return (<TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
        {this.renderImage()}
        {this.renderText()}
    </TouchableOpacity>);
  }
}

const styles = StyleSheet.create({
  absoluteView: {
    flex: 1,
    textAlign: 'center',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100%',
    height: '100%',
    borderRadius: 8
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  caption: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  btn: {
    width: 100,
    height: 100,
    marginBottom: 10
  }
});

export default ImageButton;