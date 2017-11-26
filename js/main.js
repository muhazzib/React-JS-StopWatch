let react = document.getElementById("root");



class App extends React.Component {

  constructor() {
    super()
    this.state = {
      name: "Muhazzib",
      currentTime: undefined,
      counter: 0,
      second: 0,
      minute: 0,
      hour: 0,
      functionflag: false,
      initialcounter: 0,
    }
  }

  stopwatch = () => {
    setInterval(() => {
      if (this.state.functionflag === true) {
        if (this.state.second < 60) {
          if (this.state.second == 59) {
            if (this.state.minute === 59) {
              this.setState({
                hour: this.state.hour + 1,
                minute: 0
              })
            }
            else {
              this.setState({
                minute: this.state.minute + 1,
                second: 0
              })
            }
          }
          else {
            this.setState({
              second: this.state.second + 1
            })
          }
        }
      }
    }, 1000)

  }
  start = () => {
    if (this.state.initialcounter === 0) {
      this.setState({
        functionflag: true,
        initialcounter: 1
      })

      this.stopwatch()
    }
    else {
      if (this.state.initialcounter === 1) {
        this.setState({
          functionflag: true
        })
      }
    }
  }

  stop = () => {
    this.setState({
      functionflag: false
    })
  }

  reset = () => {
    this.setState({
      functionflag: false,
      second: 0,
      minute: 0,
      hour: 0,
    })
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <img src="../images/logo.svg" style={{ }} className="App-logo" />
        </div>
        <div className="row justify-content-md-center">
          <h3 style={{ color: "white" }}>My First Stop-Watch Using React-JS</h3>
        </div>
        <div className="row justify-content-md-center">
          <h1 style={{ color: "red" }}>{this.state.hour} <span style={{ color: "white" }}>:</span> {this.state.minute} <span style={{ color: "white" }}>:</span> {this.state.second}</h1>
        </div>
        <div className="row justify-content-md-center" style={{ backgroundColor: "red", padding: "1%" }}>

          <button onClick={() => this.start()} style={{ color: "green", backgroundColor: "black", borderColor: "white", margin: "1px", borderRadius: "2px" }}>Start</button>
          <button onClick={() => this.stop()} style={{ color: "orange", backgroundColor: "black", borderColor: "white", margin: "1px", borderRadius: "2px" }}>Stop</button>
          <button onClick={() => this.reset()} style={{ color: "red", backgroundColor: "black", borderColor: "white", margin: "1px", borderRadius: "2px" }}>Reset</button>
        </div>

      </div>

    )
  }
}
ReactDOM.render(
  <App />,
  react
);
