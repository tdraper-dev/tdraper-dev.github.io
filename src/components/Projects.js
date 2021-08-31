import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom' 
import IconTitle from './IconTitle'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { DungeonMap, TravelMoney, Dawdlist } from '../projectMedia/projectMediaFiles'

const Arrow = ({ direction, style, arrowClick }) => {

  return (
    <div style={style} className="arrowBox" onClick={arrowClick}>
      {direction}
    </div>
  )
}

const ImageSlide = ({ image, website, icons }) => {
  const [imageView, setImageView] = useState(image.static || image.gif)

  return (
    <div className="imageSlide">
        <a className="websiteLink" rel="noreferrer" href={website} target="_blank" aria-label={`Path to ${website}, a project by Travis Draper`}>
          <img 
            alt="Project Slide" 
            src={imageView} 
            className={`noselect img-fluid img ${imageView === image.gif ? 'gifDisplay' : ''}`} 
            onMouseEnter={() => setImageView(image.gif || image.static)}
            onMouseLeave={() => setImageView(image.static || image.gif)}
          />
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

export const ImageBox = ({ images, website, icons=[], classname, children=null, sourceCodes=null}) => {
  const carouselRef = useRef(null)
  const [translate, setTranslate] = useState(0);
  const [count, setCount] = useState(0);

  const handleRightArrowClick = () => {
    if(Math.abs(translate) >= (images.length-1)*100) {
      carouselRef.current.style.transform = `translateX(0)`
      setTranslate(0)
      setCount(0)
      return
    }
    carouselRef.current.style.transform = `translateX(${translate - 100}%)`
    setTranslate(translate => translate - 100)
    setCount(count => count + 1)
  }
  const handleLeftArrowClick = () => {
    if(Math.abs(translate) < 100) {
      carouselRef.current.style.transform = `translateX(${(images.length-1)*-100}%)`
      setTranslate((images.length-1)*-100)
      setCount(images.length-1)
      return
    }
    carouselRef.current.style.transform = `translateX(${translate + 100}%)`
    setTranslate(translate => translate + 100)
    setCount(count => count - 1)
  }

  return (
    <>
    <div className={classname}>
        <Arrow
          arrowClick={handleLeftArrowClick}
          direction={<FaArrowAltCircleLeft color="white" />}
          style={{left: 0}} 
        />
          <ImageCarousel icons={icons} website={website} images={images} ref={carouselRef} />
          {sourceCodes
            ?
            <a title={`Source Code: ${sourceCodes[count]}`} rel="noreferrer" href={sourceCodes[count]} target="_blank" className="noLink" aria-label={`Path to ${sourceCodes[count]}, a project by Travis Draper}`}>
              {children}
            </a>
            : null
          }
        <Arrow 
          arrowClick={handleRightArrowClick}
          direction={<FaArrowAltCircleRight color="white" />}
          style={{right: 0}}
         />
    </div>
    </>
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

const Button = ({ title, link, type }) => {
  return (
    <>
    {
      type === 'Link'
        ? 
        <Link className="noLink" to={link} aria-label={`Path to a blog about making ${title}`}>
          <div className="projectButton">
            {title}
          </div>
        </Link>
        :
        <a className="noLink" rel="noreferrer" target="_blank" href={link} ariaLabel={`Path to source code for ${title}`}>
          <div className="projectButton">
            {title}
          </div>
        </a>

    }
    </>
  )
}

const ProjectButtons = ({ content }) => {

  return (
    <div className="projectButtonsRow">
      {content.map((contents, index) => {
        return <Button key={index} title={contents.title} link={contents.link} type={contents.type} />
      })}
    </div>
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

function Project({ 
  reverse=false, 
  images, 
  text, 
  textTitle, 
  font, 
  website, 
  keywords, 
  sourceCode 
  }) {

  return (
    <div className="d-flex projectStrip">
      {reverse ? null : <ImageBox images={images} website={website} classname="col-12 col-xl-6 imageBox" /> }
      <TextBox>
        <TextTitle font={font} title={textTitle} />
        <TextBlurb blurb={text} />
        <ProjectButtons 
          content={[
            { 
              title: 'Blog Post',
              link: '/Blog',
              type: 'Link',
            },
            {
              title: 'Source Code', 
              link: sourceCode,
              type: 'a'
            }
          ]} 
        />
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
      images={
        [
          {
            static: DungeonMap.login,
            gif: DungeonMap.loginGif
          }, 
          {
            static: DungeonMap.dashboard,
            gif: DungeonMap.dashboardGif
          },
          {
            static: DungeonMap.gameboard,
            gif: DungeonMap.gameboardGif
          },
          {
            gif: DungeonMap.masterGif
          }
        ]
      }
      text="A MERN fullstack application with user subscription and token authorization that integrates Socket.IO live data emission and draggable element UI to simulate a live DnD Dungeon Master board. All wrapped in that nostalgic wood-paneled visual to bring us back to DnD'ing in mom's basement." 
      textTitle={'Dungeon Map!'}
      reverse={false}
      font={{
        family: 'dungeonFont',
        fontSize: '40px',
      }}
      website={['https://thedungeonmap.herokuapp.com/login']}
      sourceCode='https://github.com/tdraper-dev/thedungeonmap'
      keywords={['MERN', 'NodeJs', 'Express', 'React', 'React-Router', 'React Hooks', 'Bootstrap', 'Socket.IO', 'Token Authentication', 'MongoDB', 'Mongoose', 'Image Scaling', 'Draggable Elements', 'Chat Functionality']}
    />
    <Project
      images={
        [
          {
            static: TravelMoney.home
          },
          {
            static: TravelMoney.input
          },
          {
            static: TravelMoney.blurb
          },
          {
            gif: TravelMoney.masterGif
          }
        ]
      }
      text='A React frontend web application that utilizes class components and React Router as well as integrates the Frankfurter currency data and Wikipedia APIs in order to deliver currency conversion data and travel information in a visually lightweight, airy build.'
      textTitle={'TravelMoney'}
      reverse={window.innerWidth > 1200 ? true : false}
      font={{
        fontSize: '30px',
      }}
      website={['https://powerful-tor-29629.herokuapp.com/']}
      sourceCode='https://github.com/tdraper-dev/travelmoney'
      keywords={['Frontend', 'React', 'React Legacy', 'React-Router', 'Bootstrap', 'API Requests', 'Wikipedia']}
    />
    <Project
      images={
        [
          {
            static: Dawdlist.home
          },
          {
            static: Dawdlist.active
          },
          {
            static: Dawdlist.complete
          },
          {
            gif: Dawdlist.masterGif
          }
        ]
      }
      text='A JQuery-built fullstack project that incorporates Bootstrap and HTTP Polling to create a live data refresh to-do list.'
      textTitle={'Dawdlist'}
      reverse={false}
      font={{
        family: 'grutchFont',
        fontSize: '40px'
      }}
      website={['https://dawdlist.netlify.app/']}
      sourceCode='https://github.com/tdraper-dev/dawdlist'
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