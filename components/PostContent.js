import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function PostContent({ author, content }) {
  return (
    <Text style={styles.container}>
      <Text style={styles.bold}>
        {author.firstName} {author.lastName}
      </Text>{' '}
      {content}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
});
