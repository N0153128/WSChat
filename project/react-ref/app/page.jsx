import Post from './fragments/post';
import Demo from './fragments/chSample';
import Navbar from './fragments/navbar';
import { Container } from '@chakra-ui/react';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Articles', 'Experiments', 'Quality']; 
 
  return (
    <Container>
      <Navbar />

      {/* <Demo /> */}
      <Post />
    </Container>
  );
}