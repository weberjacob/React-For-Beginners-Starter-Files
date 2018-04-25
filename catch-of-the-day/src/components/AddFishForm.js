import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes = {
    addFish: PropTypes.func
  };

  createFish = (event) => {
    // 1. stop form from submitting
    event.preventDefault();
    // console.log('making fish');

    // 2. create the fish
    // console.log(this.nameRef.value.value);
    const fish = {
      nameRef: this.nameRef.value.value,
      priceRef: parseFloat(this.priceRef.value.value),
      statusRef: this.statusRef.value.value,
      descRef: this.descRef.value.value,
      imageRef: this.imageRef.value.value,
    }
    // console.log(fish);
    this.props.addFish(fish);
    // 3. refresh the form after submit
    event.currentTarget.reset();
  }
  
  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text"  placeholder="Name"/>
        <input name="price" ref={this.priceRef} type="text" placeholder="Price" />
        <select name="status" ref={this.statusRef} >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" ></textarea>
        <input name="image" ref={this.imageRef} type="text" placeholder="Image" />
        <button type="submit">+ Add Some Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
