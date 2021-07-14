import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import PostCard from '../components/PostCard';
import useFetch from '../hooks/useFetch';

export default function FeedScreen() {
  const [resource, setResource] = useState('/post');
  const { result, loading, error } = useFetch(resource);

  const handlePressTag = tag => {
    setResource(`/tag/${tag}/post`);
  };

  const renderItem = ({ item }) => {
    return <PostCard post={item} onPressTag={handlePressTag} />;
  };

  if (loading) {
    return <ActivityIndicator size={45} color="black" style={{ margin: 70 }} />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Sorry, something went wrong :c</Text>
      </View>
    );
  }

  return (
    <View style={styles.feedContainer}>
      <FlatList data={result.data} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ba68c8',
  },
  errorText: {
    fontSize: 24,
    color: 'white',
  },
});
