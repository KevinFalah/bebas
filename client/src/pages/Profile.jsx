import React from 'react'
import {
  FaEnvelope,
  FaFemale,
  FaMale,
  FaMapMarked,
  FaPhone,
  FaRegMoneyBillAlt,
  FaUserCircle,
} from "react-icons/fa";
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profileUser from '../Images/profileUser.png'
const initialUser = {
  email: "",
  password: "",
  fullname: "",
  gender: "",
  phone: "",
  address: ""
}
function Profile() {

  const [isLogin, setIsLogin] = useState(false)
  const [userData, setUserData] = useState(initialUser)

  const user = JSON.parse(localStorage.getItem('user'))

  const navigate = useNavigate()

  useEffect(()=> {
    if(user){
      setIsLogin(true)
      setUserData({
        ...userData,
        email: user?.email,
        password: user?.password,
        fullname: user?.fullname,
        gender: user?.gender,
        phone: user?.phone,
        address: user?.address
      })
    }
    else{
      setIsLogin(false)
      setUserData(initialUser)
      navigate('/')
    }
  }, [user, isLogin])
  

  return (
    <Container>
    <Row className="justify-content-center mt-5 mb-3">
      <Col md={8}>
        <Card className="rounded shadow border-0 bg-dark text-white p-5">
          <div className="d-flex justify-content-between">
            <div className="me-5">
              <h3>Personal Info</h3>
              <div className="mt-3">
                {/* Full Name */}
                <div className="d-flex mb-3 align-items-start">
                  <FaUserCircle className="text-danger me-3 fs-1" />
                  <div>
                    <h5>{userData.fullname}</h5>
                    <p className="text-muted">Full Name</p>
                  </div>
                </div>
                {/* Email */}
                <div className="d-flex mb-3 align-items-start">
                  <FaEnvelope className="text-danger me-3 fs-1" />
                  <div>
                    <h5>{userData.email}</h5>
                    <p className="text-muted">Email Address</p>
                  </div>
                </div>
                {/* Status */}
                <div className="d-flex mb-3 align-items-start">
                  <FaRegMoneyBillAlt className="text-danger me-3 fs-1" />
                  <div>
                    <h5>{userData.status}Active</h5>
                    <p className="text-muted">Status</p>
                  </div>
                </div>
                {/* Gender */}
                <div className="d-flex mb-3 align-items-start">
                  {userData.gender === "Male" ? (
                    <FaMale className="text-danger me-3 fs-1" />
                  ) : (
                    <FaFemale className="text-danger me-3 fs-1" />
                  )}
                  <div>
                    <h5>{userData.gender}</h5>
                    <p className="text-muted">Gender</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="d-flex mb-3 align-items-start">
                  <FaPhone className="text-danger me-3 fs-1" />
                  <div>
                    <h5>{userData.phone}</h5>
                    <p className="text-muted">Phone Number</p>
                  </div>
                </div>
                {/* Address */}
                <div className="d-flex mb-3 align-items-start">
                  <FaMapMarked className="text-danger me-3 fs-1" />
                  <div>
                    <h5>{userData.address}</h5>
                    <p className="text-muted">Address</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center'>
              <img className='rounded' src={profileUser} alt="nophoto" height={400}/>
              <Button
                variant="danger"
                className="changePhotoBtn mt-2 btn-md px-2 py-1 ms-1"
              >
                Change Photo
              </Button>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  </Container>
  )
}

export default Profile