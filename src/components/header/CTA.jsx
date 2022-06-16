import React from 'react';

// import CV from '../../assets/Vineet Mankani Resume.pdf'
const CV = 'https://bit.ly/VineetMankaniResume'

const CTA = () => {
    return (
        <div className="cta text-center">
            <a href={CV} className='btn btn-outline-primary mx-3' target='_blank' rel="noreferrer">Resume</a>
            <a href="#contact" className='btn btn-primary mx-3'>Contact</a>
        </div>
    )
}

export default CTA;