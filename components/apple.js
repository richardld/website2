import styles from './apple.module.css';
import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillShiftFill } from "react-icons/bs";
import { BsBrush } from "react-icons/bs";
import { IconContext } from "react-icons";
import { IoLogoOctocat } from "react-icons/io";

export default class AppleHome extends React.Component {
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
      <div className={styles.container}>
          <div className={styles.lefttop}>
            <IconContext.Provider value={{ color: "black", size: "40px", className: styles.['react-icons']}}>
              <BsFillPersonFill />
            </IconContext.Provider>
            <p className={styles.['lefttop-text']}>Welcome to my portfolio.</p>
          </div>
          <div className={styles.midtop}>
            <p className={styles.['midtop-title']}>The i(am)Richard 2020.</p>
            <p className={styles.['midtop-text']}>This year we have developed the most innovative Richard yet.</p>
          </div>
          <div className={styles.righttop}>
            <p className={styles.['righttop-text']}>Decades of experience and education have culminated in this groundbreaking revolution.</p>
            <p className={styles.['righttop-title']}>The future of Richard.</p>
          </div>
          <div className={styles.leftmid}>
            <IconContext.Provider value={{ color: "#ee5d5d",  size: "40px", className: styles.['react-icons']}}>
              <BsFillShiftFill />
            </IconContext.Provider>
            <p className={styles.['leftmid-text']}>Power up your company.</p>
          </div>
          <div className={styles.midleftmid}>
            <p className={styles.['midleftmid-text']}>UC Berkeley Computer Science.</p>
          </div>
          <div className={styles.midrightmid}>
            <p className={styles.['midrightmid-title']}>Environmentally sound.</p>
            <p className={styles.['midrightmid-text']}>Richard recycles and composts whenever it is possible.</p>
          </div>
          <div className={styles.rightmid}>
            <p className={styles.['rightmid-title']}>Runs with 20% less coffee.*</p>
            <p className={styles.['rightmid-text']}>*Compared to 2019 model</p>
          </div>
          <div className={styles.leftbottom}>
            <IconContext.Provider value={{ color: "black", size: "40px", className: styles.['react-icons']}}>
              <IoLogoOctocat />
            </IconContext.Provider>
            <p className={styles.['leftbottom-text']}>Develop some open source code.</p>
          </div>
          <div className={styles.leftmidbottom}>
            <IconContext.Provider value={{ color: "#11825b", size: "40px", className: styles.['react-icons']}}>
              <BsBrush />
            </IconContext.Provider>
            <p className={styles.['leftmidbottom-text']}>Make work feel fun.</p>
          </div>
          <div className={styles.midbottom}>
            <p className={styles.['rightmidbottom-text']}>Richard even has a cat that will talk and provide inspiration at times.</p>
            <p className={styles.['rightmidbottom-title']}>Meow. Meow.</p>
          </div>
          <div className={styles.rightmid}>
            <p className={styles.['rightmid-title']}>Designed by Richard in Texas.*</p>
            <p className={styles.['rightmid-text']}>*with inspiration from Apple</p>
          </div>
      </div>
    );
  }
}
