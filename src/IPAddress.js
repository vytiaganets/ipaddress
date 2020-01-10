import React, {Component} from "react";
import "./IPAddress.css";

class IPAddress extends React.Component {
  render() {
    return (
    <div>
      <h1>{this.props.ip}</h1>
    <p>(Це Ваша ІР-адреса)</p>
    </div>
    );
  }
};

export default IPAddress;