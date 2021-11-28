import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap'
import img from '../images/profile-min.jpg'

function MyCard() {
    return(
      <Card id='about-me' className = 'col-10 m-auto flex-row' >
      <Card.Img className = 'm-5'style={{ height: '600px', width: '500px', }} src={img} />
      <Card.Body>
        <Card.Title className = 'm-5'>About me</Card.Title>
        <Card.Text className = 'm-5'>
        I'm a web developer located in Houston, TX. I have experience with HTML, CSS, Bootstrap, JavaScript, JQuery and API. In my free time I enjoy watching baseball and playing Magic: The Gathering.
        </Card.Text>
       <a className = 'btn btn-primary m-5' href='https://google.com'>Contact Me</a>
      </Card.Body>
    </Card>
      //   <Card>
      //   <div id='about-me' fluid class='p-auto m-auto card-body col-6 row'>
      //     <Image src={img} roundedCircle style={{height: '300px'}, {width:'300px'}} className='card-img-left rounded, col-4'  alt="Nick Margaritondo"/>
      //     <h2 className='text-center card-title p-auto m-auto col rounded text-white bg-primary'>About Me</h2>
      //     <p className='card-text'>I'm a web developer located in Houston, TX. I have experience with HTML, CSS, Bootstrap, JavaScript, JQuery and API. In my free time I enjoy watching baseball and playing Magic: The Gathering.</p>
      //     <a class='btn btn-primary col-2 p-auto m-auto' href="#contact">Contact Me!</a>
      //   </div>
      // </Card>

    )
}

export default MyCard;