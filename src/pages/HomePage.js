import React, { Component } from 'react';

import { Alert, Button,  UncontrolledCarousel,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import Artigo from '../components/Artigo'
import Contador from '../components/Contador'

const items = [
    {
      src: 'img1.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header'
    },
    {
      src: 'img2.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header'
    },
    {
      src: 'img5.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header'
    }
  ];

class HomePage extends React.Component {

    render() {
        return (
            <div>

            <div className="App">
                {/* 
                    <Button color="danger">Clique Aqui</Button>
        
                    <Alert color="primary"> Olá Mundo </Alert>

                    <Artigo nome="Osvaldo" texto="Introdução ao React Js" />
                    <Artigo nome="João" texto="BURRO" />


                    <Contador tempo={1000} />
                    <Contador numero={300} />
                */}
            

                <UncontrolledCarousel items={items}/>
                
        

            </div>
            
            </div>
        )
            
        
        
    }
}

export default HomePage;