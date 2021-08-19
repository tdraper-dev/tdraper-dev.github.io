import React from 'react'
import { Link } from 'react-router-dom'

const dungeonMap = 
  <div>
    I built <Link className="aboutTextLink" to="/Projects"><i>Dungeon Map!</i></Link> as a gift to my friend who often virtually DM'd campaigns in 2020 pandemic times. He complained that <i>Beyond20</i>'s virtual map interface could be a bit convoluted, and that he wanted a simple web app for drop-in/drop-out play with little overhead. The iteration of <i>Dungeon Map!</i> presented in this portfolio is a more complex rehashing of the humble project I initially built using JQuery and Bootstrap that utilized draggable elements and HTTP polling in order to replicate the online feel of a live Dungeon Master board. For the curious, you can find that initial project <a className="aboutTextLink" rel="noreferrer" href="https://dungeonmap.netlify.app/" target="_blank">here</a>.
    <br />
    <br />
    Fast-forward to July of 2021, and I chose to give the application a complete rebuild. I knew I could make an entirely <i>new</i> project with a different purpose, but my original Dungeon Map was a gift to a friend, and I felt like I had more to give. By this point, too, I had certainly acquired a lot more skills. My superordinate goal was to maintain that <span className="textFlavor">simple UI</span> in order to create an <span className="textFlavor">easy-to-use UX</span>. After all, the original gift was a simple map tool for a friend. I wanted to expand it, however, so other dungeon masters could use the tool which meant establishing a database and login functionality. Get in here <span className="textFlavor">MongoDB</span>. Furthermore, I wanted a dungeon master to be able to use this thing on their phone, so that even if they took a road trip they might still engage in remote play with their friends. Okay, so add a goal of <span className="textFlavor">complete mobile-responsiveness</span> to the list. Not only that, but if they were hosting a session on their phone, the dungeon master couldn't just be tabbing in and out of the app to send a message, so I needed to add <span className="textFlavor">live chat functionality</span> to the build... 
    <br />
    <br />
    <p className="blogTextCenter">
      <i><a style={{fontWeight: '400'}} className="aboutTextLink" rel="noreferrer" href="https://socket.io/" target="_blank">Socket.IO</a> has entered the chat...</i>
    </p>
    
    <br />
    <br />
    We'll throw on top of that <span className="textFlavor">React, Nodejs, Express</span> and that's the soup we have simmering.  All-in-all, the project took me about a week and a half to build. I tried to avoid installing 3rd party libraries whenever possible in order to further develop my own abilities. This meant some trouble-shooting in the draggable element department. A jittery, unreliable draggable  experience led to <a className="aboutTextLink" rel="noreferrer" href="https://stackoverflow.com/questions/68599217/why-is-my-draggable-component-in-react-moving-ahead-of-cursor-onmousemove/68604846#68604846" target="_blank">my first Stack Overflow question</a> after over a year of studying web development. While I received zero responses, a hunch led to my solution which, in a nutshell, centered around re-calculating the element's position percentage using clientX and clientY to the map image's own boundingClientRect() left and top. I added a positionRef in order to track the cursor's location within the element -- this prevented the element's top-left corner from snapping to the cursor whenever dragged. The relational positioning kept the location of player pieces constant across viewport dimensions -- essential for live gameplay across various devices.
    <br />
    <br />
    <p className="blogTextCenter">
    dragRef.current.style.left = (e.clientX + posRef.current.x - aspectBox.left)/aspectBox.width*100
    <br />
    dragRef.current.style.top = (e.clientY + posRef.current.y - aspectBox.top)/aspectBox.height*100
    </p>
    <br />
    <br />
    I often tested image uploading with a sample 4k image, and I'm glad I did as this revealed another big issue: image file size. I found that if I pushed 5-6 4k images to the Dungeon Master's dashboard, initial load times could exceed 10 seconds. Uh-oh. This led me to the <a className="aboutTextLink" rel="noreferrer" href="https://sharp.pixelplumbing.com/" target="_blank">Sharp library</a> for image resizing. While I don't think my solution is perfect, and indeed this is one of the areas I intend to return to for improvement, by auto-rescaling images over a certain size, I was able to significantly reduce initial load time. My compromise, however, is that the app maintains original image resolution whenever users load into the specific gameboard.

  </div>

const travelMoney = 
  <p>
    TravelMoney
  </p>

const dawdlist =
  <p>
    Dawdlist
  </p>

export const blogPosts = [

  { 
    title: "MERN Stackin' DnD Map with Socket.IO",
    content: dungeonMap,
    date: 'August 3rd, 2021',
    id: 1
  },

  {
    title: 'Working with React and Class Components',
    content: travelMoney,
    date: 'June 3rd, 2021',
    id: 2
  },

  {
    title: "To-Do's and old school polling",
    content: dawdlist,
    date: 'April 22nd, 2021',
    id: 3
  }

]