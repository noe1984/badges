import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import {Link} from 'react-router-dom'
import api from '../api'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'

class Badges extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          data: undefined,
          loading: true,
          error: null
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    async fetchData() {
        this.setState({ loading: true, error: null })
        try {
          const data = await api.badges.list()
          this.setState({ data: data, loading: false  })
        } catch (error) {
          this.setState({ error: error, loading: false})
        }
    }

    

    render() {
        if(this.state.loading) {
            return <PageLoading />
        }

        if(this.state.error) {
            return <PageError error={this.state.error} />
        }
        
        return(
            <React.Fragment>
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img 
                                className="Badges_conf-logo" 
                                src={confLogo} 
                                alt='logo de la conferencia'
                            />
                        </div>
                    </div>
                </div>

                <div className='Badges__container'>
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    
                    <BadgesList badges ={this.state.data}/>
                    {this.state.loading === true && <MiniLoader />}
                </div>
            </React.Fragment>
        )
    }
}

export default Badges