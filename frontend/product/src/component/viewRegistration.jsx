import React from "react";
// import { Button } from 'react-bootstrap'
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { FcApproval, FcFullTrash, FcSupport } from "react-icons/fc";
import Modal from 'react-bootstrap/Modal';
import Registration from "./Registration";
// import { FaBeer} from "@react-icons/all-files/fa/FaBeer";

// import { AiFillAlipaySquare } from "react-icons/ai";

const ViewRegistration = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [owner, setOwner] = useState([]);
  const navigate = useNavigate();
////////////////////////Get///////////////////////////////////
  async function getUsers() {
    const res = await fetch("http://localhost:4000/getproduct");
    const data = await res.json();

    setOwner(data);
    
  }

  useEffect(() => {
    getUsers();
  }, []);
//   console.log(owner[5].upload_image,"get api data")

///////////////////////////////////////////////////////////////

///////////////////////////////Delete////////////////////////

 async function deleteUser(id) {
    alert(id);
   await fetch(`http://localhost:4000/deleteproduct/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    });
    getUsers();
  }
//////////////////////////////////////////////////////////////////
  return (
   <>
 
   <center>
   <div style={{alignItems:"center"}}>
    <div style={{ backgroundColor:"white", width:"1320px",height:"637px" }}>
      <div >
        
        <div >
       
          <center>
         <span>  <h1 style={{ color: "green"}}>Complete Product List</h1></span> 
          </center>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add product</Modal.Title>
        </Modal.Header>
        <Modal.Body><Registration/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

          {/* <Link to = "/registration" style={{color:"whitesmoke"}}>
  <Button variant="outline-dark" size="md" style={{marginLeft:"1100px",color:"red",marginTop:"-50px" }}>Add-Data
    <FcPlus style={{ color: "whitesmoke",fontSize:"30px",marginLeft:"10px" }} />
  </Button>
</Link> */}
 <div style={{marginLeft:"75vw",marginBottom:"20px"}}>
      <Button variant="success" onClick={handleShow}>
       Add product
      </Button>
      </div>
          <Table striped bordered hover variant="white" style={{ width: "100%",color:"red" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
                <th>
                  {" "}
                  Operations
                  <FcApproval />
                </th>
              </tr>
            </thead>
            <tbody>

              {/* ////////////////////////////Mapping//////////////////////// */}
             
              {owner.map((item, i) =>
                
                {  return (
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.product_name}</td>
                      <td>{item.product_description}</td>
                      <td>{item.product_price}</td>
                      <td>{item.product_category}</td>
                      <td ><img src={`http://localhost:4000/${item.upload_image}`}  style={{height:"100px",width:"100px",background:"cover"}} alt="logo"/></td>
                      
                      <td>
                        {/* ////////////////////////Button//////////////////// */}


                        <button
                          style={{ backgroundColor: "green", color: "white" ,border:"white 2px solid",borderRadius:"5px",alignItems:"center"}}
                          onClick={() =>
                            navigate("/updateregistration", {
                              state: { data: item },
                            })
                          }
                        >
                          <FcSupport style={{fontSize:"22px"}} />
                          Update
                        </button>

                        <button
                      style={{ backgroundColor: "red", color: "white" ,border:"white 2px solid",borderRadius:"5px", marginLeft: "20px",alignItems:"center"}}
                          onClick={() => deleteUser(item.id)}
                        >
                          <FcFullTrash style={{fontSize:"22px"}}/>
                          Delete
                        </button>
                        {/* ///////////////////////////////Button///////////////////////////// */}
                      </td>
                    </tr>
                  )}
                )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    </div>
    </center>
    </>
  );
};

export default ViewRegistration;
