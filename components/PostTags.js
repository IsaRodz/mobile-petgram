import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function PostTags({ tags, onPress }) {
  return (
    <View style={styles.chipContainer}>
      {tags.map((tag, index) => (
        <Pressable key={index} onPress={() => onPress(tag)}>
          <View style={styles.chip}>
            <Text style={{ color: '#7a7a7a' }}>#{tag}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    marginTop: 4,
    marginBottom: 8,
  },
  chip: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 4,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 16,
  },
});
