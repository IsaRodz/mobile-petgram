import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PostAuthor({ author }) {
  const navigation = useNavigation();

  const goToAuthorScreen = () => {
    navigation.push('Profile', { userId: author.id });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={goToAuthorScreen}>
        <Image style={styles.authorAvatar} source={{ uri: author.picture }} />
      </Pressable>
      <View>
        <Pressable onPress={goToAuthorScreen}>
          <Text style={styles.authorName}>
            {author.firstName} {author.lastName}
          </Text>
        </Pressable>
        <Text style={styles.authorEmail}>{author.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  authorName: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  authorEmail: {
    color: '#717171',
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
});
