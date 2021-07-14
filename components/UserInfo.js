import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function UserInfo({ user }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image source={{ uri: user.picture }} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>
            {user.firstName} {user.lastName}
          </Text>
          <Text style={styles.regularText}>{user.email}</Text>
        </View>
      </View>
      <View style={[styles.row, styles.iconRow]}>
        <View style={styles.iconContainer}>
          <Entypo name="location-pin" size={24} />
          <Text style={styles.iconText}>
            {user.location.city}, {user.location.country}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Entypo name="phone" size={24} />
          <Text style={styles.iconText}>{user.phone}</Text>
        </View>
      </View>
    </View>
  );
}

const imageSize = 60;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
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
  iconRow: {
    marginTop: 16,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  iconContainer: {
    alignItems: 'center',
    flex: 1,
  },
  iconText: {
    marginTop: 6,
    textAlign: 'center',
    color: '#7a7a7a',
  },
});
