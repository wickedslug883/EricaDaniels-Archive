import React from 'react'
import { FaFacebookSquare, FaInstagram, FaSoundcloud } from 'react-icons/fa'

const Media = () => {
return (

<div className="container-fluid media" style={{backgroundColor: "#031926", color:"white"}}>
<div className="row">
<div className="col-md-12 d-flex justify-content-center">
<h1 style={{fontWeight: 'bold', fontSize: '4em'}}>Media</h1>
</div>
</div>
<div className="row">
<div className="col-md-6">
<img src={require("./media.jpg")} className="img-fluid media-img" alt="Erica Daniels"/>
<h1></h1>
</div>
<div className="col-md-6 d-flex align-items-center">
<div className="mx-5">
<a href="https://www.facebook.com/EricaDanielsMusic" target="_blank" rel="noopener noreferrer" style={{fontSize: '20em'}}><FaFacebookSquare/></a>
<p style= {{fontWeight: '850', fontSize: "3em"}}className="h4">Facebook </p>
</div>
<div className="mx-5">
<a href="https://www.instagram.com/ericadanielsmusic" target="_blank" rel="noopener noreferrer" style={{fontSize: '20em'}}><FaInstagram/></a>
<p style= {{fontWeight: '850', fontSize: "3em"}} className="h4">Instagram</p>
</div>
<div className="mx-5">
<a href="https://soundcloud.com/ericadanielsmusic" target="_blank" rel="noopener noreferrer" style={{fontSize: '20em'}}><FaSoundcloud/></a>
<p style= {{fontWeight: '850', fontSize: "3em"}} className="h4">Soundcloud</p>
</div>
</div>
</div>
</div>
)
}
export default Media;