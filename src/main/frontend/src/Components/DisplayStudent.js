import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import axios from "axios";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: '이름', width: 130 },
    { field: 'level', headerName: '성정', width: 130 },
];


export default function DisplayStudent() {
    const [ students, setStudents ] = useState([]);
    useEffect(()=> {
        axios.get("/student")
            .then(response => setStudents(response.data));
    })
    return (
        <div style={{ height: 400, width: '60%', marginTop:'30px' }}>
            <h2>학생 목록</h2>
            <DataGrid
                rows={students}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
