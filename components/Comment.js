import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { format } from 'timeago.js';

export default function Comment({ comment }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: comment.owner.picture }} style={styles.avatar} />
      <View>
        <Text style={{ fontWeight: 'bold' }}>
          {comment.owner.firstName} {comment.owner.lastName}
        </Text>
        <Text style={{ fontSize: 16 }}>{comment.message}</Text>
        <Text style={{ color: '#7a7a7a' }}>{format(comment.publishDate)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
});
