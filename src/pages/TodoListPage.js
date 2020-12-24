import { Card, Layout, Form, Button, Input } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { uid } from 'uid'
import { useAuth } from '../context/TodoContext'

const TodoListPage = () => {
  const [text, setText] = useState('')
  const [lists, setList] = useState([
    {
      todo: 'Write Code',
      id: uid()
    },
    {
      todo: 'Check email',
      id: uid()
    },
    {
      todo: 'Done Jobs',
      id: uid()
    }
  ])

  const handleSubmit = () => {
    const ref = firebaseApp
    setText('');
    setList([...lists, {todo: text, id: uid()}])
  }
 
  const clearTodo = () => {
    setList([]);
  }

  const removeTodo = (id) => {
    setList(lists.filter(item => item.id !== id))
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Content>
        <Form onFinish={handleSubmit} >
          <Card
            title="Todo List"
            bordered={false}
            hoverable
            style={{ marginTop: '100px', width: '400px', height: 'auto' }}
            headStyle={{ padding: '10px', fontWeight: 'bold', fontSize: '20px', borderRadius: '10px 10px 0 0', lineHeight: '23px', backgroundColor: '#455A64', color: 'white' }}
            bodyStyle={{ padding: '10px 0 10px 0', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.1)', borderRadius: '0 0 10px 10px', backgroundColor: '#90A4AE' }}
          >
            <Form.Item style={{ textAlign: 'center', margin: '10px 0 10px 0' }}>
              <Input onChange={e => setText(e.target.value)} value={text} stlye={{ borderRadius: '10px', height: '30px' }} />
            </Form.Item>
            <ul className="list-container">
              {lists.map((list, index) => (
                <li key={index}>{list.todo} 
                  <div className="remove-todo"><Button onClick={() => removeTodo(list.id)}><DeleteOutlined /></Button></div>
                </li>
              ))}
            </ul>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Form.Item style={{ textAlign: 'center', marginTop: '15px' }}>
                  <Button htmlType="submit" style={{ marginRight: '5px', height: '30px', width: '80px', fontWeight: 'bold', backgroundColor: '#455A64', color: 'white', border: 'none' }} className="submit-button">Submit</Button>
                </Form.Item>
                <Form.Item style={{ textAlign: 'center', marginTop: '15px' }}>
                  <Button onClick={clearTodo} style={{ marginLeft: '5px', height: '30px', width: '80px', fontWeight: 'bold', backgroundColor: 'red', color: 'white', border: 'none' }} className="submit-button">Clear</Button>
                </Form.Item>
              </div>
          </Card>
        </Form>
      </Layout.Content>
    </Layout>
  )
}

export default TodoListPage
