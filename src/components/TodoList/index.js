import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import {useDispatch, useSelector} from "react-redux";
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selector';

export default function TodoList() {
  const [todoName, setTodoName] = useState(''); 
  const [priority, setPriority] = useState('Medium');
  const todoList = useSelector(todosRemainingSelector);//useselector day la 1 function dung de lay ra tung du lieu trong kho chung, todoListSelector duoc truyen tu selector.js
  const dispatch = useDispatch();
  const handleAddButtonClick = () => {/*ham nay goi la event handler, trong ham dispatch 1 action la addTodo voi cac noi dung ben trong,
  khi dispatch 1 action nhu nay thi rootReducer se duoc goi*/
    dispatch(addTodo({
      id: uuidv4(),//dung uuidv4 de tao ra 1 id ngau nhien va duy nhat 
      name: todoName,
      priority: priority,
      completed: false
    })
    );
    setTodoName('');//sau khi nhan add thi tra ve input rong va priority la medium
    setPriority('Medium');
  }
  const handleInputChange = (e) => {
    console.log('handleInputChange', e.target.value)
    setTodoName(e.target.value);
  }
  const handlePriorityChange = (value) => {
    setPriority(value);
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' />  */}
        {todoList.map(todo => <Todo key={todo.id} name={todo.name} prioriry={todo.priority}/>)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
