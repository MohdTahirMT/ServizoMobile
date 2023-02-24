import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NativeBaseProvider,
  View,
  Flex,
  VStack,
  Text,
  Divider,
  ScrollView,
} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';

const Signup = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.sectionContainer}>
        <View style={{marginTop: 50}}>
          <Flex
            bgColor="#dae8fd"
            p={3}
            borderRadius={10}
            m={3}
            direction="row"
            justify="space-between"
            alignItems="center">
            <VStack space={2}>
              <Text bold>Total balance</Text>
              <Text style={{color: '#1ba5b3'}} bold>
                ₹5300
              </Text>
            </VStack>
            <Entypo name="wallet" size={25} color="black" />
          </Flex>
        </View>
        <ScrollView style={{marginHorizontal: 10, marginTop: 30}}>
          <VStack space={2}>
            <Text m={1} bold>
              History
            </Text>
            <View
              borderWidth={1}
              p={3}
              borderRadius={10}
              borderColor="gray.100">
              <VStack space={2}>
                <Flex
                  direction="row"
                  justify="space-between"
                  alignItems="flex-end">
                  <VStack space={1}>
                    <Text bold>Regular Visit</Text>
                    <Text fontSize="xs" color="gray.500">
                      12 Oct 22, 04:30 - 05:30 PM
                    </Text>
                  </VStack>
                  <Text style={{color: '#1ba5b3'}} bold>
                    ₹530
                  </Text>
                </Flex>
                <Divider />
                <Text color="gray.500" bold fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took.
                </Text>
              </VStack>
            </View>
            <View
              borderWidth={1}
              p={3}
              borderRadius={10}
              borderColor="gray.100">
              <VStack space={2}>
                <Flex
                  direction="row"
                  justify="space-between"
                  alignItems="flex-end">
                  <VStack space={1}>
                    <Text bold>Regular Visit</Text>
                    <Text fontSize="xs" color="gray.500">
                      12 Oct 22, 04:30 - 05:30 PM
                    </Text>
                  </VStack>
                  <Text style={{color: '#1ba5b3'}} bold>
                    ₹530
                  </Text>
                </Flex>
                <Divider />
                <Text color="gray.500" bold fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took.
                </Text>
              </VStack>
            </View>
            <View
              borderWidth={1}
              p={3}
              borderRadius={10}
              borderColor="gray.100">
              <VStack space={2}>
                <Flex
                  direction="row"
                  justify="space-between"
                  alignItems="flex-end">
                  <VStack space={1}>
                    <Text bold>Regular Visit</Text>
                    <Text fontSize="xs" color="gray.500">
                      12 Oct 22, 04:30 - 05:30 PM
                    </Text>
                  </VStack>
                  <Text style={{color: '#1ba5b3'}} bold>
                    ₹530
                  </Text>
                </Flex>
                <Divider />
                <Text color="gray.500" bold fontSize="xs">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took.
                </Text>
              </VStack>
            </View>
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
