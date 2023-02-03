import Head from 'next/head'
import dynamic from 'next/dynamic'
import React from 'react';
import styles from '../styles/Home.module.css'


import Header from '../components/header'
import AppleHome from '../components/apple'
import RandomHome from '../components/randomtext'
import CatHome from '../components/cat'
import ChatHome from '../components/chat'
import SearchHome from '../components/search'
import FoodHome from '../components/food'
import PastHome from '../components/past'

import { IoChevronForwardOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";


import { useState } from 'react';

import firebase from "firebase"

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

const homes = [<RandomHome/>, <CatHome/>, <ChatHome/>, <SearchHome/>, <FoodHome/>, <PastHome/>, <AppleHome/>];

function Home(props) {
  const [randIndex, setRandIndex] = useState(Math.floor(Math.random() * homes.length))
  console.log(randIndex)

  return (
    <div>
      <Head>
        <title>Richard's Website</title>
      </Head>
      <Header />
      {homes[randIndex]}
      <div className={styles['center']}>
        <div className={styles['buttonBox']}>
          <button className={styles['navButton']} onClick={() => {setRandIndex(Math.max(0, randIndex - 1))}}>
            <IoChevronBackOutline/>
          </button>
          <p>Home Screen {randIndex + 1} of {homes.length}</p>
          <button className={styles['navButton']} onClick={() => {setRandIndex(Math.min(homes.length - 1, randIndex + 1))}}>
            <IoChevronForwardOutline/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false
})