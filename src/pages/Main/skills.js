import React from 'react'

import "./skills.css"

function skills() {
  return (
    <div>
        <div>
        <h3 style={{ marginLeft: "7%"}}>Primary Skills</h3>

            <div style={{ display: "flex", justifyContent: 'space-evenly', marginTop: "10px" }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python Logo"
                    width={45} height={45} />

                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="Python Logo"
                                width={45} height={45} />
                
                <img src="https://static.djangoproject.com/img/logos/django-logo-negative.png"
                        alt="django" width={65} height={45} />
                
                <img src="pngaaa.com-4547668.png" alt="Python Logo"
                                width={45} height={50} />      

                <img src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
                 alt="django" width={65} height={45} />
            </div>

        </div>

        <div>
        <h3 style={{ marginLeft: "7%", marginBottom: "-5%" }}>Technologies used</h3>

        <div class="list-container">

            <div class="column">
            <ul>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
            </ul>
            </div>
            <div class="column">
            <ul>
                <li>Unit TEsting, Selenium</li>
                <li>Spring Boot</li>
                <li>Flask</li>
            </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default skills;