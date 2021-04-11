import styles from './postpage.module.css'

import Link from 'next/link'
import Comment from './comment'

import ReactHtmlParser from 'react-html-parser'; 

import {
  FirebaseDatabaseProvider,
  FirebaseDatabaseNode,
  FirebaseDatabaseMutation
} from "@react-firebase/database";
import firebase from "firebase/app";
import "firebase/database";

import { useRouter } from "next/router";

var config = {
  apiKey: "AIzaSyAi0XvTp6AS1ZtR-zYH0lwY8kc6xosGeb4",
  authDomain: "website-8be4b.firebaseapp.com",
  databaseURL: "https://website-8be4b.firebaseio.com",
  projectId: "website-8be4b",
  storageBucket: "website-8be4b.appspot.com",
  messagingSenderId: "273931175782",
  appId: "1:273931175782:web:5e47f50b6e849e6a05aaa7"
};


export default function PostPage(id) {
  const urlParams = useRouter().asPath;
  var id = urlParams.substring(12);
  for (var i = 0; i < 30; i++) {
    id = decodeURIComponent((id + '').replace(/\+/g, '%20'));
  }
  console.log(id);
  return (
    <div className={styles.['front-div']}>
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
          <FirebaseDatabaseNode
              path={"projects/" + id}
          >
            {d => {
              if (d.value) {
                var data = d.value;
                return(
                <div>
                  <div className={styles.['post-div']}>
                    <Link href={urlParams}><a className={styles.link}><p className={styles['post-div-h1']}>{data['title']}</p></a></Link>
                    <div className={styles.['post-div-details']}>
                      <p className={styles.['post-div-author']}>{data['description']}</p>
                      <p className={styles.['post-div-date']}>{''}</p>
                    </div>
                    <div className={styles.['post-div-text']}>{ReactHtmlParser(data['text'].substring(1, data['text'].length - 1).trim().replaceAll('<p><br></p>', ""))}</div>
                  </div>
                    <div className={styles['comments-div']}>
                      <p className={styles['comments-div-title']}>Comments</p>
                      <FirebaseDatabaseMutation type="push" path={"posts/" + id + "/comments/"}>
                        {({ runMutation }) => {
                          var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                          return (
                            <div className={styles['make-div']}>
                              <p className={styles['make-title']}>Make a comment:</p>
                              <input id="author" placeholder="Author name" className={styles['make-author']}/>
                              <input id="text" placeholder="Wow! What a nice post!" className={styles['make-text']}/>
                              <button className={styles['make-comment']} data-testid="comment"
                              onClick={async () => {
                                if (document.getElementById('author').value && document.getElementById('text').value) {
                                  const { key } = await runMutation({ 
                                    author: document.getElementById('author').value,
                                    date: months[(new Date()).getMonth()] + " " + (new Date()).getDate() + ", " + (new Date()).getFullYear(),
                                    timestamp: (new Date()).getTime(),
                                    negativeTimestamp: -(new Date()).getTime(),
                                    text: document.getElementById('text').value
                                  });
                                  document.getElementById('author').value = "";
                                  document.getElementById('text').value = ""
                                }
                              }}>Comment!</button>
                            </div>
                          );
                        }}
                      </FirebaseDatabaseMutation>
                      <FirebaseDatabaseNode
                          path={"posts/" + id + "/comments"}
                      >
                        {d => {
                            var ret = [];
                            console.log(d);
                            for (var c in d.value) {
                              ret.push(<Comment data={d.value[c]}/>)
                            }
                            return(ret);
                          }
                        }
                      </FirebaseDatabaseNode>

                    </div>
                </div>)
              }
              return null;
              
            }}
          </FirebaseDatabaseNode>
        </FirebaseDatabaseProvider>
    </div>
  );
}
