import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Portfolio.css'
import Nav from './Nav';
import Certificates from './Certificates';


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

// const Navbar = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: #333;
//   color: #fff;
// `;

// const Logo = styled.h1`
//   font-size: 24px;
// `;

// const NavLinks = styled.ul`
//   display: flex;
//   list-style: none;
// `;

// const NavLinkItem = styled.li`
//   margin-right: 10px;
// `;

// const NavLink = styled.a`
//   color: #fff;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Hero = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
//   background-color: #f5f5f5;
// `;

// const HeroContent = styled.div`
//   text-align: center;
// `;

// const HeroTitle = styled.h2`
//   font-size: 48px;
//   margin-bottom: 20px;
// `;

// const HeroSubtitle = styled.p`
//   font-size: 24px;
// `;

const About = styled.section`
  padding: 0px 0;
`;

// const AboutContent = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 40px;
// `;

const AboutImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

// const AboutText = styled.div`
//   flex: 1;
// `;

const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

// const AboutDescription = styled.p`
//   font-size: 18px;
// `;

// const Services = styled.section`
//   padding: 10px 0;
// `;

// const ServicesTitle = styled.h2`
//   font-size: 36px;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const ServicesList = styled.ul`
//   display: flex;
//   justify-content: center;
//   list-style: none;
// `;

// const ServiceItem = styled.li`
//   width: 200px;
//   padding: 20px;
//   text-align: center;
//   background-color: #f5f5f5;
//   margin-right: 20px;
// `;

// const ServiceTitle = styled.h3`
//   font-size: 24px;
//   margin-bottom: 10px;
// `;

// const ServiceDescription = styled.p`
//   font-size: 16px;
// `;

const Contact = styled.section`
  padding: 10px 0;
`;

// const ContactTitle = styled.h2`
//   font-size: 36px;
//   text-align: center;
//   margin-bottom: 20px;
// `;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const FormField = styled.input`
//   width: 300px;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

// const FormTextarea = styled.textarea`
//   width: 300px;
//   padding: 10px;
//   margin-bottom: 10px;
// `;

const FormSubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const Portfolio = () => {
  return (
    <div className='bg-dark'>
    <Container className=''>
        <Nav/>
     <div className=' container w-100 text-center bg-light p-5 mt-3'>
        <h1>Welcome to my Portfolio</h1>
         <h4>Learn from my amazing work</h4>
         
         </div>
       

      <About id="about" >
        <Container className='about d-flex text-light'>
          <div>
            <div >
              <AboutImage src="profile.jpeg" alt="About Me" />
            </div>
            <div className='d-flex flex-column '>
              <AboutTitle>About Me</AboutTitle>
              <p className='w-75'> I am a passionate web developer with experience in React.js and
                Styled Components. I love building modern and responsive
                websites that provide a great user experience.</p>
                <a className='text-light text-decoration-none fs-4'href='tel:9993755927'><i class="ri-phone-fill fs-2 "></i> 9993755927</a>
                <h5><i class="ri-home-8-fill fs-2"></i>  A-132, Sonagiri,Bhopal(M.P.) 462022</h5>
              <a className='text-light'  target='_blank' href="mailto:patidardharmendra1994@gmail.com"> <i class="ri-mail-open-fill fs-2"></i>patidardharmendra1994@gmail.com</a>
              <a className='text-light' target='_blank' href="https://github.com/dharmendrapatidar1994"><i class="ri-github-fill fs-2"></i>https://github.com/dharmendrapatidar1994</a>
             
            </div>
          </div>
          <div className='resume d-flex justify-content-center flex-column'  >

            <img className='mt-3' src="Dharmendra Resume.jpg" alt="" width={500} height={570} />
            <button className='btn btn-dark' ><a href="#" download="CHETNA PATIDAR.jpg"><i class="ri-download-2-fill text-light">Download CV</i></a></button>
          </div>
          

        </Container>
      </About>

     
        <div className='container text-center' data-aos="zoom-in-left">
            <h2 className='text-light mb-4'>My Skills</h2>
           
            <div className='services d-flex justify-content-evenly  flex-wrap w-100  '>

              <Link to="/Html" className='bg-secondary text-light rounded-pill fs-2 mb-5 w-50'>HTML,CSS PROJECTS</Link>
              <Link to="/Java" className='bg-secondary text-light rounded-pill fs-2 mb-5 w-50'>JAVASCRIPT PROJECTS</Link>
              <Link to="/Node" className='bg-secondary text-light rounded-pill fs-2 w-50'>NODE.JS PROJECTS</Link>
              <Link to="/Reacted" className='bg-secondary text-light rounded-pill fs-2 w-50'>REACT.JS PROJECTS</Link>
            </div>
            
        </div>
       
         <Certificates/>
   

      <Contact id="contact"  data-aos="flip-left">
        <Container>
          <h2 className='text-light mb-4 mt-2 text-center '>Contact Me</h2> 
          <ContactForm className='form'  >
            {/* <FormField type="text" placeholder="Your Name" required /> */}
            <input className='w-50 p-2 mb-3' type="text" placeholder='Your Name' required />
            <input className='w-50 p-2 mb-3' type="text" placeholder='Email' required />
           <input className='w-50 p-2 mb-3' type="text" placeholder='Your Message' required />
            <FormSubmitButton className='w-50' type="submit">Send Message</FormSubmitButton>
          </ContactForm>
        </Container>
      </Contact>

      <Footer>
        &copy; 2023 Portfolio. All rights reserved. | Designed by Your Name
      </Footer>
    </Container>
    </div>
  );
};

export default Portfolio;
