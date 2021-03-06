import { ApolloProvider } from '@apollo/client';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/NavBar';
import About from './pages/About';
import Dblog from './pages/Dblog';
import Post from './pages/Post';
import Search from './pages/Search';
import Type from './pages/Type';
import { client } from './Utils/Client';
function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/dblog/posts" />} />
          <Route path="/dblog/posts" element={<Dblog />} />
          <Route path="/dblog/sobre" element={<About />} />
          <Route path="/dblog/post/:title" element={<Post />} />
          <Route path="/dblog/buscar" element={<Search />} />
          <Route path="/dblog/tipo/:type" element={<Type />} />
        </Routes>
      </main>
    </ApolloProvider>
  );
}

export default App;
