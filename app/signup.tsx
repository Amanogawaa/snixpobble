import { Stack, useLocalSearchParams } from 'expo-router';

import { Container } from '@/components/Container';
import { ScreenContent } from '@/components/ScreenContent';

export default function Signup() {
  const { name } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ title: 'Signup' }} />
      
    </>
  );
}
