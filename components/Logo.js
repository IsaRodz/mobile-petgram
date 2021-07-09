import React from 'react';
import { View, Image } from 'react-native';

export default function Logo() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        paddingTop: 32,
        paddingBottom: 8,
        alignItems: 'center',
        elevation: 1,
      }}
    >
      <Image
        resizeMode="center"
        source={require('../assets/logo.png')}
        style={{ height: 50, width: 160 }}
      />
    </View>
  );
}
