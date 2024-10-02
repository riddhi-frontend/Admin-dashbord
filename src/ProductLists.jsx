import React from 'react'
import { Button, Card, Flex, Image, Typography } from 'antd'
import plantData from './Plandata'
const {Meta} = Card
const ProductLists = () => {
    return (
        <>
            <Flex align='center' justify='space-between' style={{marginTop: '5%'}}>
                <Typography.Title level={3} strong className='primary--color'>My Cources</Typography.Title>
                <Button type='link' className='gray--color'>View All</Button>
            </Flex>

            <Flex align='center' gap='large'>
                {plantData.map((plant)=>(
                    <Card hoverable className='palnt-card' key={plant.id}>
                        <Image src={plant.photo} style={{width: '180px'}} />
                        <Meta title={plant.name} description={plant.description} align='center' style={{marginTop: '2rem'}} />
                    </Card>
                ))}
            </Flex>
        </>
    )
}

export default ProductLists