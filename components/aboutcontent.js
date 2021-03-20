import styles from './aboutcontent.module.css';
import React from 'react';
import RiveScript from 'rivescript';

export default class AboutContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  
  loading_done() {
    console.log("Bot has finished loading!");

    // Now the replies must be sorted!
    bot.sortReplies();
    console.log("Bot has finished sorting!");
    
    // And now we're free to get a reply from the brain!
    // RiveScript remembers user data by their username and can tell
    // multiple users apart.
    let username = "local-user";

    // NOTE: the API has changed in v2.0.0 and returns a Promise now.
    bot.reply(username, "Hello, bot!").then(function(reply) {
      console.log("The bot says: " + reply);
    });
  }
  
  loading_error() {
    
  }
  
  componentDidMount() {

  }
  
  render() {
    return (
      <div className={styles.top}>
        <div>
          <div>
            <h4>Education</h4>
            <p>University of California, Berkeley</p>
            <ul>
              <li>Enrolled in the College of Letters and Science</li>
              <li>Declared Computer Science major</li>
              <li>Expected graduation in December 2022</li>
            </ul>
            
            <p>Westwood High School</p>
            <ul>
              <li>Located in Austin, TX</li>
              <li>Ranked in <a href="https://www.newsweek.com/high-schools/americas-top-high-schools-2016">top 50</a> high schools in US (<a href="https://www.newsweek.com">Newsweek</a>)</li>
              <li>Received AP recognition and IB diploma</li>
            </ul>
            
            <p>Coursework</p>
            <div className={styles.courses}>
              <ul>
                <li><a href="https://www2.eecs.berkeley.edu/Courses/CS61A/">CS61A</a>: Structure and Interpretation of Computer Programs</li>
                <li><a href="https://www2.eecs.berkeley.edu/Courses/EE16A/">EE16A</a>: Designing Information Devices and Systems I</li>
                <li><a href="https://astro.berkeley.edu/course-information/4002145-introduction-to-general-astronomy">ASTRO C10</a>: Introduction to General Astronomy</li>
                <li><a href="http://guide.berkeley.edu/courses/nusctx/">NUSCTX 10</a>: Introduction to Human Nutrition</li>
                <li><a href="http://guide.berkeley.edu/courses/nusctx/">CS70</a>: Discrete Math and Probablility Theory</li>
                <li><a href="http://guide.berkeley.edu/courses/nusctx/">CS61C</a>: Machine Structures</li>
              </ul>
              <ul >
                <li><a href="https://www2.eecs.berkeley.edu/Courses/CS61A/">CS61B</a>: Data Structures</li>
                <li><a href="https://inst.eecs.berkeley.edu/~cs61b/fa19/">EE16B</a>: Designing Information Devices and Systems II</li>
                <li><a href="http://data8.org/">STAT C8</a>: Foundations of Data Science</li>
                <li><a href="https://history.berkeley.edu/">History 162B</a>: War and Peace: International Relations since 1914</li>
                <li><a href="http://guide.berkeley.edu/courses/nusctx/">CS188</a>: Introduction to Artificial Intelligence</li>
                <li><a href="http://guide.berkeley.edu/courses/nusctx/">CS189</a>: Introduction to Machine Learning</li>
              </ul>
              <ul>
                <li><a href="https://ugba198.org/">UGBA 198</a>: Machine Learning for Business Decisions</li>
                <li><a href="https://fencing.berkeley.edu/">JOURN 98</a>: Direct Group Study in Journalism</li>
                <li><a href="https://yearbook.berkeley.edu/">ARCH 98</a>: Introduction to Fencing</li>
                <li><a href="http://guide.berkeley.edu/courses/nusctx/">EE127</a>: Optimization Models in Engineering</li>
              </ul>
            </div>
            <p>Organizations</p>
            <div className={styles.courses}>
              <ul>
                <li><a href="https://www2.eecs.berkeley.edu/Courses/CS61A/">Hybrid Ecologies Lab</a>, member</li>
                <li><a href="https://www2.eecs.berkeley.edu/Courses/EE16A/">Blue & Gold Yearbook</a>, writer</li>
                <li><a href="https://astro.berkeley.edu/course-information/4002145-introduction-to-general-astronomy">Web Dev at Berkeley</a>, developer</li>
                <li><a href="http://guide.berkeley.edu/courses/nusctx/">Cal Table Tennis</a>, committee lead</li>
                <li><a href="http://guide.berkeley.edu/courses/nusctx/">IBelieve</a>, tutor</li>
                <li><a href="http://guide.berkeley.edu/courses/nusctx/">Rocket League at Berkeley</a>, president/captain</li>
              </ul>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomelement}>
                <h4>Information</h4>
                <ul>
                  <li>Currently residing in Berkeley, California</li>
                  <li>Email: all.richardliu[a-t]gmail.com</li>
                  <li>Github: <a href="https://github.com/richardld/">Link</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
