const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

function Header(props) {
    console.log(props)
    return <h1>{props.title}</h1>;
}

function HomePage() {
    let names = ['Вася', 'Петя', 'Коля'];
    return(
        <div>
            <Header title="БЛЕААААААТЬ" />
            <ul>
                {names.map((name) => (
                    <li key={name}> блять {name} сука нахуй </li>
                ))}
            </ul>
        </div>
    )
}

root.render(<HomePage />);
