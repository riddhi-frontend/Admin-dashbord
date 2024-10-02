import {Button, Layout } from 'antd'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Flex} from 'antd'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import CustomHeader from './Header';
import Maincontent from './Maincontent';

const {Sider, Header ,Content} =Layout ;
const Dashboard = () => {
  const [collapsed, setCollapsed] =useState(false)
  return (
    <Layout>
      <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='slider'>
        <Sidebar/>
        <Button type='text' icon ={collapsed ? <MenuUnfoldOutlined/>: <MenuFoldOutlined/> }  onClick={()=>setCollapsed(!collapsed)} className='triger-btn'></Button>
      </Sider>
      <Layout>
        <Header className='header'>
          <CustomHeader />
        </Header>
        <Content className='content'>
          <Flex gap='large'>
            <Maincontent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  )
}
export default Dashboard
