'use client'
import { Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Contents from './Components/Contents';

export default function Home() {
  return (
   <div className=''>
       <Slide  
          arrows={false}
          autoplay={true} 
          defaultIndex={0} 
          duration={3000}  
          easing='cubic' 
          infinite={true} 
          slidesToScroll={2} 
          slidesToShow={1} 
          indicators={false} 
          transitionDuration={1200}
          >
            <Contents/> 
            <Contents/> 
            <Contents/> 
       </Slide>
   </div>
  )
}
