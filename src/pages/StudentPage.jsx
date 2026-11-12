import Header from '../Components/Header.jsx';
import FormContainer from '../Components/FormContainer.jsx';
import StudentList from '../Components/StudentList.jsx';
import {useState} from 'react';

 const StudentPage = () => {
    const [data,setData] = useState([]);

    const getData =async () => {
       const response = await fetch('http://127.0.0.1:3000/student/all');

       if (!response.ok) {
        throw new Error(response.status);
       } 

       const data = response.json();
       return data;
    }

    getData().then((result) => {
        setData(result)
    }).catch((e) => {
        console.log(e)
    })

  return (

  <>

  <Header/>
  <FormContainer/>
  <StudentList data={data} />


  </>
  )

}




export default StudentPage;