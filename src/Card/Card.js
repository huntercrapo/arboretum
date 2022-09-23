import React from "react";
import CardCSS from './Card.module.css';

import icon1 from './icons/Blue Spruce.svg'
import icon2 from './icons/Cassia.svg'
import icon3 from './icons/Cherry Blossom.svg'
import icon4 from './icons/Dogwood.svg'
import icon5 from './icons/Jacaranda.svg'
import icon6 from './icons/Maple.svg'
import icon7 from './icons/Oak.svg'
import icon8 from './icons/Royal Poinciana.svg'
import icon9 from './icons/Tulip Poplar.svg'
import icon10 from './icons/Willow.svg'

import tree1 from './trees/Blue Spruce.svg'
import tree2 from './trees/Cassia.svg'
import tree3 from './trees/Cherry Blossom.svg'
import tree4 from './trees/Dogwood.svg'
import tree5 from './trees/Jacaranda.svg'
import tree6 from './trees/Maple.svg'
import tree7 from './trees/Oak.svg'
import tree8 from './trees/Royal Poinciana.svg'
import tree9 from './trees/Tulip Poplar.svg'
import tree10 from './trees/Willow.svg'

import flourish1 from './flourish/Blue Spruce.svg'
import flourish2 from './flourish/Cassia.svg'
import flourish3 from './flourish/Cherry Blossom.svg'
import flourish4 from './flourish/Dogwood.svg'
import flourish5 from './flourish/Jacaranda.svg'
import flourish6 from './flourish/Maple.svg'
import flourish7 from './flourish/Oak.svg'
import flourish8 from './flourish/Royal Poinciana.svg'
import flourish9 from './flourish/Tulip Poplar.svg'
import flourish10 from './flourish/Willow.svg'

let icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10]
let trees = [tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8, tree9, tree10]
let flourishes = [flourish1, flourish2, flourish3, flourish4, flourish5, flourish6, flourish7, flourish8, flourish9, flourish10]
let species = ['Blue Spruce', 'Cassia', 'Cherry Blossom', 'Dogwood', 'Jacaranda', 'Maple', 'Oak', 'Royal Poinciana', 'Tulip Poplar', 'Willow']
function Card(props)
{
    return (
        <div id={CardCSS.card}>
            <div className={CardCSS.cardInfo} id={CardCSS.topLeft}>
                <h1 className={CardCSS.values}>{props.value}</h1>
                <img className={CardCSS.icons} src={icons[props.typeCode]} alt={species[props.typeCode]} />
            </div>
            <div className={CardCSS.cardInfo} id={CardCSS.topRight}>
                <h1 className={CardCSS.values}>{props.value}</h1>
                <img className={CardCSS.icons} src={icons[props.typeCode]} alt={species[props.typeCode]} />
            </div>
            <div className={CardCSS.cardInfo} id={CardCSS.bottomLeft}>
                <h1 className={CardCSS.values}>{props.value}</h1>
                <img className={CardCSS.icons} src={icons[props.typeCode]} alt={species[props.typeCode]} />
            </div>
            <div className={CardCSS.cardInfo} id={CardCSS.bottomRight}>
                <h1 className={CardCSS.values}>{props.value}</h1>
                <img className={CardCSS.icons} src={icons[props.typeCode]} alt={species[props.typeCode]} />
            </div>
            <img id={CardCSS.speciesImage} src={trees[props.typeCode]} alt={species[props.typeCode]}/>
            <div id={CardCSS.speciesDisplay}>
                <img className={CardCSS.flourishes} id={CardCSS.flourishLeft} src={flourishes[props.typeCode]} alt="" />
                <h2 id={CardCSS.speciesName}>{species[props.typeCode]}</h2>
                <img className={CardCSS.flourishes} id={CardCSS.flourishRight} src={flourishes[props.typeCode]} alt="" />
            </div>
        </div>
    )
}
export default Card;