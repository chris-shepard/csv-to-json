import React from 'react';
import './ConverterPage.styles.css';
import formDataStorage from './ConverterPage.data';

class ConverterPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: formDataStorage
    };
    console.log("ConverterPageState", + this.state);
  }

  render() {
    return (
      <div>
        page
      </div>
    )
  }
}

export default ConverterPage;