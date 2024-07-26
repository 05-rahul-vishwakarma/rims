import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS

const DemoCarousel = () => {
    const onChange = (index) => {
        console.log(`Carousel slide changed to index ${index}`);
    };

    const onClickItem = (index) => {
        console.log(`Clicked item at index ${index}`);
    };

    const onClickThumb = (index) => {
        console.log(`Clicked thumbnail at index ${index}`);
    };

    return (
        <Carousel
            showArrows={true}
            autoPlay={true} // Enable autoplay
            interval={3000} // Interval between slides in milliseconds
            infiniteLoop={true} // Loop the slides
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}

        >

            <div className="border-2 border-yellow-500 h-fu " >
                <img src="item1.png" alt="Slide 1" className="h-full w-full object-cover " />
            </div>
            <img src="item2.png" alt="Slide 3" />
            <img src="item3.png" alt="Slide 4" />
            <img src="item4.png" alt="Slide 4" />
            <img src="item5.png" alt="Slide 4" />
        </Carousel>
    );
};

export default DemoCarousel;
