import React from 'react'
import'./footer.css'
import Logo from '../../assets/images/Logo.svg'
import MapImg from '../../assets/images/map.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="row px-2 footerWrapper d-flex justify-content-center">

        <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center part1">
          <div className="footer-logo"><img src={Logo} alt="" /></div>
          <div className="clgName">
            <h3>Padmabhooshan Vasantdada Patil Institute of Technology</h3>
          </div>
        </div>

        <div className="col-12 col-md-3 part2 ">
          <div className="heading">
            <h2 className='px-2'>Address</h2>
            <hr style={{ border: "2px solid white", width: "100%" ,opacity:1,margin:'0',marginBottom:'5px'}} />
            <p className='py-2'>S No 33/22, Pune Pirangut Road, next to Chandani Chowk, Bavdhan, Pune, Maharashtra 411021.</p>
            {/* <img className='py-2 px-2 mapImg' src={MapImg} alt="" />  */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.648955002263!2d73.77167661127456!3d18.499553669742316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2be5faaaaaaab%3A0x858e71c09987358e!2sPADMABHOOSHAN%20VASANTDADA%20PATIL%20INSTITUTE%20OF%20TECHNOLOGY%20(PVPIT)!5e0!3m2!1sen!2sin!4v1743268426355!5m2!1sen!2sin" width="500" height="150"allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <p className='pt-2 text-center'>Get Directions</p>        
          </div>
        </div>

        <div className="col-12 col-md-3  part3 ">
          <div className="heading">
              <h2 className='px-2'>Connect with Us</h2>
              <hr style={{ border: "2px solid white", width: "100%" ,opacity:1,margin:'0',marginBottom:'5px'}} />
              <p><Link to='https://www.instagram.com/pvpitbavdhan6122?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' ><span className='icon d-flex align-items-center'><InstagramIcon/>PVPIT Bavdhan</span></Link></p>
              <p><Link to='https://www.facebook.com/pvpitbavdhan/?_rdr' ><span className='icon d-flex align-items-center'><FacebookIcon/>PVPIT Bavdhan</span></Link></p>
              <p><Link to='https://www.linkedin.com/company/padmabhooshan-vasantdada-patil-institute-of-technology-bavdhan-6122/?originalSubdomain=in' ><span className='icon d-flex align-items-center'><LinkedInIcon/>Placement Cell</span></Link></p>
          </div>
        </div>

        <div className="col-12 col-md-3  part4 ">
          <div className="heading">
              <h2 className='px-2'>Contact Us</h2>
              <hr style={{ border: "2px solid white", width: "100%" ,opacity:1,margin:'0',marginBottom:'5px'}} />
              <p className='py-2'>
  Prof. Ganesh Wayal
  <br />Head Of Dept. (Computer Dept.)
  <br />
  <span>
    <span className='icon d-flex align-items-center'>
      <CallOutlinedIcon />+91 8275047372 (Phone)
    </span>
  </span>
  <br />
  Mr. Akash Shrivastava
  <br />
  TPO, In-charge, Alumni Cell
  <br />
  <span>
    <span className='icon d-flex align-items-center'>
      <CallOutlinedIcon />+91 9303683660 (Phone)
    </span>
  </span>
</p>

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer