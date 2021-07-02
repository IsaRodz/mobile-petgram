import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import UserInfo from './UserInfo';

export default function PostAuthor({ author }) {
  const sheetRef = useRef(null);

  const handlePress = () => {
    sheetRef.current.open();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => handlePress()}>
        <Image style={styles.authorAvatar} source={{ uri: author.picture }} />
      </Pressable>
      <View>
        <Pressable onPress={() => handlePress()}>
          <Text style={styles.authorName}>
            {author.firstName} {author.lastName}
          </Text>
        </Pressable>
        <Text style={styles.authorEmail}>{author.email}</Text>
      </View>
      <RBSheet ref={sheetRef} closeOnDragDown={true}>
        <UserInfo userId={author.id} />
      </RBSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  authorName: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  authorEmail: {
    color: '#717171',
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 10,
  },
});
