import {
  Box,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'


export const CartProductMeta = (props) => {
  const { delivertime = true, image, name, description } = props
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            {description}
          </Text>
        </Stack>
        {delivertime && (
          <HStack spacing="1" mt="3" color={mode('gray.600', 'gray.400')}>
            
            <Link fontSize="sm">
            Delivery by Today, before 10:00 pm
            </Link>
          </HStack>
        )}
      </Box>
    </Stack>
  )
}
