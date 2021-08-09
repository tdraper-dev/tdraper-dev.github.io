import React from 'react'
import { Link } from 'react-router-dom'

const dungeonMap = 
  <p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diving into work on my web app <Link className="aboutTextLink" to="/Projects"><i>Dungeon Map!</i></Link> was initially a rehashing of a project I built early on in the pandemic of 2020. My friends and I had to swap over to Discord for our biweekly Dungeons & Dragons sessions. That humble project, inspired by our Dungeon Master saying Beyond20's map interface was too convoluted, can be found <a className="aboutTextLink" rel="noreferrer" href="https://dungeonmap.netlify.app/" target="_blank">here</a>. It was my first attempt at building an original web application with zero guidance. I used the only tools I had in my belt at the time -- Bootstrap and JQuery -- to tape together a site that utilized draggable elements and HTTP polling in order to replicate the online feel of a live Dungeon Master board.
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fast-forward to July of 2021, and I chose to give the application a complete rebuild. I knew I could make an entirely <i>new</i> project with a different purpose, but my original Dungeon Map was a gift to a friend, and I felt like I had more to give. By this point, too, I had certainly acquired a lot more skills. My superordinate goal was to maintain that <span className="textFlavor">simple UI</span> in order to create an <span className="textFlavor">easy-to-use UX</span>. After all, the original gift was a simple map tool for a friend. I wanted to expand it, however, so other dungeon masters could use the tool which meant establishing a database and login functionality. Get in here <span className="textFlavor">MongoDB</span>. Furthermore, I wanted a dungeon master to be able to use this thing on their phone, so that even if they took a road trip they might still engage in remote play with their friends. Okay, so add a goal of <span className="textFlavor">complete mobile-responsiveness</span> to the list. Not only that, but if they were hosting a session on their phone, the dungeon master couldn't just be tabbing in and out of the app to send a message, so I needed to add <span className="textFlavor">live chat functionality</span> to the build... 
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i><a style={{fontWeight: '400'}} className="textFlavor" rel="noreferrer" href="https://socket.io/" target="_blank">Socket.IO</a> has entered the chat...</i>
    <br />
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We'll throw on top of that <span className="textFlavor">React, Nodejs, Express</span> and that's the soup we have simmering.
  </p>

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