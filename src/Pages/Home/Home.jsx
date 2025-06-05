import React from 'react'
import './home.css'
import mainGateImg from '../../assets/images/mainGate_compressed.png'
import ConvocationImg from '../../assets/images/convocation_compressed.jpg'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import tpoImg from '../../assets/images/tpo_compressed.png'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="container-fluid p-0 position-relative">
      {/* Image Section - Maintains Original Height */}
      <img src={mainGateImg} alt="PVPIT Alumni" className="w-100 d-block" style={{ height: "auto" }} />

      <div className="position-relative text-white floatTitle">
        <p className="pb-3 hometxt">Home</p>
        <h2 className="fw-bold">Alumni</h2>
        <p className="mb-0">Forging lasting bonds</p>
      </div>

      {/* Description Section - Pushes Content Below the Overlay */}
      <div className="container " style={{ position: "relative", zIndex: 1 }}>
        <p className="text-justify fs-3 shortDesc" style={{ fontFamily: "Arial", fontWeight:"700" }}>
        <strong> At Padmabhooshan Vasantdada Patil Institute of Technology (PVPIT), our endeavor is to create a vibrant intellectual environment that nurtures the free thinker, the pro-active problem solver, the “I’ll do it on my own!” entrepreneur. Their journeys begin at our gates, and we are proud of their successes.</strong>
        </p>
      </div>
    </div>


    <div className="imageShowcaseWrapper ">
      <div className="imageSlider">
        <img src={ConvocationImg} alt="" />
      </div>
      <p>Connections begin</p><p> here </p><p>and go beyond</p>
    </div>

    <div className="ctaWrapper">
      <div className="row px-5 py-3 ctaWrap m-auto align-content-center">
        <Link className='col d-flex flex-column justify-content-center align-items-center px-4  h-100'>
          <div className="">
            <span ><ArticleOutlinedIcon className='ctaIcon'/></span>
            <h3>NewsLetter</h3>
            <p>Take a look at the past and upcoming  events, as well as testimonials and more.</p>
          </div>
        </Link>

        <Link className='col d-flex flex-column justify-content-center align-items-center px-4  h-100'>
          <div className=" ">
            <span ><WorkspacePremiumOutlinedIcon className='ctaIcon'/></span>
            <h3>ALUMNI DIRECTORY</h3>
            <p>Our Alumni have distinguished themselves in various walks of life</p>
          </div>
        </Link>
        

        <Link className='col d-flex flex-column justify-content-center align-items-center px-4  h-100'>
          <div className="">
            <span ><GroupsIcon className='ctaIcon'/></span>
            <h3>ALUMNI  BODY</h3>
            <p>Take a glimpse at the people working behind the scenes</p>
          </div>
        </Link>
        

        <Link className='col d-flex flex-column justify-content-center align-items-center px-4  h-100'>
          <div className=" ">
            <span ><AccountCircleIcon className='ctaIcon'/></span>
            <h3>CONNECT</h3>
            <p>Sign In or Sign Up into our portal</p>
          </div>
        </Link>
        
      </div>
    </div>

    <div className="tpoDescWrapper row">
      <div className="col-12 col-md-4">
        {/* <span className='imgBG'><img src={tpoImg} alt="" /></span> */}
        <div className="profileWrapper">
          <div className="profile-container">
              <img src={tpoImg} alt="Profile" className="profile-img"/>
          </div>
          <div className="infoWrapper">
            <h4>Prof. Akash Shrivastava</h4>
            <p className='text-center designation'>TPO, In-Charge, Alumni Cell</p>
          </div>
          
        </div>
       
        
        
      </div>

      <div className="col-12 col-md-8">
        <h3 className='py-5'>Dear torch- bearers of PVPIT:</h3>
        <p>Life at PVPIT doesn’t end after you graduate; in fact, it continues, grows and thrives. As an alumnus of PVPIT, each one of you is the brand ambassador of your alma mater. Your brilliance in the professional paths you have chosen to follow as well as a responsible citizen of this country (and/or globe), and moreover as a good human being articulates the pride of our institute. The magnificent examples set by you continue to inspire students to achieve even greater milestones.
        <br />
        Looking forward to more meaningful interactions with you to take the Institute to greater heights with the sky as the limit...</p>
        <p></p>
      </div>
    </div>
    </>
    
  )
}

export default Home