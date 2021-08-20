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
    I often tested image uploading with a sample 4k image, and I'm glad I did as this revealed another big issue: image file size. I found that if I pushed 5-6 4k images to the Dungeon Master's dashboard, initial load times could exceed 10 seconds. Uh-oh. This led me to the <a className="aboutTextLink" rel="noreferrer" href="https://sharp.pixelplumbing.com/" target="_blank">Sharp library</a> for image resizing. While I don't think my solution is perfect, and indeed this is an area I intend to improve, by auto-rescaling images over a certain size, I was able to significantly reduce initial load time. My compromise, however, is that the app maintains original image resolution whenever users load into the specific gameboard.
    <br />
    <br />
    I honestly expected to have more issues with Socket.IO, since it was my first time using the library. My overall experience, however, was a smooth one. After watching several tutorials and reading through Socket.Io's wonderfully organized documentation, I loved the idea of extracting the front-end socket logic into a separate module and holding the socket connection there as well. The most difficult moment came when varying the socket connection pathway for a Dungeon Master versus a Guest player. Fortunately, thanks to React's useContext and also some backend token authorization, it was easy to check the client's local storage for Dungeon Master authentication. All of this is necessary, because the Dungeon Master has exclusive access to piece creation and map swapping abilities in the gameboard view. I plan to tweak this in order to avoid a separate logged-in DM from accessing game creation tools by ensuring the gameboard's ID is found within the specific DM's collection of gameboards through Mongoose and MongoDB.
    <br />
    <br />
    I'm proud of <i>Dungeon Map!</i> and the trial-and-error experience I had building it. In future iterations, I plan to fill out the Dungeon Master's toolkit with more options, like an option to draw on the map to replicate shadows and viewing distances or SVGs as well as text for player icon pieces. Like I said before, I would love to make the image uploading process more efficient, but I feel that will first require more research into compression. I might add dice rolling capabilities -- possibly even the lovely dice roll visualization <i>DnDBeyond</i> creates -- but my initial and ultimate goal is to maintain a UX that is simpler, more streamlined than <i>Beyond20</i>.

  </div>
  //<a className="aboutTextLink" rel="noreferrer" href="" target="_blank"></a>
const travelMoney = 
  <div>
    I built <Link className="aboutTextLink" to="/Projects"><i>TravelMoney</i></Link> as a web development exercise focused on utilizing React and React class components. This was my first zero guidance project built with React. I share this project in my portfolio because I feel it showcases a clean UX and makes use of a more legacy-minded React code now that hooks are the norm. The app utilizes the <a className="aboutTextLink" rel="noreferrer" href="https://lodash.com/" target="_blank">lodash</a> function library and makes fetch requests to <a className="aboutTextLink" rel="noreferrer" href="https://www.wikipedia.com" target="_blank">Wikipedia</a> as well as the <a className="aboutTextLink" rel="noreferrer" href="https://www.frankfurter.app/" target="_blank">Frankfurter</a> currency conversion API. I feel this app also demonstrates a habit of mine:  build with theme in mind. 
    <br />
    <br />
    The functionality and fetch requests are there for currency conversions, but I didn't feel satisfied simply building a webpage for a currency calculator. I wanted a hook and then to build from that hook as a sort of theme or thesis for design. Thus, <i>TravelMoney</i>, a currency calculator with an aim towards traveling. I chose an open-air background and lightweight color palette to emphasize movement and travel. The functionality reinforces this principle of movement, as additional information glides into the frame once the user inputs a value and disappears upon an empty input box. Furthermore, I chose to supplement the principle of travel by including fetch requests to Wikipedia for informative blurbs about various countries tracked by the Frankfurter API. It's "chance," as the app will give you a randomized display of three countries each time you input a fresh value. I wanted the app to feel clean whether on a desktop, tablet, or mobile, so I designed with each viewport in mind. This consideration translates functionally into different navigation displays: none on desktop, a slide-away sidebar on tablet, and a dropdown on mobile.
    <br />
    <br />
    Going forward, I definitely want to expand this app to include integration with a travel service API, like Expedia or TripAdvisor, to further reinforce and expand the dual-minded nature of this currency converter. I want to clean up and refactor the code as well. As I said, this was my first solo excursion into building a full React frontend project using class components, and I know I could do a better job at organizing the code, namely by refactoring logic into its own modules and further abstracting functions for simpler reusability. Nevertheless, I am proud to share <Link className="aboutTextLink" to="/Projects"><i>TravelMoney</i></Link> in this portfolio to demonstrate the gains I've made as well as the principles by which I build.
  </div>

const dawdlist =
  <div>
    Initially, <Link className="aboutTextLink" to="/Projects"><i>Dawdlist</i></Link> was that obligatory 'to-do list' app that almost every training program has you build at one point or another. Much like my work with <Link className="aboutTextLink" to="/Projects"><i>TravelMoney</i></Link>, however, I chose to design the app around a particular aesthetic: old-school blackboard, school room vibes. The title is the result of my partner suggesting, "Name it Dawdlist, it sounds weird." Relationship goals. Speaking of my partner, however, I found this app getting heavy use as a grocery store list maker. Or least, I <i>wanted</i> it to get used, but my partner never seemed to touch it. Given its initial build, you had to refresh the page every time in order to check for updates. This is when I dabbled with HTTP polling before I even knew the term "HTTP Polling".
    <br />
    <br />
    I decided to introduce a setInterval function into the mix that would periodically retrieve the latest data from the server. I had an issue for the longest time, however, with intervals stacking resulting in a poor UX. The solution, simple as it was, found me nullifying the interval variable whenever I cleared the interval using window.clearInterval(). I had an issue with the active or complete buttons retoggling themselves upon server refresh. I band-aided this issue by sending a status variable with my server refresh function that would then return with updated list items as well as toggling the  appropriate button. Not a clean fix, I admit. The essential take-away here is that my partner actually started to use the app! We could now be on opposite sides of the grocery store updating our shared list with ease.
    <br /> 
    <br />
    <p className="blogTextCenter"> <strong>Correction: </strong><i>I</i> would be at the grocery store -- she would be at home adding more groceries to the list.</p>
    <br/>
    <br/>
    <i>Dawdlist</i> is an app that I would love to remake. I want to go back in there, probably using a React framework, and create an app that allows for multiple navigable lists, the possibility for public and private lists, and the distillation of "priority tasks" by aggregating the repetition of repeated tasks across public lists. I think for the time being, however, my time will be better spent developing new apps that explore different aspects of my toolkit. I'm proud to share <Link className="aboutTextLink" to="/Projects"><i>Dawdlist</i></Link> in this portfolio, however, as I feel it demonstrates my curiousity and problem-sovling nature, as well as my need to create a product that satifies use cases.
  </div>

export const blogPosts = [

  { 
    title: <span>Dungeon Map: &nbsp; MERN Stackin' DnD Map with Socket.IO</span>,
    content: dungeonMap,
    date: 'August 3rd, 2021',
    id: 1
  },

  {
    title: <span>TravelMoney:  &nbsp; Build with Theme In Mind</span>,
    content: travelMoney,
    date: 'June 3rd, 2021',
    id: 2
  },

  {
    title: <span>Dawdlist: &nbsp;  To-Do's and Old School Polling</span>,
    content: dawdlist,
    date: 'April 22nd, 2021',
    id: 3
  }

]