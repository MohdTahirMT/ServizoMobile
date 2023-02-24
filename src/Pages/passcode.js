import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  NativeBaseProvider,
  View,
  IconButton,
  Center,
  Text,
  Flex,
  Link,
} from 'native-base';

const Passcode = ({navigation}) => {
  const [code, setCode] = useState('');
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.sectionContainer}>
        <View style={{padding: 10}}>
          <IconButton
            style={{justifyContent: 'flex-start', width: 40}}
            size="sm"
            colorScheme="lightBlue"
            variant="outline"
            _icon={{
              as: AntDesign,
              name: 'arrowleft',
            }}
          />
        </View>
        <View style={styles.logoView}>
          <Center>
            <Text fontSize="3xl" bold>
              Welcome back!
            </Text>
          </Center>
        </View>
        <View>
          <Center>
            <Text>Enter your pin</Text>
          </Center>
        </View>
        <View style={{marginHorizontal: 50}}>
          <OTPInputView
            style={{width: '100%', height: 200}}
            pinCount={4}
            code={code}
            onCodeChanged={codes => setCode(codes)}
            autoFocusOnLoad={false}
            keyboardType="number-pad"
            codeInputFieldStyle={styles.underlineStyleBase}
            onCodeFilled={code => {
              if (code == '1234') {
                navigation.push('bottomTab');
              }
            }}
          />
        </View>
        <View style={{marginHorizontal: 50}}>
          <Flex direction="row" justify="space-between">
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: '#0f9bf0',
              }}
              alignSelf="flex-end"
              mt="1">
              Login with OTP
            </Link>
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: '#0f9bf0',
              }}
              alignSelf="flex-end"
              mt="1">
              Forgot PIN
            </Link>
          </Flex>
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Passcode;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#dae8fd',
  },
  logoView: {
    marginTop: 100,
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

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#0f9bf0',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 20,
  },
});
