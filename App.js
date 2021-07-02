import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import Logo from './components/Logo';
import PostCard from './components/PostCard';
import useFetch from './hooks/useFetch';

export default function App() {
  const { result, loading, error } = useFetch('/post');

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
      <Logo />
      <FlatList data={result.data} renderItem={renderItem} />
    </View>
  );
}

const renderItem = ({ item }) => {
  return <PostCard post={item} />;
};

const styles = StyleSheet.create({
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
  feedContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
