import React, { useState, useEffect } from "react";
import axios from "axios";
import StarwarsCard from "./StarwarsCard";
import "../../src/App.css";
import { Container, Row } from "reactstrap";

export default function StarwarsCards() {
    const [card, setCard] = useState([]);

    useEffect(() => {


        axios.get("https://cors-anywhere.herokuapp.com/https://swapi.co/api/people")
            .then(res => {
                console.log(res)
                const StarwarsChar = res.data.results
                console.log(StarwarsChar)
                setCard(StarwarsChar)
            })
            .catch(err => {
                console.log('There was an error', err)
            })
    }, []);

    return (
        <Container>
            <Row>
                {card.map(person => {
                    return (
                        <StarwarsCard
                            key={person.name}
                            name={person.name}
                            birthYear={person.birth_year}
                            gender={person.gender}
                            skinColor={person.skin_color}
                            hairColor={person.hair_color}
                            height={person.height}
                        />
                    )
                })}
            </Row>
        </Container>
    )
}