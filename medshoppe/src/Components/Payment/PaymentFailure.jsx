import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function PaymentFailure() {
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order Failure</Heading>
        <Text></Text>
      </VStack>
    </Box>
  )
}

export default PaymentFailure
