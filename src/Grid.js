
import React from 'react'
import {GridList, GridTile} from '../node_modules/material-ui/GridList';
import "./Grid.css"


var brain = require("../images/brain.jpg")
var Rduino = require("../images/arduino.jpg")

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
    img: brain,
    title: 'Integrate and Fire Neurons',
    cursor:"pointer",
  },
  {
    img: Rduino,
    title: 'RFirmata',
    cursor:"pointer",
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
          title={<a className="project-link" href="https://github.com/anikamukherji/Integrate-and-Fire-Neurons">{tile.title}</a>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} alt="Personal" height={250}/>
        </GridTile>
    ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;
