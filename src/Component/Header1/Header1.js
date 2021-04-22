import React from 'react';
import User from '../User/User';
import './Header1.scss'

class Header1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users : [],
            cart: []
        }
        
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    handleAddToCart (user) {
        const newCart = [...this.state.cart, user]
        this.setState({cart: newCart})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({users: data}))
    }

    render() {
        return(
            <div>
                <h2 className='number'>Available users: {this.state.users.length}</h2>
                <h2 className='number'>added user: {this.state.cart.length}</h2>
                {
                    this.state.users.map(user => <User handleAddToCart={this.handleAddToCart} user= {user} />)
                }
            </div>
        )
    }
}

export default Header1;