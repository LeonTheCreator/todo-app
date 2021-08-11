import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Board.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAdvance: PropTypes.func,
  onDelete: PropTypes.func,
}

export default function Board({ title, todos, onAdvance, onDelete }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <List>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              <TodoItem todo={todo} onAdvance={onAdvance} onDelete={onDelete} />
            </li>
          )
        })}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 300px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 12px;
`
