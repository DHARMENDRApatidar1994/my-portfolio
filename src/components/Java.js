import React from 'react'
import Nav from './Nav'
import './Java.css'

const Java = () => {

    const landing = [
        {
            image: "img 1.webp",
            title: "Dream Clone",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/Dream/",
        },
        {
            image: "nimbus.png",
            title: "Nimbus Clone",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/Nimbus/",
        },
        {
            image: "shop.jpeg",
            title: "Pankaj Traders",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/Pankaj-traders-dalauda/", 
        },
        {
            image: "w logo.png",
            title: "Woodland Clone",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/woodland-web/",  
        },
        {
            image: "calculator.jpg",
            title: "Calculator",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: " https://dharmendrapatidar1994.github.io/Calculator-lp/",  
        },
        {
            image: "digital-clock.jpg",
            title: "Digital Clock",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/Digital-clock/", 
           
        },
        {
            image: "feet.jpg",
            title: "Feet Converter",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/measurement-lp/", 
           
        },
        {
            image: "slideimage.avif",
            title: "Image Slide",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink:"https://dharmendrapatidar1994.github.io/Image-sliding-lp/", 
           
        },
        {
            image: "gifs.gif",
            title: "Animation on cursor",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink:"https://dharmendrapatidar1994.github.io/animation-on-cursor-lp/", 
           
        },
        {
            image: "light.png",
            title: "Light On/Off Effect",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink:"https://dharmendrapatidar1994.github.io/light-on-off/", 
           
        },
        {
            image: "minimal.png",
            title: "Minimal page",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink:"https://dharmendrapatidar1994.github.io/minimal/", 
           
        }
    ]
    

  return (
    <div>
        <Nav/>
        <div className='script bg-dark text-light text-center py-3' style={{borderBottom: "1px dashed white"}}>
                <h2>Javascript Projects</h2>
            </div>

          <div className='java  bg-dark text-light'>
            {landing?.map((item) => (
                <div className='itemsett' key={item}>
                    <a  className='image' target='_blank' href={`${item.viewlink}`}><img src={`${item.image}`} alt=""  /></a>
                    <div className='mt-2 d-flex justify-content-between'>
                    <h4 style={{fontFamily: "sans-serif"}}>{`${item.title}`}</h4>
                    <button className='btn btn-secondary px-3'><a className='text-light' target='_blank'  style={
                        {textDecoration: "none", fontWeight: "700"}
                    } href={`${item.viewlink}`}>View</a></button>
                    </div>
                    <p className='text-secondary'>{`${item.desc}`}</p>
                </div>
            ))}
           </div>
    </div>
  )
}

export default Java