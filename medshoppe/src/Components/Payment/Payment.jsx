// import React from "react";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBContainer,
//   MDBInput,
//   MDBRow,
// } from "mdb-react-ui-kit";

// export default function Payment() {
//   return (
//     <MDBContainer
//       className="py-5"
//       fluid
//     //   style={{
//     //     backgroundImage:
//     //       "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background3.webp)",
//     //   }}
//     >
//       <MDBRow className=" d-flex justify-content-center">
//         <MDBCol md="10" lg="8" xl="5">
//           <MDBCard className="rounded-3">
//             <MDBCardBody className="p-4">
//               <div className="text-center mb-4">
//                 <h3>Card</h3>
//                 <h6>Payment</h6>
//               </div>
//               <p className="fw-bold mb-4 pb-2">Saved cards:</p>
//               <div className="d-flex flex-row align-items-center mb-4 pb-1">
//                 <img
//                   className="img-fluid"
//                   src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
//                 />
//                 <div className="flex-fill mx-3">
//                   <div className="form-outline">
//                     <MDBInput
//                       label="Card Number"
//                       id="form1"
//                       type="text"
//                       size="lg"
//                       value="**** **** **** 3193"
//                     />
//                   </div>
//                 </div>
//                 <a href="#!">Remove card</a>
//               </div>
//               <div className="d-flex flex-row align-items-center mb-4 pb-1">
//                 <img
//                   className="img-fluid"
//                   src="https://img.icons8.com/color/48/000000/visa.png"
//                 />
//                 <div className="flex-fill mx-3">
//                   <div className="form-outline">
//                     <MDBInput
//                       label="Card Number"
//                       id="form2"
//                       type="text"
//                       size="lg"
//                       value="**** **** **** 4296"
//                     />
//                   </div>
//                 </div>
//                 <a href="#!">Remove card</a>
//               </div>
//               <p className="fw-bold mb-4">Add new card:</p>
//               <MDBInput
//                 label="Cardholder's Name"
//                 id="form3"
//                 type="text"
//                 size="lg"
//                 value=""
//               />
//               <MDBRow className="my-4">
//                 <MDBCol size="7">
//                   <MDBInput
//                     label="Card Number"
//                     id="form4"
//                     type="text"
//                     size="lg"
//                     value=""
//                   />
//                 </MDBCol>
//                 <MDBCol size="3">
//                   <MDBInput
//                     label="Expire"
//                     id="form5"
//                     type="password"
//                     size="lg"
//                     placeholder="MM/YYYY"
//                   />
//                 </MDBCol>
//                 <MDBCol size="2">
//                   <MDBInput
//                     label="CVV"
//                     id="form6"
//                     type="password"
//                     size="lg"
//                     placeholder="CVV"
//                   />
//                 </MDBCol>
//               </MDBRow>
//               <MDBBtn color="success" size="lg" block>
//                 Add card
//               </MDBBtn>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [checkedItems_1, setCheckedItems_1] = useState(false);
  const [checkedItems_2, setCheckedItems_2] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleGetCart = async () => {
    setLoading(true);

    try {
      const headers = {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWQ4NmYzODA1ZGIxYjBjN2JjZDEwMSIsInVzZXJuYW1lIjoidW1hbmcgYXJvcmEiLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2NzEyNzM4NzUsImV4cCI6MTY3MTM2MDI3NX0.mC5O19Xe0fm55PIqQAM3KjHFcGnl_GVEv_sWcMLkix0",
      };
      const res = await axios.get(
        "https://crimson-indri-sock.cyclic.app/cart/items",
        { headers }
      );
      setLoading(false);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // handleGetCart();
  // console.log(data,loading);

  const handlePutCart = async (product_id) => {
    try {
      const headers = {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWQ4NmYzODA1ZGIxYjBjN2JjZDEwMSIsInVzZXJuYW1lIjoidW1hbmcgYXJvcmEiLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2NzEyNzM4NzUsImV4cCI6MTY3MTM2MDI3NX0.mC5O19Xe0fm55PIqQAM3KjHFcGnl_GVEv_sWcMLkix0",
      };
      const res = await axios.put(
        "https://crimson-indri-sock.cyclic.app/cart/items",
        { productID: product_id },
        { headers }
      );
      // console.log(res);
      handleGetCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostCart = async (product_id) => {
    try {
      const headers = {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWQ4NmYzODA1ZGIxYjBjN2JjZDEwMSIsInVzZXJuYW1lIjoidW1hbmcgYXJvcmEiLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2NzEyNzM4NzUsImV4cCI6MTY3MTM2MDI3NX0.mC5O19Xe0fm55PIqQAM3KjHFcGnl_GVEv_sWcMLkix0",
      };
      const res = await axios.post(
        "https://crimson-indri-sock.cyclic.app/cart/items",
        { productID: product_id },
        { headers }
      );
      // console.log(res);
      handleGetCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (cart_id) => {
    try {
      const headers = {
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWQ4NmYzODA1ZGIxYjBjN2JjZDEwMSIsInVzZXJuYW1lIjoidW1hbmcgYXJvcmEiLCJ1c2VyVHlwZSI6InVzZXIiLCJpYXQiOjE2NzEyNzM4NzUsImV4cCI6MTY3MTM2MDI3NX0.mC5O19Xe0fm55PIqQAM3KjHFcGnl_GVEv_sWcMLkix0",
      };
      const res = await axios.delete(
        `https://crimson-indri-sock.cyclic.app/cart/items/${cart_id}`,
        { headers }
      );
      handleGetCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async (num) => {
    if (checkedItems_1 === false && checkedItems_2 === false) {
      return;
    } else if (checkedItems_1 === true) {
      return navigate("/paymentsuccess");
    } else if (checkedItems_2 === true) {
      try {
        const key = await axios.get(`http://localhost:8080/razor/key`);
        const data = await axios.post(`http://localhost:8080/razor/payment`, {
          amount: num,
        });
        let options = {
          key: key.data.key,
          amount: num,
          currency: "INR",
          name: "MEDSHOPPE",
          description: "Make People Happy",
          image: "https://i.ibb.co/s5mNPnz/1.png",
          order_id: data.data.id,
          callback_url: `http://localhost:8080/razor/verification?email=umangarora0134@gmail.com&amount=${num}`,
          prefill: {
            name: "Umang Arora",
            email: "umangarora0134@gmail.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "teal",
          },
        };
        let razorPay = new window.Razorpay(options);

        razorPay.open();
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    handleGetCart();
  }, []);

  const handleChange_1 = (e) => {
    setCheckedItems_1(true);
    setCheckedItems_2(false);
  };
  const handleChange_2 = (e) => {
    setCheckedItems_1(false);
    setCheckedItems_2(true);
  };

  return (
    <>
      <Box>
        {data.cartItems &&
          data.cartItems.map((el, i) => (
            <Box key={i}>
              <Text>{el.productID.title}</Text>
              <Image src={el.productID.img1} />
              <Text>MRP : {el.productID.mrp}</Text>
              <Button onClick={() => handlePutCart(el.productID._id)}>-</Button>
              <Text>Quantity {el.quantity}</Text>
              <Button onClick={() => handlePostCart(el.productID._id)}>
                +
              </Button>
              <Button onClick={() => handleDelete(el._id)}>
                Delete This Product From Cart
              </Button>
            </Box>
          ))}
      </Box>
      <Box>
        <label className="rad-label">
          <input
            type="radio"
            className="rad-input"
            onChange={(e) => handleChange_1(e)}
            value={checkedItems_1}
            name="rad"
          />
          <div className="rad-design"></div>
          <div className="rad-text">Pay on Delivery</div>
        </label>

        <label className="rad-label">
          <input
            type="radio"
            className="rad-input"
            onChange={(e) => handleChange_2(e)}
            value={checkedItems_2}
            name="rad"
          />
          <div className="rad-design"></div>
          <div className="rad-text">Razor Pay Online</div>
        </label>
        <Button onClick={() => handlePayment(1)}>Pay Now</Button>
      </Box>
    </>
  );
}

export default Payment;
