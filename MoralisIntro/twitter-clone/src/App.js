import { useMoralis } from 'react-moralis';
import { Button } from '@chakra-ui/react';
import { Container, Heading } from '@chakra-ui/layout';
import { Auth } from './Auth';
import { Route, Switch } from "react-router-dom";
import { Home } from './Home';
import { Profile } from './Profile';


function App() {
  const { isAuthenticated, logout, user } = useMoralis();
  
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/profile" exact>
        <Profile />
      </Route>
    </Switch>
  );

  //<Route path='/welcome' element={<Home/>} />


  if(isAuthenticated){
    return (
      <Container>
        <Heading>Welcome to the twitter clone, {user.attributes.username}</Heading>
        <Button onClick={()=> logout()}>Logout</Button>
      </Container>
    );  
  }
  
  return (
    <Container>
      <Heading mb={6}>Welcome to the Twitter clone</Heading>
      <Auth />
    </Container>
  );
}

export default App;
