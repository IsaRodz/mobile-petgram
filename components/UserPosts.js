import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import useFetch from '../hooks/useFetch';
import PostCard from './PostCard';

export default function UserPosts({ userId }) {
  const { result, loading } = useFetch(`/user/${userId}/post`);

  if (loading) {
    return <ActivityIndicator size={45} color="black" style={{ margin: 70 }} />;
  }

  return (
    <View>
      {result.data.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
