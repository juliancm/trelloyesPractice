import React from 'react';
import List from './List'

function App(props) {
  console.log(props)
  return (
    <body>
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
        {props.store.lists.map(list => (
          <List
            key={list.id}
            header={list.header}
            cards={props}
          />
        ))}
        </div>
      </main>
    </body>
  );
}

export default App;
