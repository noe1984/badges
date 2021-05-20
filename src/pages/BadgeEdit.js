import React from 'react';

import header from '../images/platziconf-logo.svg';
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api';
import PageLoading from '../components/PageLoading'



class BadgeEdit extends React.Component {
    state = {
        loading:true,
        error:null,
        form: {
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          twitter: ''
        },
      };

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async() => {
        this.setState({loading: true, error:null})
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading: false, form:data})
        } catch (error) {
            this.setState({loading: false, error:error})
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null})
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false})
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error})
        }
    }
    
    render() {
        if(this.state.loading) {
            return <PageLoading />
        }
      
        return (
            <React.Fragment>

                <div className='BadgeNew__hero'>
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME' }
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange = {this.handleChange}
                                values={this.state.form}
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default BadgeEdit