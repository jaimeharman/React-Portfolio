import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
      <div className='hero-container'>
        <h1>Determined. Logical. Consistent.</h1>
        <p>Jaime Harman. Web Developer.</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET THE JOB DONE
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
          </Button>
        </div>
      </div>
    );
  }
  
  export default HeroSection;