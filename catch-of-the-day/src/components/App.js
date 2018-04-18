import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  componentDidMount() {
    // console.log('mounted');
    const { params } = this.props.match ;
    // first reinstate localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

  componentDidUpdate() {
    // console.log('updated');
    localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    // console.log('unmounted');
    base.removeBinding(this.ref);
  }

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

  updateFish = (key, updatedFish) => {
    // 1. take a copy of current state
    const fishes = { ...this.state.fishes };
    // 2. update that state
    fishes[key] = updatedFish;
    // 3. set that to new state
    this.setState({ fishes:fishes });
  }

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
          updateFish={this.updateFish}
          loadSampleFish={this.loadSampleFish}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}

export default App;
