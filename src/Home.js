import React from 'react'
import Nevbar from './Nevbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    return (
        <>
        <Nevbar/>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 imgsize"
                src="/image/679140.png"
                alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 imgsize"
                src="/image/430890.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 imgsize"
                src="/image/1136157.png"
                alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
        <div className='row center'>
        <div className="card my-3 " style={{width: '18rem', margin:"auto"}}>
            <img src="/image/1141.jpg" className="card-img-top" alt="exapmle"/>
            <div className="card-body">
                <h5 className="card-title">What is coding?</h5>
                <p className="card-text">Coding, sometimes called computer programming, is how we communicate with computers. Code tells a computer what actions to take, and writing code is like creating a set of instructions.</p>
                <Link className="btn btn-primary"  to='/card1'>More Information</Link>
            </div>
        </div>
        <div className="card my-3" style={{width: '18rem',margin:"auto"}}>
            <img src="/image/into-codin.jpg" className="card-img-top cardimg" alt="file"/>
            <div className="card-body">
                <h5 className="card-title">Why Learn to Code?</h5>
                <p className="card-text">It wasn’t long ago that coding was seen by many as an odd hobby for geeks tinkering with computers in their basements. But over the past several years, coding has progressed from a hobby to a critical career skill.</p>
                <Link className="btn btn-primary" to='/card2'>More Information</Link>
            </div>
        </div>
        </div>
        <Footer />
        </>
      )
    }