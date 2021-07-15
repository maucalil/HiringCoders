import React, { useState} from 'react';
import axios from 'axios';
import * as S from './styled'
import { useHistory } from 'react-router-dom'

function Home(props) {

  const history = useHistory();
  const [user, setUser] = useState('')
  function handleSearch() {
    axios.get(`https://api.github.com/users/${user}/repos`).then(response => {
        const repositories = response.data;  
        const repositoriesName = []; 
        repositories.map(repository => {
        repositoriesName.push(repository.name)
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
      history.push('/repositories')
    });
  }
  return (
    
    <S.Container>
      <S.Input className="userInput" placeholder="User" value={user} onChange={ e => setUser(e.target.value)} /> 
      <S.Button type="button" onClick={handleSearch}>Search</S.Button>
    </S.Container>
    
  );
}

export default Home;
