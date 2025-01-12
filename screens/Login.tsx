import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import useStore from '../global/zustand';

const Login = () => {
  const {updateIsLoggedIn} = useStore((state: any) => state);
  const {width} = useWindowDimensions();
  return (
    <View className="flex-1 justify-center items-center bg-[#FF6EC7]">
      <Image
        source={require('../assets/images/pinklogo.png')}
        style={{
          width: width - 50,
          height: 300,
        }}
        resizeMode="contain"
      />
      <TouchableOpacity
        onPress={() => updateIsLoggedIn(true)}
        className="bg-white rounded-full px-6 py-4 w-[250px]">
        <Text className="text-black font-[400] text-[20px] text-center">
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
