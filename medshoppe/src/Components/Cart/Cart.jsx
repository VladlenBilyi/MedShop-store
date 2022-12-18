import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import { cartData } from './_data'



export const Cart = () => {

  let [data, setData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(()=>{
    try {
      fetch('https://crimson-indri-sock.cyclic.app/cart/items', {
          method: "GET",
          headers: {
              "Content-type": "application/json; charset=UTF-8",
              "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWRhZjJhY2IzZmJmZmFmOGIyYWNlNSIsImVtYWlsIjoiZGVtb0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRlbW8iLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2NzEyNzg5NTcsImV4cCI6MTY3MTM2NTM1N30.R08Ap6WG0gKzExIu_-kPC-3pc5D2BeUL9tOLGJZ8quw"
          }
        })
        .then(response => response.json())
        .then(json => {
          setData(json.cartItems);
          priceChange(json.cartItems);
          quantityChange(json.cartItems);
        });
         //console.log(data);
        
  } catch (error) {
      console.log(error)
  }
  },[]);

  const priceChange = (dataItems) => {
    const total = dataItems.reduce((value, item) => (item.productID.mrp * item.quantity) + value, 0);
    setTotalPrice(total);
    localStorage.setItem('totalPrice', total);
  }
  const quantityChange = (dataItems) => {
    const qty = dataItems.reduce((value, item) => item.quantity + value, 0);
    setQuantity(qty);
    localStorage.setItem('quantity', qty);
  }

  const onChangeQuantity = (item, quantity) => {
    item.quantity = quantity;
    priceChange(data);
    quantityChange(data);
  }

  const onClickDelete = (index) => {
    if (index >= 0) {
      data.splice(index, 1);
      setData(data);
      priceChange(data);
      quantityChange(data);
    }
  }

  return (<Box
    maxW={{
      base: '3xl',
      lg: '7xl',
    }}
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <Stack
      direction={{
        base: 'column',
        lg: 'row',
      }}
      align={{
        lg: 'flex-start',
      }}
      spacing={{
        base: '8',
        md: '16',
      }}
    >
      <Stack
        spacing={{
          base: '8',
          md: '10',
        }}
        flex="2"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          Shopping Cart ({quantity} items)
        </Heading>

        <Stack spacing="6">
          {data.map((item, index) => (
            <CartItem key={item.id} {...item} onChangeQuantity={onChangeQuantity.bind(this, item)} onClickDelete={onClickDelete.bind(this, index)} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary totalPrice={totalPrice} />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>)
}
