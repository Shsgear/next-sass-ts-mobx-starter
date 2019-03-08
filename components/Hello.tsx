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
  age: number;
}
// class component
class Hello1 extends React.Component<Props, IAgeObject> {
  constructor(props:Props) {
    super(props);
    this.state = {
      age: 11,
    }
  }
  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <=0) {
      throw new Error('more enthusiastic :D');
    }

    return (
      <div className='hello'>
        <div className='greeting'>
          Hello { name + getExclamationMarks(enthusiasmLevel) } you are { this.state.age }
        </div>
      </div>
    )
  }
  
}

export default Hello1;

const getExclamationMarks = (numChars: number): string => {
  return Array(numChars + 1).join('!');
}

