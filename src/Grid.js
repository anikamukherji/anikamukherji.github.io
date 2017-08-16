
import React from 'react'
import {GridList, GridTile} from '../node_modules/material-ui/GridList';
import "./Grid.css"


var petals = require("../images/petals.jpg")
var grandCanyon = require("../images/grandCanyon.jpg")
var stormBridge = require("../images/stormBridge.jpg")
var grandpa = require("../images/grandpa.jpg")
var jamaica = require("../images/jamaica.jpg")
var blueberries = require("../images/blueberries.jpg")
var beforeIDie = require("../images/beforeIDie.jpg")
var nightCrawler = require("../images/nightCrawler.jpg")
var plane = require("../images/plane.jpg")
var ww2 = require("../images/ww2.jpg")

const styles = {
  root: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    textAlign: "center",
  },
}

const tilesData = [
  {
    img: petals,
  },
  {
    img: grandCanyon,
  },
  {
    img: stormBridge,
  },
  {
    img: plane,
  },
  {
    img: grandpa,
  },
  {
    img: beforeIDie,
  },
  {
    img: blueberries,
  },
  {
    img: jamaica,
  },
  {
    img: nightCrawler,
  },
  {
    img: ww2,
  },
]


const GridListExampleSingleLine = () => (
  <div style={styles.root}>
    <GridList 
      style={styles.gridList}
      cellHeight={350}
      cols={3}
    >
    {tilesData.map((tile) => (
        <GridTile
          titleStyle={styles.titleStyle}
        >
          <img src={tile.img} alt="Personal" height={250}/>
        </GridTile>
    ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;
