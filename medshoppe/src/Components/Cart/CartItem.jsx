import {
  Button,
  CloseButton,
  Flex,
  Text
} from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { AiOutlinePlus } from "react-icons/ai";
import { GrSubtract } from "react-icons/gr";
import { useSelector } from "react-redux";
import axios from "axios";

const QuantitySelect = ({ data }) => {
  // console.log(props);

  // const { onChange } = props;
  // const [counter, setCounter] = useState(props.value || 0);

  //increase counter
  // const increase = () => {
  //   setCounter(count => {
  //     onChange(count + 1);
  //     return count + 1;
  //   });
  // };

  //decrease counter
  // const decrease = () => {
  //   if (counter > 1) {
  //     setCounter(count => {
  //       onChange(count - 1);
  //       return count - 1;
  //     });
  //   }
  // };

  let user_data = useSelector((store) => store.auth.data);

  const handleSubs = async (id) => {
    try {
      const headers = {
        access_token: user_data.AccessToken,
      };
      const res = await axios.put(
        "https://crimson-indri-sock.cyclic.app/cart/items",
        { productID: id },
        { headers }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = async (id) => {
    try {
      const headers = {
        access_token: user_data.AccessToken,
      };
      const res = await axios.post(
        "https://crimson-indri-sock.cyclic.app/cart/items",
        { productID: id },
        { headers }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="btn__container">
      <Flex gap={4} ml="15px">
        <Button
          colorScheme={"red"}
          variant="outline"
          className="control__btn"
          onClick={() => handleSubs(data.productID._id)}
          disabled={data.quantity === 1}
        >
          <GrSubtract />
        </Button>
        <Text fontSize={"25px"} className="counter__output">
          {data.quantity}
        </Text>

        <Button
          colorScheme={"green"}
          variant="outline"
          className="control__btn"
          onClick={() => handleAdd(data.productID._id)}
        >
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
  );
};

export const CartItem = (props) => {
  // console.log(props);
  const { productID,quantity } = props;
  let user_data = useSelector((store) => store.auth.data);

  // const [quantity, setQantity] = useState(props.quantity);

  // const quantityChange = (qty) => {
  //   setQantity(qty);
  //   if (!!onChangeQuantity) {
  //     onChangeQuantity(qty);
  //   }
  // };

  const handleDelete = async(id)=>{
    try {
      const headers = {
        access_token: user_data.AccessToken,
      };
      const res = await axios.delete(
        `https://crimson-indri-sock.cyclic.app/cart/items/${id}`,
        { headers }
      );
      return res
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta name={productID.title} image={productID.img1} />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <QuantitySelect
          data={props}
          // onChange={quantityChange.bind(this)}
        />
        <PriceTag price={Math.ceil(quantity * productID.mrp)} />
        <CloseButton onClick={()=>handleDelete(props._id)} aria-label={`Delete ${productID.title} from cart`} />
      </Flex>

      {/* Mobile */}
      {/* <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect data={props} />
        <PriceTag price={quantity * productID.mrp} />
      </Flex> */}
    </Flex>
  );
};
