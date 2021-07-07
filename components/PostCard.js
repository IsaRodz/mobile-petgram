import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import PostAuthor from './PostAuthor';
import PostImage from './PostImage';
import PostActions from './PostActions';
import PostContent from './PostContent';
import PostTags from './PostTags';
import { format } from 'timeago.js';

export default function PostCard({ post, onPressTag }) {
  return (
    <View style={styles.postCard}>
      <PostAuthor author={post.owner} />
      <PostImage image={post.image} />
      <PostActions likes={post.likes} postId={post.id} />
      <PostTags tags={post.tags} onPress={onPressTag} />
      <PostContent author={post.owner} content={post.text} />
      <Text style={styles.date}>{format(post.publishDate)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postCard: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#f1f1f1',
    borderBottomColor: '#f1f1f1',
    marginBottom: 10,
    paddingVertical: 10,
  },
  postContent: {
    paddingHorizontal: 16,
  },
  date: {
    color: '#7a7a7a',
    textTransform: 'uppercase',
    marginTop: 8,
    paddingHorizontal: 14,
  },
});
