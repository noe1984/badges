import React from 'react'

class BadgeForm extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            name='firstName'
                            className='form-control' 
                            type="text"
                            onChange={this.props.onChange}
                            value={this.props.values.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            name='lastName'
                            className='form-control' 
                            type="text"
                            onChange={this.props.onChange}
                            value={this.props.values.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input 
                            name='jobTitle'
                            className='form-control' 
                            type="text"
                            onChange={this.props.onChange}
                            value={this.props.values.jobTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            name='email'
                            className='form-control' 
                            type="text"
                            onChange={this.props.onChange}
                            value={this.props.values.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            name='twitter'
                            className='form-control' 
                            type="text"
                            onChange={this.props.onChange}
                            value={this.props.values.twitter}
                        />
                    </div>
                    <button className='btn btn-primary'>
                        Submit
                    </button>
                    {this.props.error && ((<p className='text-danger'>{this.props.error.message}</p>))}
                </form>
            </div>
        )
    }
}

export default BadgeForm