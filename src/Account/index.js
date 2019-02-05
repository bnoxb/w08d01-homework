import React, { Component } from 'react';


class Account extends Component {
  constructor() {
    super();

    this.state = {
      balance: 0,
    }
  }

  handleChange = (e) =>{
    console.log(e.currentTarget.name);
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
    console.log(e.currentTarget.value);
  }

  handleSubmit = async (e) =>{
    if(isNaN(this.state.amount)){
      console.log('You must enter a valid number');
    }else{

      if(e.currentTarget.name === "deposit"){
              console.log('deposit button was clicked for your account:', this.props.name);
              console.log(this.state);
              const newBalance = parseInt(this.state.balance, 10) + parseInt(this.state.amount, 10);
              console.log(newBalance);
              await this.setState({
                balance: newBalance,
              })
              console.log(this.state.balance);
            }
            if(e.currentTarget.name === "withdraw"){
              console.log('withdraw clicked in:', this.props.name);
              if(this.state.amount <= this.state.balance) {
                console.log('withdraw pressed and have enough cash to withdraw from your account:', this.props.name);
                const newBalance = parseInt(this.state.balance, 10) - parseInt(this.state.amount, 10)
                await this.setState({
                  balance: newBalance,
                })
                console.log(this.state.balance);
              }else {
                console.log(`You can't withdraw more than you have`);
              }
            }

    }
      
  }

  render() {
    const classNames = "balance " + (this.state.balance === 0 ? "zero": "");
    console.log(classNames);
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={classNames}>${this.state.balance}</div>
        <input type="text" name="amount" onChange={this.handleChange} placeholder="enter an amount" />
        <input type="button" name="deposit" onClick={this.handleSubmit} value="Deposit" />
        <input type="button" name="withdraw" onClick={this.handleSubmit} value="Withdraw" />
      </div>
    )
  }
}

export default Account;
