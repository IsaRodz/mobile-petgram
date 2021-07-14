import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import useFetch from '../hooks/useFetch';
import UserPosts from '../components/UserPosts';
import UserInfo from '../components/UserInfo';

export default function ProfileScreen() {
  const { userId } = useRoute().params;
  const { setOptions } = useNavigation();
  const { result, loading, error } = useFetch(`/user/${userId}`);

  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    if (!loading && !error) {
      setOptions({ title: `${result.firstName} ${result.lastName}` });
    }
  }, [loading]);

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
    <ScrollView style={styles.container}>
      <UserInfo user={result} />
      {!showPosts ? (
        <Pressable style={styles.button} onPress={() => setShowPosts(true)}>
          <Text style={{ color: '#414141' }}>Show posts</Text>
        </Pressable>
      ) : (
        <UserPosts userId={userId} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
  },
  button: {
    alignItems: 'center',
    margin: 24,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
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
