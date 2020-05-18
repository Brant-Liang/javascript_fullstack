import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
  const { inputValue, list, inputChange, handleClick, handleDeleteItem } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={inputChange} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li key={index} onClick={() => {
                handleDeleteItem(index)
              }}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

//store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    inputChange(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      }
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: "add_item"
      }
      dispatch(action);
    },
    handleDeleteItem(index) {
      const action = {
        type: "delete_item",
        index
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);