import React, {useState} from 'react';
import AppCSS from './App.module.css'
import Card from '../Card/Card';

let typeCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let values = ['1', '2', '3', '4', '5', '6', '7', '8'];
let createDeck = () =>
  {
    return typeCodes.flatMap(typeCode =>
    {
      return values.map(value =>
      {
        return <Card typeCode={typeCode} value={value} className = {AppCSS.cards}/>
      })
    })
  }
let deck = createDeck();
function App()
{
  const [renderCards, setRenderCards]=  useState([]);
  let dealHand = (numOfCards) =>
  {
    let hand = [];
    for (let i = 0; i < numOfCards; i++)
    {
      let randNum = Math.floor(Math.random() * deck.length);
      let currentCard = deck[randNum]
      hand.push(currentCard)
      deck = deck.filter((card) => card !== currentCard);
      console.log(deck.length)
    }
    return hand
  }
  let handleDealButton = () => {
    setRenderCards(dealHand(7))
    console.log(renderCards)
    if (!deck.length) {
      document.getElementById(AppCSS.shuffle).style.visibility = 'visible';
    } else {
      document.getElementById(AppCSS.shuffle).style.visibility = 'hidden';
    }
  }
  let handleShuffle = (event) => {
    deck = createDeck();
    setRenderCards([]);
    document.getElementById(AppCSS.counter).innerHTML = deck.length;
    event.target.style.visibility = 'hidden';
  }
  return (
    <div>
      <div className={AppCSS.App} id = 'main'>
        {renderCards}
      </div>
      <div className={AppCSS.buttons}>
      <button className={AppCSS.dealBtn} onClick = {handleDealButton}>Deal New Hand</button>
      <button className={AppCSS.dealBtn} id = {AppCSS.shuffle} onClick = {handleShuffle}>Shuffle</button>
      </div>
      <h1 id = {AppCSS.counter}>{`${deck.length} Remaining Cards in Deck`}</h1>
    </div>
  );
}

export default App;
