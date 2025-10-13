import items from "@/items"
import { FlatList, Text, View } from "react-native"
import PickUpItems from "./PickupItems"

const Carousel = () => {
    console.log(items)

    if (!items || items.length === 0) {
        return <Text>No items to display</Text>;
    }
    return (
        <View className="border border-red-500 flex-1">
            <FlatList
                data={items}
                renderItem={({ item }) => <PickUpItems item={item} />}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                className="flex-1"
                horizontal
                pagingEnabled
                disableIntervalMomentum
                contentContainerStyle={{ alignItems: 'flex-start' }}
                bounces={false}
                decelerationRate={'fast'}
                style={{ flex: 1 }}
            />
        </View>

    )
}

export default Carousel
