import React from 'react'
import basePage from '../basePage';
import { useNavigate } from 'react-router-dom';


function TitlePage({ handleFlip }) {

    const history = useNavigate();

    const handleClick = () => {
        handleFlip();
        history('/main-page'); 
    }
  return (
    <div className='page'>
        <span style={{
    "display": "inline-flex", "width": "100%"
            }}>
            <div style={{"fontSize": "7em", "display": "inline-flex"}}>
                <p>PORT</p> <p>FOLIO</p>
            </div>
            <p style={{ "margin": "auto", "fontSize": "3em" }}>x</p>
            <div style={{ "margin": "auto", "fontSize": "2em", "marginLeft": "inherit" }}>
                <p style={{ "fontWeight": "bolder", "marginBottom": "auto"}}>Goutham Doddi</p>
                <p style={{"marginTop": "auto", "color": "white", "background": "black"}}>Software Engineer</p>
                <button onClick={handleClick}>Turn Page</button>
            </div>
        </span>
    </div>  )
}

export default basePage(TitlePage);