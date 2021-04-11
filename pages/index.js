import Head from 'next/head'
import React from 'react';
import $ from 'jquery'

import Header from '../components/header'
import AppleHome from '../components/apple'
import RandomHome from '../components/randomtext'
import CatHome from '../components/cat'
import ChatHome from '../components/chat'

import firebase from "firebase"
import styles from '../styles/Home.module.css'

var config = {
  apiKey: "AIzaSyAi0XvTp6AS1ZtR-zYH0lwY8kc6xosGeb4",
  authDomain: "website-8be4b.firebaseapp.com",
  databaseURL: "https://website-8be4b.firebaseio.com",
  projectId: "website-8be4b",
  storageBucket: "website-8be4b.appspot.com",
  messagingSenderId: "273931175782",
  appId: "1:273931175782:web:5e47f50b6e849e6a05aaa7"
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

var database = firebase.database();

function writeVisitorData(ip, uag) {
  firebase.database().ref('visits/' + Date()).set({
    ip: ip,
    useragent: uag
  });
}

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

export default class Home extends React.Component{
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
      var str = data.split(/\r?\n/);
      var dict = new Object();
      str.forEach(function(entry) {
        var e = entry.split('=')
        console.log(e);
        dict[e[0]] = e[1];
      });
      writeVisitorData(dict['ip'], dict['uag']);
    });
    //firebase.database().ref('/hello').once('value').then(function(snapshot) {
    //  console.log(snapshot.val());
    //});
  }
  
  render() {
    return (
      <div>
        <Head>
          <title>Richard's Website</title>
        </Head>
        <Header />
        {randomHome()}
      </div>
    );
  }
}


function randomHome() {
  var homes = [(<AppleHome/>), (<RandomHome/>), (<CatHome/>), (<ChatHome/>)];
  return homes[Math.floor(Math.random() * homes.length)];
}