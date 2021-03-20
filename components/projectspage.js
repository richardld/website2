import styles from './projectspage.module.css';
import React from 'react';
import Link from 'next/link'

import { BiLike } from "react-icons/bi";

import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
  FirebaseDatabaseMutation
} from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";

var config = {
  apiKey: "AIzaSyAi0XvTp6AS1ZtR-zYH0lwY8kc6xosGeb4",
  authDomain: "website-8be4b.firebaseapp.com",
  databaseURL: "https://website-8be4b.firebaseio.com",
  projectId: "website-8be4b",
  storageBucket: "website-8be4b.appspot.com",
  messagingSenderId: "273931175782",
  appId: "1:273931175782:web:5e47f50b6e849e6a05aaa7"
};

class Project extends React.Component {
  constructor(props) {
    super(props);
    var maps = {'python': 'circle-py',
            'javascript': 'circle-js',
            'java': 'circle-jv'};
    this.state = {
      user: props.user,
      title: props.title,
      desc: props.desc,
      langs: props.langs,
      id: props.id,
      maps: maps
    };
  }
  
  componentDidMount() {

  }
  
  render() {
    return (
      <div className={styles.column}>
        <div className={styles.box}>
          <div className={styles.left}>
            <div className={styles.title}>
              <p className={styles.titletext}>{this.state.user} / <Link href={'/project?id=' + this.state.id}><a><p className={styles.bold}>{this.state.title}</p></a></Link></p>
            </div>
            <div className={styles.description}>
              <p className={styles.descriptiontext}>{this.state.desc}</p> 
            </div>
            <div className={styles.details}>
              <span className={styles[this.state.maps[this.state.langs.toLowerCase()]]}/>
              <p className={styles.detailstext}>{this.state.langs}</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.plus}>
              <div className={styles.plusdiv}>
                <BiLike/>
                <p className={styles.plustext}>Like</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default class ProjectsContent extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
  
  }
  
  render() {
    return (
      <div>
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <FirebaseDatabaseNode
              path="projects/"
              orderByChild={"timestamp"}
          >
            {d => {
              if (d.value) {
                var next = true;
                if (Object.entries(d.value).length < 5) {
                  next = false;
                }
                var data_vals = Object.entries(d.value).sort((a,b) => {
                  return b[1].timestamp - a[1].timestamp;
                });
                var ret = []
                var count = 0;
                for(var post in data_vals) {
                  if (false) {
                    count += 1;
                  } else {
                    console.log(data_vals[post][1]);
                    ret.push(<Project id={data_vals[post][0]} user={data_vals[post][1]['author']}  title={data_vals[post][1]['title']} desc={data_vals[post][1]['description']} langs={data_vals[post][1]['languages']}></Project>)
                  }
                }
                return ret;
              }
              return null;
              
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
        <br/>
      </div>
    );
  }
}
