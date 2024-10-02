import { Flex, Menu } from 'antd';
import React from 'react';
import { FaLeaf } from 'react-icons/fa6';
import { UserOutlined, ProfileOutlined, LoginOutlined, OrderedListOutlined, CarryOutOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <Flex align='center' justify='center'>
                <div className='logo'>
                    <FaLeaf />
                </div>
            </Flex>

            <Menu mode='inline' defaultSelectedKeys={['1']} className='menu-bar'>
                <Menu.Item key='1' icon={<UserOutlined />}>
                    <Link to="/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key='2' icon={<OrderedListOutlined />}>
                    <Link to="/todo">Todo</Link>
                </Menu.Item>
                <Menu.Item key='3' icon={<ProfileOutlined />}>
                    <Link to="/profile">Profile</Link>
                </Menu.Item>
                <Menu.Item key='4' icon={<LoginOutlined />}>
                    <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item key='5' icon={<CarryOutOutlined />}>
                    <Link to="/logout">Logout</Link>
                </Menu.Item>
                <Menu.Item key='6' icon={<SettingOutlined />}>
                    <Link to="/setting">Setting</Link>
                </Menu.Item>
            </Menu>
        </>
    );
};

export default Sidebar;
