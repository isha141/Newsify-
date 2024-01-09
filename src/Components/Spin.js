import React, { Component } from 'react'
import Spinner from './ZZ5H.gif';

export class Spin extends Component {
  render() {
    return (
      < div className='text-center'>
        <img style={{height:"25px" ,width:"40px", margin:"17px"}}src={Spinner} alt="" srcset="" />
      </div>
    )
  }
}

export default Spin
