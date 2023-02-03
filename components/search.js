import styles from './search.module.css';
import React from 'react';
import { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import { IoSearchOutline } from "react-icons/io5";

export default function SearchHome(props) {  
  const [result, setResult] = useState("")

  const items = [
    {
      id: 0,
      name: 'Who is Richard?',
      result: "Richard is a CS major at UC Berkeley."
    },
    {
      id: 1,
      name: 'What is Richard?',
      result: "Richard is a human being."
    },
    {
      id: 2,
      name: 'When is Richard?',
      result: "Richard was born in the 21st century."
    },
    {
      id: 3,
      name: 'Where is Richard?',
      result: "Richard is in Berkeley, California."
    },
    {
      id: 4,
      name: 'Why is Richard?',
      result: "Good question."
    },
  ]

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
    setResult(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <div className={styles['resultBox']}>
        <p className={styles['query']}>{item.name}</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <img className={styles["logo-img"]} src="search.png"/>
      <div className={styles["search-box"]}>
        <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            formatResult={formatResult}
            showItemsOnFocus
          />
      </div>
      <p className={styles["returned-result"]}>{result.result}</p>
    </div>
  );
}
