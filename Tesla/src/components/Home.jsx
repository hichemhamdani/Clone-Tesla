import React from 'react'
import Section from './Section'

import data from '../data/data'

function Home() {
  return (
    <div className='home-container'>
        {/* <Section anchor = 'model-s' title='Model S' description='Order Online for Touchless Delivery' backgroundImg='model-s.jpg' leftBtnText = 'Custom Order' rightBtnText='Existing Inventory'/>
        <Section anchor = 'model-y' title='Model Y' description='Order Online for Touchless Delivery' backgroundImg='model-y.jpg' leftBtnText = 'Custom Order' rightBtnText='Existing Inventory'/>
        <Section anchor = 'model-3' title='Model 3' description='Order Online for Touchless Delivery' backgroundImg='model-3.jpg' leftBtnText = 'Custom Order' rightBtnText='Existing Inventory'/>
        <Section anchor = 'model-x' title='Model X' description='Order Online for Touchless Delivery' backgroundImg='model-x.jpg' leftBtnText = 'Custom Order' rightBtnText='Existing Inventory'/>
        <Section title='Lowest Cost Solar Panels in America' description='Money Back Guarantee' backgroundImg='solar-panel.jpg' leftBtnText = 'Order Now' rightBtnText='Learn more'/>
        <Section title='Solar for new roofs' description='Order Online for Touchless Delivery' backgroundImg='solar-roof.jpg' leftBtnText = 'Custom Order' rightBtnText='Existing Inventory'/>
        <Section title='Accessories' description='' backgroundImg='accessories.jpg' leftBtnText = 'Shop Now'/> */}
        {data.map((article,index)=>{
            return(
            <Section 
                anchor={article.anchor}
                title={article.title} 
                description={article.description} 
                backgroundImg={article.backgroundImg} 
                leftBtnText={article.leftBtnText} 
                rightBtnText={article.rightBtnText} 
                
                />
            )})}
    </div>
  )
}

export default Home


