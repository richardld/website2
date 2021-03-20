import styles from './cat.module.css';
import React from 'react';

export default class CatHome extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //window.setInterval(this.changeid, 10);  
  }
  
  render() {
    return (
      <div className={styles.frame}>
        <iframe className={styles.iframe} frameborder="0"
          src="https://observablehq.com/embed/0ccac38cb5e5f6bb?cell=image"></iframe>
      </div>
    );
  }
}
