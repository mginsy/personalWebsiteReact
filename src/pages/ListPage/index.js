import { Component }from 'react';
import { Row, Col } from "react-bootstrap";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Restaurant from '../../Restaurant';
import { styled } from '@mui/material/styles';
import {Link, useLocation, useParams} from 'react-router-dom';
import 'simplebar-react/dist/simplebar.min.css';
import {motion} from 'framer-motion';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Button from '@mui/material/Button';
import {isMobile} from 'react-device-detect';
import Typography from '@mui/material/Typography';


class ListPage extends Component {

  state = {
    category: (typeof(this.props.locState.Category) != "undefined" ? this.props.locState.Category : ""),
    area: (typeof(this.props.locState.Area) != "undefined" ? this.props.locState.Area : ""),
    gle: (typeof(this.props.locState.Gle) != "undefined" ? this.props.locState.Gle : ""),
    price: (typeof(this.props.locState.Price) != "undefined" ? this.props.locState.Price : ""),
    fromMapList: (typeof(this.props.locState.fromMapList) != "undefined" ? this.props.locState.fromMapList : false),
    screenWidth: 0,
    screenHeight: 0,
    toMapList: false
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
    {this.setState({ category: event.target.value, 
                     gle: "",
                     price: "" });}

  handleAreaChange = (event) =>
    {
      this.setState({ area: event.target.value, 
                     gle: "",
                     price: "" });}

  handleAreaChangeClick = param => e => {
    this.setState({ area: param });
  };

  handleCategoryChangeClick = param => e => {
    this.setState({ category: param
    });
  };

  handlePriceChange = (event) =>
    {
      this.setState({ price: event.target.value});}
                
  handleGLEChange = (event) =>
    {
      this.setState({ gle: event.target.value,});}

  

render(){
  return(
    <div><p className = "test-text">home</p></div>
  );
}
}

export default withRouter(ListPage)