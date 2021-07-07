import React, { useState, useRef } from 'react';
import { StyleSheet, Pressable, View, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import PostComments from './PostComments';

export default function PostActions({ likes, postId }) {
  const [liked, setLiked] = useState(false);
  const bs = useRef();

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Pressable style={styles.pressable} onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            color={liked ? '#f44336' : 'black'}
            size={30}
          />
        </Pressable>
        <Pressable style={styles.pressable} onPress={() => bs.current.open()}>
          <Ionicons name="chatbubble-outline" size={27} />
        </Pressable>
      </View>
      <Text style={styles.text}>Liked by {likes} people</Text>

      <RBSheet ref={bs} closeOnDragDown={true}>
        <PostComments postId={postId} />
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
  },
  buttons: {
    flexDirection: 'row',
  },
  pressable: {
    marginRight: 14,
    marginVertical: 3,
  },
  text: {
    fontWeight: 'bold',
  },
});
