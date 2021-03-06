import React, { Component } from "react";

interface IProps {
  compName: string;
}
interface IState {
  name: string;
  deg: string;
}

export class DemoClass extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      name: "Abhishek",
      deg: "SE",
    };
  }

  private onUpdateNameButtonClick = () => {
    this.setState({ name: "Mohan" });
  };

  render() {
    return (
      <div>
        <div>Hello Class Component</div>
        <div>{this.state.name}</div>
        <div>{this.props.compName}</div>
        <button onClick={this.onUpdateNameButtonClick}>Update name</button>
      </div>
    );
  }
}
