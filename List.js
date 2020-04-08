import React from 'react'
import Card from './Card'

function List (props) {
  return (
      <section className="List">
        <header className="List-header">
          <h2>First list</h2>
        </header>
        <div className="List-cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
            <button type="button" className="List-add-button">
              + Add Random Card
            </button>
        </div>
      </section>
  )
}

export default List
