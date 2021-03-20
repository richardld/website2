import styles from './randomtext.module.css';
import React from 'react';

export default class ChatHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    
  }
  
  componentDidMount() {

  }
  
  
  render() {
    return (
        <div>
          <p>Hello</p>
        </div>
    );
  }
}
