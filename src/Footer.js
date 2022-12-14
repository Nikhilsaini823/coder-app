import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white py-3 " style={{backgroundColor: '#f1f1f1'}}>
        <div className="text-center text-dark p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
          © 2020 Copyright:
          <a className="text-dark" href="https://google.com/">
            google.com
          </a>
        </div>
      </footer>
    </div>
    )
    }

export default Footer
