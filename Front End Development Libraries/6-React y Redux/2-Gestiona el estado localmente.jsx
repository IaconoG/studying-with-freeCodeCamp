class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  // Agrega los métodos handleChange() y submitMessage() aquí
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
      messages: this.state.messages
    })
  }
  submitMessage = () => {
    this.setState({
      input: '',
      messages: [...this.state.messages, this.state.input]
    })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Renderiza un input, button, y ul debajo de esta línea */ }
        <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
        <button onClick={this.submitMessage.bind(this)}>Submit</button>
        <ul>
          {this.state.messages.map((el,idx) => {
            return (el !== '') && <li key={idx}>{el}</li>
          })}
        </ul>
        { /* Cambia el código encima de esta línea */ }
      </div>
    );
  }
};