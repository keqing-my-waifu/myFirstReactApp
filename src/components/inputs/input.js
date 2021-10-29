import React, {Component} from 'react';
import './input.css';
import apply from "./TickSquare.png";
export default class Input extends Component {

  state = {
    label: '',
    label2: ''
  }

  onlablechange = (e) => {
      this.setState({
        label: e.target.value
      })
    }
    onlablechange2 = (e) => {
      this.setState({
        label2: e.target.value
      })
      this.props.onSearch(e.target.value);
      console.log(e.target.value)
    }
    onSubmit = (e) => {
      e.preventDefault(); //не перезагружает страницу при отправки формы
      this.props.onAddItem(this.state.label)
      this.setState({
        label: ''
      })
    }
    onSubmitwo = (e) => {
      e.preventDefault();
      this.props.onSearch(this.state.label2);
    }
    render() {
      return (
        <div>
          <form type="text" onSubmit={this.onSubmitwo}><input value={this.props.label2} onChange={this.onlablechange2} placeholder='Искать'></input></form>
          <form type="text" onSubmit={this.onSubmit}>
            <input placeholder='Добавить' onChange={this.onlablechange} value={this.state.label}></input>
            <button className="apply"><img src={apply} alt="apply"></img></button>
          </form>
        </div>
      );
    }
  } 
