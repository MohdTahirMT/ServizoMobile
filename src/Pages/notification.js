import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NativeBaseProvider,
  View,
  Flex,
  VStack,
  Text,
  ScrollView,
  Divider,
  Center,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Signup = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.sectionContainer}>
        <View style={{marginTop: 50}}>
          <Center>
            <Text fontSize="lg" bold>
              Notifications
            </Text>
          </Center>
        </View>
        <Divider mt={4} />
        <ScrollView style={{marginHorizontal: 10, marginTop: 30}}>
          <VStack space={2}>
            <Flex direction="row" justify="space-between" alignItems="center">
              <AntDesign name="retweet" size={25} color="black" />
              <VStack width="75%">
                <Text bold>Please, pay to our service providor</Text>
                <Text fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </Text>
              </VStack>
              <Text color="gray.400" bold>
                Today
              </Text>
            </Flex>
            <Divider />
            <Flex direction="row" justify="space-between" alignItems="center">
              <AntDesign name="retweet" size={25} color="black" />
              <VStack width="75%">
                <Text bold>Please, pay to our service providor</Text>
                <Text fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </Text>
              </VStack>
              <Text color="gray.400" bold>
                Today
              </Text>
            </Flex>
            <Divider />
            <Flex direction="row" justify="space-between" alignItems="center">
              <AntDesign name="retweet" size={25} color="black" />
              <VStack width="75%">
                <Text bold>Please, pay to our service providor</Text>
                <Text fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </Text>
              </VStack>
              <Text color="gray.400" bold>
                Today
              </Text>
            </Flex>
            <Divider />
            <Flex direction="row" justify="space-between" alignItems="center">
              <AntDesign name="retweet" size={25} color="black" />
              <VStack width="75%">
                <Text bold>Please, pay to our service providor</Text>
                <Text fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </Text>
              </VStack>
              <Text color="gray.400" bold>
                Today
              </Text>
            </Flex>
            <Divider />
            <Flex direction="row" justify="space-between" alignItems="center">
              <AntDesign name="retweet" size={25} color="black" />
              <VStack width="75%">
                <Text bold>Please, pay to our service providor</Text>
                <Text fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </Text>
              </VStack>
              <Text color="gray.400" bold>
                Today
              </Text>
            </Flex>
            <Divider />
            <Flex direction="row" justify="space-between" alignItems="center">
              <AntDesign name="retweet" size={25} color="black" />
              <VStack width="75%">
                <Text bold>Please, pay to our service providor</Text>
                <Text fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </Text>
              </VStack>
              <Text color="gray.400" bold>
                Today
              </Text>
            </Flex>
            <Divider />
            <Flex direction="row" justify="space-between" alignItems="center">
              <AntDesign name="retweet" size={25} color="black" />
              <VStack width="75%">
                <Text bold>Please, pay to our service providor</Text>
                <Text fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </Text>
              </VStack>
              <Text color="gray.400" bold>
                Today
              </Text>
            </Flex>
            <Divider />
            <Flex direction="row" justify="space-between" alignItems="center">
              <AntDesign name="retweet" size={25} color="black" />
              <VStack width="75%">
                <Text bold>Please, pay to our service providor</Text>
                <Text fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </Text>
              </VStack>
              <Text color="gray.400" bold>
                Today
              </Text>
            </Flex>
            <Divider />
            <Flex direction="row" justify="space-between" alignItems="center">
              <AntDesign name="retweet" size={25} color="black" />
              <VStack width="75%">
                <Text bold>Please, pay to our service providor</Text>
                <Text fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </Text>
              </VStack>
              <Text color="gray.400" bold>
                Today
              </Text>
            </Flex>
            <Divider />
            <Flex direction="row" justify="space-between" alignItems="center">
              <AntDesign name="retweet" size={25} color="black" />
              <VStack width="75%">
                <Text bold>Please, pay to our service providor</Text>
                <Text fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{' '}
                </Text>
              </VStack>
              <Text color="gray.400" bold>
                Today
              </Text>
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
