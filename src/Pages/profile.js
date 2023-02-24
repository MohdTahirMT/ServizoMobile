import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NativeBaseProvider,
  View,
  Center,
  Flex,
  HStack,
  VStack,
  Button,
  Text,
  Divider,
  ScrollView,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Signup = ({navigation}) => {
  const profile = require('../assets/images/user-profile.png');

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.sectionContainer}>
        <View style={{marginTop: 100}}>
          <Center>
            <VStack space="2" alignItems="center">
              <Image source={profile} />
              <Text bold>Admin MT</Text>
              <Text>admin@admin.com</Text>
              <Button colorScheme="lightBlue" variant="outline">
                Edit Profile
              </Button>
            </VStack>
          </Center>
        </View>
        <ScrollView style={{marginHorizontal: 10, marginTop: 30}}>
          <VStack space={2}>
            <Text m={1} bold>
              Profile
            </Text>
            <Flex
              m={1}
              direction="row"
              justify="space-between"
              alignItems="center">
              <HStack space={2}>
                <AntDesign name="retweet" size={20} color="black" />
                <Text bold>Register as a partner</Text>
              </HStack>
              <AntDesign name="right" size={15} color="black" />
            </Flex>
            <Divider />
            <Flex
              m={1}
              direction="row"
              justify="space-between"
              alignItems="center">
              <HStack space={2}>
                <AntDesign name="retweet" size={20} color="black" />
                <Text bold>My bookings</Text>
              </HStack>
              <AntDesign name="right" size={15} color="black" />
            </Flex>
            <Divider />
            <Flex
              m={1}
              direction="row"
              justify="space-between"
              alignItems="center">
              <HStack space={2}>
                <AntDesign name="retweet" size={20} color="black" />
                <Text bold>Manage Addresses</Text>
              </HStack>
              <AntDesign name="right" size={15} color="black" />
            </Flex>
            <Divider />
            <Flex
              m={1}
              direction="row"
              justify="space-between"
              alignItems="center">
              <HStack space={2}>
                <AntDesign name="retweet" size={20} color="black" />
                <Text bold>About Us</Text>
              </HStack>
              <AntDesign name="right" size={15} color="black" />
            </Flex>
            <Divider />
            <Flex
              m={1}
              direction="row"
              justify="space-between"
              alignItems="center">
              <HStack space={2}>
                <AntDesign name="retweet" size={20} color="black" />
                <Text bold>Support</Text>
              </HStack>
              <AntDesign name="right" size={15} color="black" />
            </Flex>
            <Divider />
            <Flex
              m={1}
              direction="row"
              justify="space-between"
              alignItems="center">
              <HStack space={2}>
                <AntDesign name="retweet" size={20} color="black" />
                <Text bold>Share & Earn</Text>
              </HStack>
              <AntDesign name="right" size={15} color="black" />
            </Flex>
            <Divider />
            <Flex
              m={1}
              direction="row"
              justify="space-between"
              alignItems="center">
              <HStack space={2}>
                <AntDesign name="retweet" size={20} color="black" />
                <Text bold>Rate us</Text>
              </HStack>
              <AntDesign name="right" size={15} color="black" />
            </Flex>
            <Divider />
            <Flex
              m={1}
              direction="row"
              justify="space-between"
              alignItems="center">
              <HStack space={2}>
                <AntDesign name="retweet" size={20} color="black" />
                <Text bold>FAQ's</Text>
              </HStack>
              <AntDesign name="right" size={15} color="black" />
            </Flex>
            <Divider />
            <Flex
              m={1}
              direction="row"
              justify="space-between"
              alignItems="center">
              <HStack space={2}>
                <AntDesign name="retweet" size={20} color="black" />
                <Text bold>Privacy Policy</Text>
              </HStack>
              <AntDesign name="right" size={15} color="black" />
            </Flex>
            <Divider />
            <Flex
              m={1}
              direction="row"
              justify="space-between"
              alignItems="center">
              <HStack space={2}>
                <AntDesign name="retweet" size={20} color="black" />
                <Text bold>Logout</Text>
              </HStack>
              <AntDesign name="right" size={15} color="black" />
            </Flex>
            <Divider />
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Signup;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
