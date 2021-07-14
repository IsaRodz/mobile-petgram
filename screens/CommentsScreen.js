import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TextInput,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Comment from '../components/Comment';
import useFetch from '../hooks/useFetch';

const defaultAvatar =
  'https://api-private.atlassian.com/users/71d3229d8e428d7c0d9ba95804f45317/avatar';

export default function CommentsScreen() {
  const { postId } = useRoute().params;
  const { result, loading, error } = useFetch(`/post/${postId}/comment`);

  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setComments(result.data);
  }, [result]);

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

  const addComment = () => {
    setComments([
      ...comments,
      {
        id: '123abc',
        owner: {
          firstName: 'Unknown user',
          picture: defaultAvatar,
        },
        message: message,
      },
    ]);
    setMessage('');
  };

  const renderComment = ({ item }) => <Comment comment={item} />;

  const emptyList = () => (
    <View style={{ alignItems: 'center', paddingTop: 70 }}>
      <Text style={{ fontSize: 16 }}>Nobody commented on this post</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={comments}
        keyExtractor={item => item.id}
        renderItem={renderComment}
        ListEmptyComponent={emptyList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Type a comment..."
          value={message}
          onChangeText={text => setMessage(text)}
        />
        {message.trim().length ? (
          <Pressable onPress={addComment}>
            <Ionicons name="send" size={24} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#717171',
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: '#f1f1f1',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
});
