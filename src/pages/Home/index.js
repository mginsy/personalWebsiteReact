import { Component }from 'react';
import * as React from 'react';
import { Row, Col } from "react-bootstrap";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link} from 'react-router-dom';
import Fade from '@mui/material/Fade';
import 'simplebar-react/dist/simplebar.min.css';
import {motion} from 'framer-motion';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import {isMobile} from 'react-device-detect';
import mapPic from './mapViewBlur.jpg'
import listPic from './listViewBlur.jpg'


class HomePage extends Component {

  state = {
    isStart:true,
    isFilled: false,
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {},          // Shows the InfoWindow to the selected place upon a marker
    refreshMap: true,
    category: "",
    area: "",
    screenWidth: 0,
    screenHeight: 0,
  };

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
}

  resize() {
      this.setState({screenWidth: window.innerWidth,
                    screenHeight: window.innerHeight});
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.resize.bind(this));
  }

  handleCategoryChange = (event) =>
    {
      let fadeSubmit = false;
      if (this.state.area !== "" || event.target.value !== ""){
        fadeSubmit = true;
      }
      this.setState({ category: event.target.value, 
                     refreshMap: true,
                     isFilled: fadeSubmit,
                     isStart: false});
    }

  handleAreaChange = (event) =>
    {
      let fadeSubmit = false;
      if (this.state.category !== "" || event.target.value !== ""){
        fadeSubmit = true;
      }
      this.setState({ area: event.target.value, 
                     refreshMap: true,
                     isFilled: fadeSubmit,
                     isStart: false});
    }

render() {

  
    return (
      <div><p className = "test-text">home</p></div>
    );
  }

}

export default HomePage