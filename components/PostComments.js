import React from 'react';
import { StyleSheet, FlatList, View, Text, ActivityIndicator } from 'react-native';
import Comment from './Comment';
import useFetch from '../hooks/useFetch';

export default function PostComments({ postId }) {
  const { result, loading, error } = useFetch(`/post/${postId}/comment`);

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
    <View>
      <FlatList
        ListHeaderComponent={() => (
          <Text
            style={{
              marginTop: -10,
              marginBottom: 16,
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            Comments
          </Text>
        )}
        data={result.data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Comment comment={item} />}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={() => (
          <View>
            <Text>Nobody commented this post.</Text>
            <Text>Be the first in comment</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  errorContainer: {
    padding: 20,
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#c4c4c4',
  },
});
