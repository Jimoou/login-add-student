import { useState } from "react";
import axios from "axios";

export default function AddStudent() {
    const [ name, setName] = useState('');
    const [ level, setLevel] = useState('');
    const submitData = async (e) => {
        e.preventDefault();
        await axios
            .post("/student/add", {
            "name" : name,
                "level" : level
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
        <h2>학생 추가</h2>
        <form onSubmit={submitData}>
            <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)}/>
            <input type="level" placeholder="level" onChange={(e) => setLevel(e.target.value)}/>
            <button type="submit">입력</button>
        </form>
        </>
    )
}