import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Bio from './components/Bio'
import NavBase from './components/Navbar'
import Shop from './components/Shop'
import Events from './components/Events'
import Media from './components/Media'
import Loginsignup from './components/Loginsignup'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
    <div className='App'>
      <NavBase />
      <Routes>
    <Route exact path="/" element={<Home />}/>   
     <Route exact path="/bio" element={<Bio />}/>
     <Route exact path="/shop"element={<Shop />}/>
     <Route exact path="/events"element={<Events />}/>
     <Route exact path="/media"element={<Media />}/>
     <Route exact path="/login/sign-up"element={<Loginsignup />}/>
     
     </Routes>

    </div>
    
    </Router>
  
    </ApolloProvider>
  );
}

export default App;

