import { useState } from 'react';
import '../style/addStudent.css'; 
import '../style/student.css';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';
import { InputSwitch } from 'primereact/inputswitch';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './Firebase'
import * as React from 'react';
import { departmentsData } from './DepartmentData';
import { roles } from './RoleData';
import { universities } from './UniversityData';

export default function AddUser(props: any){ //Pascal case
  const [selectedRole, setSelectedRole] = useState(!props.rowData ? null : roles.find(x => x.roleName === props.rowData.role));
  const [selectedUniversity, setSelectedUniversity] = useState(!props.rowData ? null : universities.find(x => x.universityname === props.rowData.university));
  const departments = departmentsData.filter(x=> x.university === selectedUniversity?.universityname);
  const [selectedDepartment, setselectedDepartment] = useState(!props.rowData ? null : departments.find(x => x.deptname === props.rowData.department));
  const [checked, setChecked] = useState(props?.rowData?.nri ? true : false);
    const [inputValues, setInputValue] = useState(!props.rowData ? {
        id: null,
        userName: '',
        email: '',
        password: '',
        role:'',
        university: {},
        department: '',
        phone: '',
        nri: false
      } : props.rowData);
    
      const [validation, setValidation] = useState({
        userName: '',
        email: '',
        password: ''
      });

      const checkValidation = () => { 
        let errors = validation;
        
        //Name validation
        if (!inputValues.userName.trim()) {
          errors.userName = 'Name is required';
        }
        else if (!/^[a-zA-Z]+$/.test(inputValues.userName.trim())){
          errors.userName = 'Name contains only alphabets';
        }
        else {
          errors.userName = '';
        }

        //Password validation
        if (!inputValues?.password?.trim()) {
          errors.password = 'Password is required';
        } else {
          errors.password = '';
        }

        // email validation
        
        if (!inputValues?.email?.trim()) {
            errors.email = 'Email is required';
        } 
        else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(inputValues.email)){
            errors.email = "Invalid EmailId";
        }
         else {
            errors.email = '';
        }
        setValidation(errors);
      }
    const checkValidationFields = (event: any) =>{
      let errors = validation;
        if(event?.target.name === 'userName'){
           //Name validation
            if (!event?.target.value.trim()) {
              errors.userName = 'Name is required';
            }
            else if (!/^[a-zA-Z]+$/.test(event?.target.value.trim())){
              errors.userName = 'Name contains only alphabets';
            }
            else {
              errors.userName = '';
            }
        }
        else{
          // email validation
          if (!event?.target.value.trim()) {
            errors.email = 'Email is required';
          } 
          else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(event?.target.value)){
              errors.email = "Enter Valid EmailId";
          }
          else {
              errors.email = '';
          }
        }
        setValidation(errors);
    }

    function handleChange(event: any){
        const { name, value } = event.target;
        setInputValue({ ...inputValues, [name]: value });
        if(event?.target?.name === 'nri'){
          setChecked(event?.target?.value);
        }
        if(event.target.name === 'userName' || event.target.name === 'email'){
          checkValidationFields(event);
        }
    }
    
   
    let passToParent  = async (e: any) => {
      e.preventDefault();
      checkValidation();
      const newmockData = {
        id : inputValues?.id ? inputValues?.id : 0,
        UserName: inputValues.userName,
        Email: inputValues.email,
        Role: selectedRole?.roleName,
        University: selectedUniversity?.universityname,
        Department: selectedDepartment?.deptname,
        Phone: inputValues.phone,
        NRI: checked,
        Password: inputValues.password
      };

      if(Object.values(validation).some(val => val)){
        props.closePopup(true);
      }
      else{
        await createUserWithEmailAndPassword(auth, newmockData.Email, newmockData.Password)
      .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          axios.post('https://localhost:7090/api/User/SaveUser', newmockData  , {headers: {"Authorization" : 'Bearer '+sessionStorage.getItem('AuthToken')}}             
          ).then(() => {
              props.closePopup(false);
          })
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorMessage === 'Firebase: Error (auth/email-already-in-use).'){
            axios.post('https://localhost:7090/api/User/SaveUser', newmockData, {headers: {"Authorization" : 'Bearer '+sessionStorage.getItem('AuthToken')}}            
            ).then(() => {
                props.closePopup(false);
            })
          }
          console.log(errorCode, errorMessage);
      });
      }
    };

    function setUniversityAndDept(value: any): void {
      setSelectedUniversity(value);
      setselectedDepartment(null);
    }
    
    return(
        <>
        <div className="container">
        <form>
            <div className='txtbox'>
                <label>Name : </label>
                <input type="text" value={props?.rowData?.userName} onChange={handleChange} name="userName"/>
                <span style={{color:'red'}}>{validation.userName}</span>
                <label className='ml-25'>Email : </label>
                <input type="text" value={props?.rowData?.email}  onChange={handleChange} name="email"/>
                <span style={{color:'red'}}>{validation.email}</span>
                <br></br>
                <label>Password : </label>
                <input type="Password" value={props?.rowData?.password}  onChange={handleChange} name="password"/>
                <span style={{color:'red'}}> {validation.password} </span>
                <label className='ml-25'>Phone No : </label>
                <input type="number" value={props?.rowData?.phone}  onChange={handleChange} name="phone" minLength={10} maxLength={10}/>
                <label className='ml-25 mr-10'>NRI</label>
                <InputSwitch name="nri" checked={checked} onChange={handleChange} />
            </div>
            <div className='drpdown'>
            <label>Role : </label>
            <Dropdown value={selectedRole} onChange={(e) => setSelectedRole(e.value)} options={roles} optionLabel="roleName" 
                editable filter showClear placeholder="Select Role" />

              <label className='ml-25'>University : </label>
                <Dropdown value={selectedUniversity} onChange={(e) => setUniversityAndDept(e.value)} options={universities} optionLabel="universityname" 
                editable filter showClear placeholder="Select University" />
                <div className='mt-15'>
                <label>Department : </label>
                <Dropdown value={selectedDepartment} onChange={(e) => setselectedDepartment(e.value)} options={departments} optionLabel="deptname" 
                editable filter showClear placeholder="Select Department" />
                </div>
            </div>
            <div className='align-right'>  
               <button className="submitbtn" type="button" onClick={passToParent}>Submit</button>
            </div>
        </form>
        </div>
        </>
    )
}