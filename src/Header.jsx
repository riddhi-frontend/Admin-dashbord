import { Flex , Typography } from 'antd'
import Search from 'antd/es/transfer/search'
import {MessageOutlined, NotificationOutlined  } from '@ant-design/icons'
import React from 'react'

const CustomHeader = () => {
    return (
        <Flex align='center' justify='space-between'>
            <Typography.Title level={2} type='secoundary'>
                Welcome back,Riddhi
            </Typography.Title>

            <Flex align='center' gap={'3rem'}>
                <Search placeholder='Search hear....' />
                <Flex align='center' gap='10px'>
                    <MessageOutlined className='headericon'/>
                    <NotificationOutlined className='headericon'/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CustomHeader
