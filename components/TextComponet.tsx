import react from 'react';

type Props = {
  title: string,
}

class TextComponent extends react.Component<Props> {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <p>component orignal child</p>
        { this.props.children }
      </div>
    );
  }
}

export default TextComponent;