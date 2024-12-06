import {useState} from "react";

function APITests() {

    const[serverUserList,setServerUserList] = useState([]);

    const getApiData = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users?page=2'); // Replace with your endpoint
            const data = await response.json();
            console.log(data); // Log the response to inspect the structure
            setServerUserList(data.data); // Extract and set the 'data' array
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const postApiData=async()=>{
        //to post the data to server
        let data ={
            //read the value from input
            "name":"Morpheus",
            "job":"leader"
        }
        let res = await fetch("https://reqres.in/api/users",
            {
                method:"POST",
                body:JSON.stringify(data),
                headers:{"content-type":'application/json'}
            });
        let json = await res.json();
        //updating the server response  to the  state varibles
        console.log(json);

    }

    const clearData=async()=>{
        setServerUserList([]);
    }


    return (
        <>
            <h1>React page for testing API</h1>
            <button onClick={() => getApiData()}>Get Data</button>
            {
                serverUserList && serverUserList.map((obj, index) => {
                    return (
                        <div key={index} className={(obj.id % 2 === 0)?'myclass':'myclass2'}>Id: {obj.id} Name: {obj.first_name} {obj.last_name} -- Email: {obj.email}</div>
                    )
                })
            }
            <div>
                <input type="button" onClick={() => postApiData()} value="Post API Data"/>
            </div>
            <br/>
            <button onClick={() => clearData()}>Clear Data</button>
        </>
    )
}

// must export in order to use this function in other files
export default APITests;