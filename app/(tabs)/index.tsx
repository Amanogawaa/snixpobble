import Carousel from '@/components/Carousel';
import Header from '@/components/Header';
import { ScrollView, View } from 'react-native';

export default function Home() {
    return (

        <View className='w-full h-full'>
            <Header />
            <Carousel />

            {/* <CustomerSearch />

            <PickUpOrders /> */}
            <View />
        </View>
    );
}
