import React, { useState } from "react";
import axios from "axios";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Registration() {
  

  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("");
  let [category, setCategory] = useState("");
  let [image, setImage] = useState("");

  const imageUpload = (e) => {
    setImage(e.target.files[0]);
  };
  const submitData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("product_description", description);
    formData.append("product_price", price);
    formData.append("product_category", category);
    formData.append("upload_image", image);

    const config = {
      "Content-Type": "multipart/form-data",
    };
    const apiData = await axios.post(
      "http://localhost:4000/postproduct",
      formData,
      config
    );
    console.log(apiData, "response");
  };

  return (
    <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
            
            >
              <p >
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 " style={{width:"30vw"}}>
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Product Name"
                  id="form1"
                  type="text"
                  className="w-100"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4" style={{width:"30vw"}}>
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Product Description"
                  id="form2"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4" style={{width:"30vw"}}>
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Price"
                  id="form3"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4" style={{width:"30vw"}}>
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Category"
                  id="form4"
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4" style={{width:"15vw"}}>
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  id="form4"
                  type="file"
                  onChange={imageUpload}
                />
              </div>

      

              <MDBBtn  onClick={submitData}>
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Registration;
