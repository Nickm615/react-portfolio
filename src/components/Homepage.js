import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import MyCard from './Card'
import ProjectCard from './Projects';
import mtgGif from '../images/mtg.gif'
import tripGif from '../images/trip.gif'
import blogGif from '../images/blog.gif'
import noteGif from '../images/note.gif'
import employeeGif from '../images/employee.gif'
import plannerGif from '../images/planner.gif'
import Contact from './Contact'


function HomePage() {

    return (
            <div className = 'row'>
                <header>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home"><h1>Nick Margaritondo</h1></Navbar.Brand>
                            <Nav className="me-auto col-12 row">
                                <Nav.Link className='text-center col-3' href="#about-me"><h5>About Me</h5></Nav.Link>
                                <Nav.Link className='text-center col-3' href="#projects"><h5>Projects</h5></Nav.Link>
                                <Nav.Link className='text-center col-3' href="#contact"><h5>Contact Me</h5></Nav.Link>
                                <Nav.Link className='text-center col-3' href="#resume"><h5>Resume</h5></Nav.Link>

                            </Nav>
                        </Container>
                    </Navbar>
                </header>
                <MyCard />
                <ProjectCard 
                title = 'MtG Alpha Set Collector'
                body = 'An interactive web app that lets users browse trading cards and add them to a virtual collection' 
                img = {mtgGif}
                ghLink = 'https://github.com/Nickm615/Project-2-MtG-Collection-Manager'
                deploylink = 'https://mtg-alpha-collection-manager.herokuapp.com/'
                 />
                <ProjectCard 
                title = 'Trip Tunes'
                body = 'An interactive web app that lets users enter a car trip and an artist to generate a spotify playlist of the appropriate length featuring the selected artist.' 
                img = {tripGif}
                ghLink = 'https://github.com/jessicamcg/trip-tunes'
                deploylink = 'https://jessicamcg.github.io/trip-tunes/'
                 />
                <ProjectCard 
                title = 'Web Blog'
                body = 'A message board app that allows users to create accounts, log in and create and edit posts and comments.' 
                img = {blogGif}
                ghLink = 'https://github.com/Nickm615/Homework-14-Tech-Blog'
                deploylink = 'https://homework-14.herokuapp.com/'
                 />
                  <ProjectCard 
                title = 'Note Taker'
                body = 'An app that lets you save, delete and edit notes.' 
                img = {noteGif}
                ghLink = 'https://github.com/Nickm615/Homework-14-Tech-Blog'
                deploylink = 'https://homework-14.herokuapp.com/'
                 />
                  <ProjectCard 
                title = 'Employee Tracker'
                body = 'A command line application that allows a user to update tables of employee data.' 
                img = {employeeGif}
                ghLink = 'https://github.com/Nickm615/Homework-12-Employee-Tracker'
                deploylink = ''
                 />
                  <ProjectCard 
                title = 'Day Planner'
                body = 'A planner app that lets the user plan events on a daily schedule and updates color based on current time of day' 
                img = {plannerGif}
                ghLink = 'https://github.com/Nickm615/Homework-5-Day-Planner'
                deploylink = 'https://nickm615.github.io/Homework-5-Day-Planner/'
                 />
                 <Contact />
            </div>

    )
}

export default HomePage;