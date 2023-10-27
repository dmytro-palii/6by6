import styled from "styled-components"
import slides from "../../data/slides.json"


export const Banner = styled.div`
    background-position: center;
    width: 100vw;
    height: 900px;
    background-image: ${props => `url(${slides[props.index].url})`};
    background-size: cover;
    position: relative;
`
export const ArrowLeft = styled.div`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 56px;
    padding: 36px 16px;
    color: #252525;
    cursor: pointer;
`
export const ArrowRight = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 56px;
    padding: 36px 16px;
    color: #252525;
    cursor: pointer;
`
export const SlideNavigation = styled.ul`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 16px;
`
export const SlideItem = styled.li`
    cursor: pointer;
    border-radius: 50%;
`

