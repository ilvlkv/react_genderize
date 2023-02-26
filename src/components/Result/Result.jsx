import React, { Component } from 'react';
import './Result.scss';

export class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: 'result-block',
      name: this.props.name,
      gender: this.props.gender,
    };
  }

  componentDidMount() {
    const female = 'result-block_female';
    const male = 'result-block_male';

    if (this.props.gender === 'female') {
      this.setState({ className: `${this.state.className} ${female}` });
    } else {
      this.setState({ className: `${this.state.className} ${male}` });
    }
  }

  render() {
    return (
      <div className={this.state.className}>
        <p>
          {this.state.name} is {this.state.gender}
        </p>
      </div>
    );
  }
}

export default Result;
