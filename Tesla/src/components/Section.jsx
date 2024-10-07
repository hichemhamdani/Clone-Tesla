import React from 'react'

function Section({description,title,backgroundImg,leftBtnText,rightBtnText,anchor}) {
  return (
    <div className='wrap' style={{'backgroundImage' : `url('images/${backgroundImg}')`}} id={anchor}>
        <div className="item-text">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div className="buttons">
            <div className="button-group">
                <button className='left-button'>{leftBtnText}</button>
                {rightBtnText ? <button className='right-button'>{rightBtnText}</button> : ''}
            </div>
            <img src="/images/down-arrow.svg" alt="" className="down-arrow" />
        </div>
    </div>
  )
}

export default Section