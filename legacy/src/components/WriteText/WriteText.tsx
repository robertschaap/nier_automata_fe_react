import * as React from 'react';
import alphabet from 'utils/alphabet';

interface WriteTextProps {
  label: string;
}

interface WriteTextState {
  alphabetIndex: number;
  labelIndex: number;
  letter: string;
  output: string;
}

class WriteText extends React.Component<WriteTextProps, WriteTextState> {
  timeoutTime = 10;

  state = {
    alphabetIndex: 0,
    labelIndex: 0,
    letter: '',
    output: '',
  };

  componentDidMount() {
    const { label } = this.props;
    this.writeText(label);
  }

  handleTimeout = () => {
    const { label } = this.props;
    setTimeout(() => this.writeText(label), this.timeoutTime);
  }

  writeText = (inputString: string) => {
    const { label } = this.props;
    const { alphabetIndex, labelIndex, output } = this.state;

    if (label[labelIndex] === alphabet[alphabetIndex]) {
      this.setState({
        alphabetIndex: 0,
        labelIndex: labelIndex + 1,
        letter: '',
        output: output + label[labelIndex],
      },
      this.handleTimeout,
      );
    } else if (labelIndex <= inputString.length - 1) {
      this.setState({
        alphabetIndex: alphabetIndex + 1,
        letter: alphabet[alphabetIndex + 1],
      },
      this.handleTimeout,
      );
    }

    return '';
  }

  render() {
    return (
      <React.Fragment>
        {this.state.output + this.state.letter}
      </React.Fragment>
    );
  }
}

export default WriteText;
