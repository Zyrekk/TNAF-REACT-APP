
import './App.css';
import './xd.css';
import React, {useState} from 'react'

const people = [
  ['John Doe','1999-01-12'],
  ['Jane Doe', '2003-06-22'],
  ['Bob Smith', '1978-11-11']
];

const options = [{
      id: 1,
      birthDate: '1999-01-12',
      email:'John.Doe@gmail.com',
      label: 'John Doe'
  }, {
      id: 2,
      birthDate: '2003-06-22',
      email:'Jane.Doe@gmail.com',
      label: 'Jane Doe'
  }, {
    id: 3,
    birthDate: '1978-11-11',
    email:'Bob.Smith@gmail.com',
    label: 'Bob Smith'
}]

function App() {
  const [selects,setSelects]=useState('');
  const selectedUser=options.find(user=>user.id==selects)
  return (
      <div id="App">
          <div className="select-container">
              <select defaultValue={0} value={selects} onChange={e=>setSelects(e.target.value)}>
                  <option hidden value={0}>...</option>
                  {options.map((option) => (
                      <option key={option.id} value={option.id}>{option.label}</option>
                  ))}
              </select>
              {
                  selectedUser && (
                      <div className="info">
                          <div className="user">
                              <h3>Date of Birth: {selectedUser.birthDate}</h3>
                          </div>
                          <div className="user">
                              <h3>Email: {selectedUser.email}</h3>
                          </div>

                      </div>
                  )
              }
          </div>
      </div>
  );
}

export default App;
