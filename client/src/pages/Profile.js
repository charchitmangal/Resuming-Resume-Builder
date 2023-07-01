import {React, useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Tabs, Form, Button, message, Spin } from 'antd';
import PersonalInfo from '../components/PersonalInfo';
import SkillsEducation from '../components/SkillsEducation';
import ExperienceProjects from '../components/ExperienceProjects';
import axios from 'axios';

const items = [
  {
    key: '1',
    label: `Personal Info`,
    children: <PersonalInfo></PersonalInfo>,
  },
  {
    key: '2',
    label: `Skills and Education`,
    children: <SkillsEducation></SkillsEducation>,
  },
  {
    key: '3',
    label: `Experience and Projects`,
    children: <ExperienceProjects></ExperienceProjects>,
  },
];

const Profile = () => {
  const[loading, setLoading]=useState(false);
  const user=JSON.parse(localStorage.getItem('sheyresume-user'))
  const onFinish= async (values) => {
    setLoading(true);
    try{
      const result =await axios.post('/api/user/update', {...values, _id:user._id});
      localStorage.setItem('sheyresume-user', JSON.stringify(result.data));
      setLoading(false);
      message.success('Profile Updated Successful');
    } catch(error){
      setLoading(false);
      message.error("Update Failed");
    }
  };

  return (
    <DefaultLayout>
      {loading && (<Spin size='large'></Spin>)}
        <div className='update-profile'>
          <h4><b>Update Profile</b></h4>
          <hr></hr>
          <Form layout="vertical" onFinish={onFinish} initialValues={user}>
            <Tabs defaultActiveKey="1" items={items}/>
            <Button htmlType='submit'>UPDATE</Button>
          </Form>
        </div>

    </DefaultLayout>
  )
}

export default Profile