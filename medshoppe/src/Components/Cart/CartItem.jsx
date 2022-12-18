import { CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useState } from 'react'



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
        <button className="control__btn" onClick={increase.bind(this)}>+</button>
        <span className="counter__output">{counter}</span>
        <button className="control__btn" onClick={decrease.bind(this)}>-</button>
        
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
