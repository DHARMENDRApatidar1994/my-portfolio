import React from 'react'
import Nav from './Nav'
import './Reacted.css'

const Reacted = () => {

  const landing = [
    {
      image: "music.avif",
      title: "Dance-Music ",
      desc: "In this website the use of uploading photos and videos of music and dance and also user can inform for the next shop and ticket details ",
      viewlink: "https://dance-with-music.vercel.app/",
    },
    {
      image: "olecons.jpg",
      title: "Olecons Task",
      desc: "In this project i have used multiple language in which a user can read website in multiple languages by clicking on button selecting language mannualy",
      viewlink: "https://olecons.vercel.app/",
      
    },
    {
      image: "sigmacrm.webp",
      title: "3sigma task",
      desc: "In this task the company given a task to clone the form without functionality",
      viewlink: " https://3sigmacrmtask.vercel.app/",
      
    },
    {
      image: "assiduus.webp",
      title: "Graph Task",
      desc: "This task is given by a company in which the use of D3.js is done for the graphs",
      viewlink: "https://assidusstask.vercel.app/",
      
    },
    {
      image: "favicon.ico",
      title: "React Concept",
      desc: "In this repository i mentioned all that functionality which i used during my internship or learning time ",
      viewlink: "https://github.com/DHARMENDRApatidar1994/react-concept",
      
    },
  ]

  return (
    <div>
      <Nav />

      <div className='react bg-dark text-light text-center py-3' style={{borderBottom: "1px dashed white"}}>
        <h2>React.js Projects</h2>
      </div>

      <div className='reactjs bg-dark text-light '>
        {landing?.map((item) => (
          <div className='itemsetttt' key={item}>
            <a className='image' target='_blank' href={`${item.viewlink}`}><img src={`${item.image}`} alt="" /></a>
            <div className='mt-2 d-flex justify-content-between'>
                    <h4 style={{fontFamily: "sans-serif"}}>{`${item.title}`}</h4>
                    <button className='btn btn-secondary px-3'><a className='text-light' target='_blank' style={
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

export default Reacted
