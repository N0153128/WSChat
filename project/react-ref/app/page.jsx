import Card from './card';


function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const names = ['Articles', 'Experiments', 'Quality']; 
 
  return (
    <div>
      <Header title="Welcome to my mini blog" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <Card />
    </div>
  );
}