/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

export const App = () => {
  const [count,setCount] = useState(0);
  return (
    <View>
      <Text>Hello World : {count}</Text>
      <Button title="button" onPress= {() => {
        setCount(count+1);
      }}></Button>
    </View>
  );
};

