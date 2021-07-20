import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { render } from 'react-dom'
import TeamMembers from './components/TeamMembers';
import UserInput from './components/UserInput';

const mockData = [
  {name:'Braffuh', email:'cole@braffuh.com', role: 'Full Stack Dev'},
  {name:'Jordan', email:'jordan@jordan.com', role: 'Full Stack Dev'},
  {name:'Josh', email:'josh@josh.com', role: 'Full Stack Dev'},
]


function App() {
  const [team, setTeam] = useState(mockData)
  const addToTeam = newMember => {
    setTeam([...team, newMember])
  }

  return (
    <div className="App">
      <UserInput addToTeam={addToTeam}/>
      {team.map ( member => { return <TeamMembers teamMember={member} /> })}
    </div>
  );
}

export default App;
