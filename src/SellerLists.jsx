import { Avatar, Button, Card, Flex, Typography, Tooltip, Divider } from 'antd'
import React from 'react'

const SellerLists = () => {
    return (
        <>
            <Flex align='center' justify='space-between' gap='large' style={{marginTop: "5%"}}>
                <Flex vertical='row' gap='small' className='top-seller'>
                    <Flex align='center' justify='space-between'>
                        <Typography.Title level={4} strong className='primary--color'>Top Seller</Typography.Title>
                        <Button type='link' className='gray--color'>View All</Button>
                    </Flex>
                    <Card>
                        <Flex align='center' justify='space-evenly'>
                            <Avatar.Group max={{ count: 5 }}  size='large' Style={{color:'#f56a00', backgroundColor:'#fde3cf', cursor:'progress', }}>
                                <Tooltip title='user1' placement='top'>
                                    <Avatar src='https://th.bing.com/th/id/OIP.3UJOso4eoJZw_ya9Z8FDNgHaHa?w=197&h=196&c=7&r=0&o=5&dpr=1.4&pid=1.7' />
                                </Tooltip>
                                <Tooltip title='user2' placement='top'>
                                    <Avatar src='https://img.freepik.com/premium-vector/portrait-brunette-woman-avatar-female-person-vector-icon-adult-flat-style_605517-159.jpg?w=2000' />
                                </Tooltip>
                                <Tooltip title='user3' placement='top'>
                                    <Avatar src='https://img.freepik.com/premium-vector/young-girl-smiling-vector-graphic_635153-141.jpg?w=826' />
                                </Tooltip>
                                <Tooltip title='user4' placement='top'>
                                    <Avatar src='https://th.bing.com/th/id/OIP.l0ai3Gemc84mnwkfBwywrAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7' />
                                </Tooltip>
                                <Tooltip title='user5' placement='top'>
                                    <Avatar src='https://th.bing.com/th/id/OIP.wmH6dahylXQuYzr1aWhk6wHaHa?w=179&h=197&c=7&r=0&o=5&dpr=1.4&pid=1.7' />
                                </Tooltip>
                                <Tooltip title='user6' placement='top'>
                                    <Avatar src='https://th.bing.com/th/id/OIP.2ciCFJNGQ2ZLFixPAUQQUgHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.4&pid=1.7' />
                                </Tooltip>
                                <Tooltip title='user7' placement='top'>
                                    <Avatar src='https://th.bing.com/th/id/OIP.T3-1GSgM8a_5ikBD8b46zAHaHh?w=199&h=203&c=7&r=0&o=5&dpr=1.4&pid=1.7' />
                                </Tooltip>
                            </Avatar.Group>
                            <Divider type='vertical' className='divider' style={{height: '40px'}}/>

                            <Flex vertical='row'>
                                <Typography.Text type='secondary' strong>11,200 plant sold</Typography.Text>
                                <Typography.Text type='secondary' strong>100+ seller</Typography.Text>
                            </Flex>
                        </Flex>
                    </Card>
                </Flex>

                <Flex vertical='row' gap='small' className='featured-seller'>
                    <Flex align='center' justify='space-between'>
                        <Typography.Title level={4} strong className='primary--color'>Featured Seller</Typography.Title>
                        <Button type='link' className='gray--color'>View All</Button>
                    </Flex>
                    <Card>
                        <Flex align='center' justify='space-evenly'>
                            <Avatar.Group  max={{ count: 5 }}  size='large' Style={{color:'#f56a00', backgroundColor:'#fde3cf', cursor:'progress', }}>
                                <Tooltip title='user1' placement='top'>
                                    <Avatar src='https://th.bing.com/th/id/OIP.3UJOso4eoJZw_ya9Z8FDNgHaHa?w=197&h=196&c=7&r=0&o=5&dpr=1.4&pid=1.7' />
                                </Tooltip>
                                <Tooltip title='user2' placement='top'>
                                    <Avatar src='https://img.freepik.com/premium-vector/portrait-brunette-woman-avatar-female-person-vector-icon-adult-flat-style_605517-159.jpg?w=2000' />
                                </Tooltip>
                                <Tooltip title='user3' placement='top'>
                                    <Avatar src='https://img.freepik.com/premium-vector/young-girl-smiling-vector-graphic_635153-141.jpg?w=826' />
                                </Tooltip>
                                <Tooltip title='user4' placement='top'>
                                    <Avatar src='https://th.bing.com/th/id/OIP.l0ai3Gemc84mnwkfBwywrAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7' />
                                </Tooltip>
                                <Tooltip title='user5' placement='top'>
                                    <Avatar src='https://th.bing.com/th/id/OIP.wmH6dahylXQuYzr1aWhk6wHaHa?w=179&h=197&c=7&r=0&o=5&dpr=1.4&pid=1.7' />
                                </Tooltip>
                                <Tooltip title='user6' placement='top'>
                                    <Avatar src='https://th.bing.com/th/id/OIP.2ciCFJNGQ2ZLFixPAUQQUgHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.4&pid=1.7' />
                                </Tooltip>
                                <Tooltip title='user7' placement='top'>
                                    <Avatar src='https://th.bing.com/th/id/OIP.T3-1GSgM8a_5ikBD8b46zAHaHh?w=199&h=203&c=7&r=0&o=5&dpr=1.4&pid=1.7' />
                                </Tooltip>
                            </Avatar.Group>
                            <Divider type='vertical' className='divider' style={{height: '40px'}}/>

                            <Flex vertical='row'>
                                <Typography.Text type='secondary' strong> Target 1,200 plant sold</Typography.Text>
                                <Typography.Text type='secondary' strong>20+ seller</Typography.Text>
                            </Flex>
                        </Flex>
                    </Card>
                </Flex>
            </Flex>
        </>
    )
}

export default SellerLists
