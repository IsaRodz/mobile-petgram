import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function PostAuthor({ author }) {
  return (
    <View style={styles.container}>
      <Image style={styles.authorAvatar} source={{ uri: author.picture }} />
      <View>
        <Text style={styles.authorName}>
          {author.firstName} {author.lastName}
        </Text>
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
