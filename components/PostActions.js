import React, { useState } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PostActions() {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={() => setLiked(!liked)}>
        <Ionicons
          name={liked ? 'heart' : 'heart-outline'}
          color={liked ? '#f44336' : 'black'}
          size={30}
        />
      </Pressable>
      <Pressable style={styles.pressable}>
        <Ionicons name="chatbubble-outline" size={27} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: '',
    paddingLeft: 7,
  },
  pressable: {
    marginHorizontal: 7,
    marginVertical: 3,
  },
});
