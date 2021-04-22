import React from 'react'

class User extends React.Component {

    render() {
        return(
            <div style={{border:'2px solid black', margin: '2px'}}>
                <h6>this is:: {this.props.user.name}</h6>
                <h6>userName {this.props.user.username}</h6>
                <button onClick={() => this.props.handleAddToCart(this.props.user)}>add me</button>
            </div>
        )
    }
}

export default User;