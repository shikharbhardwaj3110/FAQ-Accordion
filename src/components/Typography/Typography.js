import React from 'react'

const Typography = () => {
    return (
        <div className='d-flex flex-column justify-content-center mx-md-0 mx-3'>
            <div className='text-center'>
                <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.3rem' }} className='faq-abbr-text'>FAQs</span>
            </div>
            <div className='mt-2 text-center'>
                <span style={{ fontFamily: 'Noto Serif Lao, serif', fontSize: '3rem' }} className='faq-text'>Frequently asked questions</span>
            </div>
            <div className='mt-4 text-center'>
                <span style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '1.8rem' }} className='faq-subtext'>Have questions ? We're happy to help.   </span>
            </div>
            <span></span>
        </div>
    )
}

export default Typography