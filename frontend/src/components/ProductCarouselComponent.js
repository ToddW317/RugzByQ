import {Carousel} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const ProductCarouselComponent = () => {
    const cursorP = {
        cursor: "pointer"
    };
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    crossOrigin="anonymous"
                    className="d-block w-100"
                    style={{height: "300px", objectFit: "cover"}}
                    src="/images/carousel/Rug_Jordan.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <LinkContainer style={cursorP} to="/product-details">
                        <h3>Category: Sports</h3>
                    </LinkContainer>
                    <p>See what all the Sports Category has!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    crossOrigin="anonymous"
                    className="d-block w-100"
                    style={{height: "300px", objectFit: "cover"}}
                    src="/images/carousel/Rug_RickNMorty.png"
                    alt="Second slide"
                />
                <Carousel.Caption>
                <LinkContainer style={cursorP} to="/product-details">
                    <h3>Category: TV Shows</h3>
                </LinkContainer>
                <p>See what all the TV Shows Category has!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{height: "300px", objectFit: "cover"}}
                    src="/images/carousel/Rug_Shark.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                <LinkContainer style={cursorP} to="/product-details">
                    <h3>Category: Kids</h3>
                </LinkContainer>
                <p>See what all the Kids Category has!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ProductCarouselComponent;