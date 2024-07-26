/* eslint-disable no-unused-vars */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS

const DemoCarousel = () => {
    const onChange = (index) => {
        // console.log(`Carousel slide changed to index ${index}`);
    };


    return (
        <div className="h-full z-[-2] "> {/* Ensure parent container takes full height */}
            <Carousel
                showArrows={true}
                autoPlay={true} // Enable autoplay
                interval={3000} // Interval between slides in milliseconds
                infiniteLoop={true} // Loop the slides
                onChange={onChange}
                className="h-full" // Ensure the carousel takes full height
            >
                <div className="h-[28vh] lg:h-full flex justify-center ">
                    <img src="item1.png" alt="Slide 1" className="h-full w-full object-cover" />
                </div>
                <div className="h-full">
                    <img src="item2.png" alt="Slide 2" className="h-full w-full object-cover" />
                </div>
                <div className="h-full">
                    <img src="item3.png" alt="Slide 3" className="h-full w-full object-cover" />
                </div>
                <div className="h-full">
                    <img src="item4.png" alt="Slide 4" className="h-full w-full object-cover" />
                </div>
                <div className="h-full">
                    <img src="item5.png" alt="Slide 5" className="h-full w-full object-cover" />
                </div>
            </Carousel>
        </div>
    );
};

export default DemoCarousel;
