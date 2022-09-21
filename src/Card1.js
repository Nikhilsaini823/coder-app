import React from 'react'
import Nevbar from './Nevbar'
import Footer from './Footer'
import "./Card1.css"

export const Card1 = () => {
    return (
    <>
        <Nevbar/>
            <div className='container my-3'>
                <h1>What is coding?</h1>
                <p className='pgh'>
                    Coding, sometimes called computer programming, is how we communicate with computers. 
                    Code tells a computer what actions to take, and writing code is like creating a set of instructions. By learning to write code, you can tell computers what to do or how to behave in a much faster way. You can use this skill to make websites and apps, process data, and do lots of other cool things.
                </p>
                <img
                        className="d-block w-100 my-3 "
                        src="/image/large.jpg"
                        alt="Second slide"
                    />
                <h2>
                    How does coding work?
                </h2>
                <p className='pgh'>
                    Computers and artificial intelligence are built up of, mainly, transistors; and these transistors act as the 'brain' of the computer. Hence, the computer only understands the language of 'on' and 'off,' guided by the transistor switches. The on and off are represented by 1 and 0, respectively, in a binary system. Therefore, your computer and every other gadget run on an infinite sequence of binary codes.
                    These binary codes form the machine code, with each number directing the machine (your computer) to change a sequence in its memory.
                    Programming languages make the binary code language of the computers more manageable by translating our commands into binary code.
                    Coding means using the programming language to get the computer to behave as desired.
                    Each line of the code is a set of instructions for the computer. A set of codes form a script, and a set or dozens of sets, form a program. 
                </p>
                <h2>
                    Coding vs Programming: Head to Head Comparison
                </h2>
                <p className='pgh'>
                    An essential distinction between coding and programming is that programming is the higher level of coding that assembles a set of instructions (codes) to allow your computer to carry out the task. 
                </p>
                <table className="table">
                    <tbody>
                        <tr>
                            <td className='pgh'>Definition</td>
                            <td className='pgh'>Coding- Writing codes to translate one language to another.</td>
                            <td className='pgh'>Programming- The process of assembling a set of instructions in machine language that your machine can execute.</td>
                        </tr>
                        <tr>
                            <td className='pgh'>Aim</td>
                            <td className='pgh'>Coding is aimed at enabling communication between humans and computers.</td>
                            <td className='pgh'>Programming is built for translating human thoughts into machine commands that can be followed by your computer to bring about a function.</td>
                        </tr>
                        <tr>
                            <td className='pgh'>Skill-set required</td>
                            <td className='pgh'>Basic</td>
                            <td className='pgh'>Complex</td>
                        </tr>
                        <tr>
                            <td className='pgh'>Procedure</td>
                            <td className='pgh'>Coding involves writing a certain line of code to send out a message to the computer.</td>
                            <td className='pgh'>Programming analyses and creates different sets of commands or instructions that help the machine to understand the steps involved and produce an output.</td>
                        </tr>
                        <tr>
                            <td className='pgh'>Summary</td>
                            <td className='pgh'>Coding is converting human language into the binary language of computers.</td>
                            <td className='pgh'>Programming is using the codes to create a set of instructions that helps the computer complete a task.</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        <Footer/>
    </>
  )
}
