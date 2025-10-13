import { Text, View } from "react-native"

const Header = () => {
    return (
        <View className="w-full py-5 px-4">
            <Text className="text-2xl text-gray-600 leading-relaxed">
                welcome,
            </Text>
            <Text className="text-4xl font-bold">Laundering Hello</Text>
        </View>
    )
}

export default Header
