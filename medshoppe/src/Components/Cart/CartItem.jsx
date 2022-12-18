import { Button, CloseButton, Flex, Link, Select, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { GrSubtract } from 'react-icons/gr'



const QuantitySelect = (props) => {

  const { onChange } = props;
  const [counter, setCounter] = useState(props.value || 0);
 
  //increase counter
  const increase = () => {
    setCounter(count => {
      onChange(count + 1);
      return count + 1;
    });
  };
 
  //decrease counter
const decrease = () => {
  if (counter > 1) {
    setCounter(count => {
      onChange(count - 1);
      return count - 1;
    });
  }
};
 
  return (
    <div className="btn__container">
        <Flex gap={4} ml="15px">
        <Button 
         colorScheme={"red"}
         variant="outline"
        className="control__btn" disabled={counter===1} onClick={decrease.bind(this)}>

        <GrSubtract />
        </Button>
        <Text fontSize={"25px"} className="counter__output">{counter}</Text>
       
        <Button 
         colorScheme={"green"}
         variant="outline"
        className="control__btn" onClick={increase.bind(this)}>
        <AiOutlinePlus />
        </Button>

        </Flex>
        
      </div>
    // <Select
    //   maxW="64px"
    //   aria-label="Select quantity"
    //   focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
    //   {...props}
    // >
    //   <option value="1">1</option>
    //   <option value="2">2</option>
    //   <option value="3">3</option>
    //   <option value="4">4</option>
    //   <option value="5">5</option>
    // </Select>
  )
}

export const CartItem = (props) => {
  const {
    onChangeQuantity,
    onClickDelete,
    productID
  } = props

  const [quantity, setQantity] = useState(props.quantity);

  const quantityChange = (qty) => {
    setQantity(qty);
    if (!!onChangeQuantity) {
      onChangeQuantity(qty);
    }
  }

  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={productID.title}
        image={productID.img1}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <QuantitySelect
          value={quantity}
          onChange={quantityChange.bind(this)}
        />
        <PriceTag price={quantity * productID.mrp} />
        <CloseButton aria-label={`Delete ${productID.title} from cart`} onClick={onClickDelete?.bind(this)} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={quantityChange.bind(this)}
        />
        <PriceTag price={quantity * productID.mrp} />
      </Flex>
    </Flex>
  )
}
