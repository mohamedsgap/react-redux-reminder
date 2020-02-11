import React from 'react';
import './App.css';
import {addReminder, clearReminder, clearAllReminder} from './actions'
import {connect} from  'react-redux'

class  App extends React.Component {
  state = {
    text: '',
    date: new Date()
  }

  renderReminders = () => {
    const {reminder} = this.props
    return (
      <ul className="list-group">
          {
         reminder.map(remind => {
              return (
                <li key={remind.id} className="list-group-item">
                  <div>{remind.text}</div>
                  <div>{remind.date}</div>
                  <div className="remove btn btn-danger" onClick={()=> this.props.clearReminder(remind.id)}>X</div>
                </li>
                )
              })
            }
      </ul> 
    )

  }

  render(){
    return( 
      <div>
        <div className="App">
        <img src=""  />
        <div className="app-title">
          <h2>What's in your bucket list?</h2>
        </div>
        <input onChange={(e) => this.setState({text: e.target.value})} value={this.state.text} className="form-control" type="text" placeholder="What you want TODO?" />
        <input  onChange={(e) => this.setState({date: e.target.value})} value={this.state.date} className="form-control" type="datetime-local" />
        <button onClick={()=> {
          this.props.addReminder(this.state.text, this.state.date) 
          this.setState({text: '', date: ''})}} 
          className="btn btn-primary btn-block">ADD</button>
        {this.renderReminders()}
        <button  onClick={()=>this.props.clearAllReminder()} className="btn btn-danger btn-block">CLEAR ALL</button>
        </div>
      </div>
    );
    }
}
/*
function mapDispatchToProps(dispatch){
  return {
    addReminder : () => dispatch(addReminder())
  }
}
*/
/*
function mapStateToProps(state) {
  return {
    reminder : state
  }
}
*/
export default connect(state => {return {reminder : state}}, {addReminder, clearReminder,clearAllReminder })(App);
