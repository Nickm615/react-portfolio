import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap'

function ProjectCard(props) {
    return (
            <Card id = 'projects' className = 'row col-10 m-auto'>
                <Card.Img className = 'col-12 img-fluid' variant="top" src={props.img} />
                <Card.Body className = 'col-6'>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.body}
                    </Card.Text>
                    <Button variant="primary">GH Repo</Button>
                    <Button variant="primary">Deployed app</Button>
                </Card.Body>
            </Card>
    )
}


export default ProjectCard