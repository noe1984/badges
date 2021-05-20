import React from 'react'
import platziconfLogoImage from '../images/platziconf-logo.svg'
import './styles/Home.css'
import astronautsImage from '../images/astronauts.svg'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return(
            <div className='Home'>
                <div className="container">
                    <div className="row">
                        
                        <div className="Home__col col-12 col-md-4">
                            <img src={platziconfLogoImage} alt="Platzi Conf Logo" className="img-fluid"/>
                            <h1>Badge Management System</h1>
                            <Link to='/badges' className='btn btn-primary'>Start</Link>
                        </div>

                        <div className="Home__col d-none d-md-block col-md-8">
                            <img src={astronautsImage} alt="Astronauts" className="img-fluid"/>
                        </div>

                    </div> 
                </div>
            </div>
        )
    }
}

export default Home