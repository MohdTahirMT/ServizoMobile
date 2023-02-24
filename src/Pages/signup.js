import React, {useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NativeBaseProvider,
  View,
  Center,
  FormControl,
  Input,
  VStack,
  Button,
  Checkbox,
  Text,
  useToast,
  Toast,
} from 'native-base';

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const logo = require('../assets/images/servizo_logo.png');
  const toast = useToast();

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.sectionContainer}>
        <View style={styles.logoView}>
          <Center>
            <Image source={logo} />
          </Center>
        </View>
        <View style={styles.inputsContainer}>
          <VStack space="2">
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                backgroundColor="#fff"
                focusOutlineColor="#0f9bf0"
                placeholder="Enter Name"
                onChangeText={val => setName(val)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Email ID</FormControl.Label>
              <Input
                backgroundColor="#fff"
                focusOutlineColor="#0f9bf0"
                placeholder="Enter Email ID"
                keyboardType="email-address"
                onChangeText={val => setEmail(val)}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Mobile no</FormControl.Label>
              <Input
                backgroundColor="#fff"
                focusOutlineColor="#0f9bf0"
                placeholder="Enter Mobile no"
                keyboardType="number-pad"
                maxLength={10}
                onChangeText={val => setMobileNo(val)}
              />
            </FormControl>
            <Checkbox
              colorScheme="lightBlue"
              defaultIsChecked={true}
              marginTop={1}
              value="TermAndPrivary">
              <Text>I accept terms & condition and privacy policy.</Text>
            </Checkbox>
          </VStack>
        </View>
        <View style={styles.confirmButtonView}>
          <Button
            colorScheme="lightBlue"
            onPress={() => {
              if (name && email && mobileNo) {
                navigation.push('passcode');
              } else {
                Toast.show({
                  title: 'Please complete all fields!',
                  placement: 'top',
                });
              }
            }}>
            Confirm
          </Button>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Signup;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#dae8fd',
  },
  logoView: {
    marginVertical: 50,
  },
  inputsContainer: {
    marginHorizontal: 15,
  },
  confirmButtonView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    margin: 20,
  },
});
