import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

export default function PostImage({ image }) {
  return <Image source={{ uri: image }} style={styles.postImage} />;
}

const styles = StyleSheet.create({
  postImage: {
    width: null,
    height: Dimensions.get('window').width,
    marginVertical: 8,
  },
});
