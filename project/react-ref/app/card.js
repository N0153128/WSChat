'use client';
import LikeButton from './like-button'; 

export default function Card() {
    let arr=[];
   
      let markup = (
      <div>
        <h2>Lorem Ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
             labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
               velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <LikeButton />
        </div>
        
    );
    for(let i=0; i<5; i++){
        arr.push(markup);
    }
    return arr;
    // }
}