import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NativeBaseProvider,
  View,
  Flex,
  VStack,
  Text,
  Badge,
  ScrollView,
  Divider,
  Button,
  Center,
} from 'native-base';

const Signup = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.sectionContainer}>
        <View style={{marginTop: 50}}>
          <Center>
            <Text fontSize="lg" bold>
              Bookings List
            </Text>
          </Center>
        </View>
        <ScrollView style={{marginHorizontal: 10, marginTop: 30}}>
          <VStack space={2}>
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
                    <Text style={{color: '#1ba5b3'}} bold>
                      #56730
                    </Text>
                    <Text bold>Regular Visit</Text>
                    <Text fontSize="xs" color="gray.500">
                      12 Oct 22, 04:30 - 05:30 PM
                    </Text>
                  </VStack>
                  <VStack space={4}>
                    <Badge colorScheme="info">Accepted</Badge>
                    <Text bold>₹530</Text>
                  </VStack>
                </Flex>
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
                    <Text style={{color: '#1ba5b3'}} bold>
                      #56730
                    </Text>
                    <Text bold>Regular Visit</Text>
                    <Text fontSize="xs" color="gray.500">
                      12 Oct 22, 04:30 - 05:30 PM
                    </Text>
                  </VStack>
                  <VStack space={4}>
                    <Badge colorScheme="success">Booked</Badge>
                    <Text bold>₹530</Text>
                  </VStack>
                </Flex>
                <Divider />
                <Button colorScheme="danger">Cancel Booking</Button>
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
                    <Text style={{color: '#1ba5b3'}} bold>
                      #56730
                    </Text>
                    <Text bold>Regular Visit</Text>
                    <Text fontSize="xs" color="gray.500">
                      12 Oct 22, 04:30 - 05:30 PM
                    </Text>
                  </VStack>
                  <VStack space={4}>
                    <Badge colorScheme="info">Accepted</Badge>
                    <Text bold>₹530</Text>
                  </VStack>
                </Flex>
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
                    <Text style={{color: '#1ba5b3'}} bold>
                      #56730
                    </Text>
                    <Text bold>Regular Visit</Text>
                    <Text fontSize="xs" color="gray.500">
                      12 Oct 22, 04:30 - 05:30 PM
                    </Text>
                  </VStack>
                  <VStack space={4}>
                    <Badge colorScheme="success">Booked</Badge>
                    <Text bold>₹530</Text>
                  </VStack>
                </Flex>
                <Divider />
                <Button colorScheme="danger">Cancel Booking</Button>
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
