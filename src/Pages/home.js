import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeBaseProvider, View, Center, Text} from 'native-base';

const Home = ({navigation}) => {
  const logo = require('../assets/images/servizo_logo.png');

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.sectionContainer}>
        <View style={styles.logoView}>
          <Center>
            <Image source={logo} />
          </Center>
        </View>
        <View style={styles.logoView}>
          <Center>
            <Text>Welcome to Servizo</Text>
          </Center>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Home;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#dae8fd',
  },
  logoView: {
    marginVertical: 50,
  },
});
