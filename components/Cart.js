import {
  AspectRatio,
  Button,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const Cart = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <VStack
      alignItems="flex-start"
      bg={bgColor}
      boxSize="full"
      p={10}
      spacing={10}
    >
      <VStack alignItems="flex-start">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If price is too hard on your eyes,{" "}
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme
          </Button>
        </Text>
      </VStack>
      <HStack alignItems="center" justifyContent="space-between" w="full">
        <HStack columnGap={3}>
          <AspectRatio ratio={1} w={24}>
            <Image
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </AspectRatio>
          <Stack alignItems="flex-start">
            <Text fontWeight="bold">Penny Board</Text>
            <Text>P12648SJ7124</Text>
          </Stack>
        </HStack>
        <Heading size="sm">$120.00</Heading>
      </HStack>
      <VStack alignItems="stretch" w="full" spacing={4}>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Shipping</Text>
          <Heading size="sm">$111.90</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Subtotal</Text>
          <Heading size="sm">$222.90</Heading>
        </HStack>
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Taxes</Text>
          <Heading size="sm">$2.90</Heading>
        </HStack>
        <Divider />
        <HStack justifyContent="space-between">
          <Text color={secondaryTextColor}>Total</Text>
          <Heading>$0.00</Heading>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Cart;
