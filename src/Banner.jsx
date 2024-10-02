import { Card, Flex,Button, Typography } from 'antd'
import React from 'react'

const Banner = () => {
    return (
        <Card style={{height: 260, padding: '20px'}}>
            <Flex vertical gap='30px'>
                <Flex vertical align='flex-start'>
                    <Typography.Title level={2}>
                        Archive goals to better carrier !!
                    </Typography.Title>
                    <Typography.Text type='secondary' strong>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam eaque, quisquam illum porro libero cumque 
                    </Typography.Text>
                </Flex>

                <Flex gap='large'>
                    <Button  type='primary' id='btn-1' className='primary--color'  size='large'>Explore More</Button>
                    <Button size='large'>Enrolled</Button>
                </Flex>
            </Flex>
        </Card>
    )
}

export default Banner
