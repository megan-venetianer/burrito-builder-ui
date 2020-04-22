import React, { Component } from 'react';
import { submitOrder } from '../../apiCalls';
import { connect } from 'react-redux';
import { addOrder } from '../../actions';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  addNewOrder = () => {
    submitOrder(this.state.name, this.state.ingredients)
    .then(order => this.props.addOrder(order))
    .catch(err => console.log(err.message))
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.addNewOrder();
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  checkInputs = () => {
    if (this.state.ingredients.length > 0) {
      return false
    } else {
      return true
    }
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)} disabled={this.checkInputs()}>
          Submit Order
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addOrder: (order) => dispatch(addOrder(order))
});

export default connect(null, mapDispatchToProps)(OrderForm);
