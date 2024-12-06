import {useState} from "react";

function CSSTests() {

    const [red,setRed] = useState(false);//default value as false

    //
    const changeCssClass=()=>{
        setRed(!red);
    }
    //create state variable
    const [show,setShow] = useState(false);//default value as false

    //calling this by buttn click
    const hideAndShow=()=>{
        setShow(!show);//vice versa of show..
    }


    return (
        <>
            <h1>React page for testing CSS</h1>
            {
                // ternary operator(condition)?:
                (show)?<h1>h1 is visible</h1>:null
            }
            <button onClick={hideAndShow}>hide and show</button>
            {
                // conditional class
                <h1 className={(red)?'myclass':'myclass2'}>
                    this is simple heading tag
                </h1>
            }
            <button onClick={changeCssClass}>change Css Class</button>
        </>
    )
}

// must export in order to use this function in other files
export default CSSTests;