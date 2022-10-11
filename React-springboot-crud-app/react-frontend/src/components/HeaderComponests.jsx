import React, { Component } from 'react';

class HeaderComponests extends Component {
   constructor(props){
    super(props)
    this.state = {

    }
   }
    render() {
        return (
            <div>
                <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div><a href="http://javaguides.net" className='navbar-brand'>Employee Management App</a></div>
                </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponests;