import React from 'react'

function IconTitle(props) {

  return (
    <div className="iconTitle">
      <h1 className="pageTitle mb-2">{props.title}</h1>
      {props.children}
      <hr size="10" className={`lineBreak ${props.margin || 'mb-2'}`} />
    </div>
  )
}

export default IconTitle