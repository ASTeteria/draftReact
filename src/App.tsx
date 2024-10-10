import React, {FC, useEffect, useState} from 'react';

import './App.css';
import {IUser} from "./models/IUser";
import Users from "./components/users/Users";
import user from "./components/user/User";


const App: FC = () => {
    const [posts, setPosts] = useState<any>([]);

    const lift = (obj:IUser) => {
        fetch('https://dummyjson.com/posts?userId=')
            .then(value => value.json())
            .then((response) => {
                        console.log(response);
            });

    }

    return (
    <div>
        <hr/>
        {}
        <hr/>
       <Users lift={lift}/>
    </div>
  );
}

export default App;
