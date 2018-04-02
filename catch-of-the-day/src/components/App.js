import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    // console.log('adding fish');
    // 1. take a copy of existing state
    const fishes = {...this.state.fishes};
    // 2. Add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set new fishes object to state
    this.setState({
      // fishes: fishes -> setting as itself is same as calling itself
      fishes
    });
  };
  loadSampleFish = () => {
    // alert('hit');
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // 1. take a copy of state
    const order = {...this.state.order};
    // 2. add to order or update number in order
    order[key] = order[key] + 1 || 1;
    // 3. call setstate to update the state object
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Yo" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFish={this.loadSampleFish}
        />
      </div>
    );
  }
}

export default App;
