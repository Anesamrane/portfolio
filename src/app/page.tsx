import React from 'react'
import  style  from './page.module.css'
import Black from '@/componant/black/Black'
import Side from '@/componant/side/Side'

function page() {
  return (
    <div className={style.wall}>
      <Black />
      <Side />

    </div>
  )
}

export default page