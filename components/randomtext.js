import styles from './randomtext.module.css';
import React from 'react';

export default class RandomHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.makeid(150000),
      index: 0
    };
    
    this.changeid = this.changeid.bind(this);
  }
  
  componentDidMount() {
    //window.setInterval(this.changeid, 10);  
  }
  
  changeid = () => {
    this.setState({
      text: this.state.text.substring(0, this.state.index) + this.makeid(1000) + this.state.text.substring(this.state.index + 1000, 200000),
      index: (this.state.index + 1000) % 200000
    });
  }
  
  makeid(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyz ';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
 }
  
  render() {
    return (
        <p className={styles.text}>{this.state.text}</p>
    );
  }
}
