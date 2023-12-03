import React from 'react'
import Nav from './Nav'
import './Node.css'

const Node = () => {

    const landing = [
        {
            image: "resumebuilder.png",
            title: "Resume-with-passport",
            desc: "In this in making the resume i used passport functionlity which gives security from others",
            viewlink: "https://github.com/DHARMENDRApatidar1994/Resume-with-passport",
        },
        {
            image: "resume.jpg",
            title: "Resume-Builder",
            desc: "In this project i used how to make the resume with the help of full functionality.",
            viewlink: " https://github.com/DHARMENDRApatidar1994/Resume-Builder", 
        },
        {
            image: "instagram.jpg",
            title: "Instagram-clone",
            desc: "In this project i made the functionality like create,delete,update,and forget password etc. and use of multer for image",
            viewlink: "https://github.com/DHARMENDRApatidar1994/instagram-clone",  
        }
    ]

  return (
    <div>
        <Nav/>

        <div className=' node bg-dark text-light text-center py-3' style={{borderBottom: "1px dashed white"}}>
                <h2>Node.js Projects</h2>
            </div>

          <div className='noded bg-dark text-light '>
            {landing?.map((item) => (
                <div className='itemsettt' key={item}>
                    <a  className='image' href={`${item.viewlink}`}><img src={`${item.image}`} alt=""  /></a>
                    <div className='mt-2 d-flex justify-content-between'>
                    <h4 style={{fontFamily: "sans-serif"}}>{`${item.title}`}</h4>
                    <button className='btn btn-secondary px-3'><a className='text-light' style={
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

export default Node