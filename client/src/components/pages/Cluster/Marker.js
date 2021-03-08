import React from 'react';
import PropTypes from 'prop-types';
import MarkerStyled from './MarkerStyled';
import MarkerInGroupStyled from './MarkerInGroupStyled';
import Spy from './Spy';
import {Link} from 'react-router-dom'

class Marker extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    inGroup: false,
  }
  constructor(props){
    super(props)
    this.state={
      showLabel: false,
      waveName:''
    }
  }
handleLabel(){
  console.log(this.props)
  this.setState({showLabel:true, waveName:this.props.points[0].waveName})
}

  render() {
    return (
      <div>
        {this.props.inGroup
          ? <MarkerInGroupStyled>
              <Spy scale="0.55" />
            </MarkerInGroupStyled>
          : <MarkerStyled onClick={()=>this.handleLabel()}>
              <Spy scale="0.55" />
              {this.state.showLabel && <div style={{fontSize:5}}><Link style={{maxWidth: "80%"}} to={`/details/${this.props.points[0].wave_id}`}>{this.state.waveName}</Link></div>}
            </MarkerStyled>}
      </div>
    );
  }
}

Marker.propTypes = {
  inGroup: PropTypes.bool,
};

export default Marker;