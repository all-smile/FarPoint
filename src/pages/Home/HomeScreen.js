import { View, Text, Button } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      ></Button>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!', headerTitleAlign: 'center' })}
      />
    </View>
  );
}
