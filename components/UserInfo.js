import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import useFetch from '../hooks/useFetch';

// TODO: Add `see posts` button

export default function UserInfo({ userId }) {
  const { result, loading, error } = useFetch(`/user/${userId}`);

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
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: result.picture }} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>
            {result.firstName} {result.lastName}
          </Text>
          <Text style={styles.regularText}>{result.email}</Text>
        </View>
      </View>
      <View style={[styles.row, styles.iconRow]}>
        <View style={[styles.iconContainer, { marginRight: 16 }]}>
          <Entypo name="location-pin" size={24} />
          <Text style={styles.iconText}>
            {result.location.city}, {result.location.country}
          </Text>
        </View>
        <View style={[styles.iconContainer, { marginRight: 16 }]}>
          <Entypo name="phone" size={24} />
          <Text style={styles.iconText}>{result.phone}</Text>
        </View>
      </View>
    </View>
  );
}

const imageSize = 60;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    marginRight: 16,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  regularText: {
    color: '#7a7a7a',
    fontSize: 16,
  },
  iconRow: { marginTop: 16, justifyContent: 'space-around', alignItems: 'flex-start' },
  iconContainer: {
    alignItems: 'center',
    flex: 1,
  },
  iconText: {
    marginTop: 6,
    textAlign: 'center',
    color: '#7a7a7a',
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
