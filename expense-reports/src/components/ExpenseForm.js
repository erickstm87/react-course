import React from 'react';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: ''
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
        //this.setState(() = ({}))
    };
    onChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onChangeAmount = (e) => {
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));      
        }
    };
    render(){
        return(
            <div>
                <form>
                    <input 
                        type='text'
                        placeholder='description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type='text'
                        placeholder='amount'
                        onChange={this.onChangeAmount}
                    />
                    <textarea 
                        placeholder='add a note for your expense (optional)'
                        value={this.state.note}
                        onChange={this.onChange}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
};