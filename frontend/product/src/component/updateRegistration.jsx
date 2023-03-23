// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBInput,
//   MDBIcon,
//   MDBCheckbox,
// } from "mdb-react-ui-kit";

// const UpdateRegistration = () => {
//   const location = useLocation();
 

//   const data = location.state.data;

//   const [image, setImage] = useState(null);

  // const [student, setStudent] = useState({
  //   id: data.id,
  //   product_name: data.product_name,
  //   product_description: data.product_description,
  //   product_price: data.product_price,
  //   product_category: data.product_category,
  // });

//   const imageUpload = (e) => {
//     setImage(e.target.files);
//   };

  // const {
  //   id,
  //   product_name,
  //   product_description,
  //   product_price,
  //   product_category,
  // } = student;

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setStudent({ ...student, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("product_name", product_name);
//     formData.append("product_description", product_description);
//     formData.append("product_price", product_price);
//     formData.append("product_category", product_category);
//     if (image) {
//       formData.append("upload_image", image);
//     }

//     const Id = id;

//     try {
//       const res = await axios.put(
//         `http://localhost:2500/updateproduct/${Id}`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       const data = await res.data;
//       console.log(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };



import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";


const UpdateRegistration = () => {
  const Navigate = useNavigate()
  const location = useLocation();

  const data = location.state.data;

  const [image, setImage] = useState(null);

  const [student, setStudent] = useState({
    id: data.id,
    product_name: data.product_name,
    product_description: data.product_description,
    product_price: data.product_price,
    product_category: data.product_category,
  });


  const {
    id,
    product_name,
    product_description,
    product_price,
    product_category,
  } = student;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    
    formData.append("product_name", product_name);
    formData.append("product_description", product_description);
    formData.append("product_price", product_price);
    formData.append("product_category", product_category);
      formData.append("upload_image", image);
    
    const config ={
      "Content-Type": "multipart/form-data",
    }
      const res = await axios.put(
        `http://localhost:4000/updateproduct/${id}`, formData,config);
        console.log(res, "response data")

        Navigate('/')
  };
 

  const imageUpload = (e) => {
    setImage(e.target.files[0]);
  };



  return (
    <>
     <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Your Product</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Product Name' id='form1' type='text'  className='w-100' name="product_name" value={product_name} onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Product Description' id='form2' type='text' name="product_description"  value={product_description} onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Price' id='form3' type='text' name="product_price" value={product_price} onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Category' id='form4' type='text' name="product_category" value={product_category} onChange={handleChange}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput  id='form4' type='file' name="upload_image" onChange={imageUpload}/>
        </div>

        <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div>

        <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer></>
  );
};

export default UpdateRegistration;
