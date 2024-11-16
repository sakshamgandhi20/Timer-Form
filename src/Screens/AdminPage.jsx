import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminPassword from '../components/AdminPassword';
import AdminSettings from '../components/AdminSettings';

const AdminPage = () => {
 
const [check,setCheck] = useState(false);
 const onAuthCheck = ()=>{
  setCheck(true);
 }

  return (
   <>
   {!check?
   (<AdminPassword onPasswordSuccess= {onAuthCheck }/>)
  :(<AdminSettings/>)}
    
    
   </>
  );
};

export default AdminPage;
