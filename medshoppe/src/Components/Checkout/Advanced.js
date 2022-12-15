import React from 'react';
import './Advanced.css';
import { MDBAccordion, MDBAccordionItem, MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCheckbox, MDBCol, MDBContainer, MDBInput, MDBListGroup, MDBListGroupItem, MDBRow, MDBTextArea, MDBTypography } from 'mdb-react-ui-kit';

export default function Advanced() {
  return (
    <MDBContainer className="my-5 py-5" style={{maxWidth: '1100px'}}>
      <section>
        <MDBRow>
          <MDBCol md="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <p className="text-uppercase h4 text-font">Delivery Country:</p>
                <MDBRow>
                  <MDBCol md="1">
                    <MDBCardImage src="https://cdn1.iconfinder.com/data/icons/asia-country-flags/103/INDIA-512.png"
                      className="rounded-circle me-2"
                      style={{ width: '35px' }}
                      alt="IND" />
                  </MDBCol>
                  <MDBCol md="8">
                    {/* PRO NEEDED */}
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
              <MDBAccordionItem collapseId={1} className="border-0" headerTitle='Promo Code or Vouchers'>
                <MDBInput label='Enter code' type='text' />
              </MDBAccordionItem>
            </MDBAccordion>

            <MDBCard className="mb-4">
              <MDBCardBody>
                <p className="text-uppercase fw-bold mb-3 text-font">Email address</p>
                <MDBRow>
                  <MDBCol md="4">
                    <p>medshoppe@gmail.com</p>
                  </MDBCol>
                  {/* <MDBCol md="7">
                    <MDBBtn outline color="dark" className="float-end button-color">Change</MDBBtn>
                  </MDBCol> */}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>


          </MDBCol>
          <MDBCol md="4" className="mb-4 position-statics">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0 text-font">
                  1 item <span className="float-end mt-1" style={{ fontSize: '13px' }}>Edit</span>
                </MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol md="4">
                    <MDBCardImage src="https://cdn01.pharmeasy.in/dam/products_otc/F12885/nestle-nangrow-nutritious-milk-drink-for-growing-children-creamy-vanilla-400g-2-1657181996.jpg?dim=700x0&dpr=1&q=100"
                      className="rounded-3" style={{ width: '100px' }} alt="Blue Jeans Jacket" />
                  </MDBCol>
                  <MDBCol md="6" className="ms-3">
                    <span className="mb-0 text-price">Rs.350</span>
                    <p className="mb-0 text-descriptions">NanGrow </p>
                    <p className="text-descriptions mt-0">
                      Qty:<span className="text-descriptions fw-bold">1</span>
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBCardFooter className="mt-4">
                <MDBListGroup flush>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0 text-muted">
                    Subtotal
                    <span>Rs.350</span>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0 fw-bold text-uppercase">
                    Total to pay
                    <span>Rs.350</span>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>

          <MDBCol md="8" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader className="py-3">
                <MDBTypography tag="h5" className="mb-0 text-font text-uppercase">Delivery address</MDBTypography>
              </MDBCardHeader>
              <MDBCardBody>
                <form>

                  <MDBInput label='Full Name' type='text' className="mb-4" />
                  <MDBInput label='Mobile No' type='number' className="mb-4" />
                  <MDBInput label='Zip No' type='number' className="mb-4" />
                  <MDBInput label='City Name' type='text' className="mb-4" />
                  <MDBTextArea label='Additional information' rows={4} className="mb-4" />

                  <div className="d-flex justify-content-center">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckChecked' label='Create an account?' defaultChecked />
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
            <div className="text-center">
              <MDBBtn className="button-order col-md-10">Place order</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}