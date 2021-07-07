import React, { useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Comment from './Comment';
import useFetch from '../hooks/useFetch';

//  TODO: allow make a fake comment in the post

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

  const listHeader = () => <Text style={styles.listHeader}>Comments</Text>;

  const renderComment = ({ item }) => <Comment comment={item} />;

  const emptyList = () => (
    <View style={{ alignItems: 'center' }}>
      <Text>Nobody commented this post</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={listHeader}
        data={result.data}
        keyExtractor={item => item.id}
        renderItem={renderComment}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={emptyList}
      />
      <View style={styles.inputContainer}>
        <TextInput style={{ flex: 1 }} placeholder="Type a comment..." />
        <Pressable onPress={() => alert('Sorry, no implemented yet')}>
          <Ionicons name="send" size={24} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    flexGrow: 1,
  },
  errorContainer: {
    padding: 20,
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#c4c4c4',
  },
  listHeader: {
    marginBottom: 16,
    fontSize: 22,
    fontWeight: 'bold',
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
  },
});
