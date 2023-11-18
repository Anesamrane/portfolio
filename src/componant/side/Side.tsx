import React from 'react'
import './side.css'
import Image from 'next/image'
import anespic from '../../../public/photo1678456791.jpeg'
import Link from 'next/link'

function Side() {
  return (
    <div className='wall2'>
        <Image src={anespic}  alt='' />
        <ul className='info2'>
            <h2>Hello in my profile </h2>
            <li>Anes amrane</li>
            <li>21 ans</li>
            <li>+213674803439</li>
            <li>more then 1 year experience</li>
            <li>anesamrane9@gmail.com</li>
            <li>Full stack developper</li>
            <li>Make more then 3 web site</li>
        </ul>
        <Link href="">Send me email</Link>
    </div>
  )
}

export default Side