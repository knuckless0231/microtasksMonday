import React from 'react';
import './App.css';
import {MicroTaskArr} from "./Microtasks/microTaskArray/microTaskArray";
import {FilterStateTask} from "./Microtasks/filterUsestate/App";
import {Data} from "./Microtasks/InputTask/Data";


function App() {
    return (
        <div>

            {/*---------------------------------*/}
            {/*Comment or uncoment Task to see it */}
            {/*---------------------------------*/}


            <MicroTaskArr/>
            {/*<FilterStateTask/>*/}
            {/*<Data/>*/}


            {/*---------------------------------*/}
            {/*Comment or uncoment Task to see it ^^^^^ */}
            {/*---------------------------------*/}

        </div>
    );
}

export default App;
