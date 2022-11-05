import React from 'react'
import {Link} from 'react-router-dom'
import { HashLink} from 'react-router-hash-link'


export default function Header() {
  return (
   <nav>
    <h1>Tech-Monk</h1>
    <main>
        <HashLink to={'/#home'}>Home</HashLink>
        <Link to={'/contact'}>Contact</Link>
        <HashLink to={'/#about'}>About</HashLink>
        <HashLink to={'/#brands'}>Brand</HashLink>
         
        {/* <Link to={'/'}>Home</Link> */}
    </main>
   </nav>
  )
}
