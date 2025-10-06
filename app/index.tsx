import { Button, Input, View, YStack, Text } from 'tamagui';

export default function Login() {
  return (
    <View flex={1} justifyContent="center" alignItems="center" padding="$4">
    <YStack space="$4" width="80%">
      <Text fontSize="$6" fontWeight="bold" textAlign="center">
        Login
      </Text>

      <Input
        placeholder="Email"
        keyboardType="email-address"
      />

      <Input
        placeholder="Password"
        secureTextEntry
      />

      <Button borderColor={'red'}>
        Sign In
      </Button>
    </YStack>
  </View>
  );
}
