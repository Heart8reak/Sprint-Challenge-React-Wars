import React from "react";
import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap";

const StarwarsCard = props => {
    return (
        <Col sm="6" lg="4" key={props.name}>
            <Card style={{ background: "white", borderColor: "brown" }}>
                <CardBody>
                    <h4><CardTitle>{props.name}</CardTitle></h4>
                    <CardText className="text-muted">Birth: {props.birthYear}</CardText>
                    <CardText className="text-muted">Gender: {props.gender}</CardText>
                    <CardText className="text-muted">Skin Color: {props.skinColor}</CardText>
                    <CardText className="text-muted">Hair Color: {props.hairColor}</CardText>
                    <CardText className="text-muted">Height: {props.height}</CardText>
                    <CardText className="text-muted">Home World: {props.homeWorld}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default StarwarsCard;