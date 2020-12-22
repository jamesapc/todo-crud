import { Card, Layout, Form, Button, Row, Col } from 'antd'
import React, { useState } from 'react'

const TodoListPage = () => {
  const [lists, setList] = useState([
    {
      todo: 'Write Code'
    },
    {
      todo: 'Check email'
    },
    {
      todo: 'Done Jobs'
    }
  ])
  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Content>
        <Form>
          <Card
            title="Todo List"
            bordered={false}
            hoverable
            style={{ marginTop: '100px', width: '400px', height: 'auto' }}
            headStyle={{ padding: '10px', fontWeight: 'bold', fontSize: '20px', borderRadius: '10px 10px 0 0', lineHeight: '23px', backgroundColor: '#455A64', color: 'white' }}
            bodyStyle={{ padding: '10px 0 10px 0', boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.1)', borderRadius: '0 0 10px 10px', backgroundColor: '#90A4AE' }}
          >
            <ul className="list-container">
              {lists.map((list, index) => {
                return (
                  <li key={index}>{list.todo}</li>
                )
              })}
            </ul>
              <Form.Item style={{ textAlign: 'center' }}>
                <Button className="submit-button">Submit</Button>
              </Form.Item>
          </Card>
        </Form>
      </Layout.Content>
    </Layout>
  )
}

export default TodoListPage
