import React, { useState, useEffect } from 'react'
import {Form, Input, Button, Checkbox, message, Spin} from 'antd';
import "../resources/authentication.css";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

function Register () {
  const navigate=useNavigate();

  const[loading, setLoading]=useState(false);

  const onFinish= async (values) => {
    setLoading(true);
    try{
      await axios.post('/api/user/register', values);
      setLoading(false);
      message.success('Registration Successful');
    } catch(error){
      setLoading(false);
      message.error("Registration Failed");
    }
  };

  useEffect(()=>{
    if(localStorage.getItem('sheyresume-user')){
      navigate('/home');
    }
  });

  return (
    <div className='auth-parent'>
      {loading && (<Spin size='large'></Spin>)}
      <h1 className='brand'>Resuming</h1>
      <Form layout='vertical' onFinish={onFinish}>
        <h1>Register</h1>
        <hr></hr>
        <Form.Item name='username' label='Username'>
          <Input></Input>
        </Form.Item>
        <Form.Item name='password' label='Password'>
          <Input></Input>
        </Form.Item>
        <Form.Item name='cpassword' label='Confirm Password'>
          <Input></Input>
        </Form.Item>

        <div className='d-flex align-items-center justify-content-between'>
          <Link to='/login'>Click Here to Login</Link>
          <Button type='primary' htmlType='submit'>REGISTER</Button>
        </div>

      </Form>
    </div>
  )
}

export default Register