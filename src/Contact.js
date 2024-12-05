import {useRef, useState} from "react";

function Contact() {

    let nameref = useRef();
    let mobileRef = useRef();
    let myname = "Please enter your Name and Mobile Number";
    const[name,setName] = useState();
    const[serverUserList,setServerUserList] = useState();
    const getApiData=async()=>{
        let res = await fetch("https://www.apirequest.in/movie/api/",{method:"GET"});
        let json = await res.json();
        //updating the server response  to the  state varibles
        setServerUserList(json);
    }
    let userList = [
        {"name":'sample',"mobile":"4534534534"},
        {"name":'sample1',"mobile":"675675"},
        {"name":'sample2',"mobile":"78978978"},
        {"name":'sample3',"mobile":"1231231"}
    ];

    const printval = () => {

        if(nameref.current.value === "") {
            alert("Please enter the name");
        } else if(mobileRef.current.value === "") {
            alert("Please enter the contact number");
        } else {
            //get the value from the text
            setName("Welcome, " + nameref.current.value + "!");
            console.log(nameref.current.value);
            console.log(mobileRef.current.value);
        }
    }


    return (
        <>
            <h1>Enter contact details</h1>
            <h3>{myname}</h3>
            <div>{name}</div>
            {
                userList.map((obj,index) =>{
                    return (<div key={index}>{obj.name} {obj.mobile}</div>)
                })
            }
            <button onClick={()=>getApiData()}>Get Data</button>
            {
                serverUserList && serverUserList.map((obj,index)=>{
                    return (
                        <div key={index}>{obj.title}-- {obj.year}</div>
                    )
                })
            }
            <div>
                <input ref={nameref} type="text" placeholder="Enter Name"/>
            </div>
            <div>
                <input ref={mobileRef} type="text" placeholder="Enter Mobile Number"/>
            </div>
            <div>
                <input type="button" onClick={() => printval()} value="Click"/>
            </div>
        </>
    )
}

// must export in order to use this function in other files
export default Contact;