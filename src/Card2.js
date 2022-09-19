import React from 'react'
import Nevbar from './Nevbar'
import Footer from './Footer'
import './Card1'

export const Card2 = () => {
    return (
        <>
        <div>
            <Nevbar/>
            <div className='container'>
                <h1>
                Why Learn to Code?
                </h1>
                <p className='pgh'>
                It wasn’t long ago that coding was seen by many as an odd hobby for geeks tinkering with computers in their basements.
                But over the past several years, coding has progressed from a hobby to a critical career skill.
                </p>
            </div>
            <Footer/>
        </div>
        </>
    )
}