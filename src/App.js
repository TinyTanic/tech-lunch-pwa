import React, { Component } from "react";

import Header from "./app/components/ui/header";
import Cats from "./app/components/ui/cats";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      cats: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("/cats.json", {
      mode: "no-cors"
    })
      .then(resp => console.log(resp) || resp)
      .then(response => response.json())
      .then(cats => {
        this.setState({ cats, loading: false });
      })
      .catch(e => {
        console.error(e);
        this.setState({ cats: [], loading: false });
      });
  }

  render() {
    const { loading, cats } = this.state;
    return (
      <div className="App">
        <Header>Cats finder</Header>
        {!loading ? <Cats cats={cats} /> : "Loading..."}
      </div>
    );
  }
}

export default App;
