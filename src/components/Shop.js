import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Shop() {
  return (
    <MDBContainer fluid className="py-5 px-5" id="shopContainer">
      <h1 style={{textAlign: 'center', color: 'white', fontWeight: '850', borderBottom: 'solid white 1px', borderTop: 'solid white 1px' ,    background: 'linear-gradient(180deg, rgba(70,90,184,1) 0%, rgba(4,3,6,1) 94%)'}}> SHOP</h1>
      <MDBRow>
        <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
            <MDBCardImage
            className=" shopImage"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
              position="top"
              alt="iPhone"
            />
            <MDBCardBody>
              <div className="text-center mt-1">
                <MDBCardTitle className="h4 shopProductTitle">iPhone X</MDBCardTitle>
                <h6 className="text-primary mb-1 pb-3">Starting at $399</h6>
              </div>
            

              <div className="d-flex flex-row">
                <MDBBtn
                  color="primary"
                  rippleColor="dark"
                  className="flex-fill ms-1"
                >
                  Learn more
                </MDBBtn>
                <MDBBtn color="danger" className="flex-fill ms-2">
                  Buy now
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
            <MDBCardImage
             className="shopImage"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp"
              position="top"
              alt="iPhone"
            />
            <MDBCardBody>
              <div className="text-center mt-1">
                <MDBCardTitle className="h4 shopProductTitle">iPhone 11</MDBCardTitle>
                <h6 className="text-primary mb-1 pb-3">Starting at $499</h6>
              </div>
              

              <div className="d-flex flex-row">
                <MDBBtn
                  color="primary"
                  rippleColor="dark"
                  className="flex-fill ms-1"
                >
                  Learn more
                </MDBBtn>
                <MDBBtn color="danger" className="flex-fill ms-2">
                  Buy now
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
            <MDBCardImage
             className="shopImage"
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp"
              position="top"
              alt="iPhone"
            />
            <MDBCardBody>
              <div className="text-center mt-1">
                <MDBCardTitle className="h4 shopProductTitle">iPhone 11 Pro</MDBCardTitle>
                <h6 className="text-primary mb-1 pb-3">Starting at $599</h6>
              </div>
              
              <div className="d-flex flex-row">
                <MDBBtn
                  color="primary"
                  rippleColor="dark"
                  className="flex-fill ms-1"
                >
                  Learn more
                </MDBBtn>
                <MDBBtn color="danger" className="flex-fill ms-2">
                  Buy now
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Shop;