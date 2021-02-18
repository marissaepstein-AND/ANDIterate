import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import ReactCardCarousel from "react-card-carousel";
import Events from '../../resources/data/events.json'
import { media } from "../../styles/theme"


import { CarouselProvider, Slider, Slide, DotGroup, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';



const Header = styled.p`
    color: ${p => p.theme.colors.primaryRed};
    font-size: 2rem; 
`

const Container = styled.div`
    // height: fit-content;

    ${media.tablet`
    position: relative;
    top: 13rem;
    `}

`

const Title = styled.div`
    font-size: 4rem; 
    color: ${p => p.theme.colors.primaryRed};
    font-weight: ${p => p.theme.h1.fontWeight};
    margin-bottom: 1rem;
`

const Subtitle = styled.div`
    font-size: 1rem;
    font-weight: ${p => p.theme.h3.fontWeight};
    
`

const Card = styled.div`
    background-color: white;
    padding: 2rem;
`

const EventCarousel = () => {

    console.log(Events.items.map((event) => event.summary))

    return <CarouselProvider naturalSlideWidth={100}  naturalSlideHeight={80} totalSlides={3} >
        <Slider style={{ boxShadow: '0 4px 2px -1px #c1c1c1', borderRadius: '1rem' }}>
            {Events.items.map((event) => {
                return <Slide>
                    <Card>
                    <Header>Next Sprint Event:</Header>
                    <Title>{event.summary}</Title>
                    <Subtitle>{event.description}</Subtitle>
                    <Subtitle>Start time:</Subtitle><p>{event.start.dateTime}</p>
                    </Card>
                 </Slide>})}
                 {/* <DotGroup dotNumbers={true}/> */}
        </Slider>
  </CarouselProvider>
    
    // <Container>
    //  <ReactCardCarousel autoplay={false}>
    //     {Events.items.map((event) => {
    //     return <Card>
    //         <Header>Next Sprint Event:</Header>
    //         <Title>{event.summary}</Title>
    //         </Card>})}
    // </ReactCardCarousel>
    // </Container>

}

export default EventCarousel 