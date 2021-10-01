import React, { Component } from 'react';
import './ToDoForm.scss';

export default class ToDoForm extends Component {
  state = {
    message: '',
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      message: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <>
        <form className="TodoEditor" onSubmit={this.handleSubmit}>
          <textarea
            className="TodoEditor__textarea"
            placeholder="Type in text"
            value={this.state.message}
            onChange={this.handleChange}
          ></textarea>
          <button className="TodoEditor__button" type="submit">
            Save
          </button>
        </form>
      </>
    );
  }
}
