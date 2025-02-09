import { useEffect, useState } from "react";
import MarkingText from "../UI/MarkingText"
import SectionTitle from "../UI/SectionTitle"
import FeedbackArrow from './FeedbackArrow';
import { feedbackData } from "./feedbackData";

const Feedback = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const getSlideWidth = () => {
        if (window.innerWidth > 1200) return 513; 
        if (window.innerWidth > 590) return 400; 
        return 300; 
    };
    const [slideWidth, setSlideWidth] = useState(getSlideWidth());
    
    useEffect(() => {
        const handleResize = () => {
            setSlideWidth(getSlideWidth());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (slideIndex === feedbackData.length - 1) {
            setSlideIndex(0)
        } else {
            setSlideIndex((prev) => prev + 1)
        }
    }

    const prevSlide = () => {
        if (slideIndex === 0) {
            setSlideIndex(feedbackData.length - 1)
        } else {
            setSlideIndex((prev) => prev - 1)
        }
    }

    useEffect(() => {
        console.log(slideIndex)
    }, [slideIndex])

    const illustrations = feedbackData.map(item => 
        <img 
            className='feedback__illustration' 
            src={`${process.env.PUBLIC_URL}${item.imgPath}`} 
            alt="" 
            style={{ width: `${slideWidth}px` }}
            />)

    return(
    <section className="feedback">
        <SectionTitle className="feedback__title">What Our Client Are&nbsp;<MarkingText>Saying</MarkingText></SectionTitle>
        <div className="feedback__container">
            <div 
                className="feedback__slider"
                style={{
                    minWidth: `${slideWidth}px`,
                    maxWidth: `${slideWidth}px`
                }}
            >         
                <div 
                    className="feedback__slider-content"
                    style={{
                        transform: `translateX(-${slideIndex * slideWidth}px)`,
                    }}
                >
                    {illustrations}
                </div>
            </div>
            <div className="feedback__info">
            <div className="feedback__info-text-wrapper">
                <div className="feedback__info-qoute">“</div>
                <div className="feedback__info-text">
                {feedbackData[slideIndex].text}
                </div>
                <div className="feedback__info-qoute last">“</div>
            </div>
            <div className="feedback__bottom">
                <div className="feedback__author">
                <MarkingText className="feedback__author-name">{feedbackData[slideIndex].author}</MarkingText>
                <div className="feedback__author-shortdescr">{feedbackData[slideIndex].aboutAuthor}</div>
                </div>
                <div className="feedback__actions">
                <FeedbackArrow className="feedback__arrow" onClick={prevSlide}/>
                <FeedbackArrow className="feedback__arrow" onClick={nextSlide}/>
                </div>
            </div>
            </div>
        </div>
    </section>)
}

export default Feedback