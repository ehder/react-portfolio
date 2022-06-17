import React from 'react'
import {BsLinkedin, BsGithub, BsFacebook} from 'react-icons/bs'

// if you use { FaLinkedin, FaGithub} you have to immort from 'react-icon/fa'
// if you use { FiLinkedin, FiGithub } you have to immort from 'react-icon/fi'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><BsFacebook/></a>
    </div>
  )
}

// For Icon: npm install react-icons --save

export default HeaderSocial