import React, { useState } from 'react'
import { blogPosts } from '../blogPosts/Blogs'
import { FaArrowDown } from 'react-icons/fa'
import IconTitle from './IconTitle'


const BlogArrow = ({ rotate }) => {

  return (
    <div title="Click to read more" className={`blogArrow `}>
      <FaArrowDown className={`blogArrowIcon ${rotate ? '' : 'rotate'}`} />
    </div>
  )
}

const DateBox = ({ color, date }) => {

  return (
    <div 
      style={{
        backgroundColor: `${color === 'rgb(0, 143, 149)' 
          ? 'rgb(233, 128, 0)' 
          : 'rgb(0, 143, 149)'
        }`
      }}
      className="noselect col-1 dateBox">{date}</div>
  )
}

const BlogTitle = ({ title, color, setRotate, rotate, date }) => {

  return (
    <div onClick={() => setRotate(!rotate)}className="blogTitle pt-2 d-flex" style={{ backgroundColor: color }}>
      <p className="blogTitleText col-10 my-0">{title}</p>
      <DateBox color={color} date={date} />
      <BlogArrow rotate={rotate} />
    </div>
  )
}

const BlogContent = ({ content, rotate }) => {
  return (
    <div className={`blogContent ${rotate ? 'expanded' : 'hidden'}`}>
      {content}
    </div>
  )
}

function BlogEntry({ content, title, color, date }) {
  const [rotate, setRotate] = useState(false)
  
  return (
    <div className="col-12 blogEntry">
      <BlogTitle setRotate={setRotate} rotate={rotate} title={title} color={color} date={date} />
      <BlogContent rotate={rotate} content={content} />
    </div>
  )
}

export function BlogSheet({ blogs }) {

  return (
    <>
    {blogs.map((blog, index) => {
      return <BlogEntry 
        key={blog.id} 
        color={index % 2 === 0 ? 'rgb(0, 143, 149)' : 'rgb(233, 128, 0)'}
        title={blog.title} 
        content={blog.content}
        date={blog.date} />
    })}
    </>
  )
}

function Blog() {

  return (
    <>
    
    <div className="blogRow row">
      <IconTitle title="Working Blog" margin="mb-5" />
      <BlogSheet blogs={blogPosts} />
    </div>
    </>
  )
}

export default Blog