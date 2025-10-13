import { Dimensions, Text, useWindowDimensions, View } from "react-native"

const PickUpItems = ({ item }) => {
    const { width } = Dimensions.get('screen')
    console.log(width)

    return (
        <View className="p-4 mb-4 bg-white rounded-lg shadow-sm border border-gray-200" style={{ width: width }}>
            <Text className="text-2xl text-center">{item.name}</Text>
        </View>
    )
}

export default PickUpItems
