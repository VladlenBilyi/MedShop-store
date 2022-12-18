import React, { useState } from "react";
import "./Advanced.css";
import {
  MDBAccordion,
  MDBAccordionItem,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_DETAILS } from "../../Store/Address/checkout.types";
export default function Advanced() {
  const initState = {
    name: "",
    phone: "",
    zip_code: "",
    city_name: "",
    address: "",
  };
  const navigate = useNavigate();
  const [details, setDetails] = useState(initState);
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.address);
  console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const handlePlaceOrder = () => {
    if (
      details.name === "" ||
      details.phone === "" ||
      details.zip_code === "" ||
      details.city_name === "" ||
      details.address === ""
    ) {
      return;
    } else {
      dispatch({ type: ADD_DETAILS, payload: details });
      localStorage.setItem("user_details",JSON.stringify(details));
      setDetails(initState);
      return navigate("/payment");
    }
  };

  const totalPrice = JSON.parse(localStorage.getItem("totalPrice")) || 0;
  const quantity = JSON.parse(localStorage.getItem("quantity")) || 0;

  return (
    <MDBContainer className="my-5 py-5" style={{ maxWidth: "1100px" }}>
      <section>
        <MDBRow>
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <p className="text-uppercase h4 text-font">Delivery Country:</p>
                <MDBRow>
                  <MDBCol md="1">
                    <MDBCardImage
                      src="https://cdn1.iconfinder.com/data/icons/asia-country-flags/103/INDIA-512.png"
                      className="rounded-circle me-2"
                      style={{ width: "35px" }}
                      alt="IND"
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <select className="custom-select">
                      <option value="1">India</option>
                      <option value="2">Spain</option>
                      <option value="3">Poland</option>
                      <option value="4">Italy</option>
                      <option value="5">Greece</option>
                      <option value="6">Germany</option>
                      <option value="7">Croatia</option>
                      <option value="8">Sweden</option>
                    </select>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            <MDBAccordion className="card mb-4">
              <MDBAccordionItem
                collapseId={1}
                className="border-0"
                headerTitle="Promo Code or Vouchers"
              >
                <MDBInput label="Enter code" type="text" />
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBCol>
          <MDBCol md="4" className="mb-4 position-statics">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0 text-font">
                  {quantity} items
                </MDBTypography>
              </MDBCardHeader>

              <MDBCardFooter className="mt-4">
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                    Subtotal
                    <span>Rs.{totalPrice}</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                    Total to pay
                    <span>Rs.{totalPrice}</span>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>

          <MDBCol md="8" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography
                  tag="h5"
                  className="mb-0 text-font text-uppercase"
                >
                  Delivery address
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <form>
                  <MDBInput
                    name="name"
                    value={details.name}
                    onChange={(e) => handleChange(e)}
                    label="Full Name"
                    type="text"
                    className="mb-4"
                  />
                  <MDBInput
                    name="phone"
                    value={details.phone}
                    onChange={(e) => handleChange(e)}
                    label="Mobile No"
                    type="number"
                    className="mb-4"
                  />
                  <MDBInput
                    name="zip_code"
                    value={details.zip_code}
                    label="Zip No"
                    onChange={(e) => handleChange(e)}
                    type="number"
                    className="mb-4"
                  />
                  <MDBInput
                    label="City Name"
                    name="city_name"
                    value={details.city_name}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    className="mb-4"
                  />
                  <MDBTextArea
                    label="Your Address"
                    name="address"
                    value={details.address}
                    onChange={(e) => handleChange(e)}
                    rows={2}
                    className="mb-4"
                  />
                </form>
              </MDBCardBody>
            </MDBCard>
            <div className="text-center">
              <MDBBtn
                onClick={() => handlePlaceOrder()}
                className="button-order col-md-10"
              >
                Place order
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}
