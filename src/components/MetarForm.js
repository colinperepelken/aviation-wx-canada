import React from 'react';

class MetarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    if (!event.target.checkValidity()) {
      // Form is invalid. Do nothing.
      return;
    }
    event.preventDefault();

    this.setState({isSubmitted: true});
  }

  render() {
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <label>
          ICAO:
          <input required type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {this.state.isSubmitted && <p>Submitted</p>}
      </form>
    );
  }
}

export default MetarForm;
