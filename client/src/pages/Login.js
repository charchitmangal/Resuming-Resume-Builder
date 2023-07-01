import React, { useEffect, useState } from 'react'
import {Form, Input, Button, Checkbox, message, Spin} from 'antd';
import "../resources/authentication.css";
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

function Login () {
  const[loading, setLoading]=useState(false);
  
  const navigate=useNavigate();

  const onFinish= async (values) => {
    setLoading(true);
    try{
      const user=await axios.post('/api/user/login', values);
      setLoading(false);
      message.success('Login Successful');
      localStorage.setItem('sheyresume-user', JSON.stringify(user.data));
      navigate('/home');
    } catch(error){
      setLoading(false);
      message.error("Login Failed");
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
        <h1>Login</h1>
        <hr></hr>
        <Form.Item name='username' label='Username'>
          <Input></Input>
        </Form.Item>
        <Form.Item name='password' label='Password'>
          <Input></Input>
        </Form.Item>

        <div className='d-flex align-items-center justify-content-between'>
          <Link to='/register'>Click Here to Register</Link>
          <Button type='primary' htmlType='submit'>LOGIN</Button>
        </div>

      </Form>
    </div>
  )
}

export default Login