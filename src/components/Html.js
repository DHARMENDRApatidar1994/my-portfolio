import React from 'react'
import Nav from './Nav'
import './Html.css'

const Html = () => {

    const landing = [
        {
            image: "p1img1.jpg",
            title: "Envato Clone",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/envato/",
            type: "Website",
        },
        {
            image: "burger.png",
            title: "Fast Food",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/fast-food/",
            type: "Website"
        },
        {
            image: "frame1.avif",
            title: "Frame Board",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/frame-board/",
            type: "Website"
        },
        {
            image: "black.jpg",
            title: "Hello Design",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: " https://dharmendrapatidar1994.github.io/hello/",
            type: "Landing Page"
        },
        {
            image: "bgremove.png",
            title: "Background remove",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "  https://dharmendrapatidar1994.github.io/bag-remove-lp/",
            type: "Landing Page",
        },
        {
            image: "dribble.png",
            title: "Dribble page",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/dribble-landing-page/",
            type: "Landing Page",
        },
        {
            image: "c2.png",
            title: "Form Format",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/form/",
            type: "Landing Page",   
        },
        {
            image: "monatik.png",
            title: "Gsap Animation",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/Gsap-lp/",
            type: "Landing Page",   
        },
        {
            image: "p3.webp",
            title: "Plants Animation",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/Plant/",
            type: "Landing Page",
        },
        {
            image: "sheyrians.webp",
            title: "Spring",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: "https://dharmendrapatidar1994.github.io/spring/",
            type: "Landing Page",  
        },
        {
            image: "image1.avif",
            title: "Travel Page",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem officiis iste eos consectetur suscipit deleniti maxime rem ducimus voluptas!",
            viewlink: " https://dharmendrapatidar1994.github.io/travel/",
            type: "Landing Page", 
        }
    ]

    return (
        <div>

            <Nav />
            <div className='bg-dark text-light text-center landing py-3' style={{borderBottom: "1px dashed white"}}>
                <h4>Landing Page & Website Projects</h4>
            </div>

          <div className='html bg-dark text-light'>
            {landing?.map((item) => (
                <div className='itemset' key={item}>
                    <a className='image' target='_blank' href={`${item.viewlink}`}><img src={`${item.image}`} alt="" /></a>
                    <div className='mt-2 d-flex justify-content-between'>
                    <h4 style={{fontFamily: "sans-serif"}}>{`${item.title}`}</h4>
                    <button className='btn btn-secondary px-3'><a className='text-light' target='_blank' style={
                        {textDecoration: "none", fontWeight: "700"}
                    } href={`${item.viewlink}`}>View</a></button>
                    </div>
                    <h6>{item.type}</h6>
                    <p className='text-secondary'>{`${item.desc}`}</p>
                </div>
            ))}


           </div>
        </div>
    )
}

export default Html