import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

export default function PostImage({ image }) {
  return <Image source={{ uri: image }} style={styles.postImage} />;
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  postImage: {
    width: width,
    height: width,
    marginVertical: 8,
    zIndex: 0,
  },
});
