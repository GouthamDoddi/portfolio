import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
      <p>Have a project in mind? <br className='sm:block hidden' />
      Let's build somthing together! </p>
      <Link to="/contact" className="btn">
        Contact
      </Link>
    </section>
  )
}

export default CTA
