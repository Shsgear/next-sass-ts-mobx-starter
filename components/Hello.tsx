import * as React  from 'react';

interface Props {
  name: string,
  enthusiasmLevel?: number
}

// stateless function component
const Hello : React.FunctionComponent<Props> = ({ name, enthusiasmLevel = 1 }: Props) : JSX.Element => {
  if (enthusiasmLevel <= 0) {
    throw new Error('more enthusiastic :D');
  }
  return (
    <div className='hello'>
      <div className='greeting'>
        Hello { name + getExclamationMarks(enthusiasmLevel) }
      </div>
    </div>
  )
}

interface IAgeObject {
  currentEnthusiasm: number;
}
// class component
class Hello1 extends React.Component<Props, IAgeObject> {
  constructor(props:Props) {
    super(props);
    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1,
    }
  }


  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  
  
  render() {
    const { name } = this.props;
    

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('more enthusiastic :D');
    }

    return (
      <div className='hello'>
        <div className='greeting'>
          Hello { name + getExclamationMarks(this.state.currentEnthusiasm) }
        </div>
        <div>
          <button onClick={this.onDecrement}>-</button>
          <button onClick={this.onIncrement}>+</button>
        </div>
      </div>
    )
  }

  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm })
  }
  
}

export default Hello1;

const getExclamationMarks = (numChars: number): string => {
  return Array(numChars + 1).join('!');
}

