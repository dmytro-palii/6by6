import { useState } from "react"
import * as SC from "./Banner.styled"
import slides from "../../data/slides.json"


export const Banner = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {

        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0: currentIndex + 1

        setCurrentIndex(newIndex)
    }

    const prevSlide = () => {

        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1

        setCurrentIndex(newIndex)
    }

    const goToSlide = (index) => {

        setCurrentIndex(index)
    }

    return  <>
                <SC.Banner index={currentIndex}>
                    <SC.ArrowLeft onClick={prevSlide}>&#10096;</SC.ArrowLeft>
                    <SC.ArrowRight onClick={nextSlide}>&#10097;</SC.ArrowRight>
                    <SC.SlideNavigation>
                        {slides.map((slide, index) => {
                            return  <li key={slide.id}>
                                        <button type="button" onClick={() => goToSlide(index)}>0</button>
                                    </li>
                        })}
                    </SC.SlideNavigation>
                </SC.Banner>
            </>
}