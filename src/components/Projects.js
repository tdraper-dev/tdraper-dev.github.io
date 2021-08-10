import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import IconTitle from './IconTitle'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import DMLogin from '../images/DungeonMapLogin(resized).png'
import DMDashboard from '../images/DungeonMapDashboard(resized).png'
import DMGameboard from '../images/DungeonMapGameBoard(resized).png'
import CurHome from '../images/CurrencyConverterHome(resized).png'
import CurDisplay from '../images/CurrencyConverterDisplay(resized).png'
import CurInfo from '../images/CurrencyConverterInfo(resized).png'
import DawdHome from '../images/DawdHome(resized).png'
import DawdActive from '../images/DawdActive(resized).png'
import DawdComplete from '../images/DawdComplete(resized).png'

const Arrow = ({ direction, style, arrowClick }) => {

  return (
    <div style={style} className="arrowBox" onClick={arrowClick}>
      {direction}
    </div>
  )
}

const ImageSlide = ({ image, website, icons }) => {


  return (
    <div className="imageSlide">
        <a className="websiteLink" rel="noreferrer" href={website} target="_blank">
          <img alt="Project Slide" src={image} className="noselect img-fluid img" />
        </a>
        {icons 
          ? <div className="homeIconImages">
              {icons}
            </div>
          : null
        }
    </div>
  )
}

const ImageCarousel = React.forwardRef((props, ref) => {

  return (
    <div ref={ref} className="carousel row">
      {props.images.map((image, index) => {
        return <ImageSlide 
          key={Math.random()} 
          image={image} 
          website={props.website[index] || props.website[0]} 
          icons={props.icons[index] || null}
          />
      })}
    </div>
  )
})

export const ImageBox = ({ images, website, icons=[], classname}) => {
  const carouselRef = useRef(null)
  const [translate, setTranslate] = useState(0);

  const handleRightArrowClick = () => {
    if(Math.abs(translate) >= (images.length-1)*100) {
      return
    }
    carouselRef.current.style.transform = `translateX(${translate - 100}%)`
    setTranslate(translate => translate - 100)
  }
  const handleLeftArrowClick = () => {
    if(Math.abs(translate) < 100) {
      return
    }
    carouselRef.current.style.transform = `translateX(${translate + 100}%)`
    setTranslate(translate => translate + 100)
  }


  return (
    <div className={classname} title="Click to see the site">
        <Arrow
          arrowClick={handleLeftArrowClick}
          direction={<FaArrowAltCircleLeft color="white" />}
          style={{left: 0}} 
        />
          <ImageCarousel icons={icons} website={website} images={images} ref={carouselRef} />
        <Arrow 
          arrowClick={handleRightArrowClick}
          direction={<FaArrowAltCircleRight color="white" />}
          style={{right: 0}}
         />
    </div>
  )
}
const Keyword = ({ word }) => ( <p className="keyword mx-1 my-1">{word}</p> )



const Keywords = ({ keywords }) => {

  return (
    <div className="keyWordsBox">
      {keywords.map(word => {
        return <Keyword key={Math.random()} word={word} />
      })}
    </div>
  )
}

const TextTitle = ({ title, font=0 }) => {

  return (
    <h3 style={{fontFamily: font.family, fontSize: font.fontSize}} className="projectTitle">
      {title}
    </h3>
  )
}

const Button = () => {
  return (
    <Link className="noLink" to="/Blog">
      <div className="learnMoreButton">
        Learn More
      </div>
    </Link>

  )
}

const TextBlurb = ({blurb}) => {

  return (
    <div className="projectBlurb">
      {blurb}
    </div>
  )
}

const TextBox = ({ text, children }) => {

  return (
    <div className={`col-12 col-xl-6 textBox`}>
      {children}
    </div>
  )
}

function Project({ reverse=false, images, text, textTitle, font, website, keywords }) {

  return (
    <div className="d-flex projectStrip">
      {reverse ? null : <ImageBox images={images} website={website} classname="col-12 col-xl-6 imageBox" /> }
      <TextBox>
        <TextTitle font={font} title={textTitle} />
        <TextBlurb blurb={text} />
        <Button />
        <Keywords keywords={keywords} />
      </TextBox>
      {reverse ? <ImageBox images={images} website={website} classname="col-12 col-xl-6 imageBox" /> : null }
    </div>
  )
}

function ProjectList() {

  return (
    <>
    <Project
      images={[DMLogin, DMDashboard, DMGameboard]}
      text={"A MERN fullstack application with user subscription and token authorization that integrates Socket.IO live data emission and draggable element UI to simulate a live DnD Dungeon Master board. All wrapped in that nostalgic wood-paneled visual to bring us back to DnD'ing in mom's basement."} 
      textTitle={'Dungeon Map!'}
      reverse={false}
      font={{
        family: 'dungeonFont',
        fontSize: '40px',
      }}
      website={['https://thedungeonmap.herokuapp.com/login']}
      keywords={['MERN', 'NodeJs', 'Express', 'React', 'React-Router', 'React Hooks', 'Bootstrap', 'Socket.IO', 'Token Authentication', 'MongoDB', 'Mongoose', 'Image Scaling', 'Draggable Elements', 'Chat Functionality']}
    />
    <Project
      images={[CurHome, CurDisplay, CurInfo]}
      text={'This is a currency converter app'}
      textTitle={'TravelMoney'}
      reverse={window.innerWidth > 1200 ? true : false}
      font={{
        fontSize: '30px',
      }}
      website={['https://powerful-tor-29629.herokuapp.com/']}
      keywords={['Frontend', 'React', 'React Legacy', 'React-Router', 'Bootstrap', 'API Requests', 'Wikipedia']}
    />
    <Project
      images={[DawdHome, DawdActive, DawdComplete]}
      text={'This is a to-do app'}
      textTitle={'Dawdlist'}
      reverse={false}
      font={{
        family: 'grutchFont',
        fontSize: '40px'
      }}
      website={['https://dawdlist.netlify.app/']}
      keywords={['JQuery', 'DOM Manipulation', 'Bootstrap', 'HTTP Polling']}
    />
    </>
  )
}


function Projects() {

  return (
    <>
    <div className="projectsRow row">
      <IconTitle title="My Projects" margin="mb-5" />
    </div>
    <div className="projectContainer row">
      <ProjectList />
    </div>
    </>
  )
}

export default Projects