import React, { useState, useRef } from 'react';
import { StyleSheet, Pressable, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PostActions({ likes, postId }) {
  const [liked, setLiked] = useState(false);
  const navigation = useNavigation();

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
        <Pressable
          style={styles.pressable}
          onPress={() => {
            navigation.push('Comments', { postId });
          }}
        >
          <Ionicons name="chatbubble-outline" size={27} />
        </Pressable>
      </View>
      <Text style={styles.text}>Liked by {likes} people</Text>
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
