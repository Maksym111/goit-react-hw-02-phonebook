import { Component } from 'react';

class PhoneBookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  addNewName = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    this.props.onSubmit(this.state);

    this.setState(
      {
        name: '',
        number: '',
      },
      () => {
        name.value = '';
        number.value = '';
      }
    );
  };

  render() {
    return (
      <form action="" onSubmit={this.addNewName}>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInput}
        />

        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleInput}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhoneBookForm;
