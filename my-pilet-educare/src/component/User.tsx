import { FaPlus } from 'react-icons/fa';
import '../style/student.css'; 
import { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import AddUser from './AddUser';
import { Button } from 'primereact/button';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import * as React from 'react';

export default function User(){
    const location = useLocation()
    const [first, setFirst] = useState(0);
    const [displayBasic, setDisplayBasic] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [mockData, setMockData] = useState([]);
    const [user, setUser] = useState(null);

    const fetchUserData = () => {
        fetch("https://localhost:7090/api/User/GetUsersList")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setMockData(data)
          })
      }
    useEffect(() => {
        fetchUserData();
    }, [])

    function onClick(val: boolean): void{
        setDisplayBasic(val);
        setUser(null);
    }
    function onHide(val: boolean): void{
        setDisplayBasic(val);
        fetchUserData();
    }
    function onClose(val: boolean): void{
        setConfirmDelete(val);
    }

    const editUser = (user: any) => {
        setDisplayBasic(true);
        setUser(user);
    }

    const confirmDeleteUser = (user:any) => {
        setConfirmDelete(true);
        setUser(user);
    }

    const deleteUser = (user: any) =>{
        const userId = user.id
        axios.delete('https://localhost:7090/api/User/DeleteUser/'+ userId)
        .then(() => {
            setConfirmDelete(false);
            fetchUserData();
        });
    }

    const actionBodyTemplate = (rowData: any) => {
        return (
            <>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editUser(rowData)} /> 
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning ml-10" onClick={() => confirmDeleteUser(rowData)} />
            </>
        );
    }
    

    return (
        <>
        <div className='d-flex'>
            
        <h2>Users List </h2>
        {location.pathname.split(':')[1] === '1' && <button className='addstudentbtn' onClick={() => onClick(true)}> <FaPlus/> User</button>
        }
        </div>
            <Dialog header={user ? 'Edit User' : 'Add User'} visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide(false)}>
                <AddUser rowData={user} closePopup={(val: any) => {onHide(val)} }></AddUser>
            </Dialog>
        <div>
        </div>
            <Dialog header={'Delete User'} visible={confirmDelete} style={{ width: '20vw' }} onHide={() => onClose(false)}>
                <p><b>Are you sure. You want to delete this user? </b></p>
                <div className='align-right'>
                    <button className='deleteDialogYesBtn' onClick={() => deleteUser(user)}>Yes</button>
                    <button className='deleteDialogNoBtn' onClick={() => onClose(false)}>No</button>
                </div>
            </Dialog>
        <div>
            <DataTable value={mockData}  paginator rows={10} first={first} onPage={(e) => setFirst(e.first)} >
                <Column field="userName" header="Name" sortable></Column>
                <Column field="email" header="Email" sortable></Column>
                <Column field="role" header="Role" sortable></Column>
                <Column field="university" header="university" sortable></Column>
                <Column field="department" header="department" sortable></Column>
                <Column field="phone" header="Phone" sortable></Column>
                <Column field="nri" header="NRI"></Column>
                <Column header="Action" body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                {/* {location.pathname.split(':')[1] === '1' && <Column header="Action" body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>} */}
            </DataTable>
        </div>
        </>
    )
}


