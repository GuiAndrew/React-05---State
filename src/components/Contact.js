import React, { Component }  from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOnline: props.isOnline
    };

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
    this.setState ({
      isOnline: !this.state.isOnline
    });   
  } 

  render() {
    return (
      <figure onClick={ this.handleClick } className="Contact">
        <img className="avatar" src={ this.props.avatar } alt={ this.props.name } />
        <figcaption>
          <div className="name">{ this.props.name }</div>
          <div className="status">            
            <span className={ this.state.isOnline ? 'status-online' : 'status-offline' }/>
            <br />
            <br />
            <span>{ this.state.isOnline ? 'Online' : 'Offline' }</span>
          </div>
        </figcaption>
      </figure>
    );
  } 
}

export default Contact;
