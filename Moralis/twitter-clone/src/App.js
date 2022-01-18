import { ByMoralis, useMoralis } from 'react-moralis';
import { Avatar, Button, Flex , Spacer , Box } from '@chakra-ui/react';
import { Container, Heading } from '@chakra-ui/layout';
import { Auth } from './Auth';
import { Route, Switch , Redirect, Link } from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';


function App() {
  const { isAuthenticated, logout, user , isAuthUndefined } = useMoralis();
  
  return (
    <Container>
      
      <Flex my={6} >
        <Link to="/" exact><Heading>Home</Heading></Link>
        <Spacer />
        {isAuthenticated && (
          <Link to="/profile" exact>
            <Avatar name={user.attributes.username} />
          </Link> )}
      </Flex>
      
      <Heading mb={6} >Welcome to the twitter clone, {user ? user.attributes.username : ' authenticate please ...'}</Heading>

      {isAuthenticated ? (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch> 
      ) : (
        <>
        {!isAuthUndefined && <Redirect to="/" />}
        <Auth />
        </>
      ) }
      <Box mt={6}> 
        <ByMoralis />
      </Box>
    </Container>
  );

  //<Route path='/welcome' element={<Home/>} />


}

export default App;
