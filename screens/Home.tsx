import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../Navigation';
import {FlashList} from '@shopify/flash-list';

export interface ItemProps {
  data: {
    refId: string;
    transferDate: string;
    recipientName: string;
    transferName: string;
    amount: number;
  };
}

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: Props) => {
  const insets = useSafeAreaInsets();
  const {width} = useWindowDimensions();

  const response = {
    data: [
      {
        refId: '123ABC',
        transferDate: '2024-10-15T12:34:56Z', // Mock transfer date in UTC
        recipientName: 'John Doe',
        transferName: 'Salary Payment',
        amount: 1500.0,
      },
      {
        refId: '456DEF',
        transferDate: '2024-09-21T09:12:45Z', // Mock transfer date in UTC
        recipientName: 'Jane Smith',
        transferName: 'Invoice Payment',
        amount: 2300.75,
      },
      {
        refId: '789GHI',
        transferDate: '2024-10-05T16:18:30Z', // Mock transfer date in UTC
        recipientName: 'Robert Brown',
        transferName: 'Refund',
        amount: -500.0, // Negative amount for a refund
      },
      {
        refId: '101JKL',
        transferDate: '2024-08-30T11:47:22Z', // Mock transfer date in UTC
        recipientName: 'Emily Davis',
        transferName: 'Bonus Payment',
        amount: 1200.0,
      },
    ],
  };

  const RenderTransactions = ({data}: ItemProps) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('TransactionDetails', {
          data: data,
        });
      }}
      className="flex-row justify-between items-center mb-6">
      <Text className="text-black text-[18px]">{data.transferName}</Text>

      <View className="flex-row justify-between items-center">
        <Text
          className="text-black text-[16px] font-semibold mr-4"
          style={{
            color: data.amount.toString().charAt(0) === '-' ? 'red' : '#27ae60',
          }}>
          {data.amount.toFixed(2)}
        </Text>
        <View className="px-3 py-1 bg-gray-100 rounded-lg">
          <Text className="text-black text-[16px] font-[400]">View</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      className="flex-1 justify-center items-center bg-[#FF6EC7]"
      style={{paddingTop: insets.top}}>
      <View className="flex-1 w-full px-4 py-6 ">
        <View className="w-full justify-center items-center">
          <Image
            source={require('../assets/images/pinklogo.png')}
            style={{
              width: width - 50,
              height: 300,
            }}
            resizeMode="contain"
          />
        </View>
        <View className="bg-white w-full rounded-[20px] p-6 mb-4">
          <Text className="text-black font-bold text-[18px] mb-6">
            Mr Ahmad Nuzul Asrar{' '}
          </Text>
          <Text className="text-black font-[400] text-[16px] mb-1">
            Total Balance:
          </Text>
          <View className="flex-row w-full items-center">
            <Text className="text-black font-semibold text-[18px]">
              RM <Text className="text-[18px]">9,388.57</Text>
            </Text>
          </View>
        </View>
        <View className="bg-white w-full rounded-[20px] p-6 mb-6">
          <Text className="text-black font-bold text-[18px] mb-6">
            Latest Transactions
          </Text>
          <View style={{width: '100%', height: 200}}>
            <FlashList
              bounces={false}
              data={response.data ? response.data : []}
              renderItem={({item}: any) => <RenderTransactions data={item} />}
              keyExtractor={(item: any) => item.refId}
              estimatedItemSize={5}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
