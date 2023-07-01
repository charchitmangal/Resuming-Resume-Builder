import React from 'react'
import './../resources/defaultLayout.css'
import { Button, Dropdown} from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import { Cursor } from 'mongoose';
import  UserOutlined from '@ant-design/icons';
const DefaultLayout = (props) => {
  const user=JSON.parse(localStorage.getItem('sheyresume-user'));

  const navigate=useNavigate();

  const items = [
    {
      key: '1',
      label: (
        <Link to="/home">
          Home
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link to="/profile">
          Profile
        </Link>
      ),
    },
    {
      key: '3',
      label: (
          <span onClick={() => {
            localStorage.removeItem('sheyresume-user');
            navigate('/login');
          }}>Logout</span>
      ),
    },
  ];

  return (
    <div className='layout '>
        <div className='header'>
            <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}}>RESUMING</h1>
                <Dropdown
            menu={{
              items,
            }}
            placement="bottomLeft"
          >
            <Button>{user.username}</Button>
          </Dropdown>
        </div>
        <div className='content' style={{overflow:'scroll'}}>
            {props.children}
        </div>
    </div>
  )
}

export default DefaultLayout