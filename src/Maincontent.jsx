import React from 'react'
import { Flex } from 'antd'
import Banner from './Banner'
import ProductLists from './ProductLists'
import SellerLists from './SellerLists'
const Maincontent = () => {
    return (
        <>
            <div style={{flex: 1}}>
                <Flex vertical gap='2.3erm'>
                    <Banner />
                    <ProductLists />
                    <SellerLists />
                </Flex>
            </div>
        </>
    )
}

export default Maincontent
