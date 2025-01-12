import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {ItemProps} from './Home';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';
import Share from 'react-native-share';

type Props = NativeStackScreenProps<RootStackParamList, 'TransactionDetails'>;

const TransactionDetails = ({route, navigation}: Props) => {
  const insets = useSafeAreaInsets();
  const {data}: any = route.params;

  function formatUTCDate(dateString: string) {
    const date = new Date(dateString);

    let hours = date.getUTCHours();
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getUTCFullYear();

    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format, and handle midnight (0 hours)

    return `${hours}:${minutes}:${seconds} ${period} ${day}/${month}/${year}`;
  }

  const options = {
    title: `Transaction Details`,
    message: `AEON Transaction Details \n
    Reference ID: ${data.refId} \n 
    Recipient's Name: ${formatUTCDate(data.transferDate)} \n 
    Reference ID: ${data.recipientName} \n 
    Transfer Name: ${data.transferName} \n 
    Amount: ${data.amount.toFixed()} \n
    `,
    url: `https://www.examplebank.com.my/transaction/${data.refId}`,
  };

  const ShareDetails = () => {
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <View
      className="flex-1 justify-start items-center bg-[#FF6EC7]"
      style={{paddingTop: insets.top}}>
      <View className="w-full bg-white px-6 py-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-black font-semibold text-[20px]">Go Back</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 w-full px-4 py-6 ">
        <View className="bg-white w-full rounded-[20px] p-6 mb-6">
          <Text className="text-black font-bold text-[20px] mb-8">
            Transaction Details
          </Text>
          <View className="w-full flex-row justify-between items-center mb-3">
            <View style={{width: '50%'}}>
              <Text className="text-black font-bold text-[18px]">Ref ID</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text className="text-black font-normal text-[18px]">
                {data?.refId}
              </Text>
            </View>
          </View>
          <View className="w-full flex-row justify-between items-center mb-3">
            <View style={{width: '50%'}}>
              <Text className="text-black font-bold text-[18px]">
                Transfer Date
              </Text>
            </View>
            <View style={{width: '50%'}}>
              <Text className="text-black font-normal text-[18px]">
                {formatUTCDate(data?.transferDate)}
              </Text>
            </View>
          </View>
          <View className="w-full flex-row justify-between items-center mb-3">
            <View style={{width: '50%'}}>
              <Text className="text-black font-bold text-[18px]">
                Recepient Name
              </Text>
            </View>
            <View style={{width: '50%'}}>
              <Text className="text-black font-normal text-[18px]">
                {data?.recipientName}
              </Text>
            </View>
          </View>
          <View className="w-full flex-row justify-between items-center mb-3">
            <View style={{width: '50%'}}>
              <Text className="text-black font-bold text-[18px]">
                Transfer Name
              </Text>
            </View>
            <View style={{width: '50%'}}>
              <Text className="text-black font-normal text-[18px]">
                {data?.transferName}
              </Text>
            </View>
          </View>
          <View className="w-full flex-row justify-between items-center">
            <View style={{width: '50%'}}>
              <Text className="text-black font-bold text-[18px]">Amount</Text>
            </View>
            <View style={{width: '50%'}}>
              <Text className="text-black font-normal text-[18px]">
                {data?.amount.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            ShareDetails();
          }}
          className="w-full bg-white rounded-full px-6 py-4">
          <Text className="text-black font-[400] text-[20px] text-center">
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransactionDetails;

const styles = StyleSheet.create({});
