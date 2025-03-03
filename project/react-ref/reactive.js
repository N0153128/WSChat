import {useState} from 'react';


function Header(props) {
    console.log(props)
    return <h1>{props.title}</h1>;
    
}

function HomePage() {
    const [likes, setLikes] = useState(0)

    function likeHandler() {
        setLikes(likes + 1);
    }
    let names = ['Вася', 'Петя', 'Коля'];
    return(
        <div>
            <Header title="БЛЕААААААТЬ" />
            <ul>
                {names.map((name) => (
                    <li key={name}> блять {name} сука нахуй </li>
                ))}
            </ul>
            <button onClick={likeHandler}>Лайки ({likes})</button>
        </div>
    )
}

root.render(<HomePage />);
