/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'
import List from "./List";
import { uid } from 'uid';

function App() {

  const [contacts,setContacts] = useState([
    {
      id: 1,
      name: "Dede Wahyudin",
      telp: "083855673456",
    },
    {
      id: 2,
      name: "Bikul Badil",
      telp: "086785367456",
    }
  ]);

  const [isUpdate, setIsUpdate] = useState(
    {
      id: null,
      status: false
    });

  const [formData,setFormData] = useState(
    {
      name:"",
      telp:"",
    });

    function handleChange(e){
      let data = { ...formData };
      data[e.target.name] = e.target.value;
      setFormData(data);
    }

    function handleSubmit(e){
      e.preventDefault();
      alert("Data akan disimpan, klik 'OK' untuk melanjutkan");

      let data = [...contacts];

      if(formData.name === "") {
        return false;
      }
      if(formData.telp === "") {
        return false;
      }
      if(isUpdate.status) {
        data.forEach((contact) =>{
          if(contact.id === isUpdate.id) {
            contact.name = formData.name;
            contact.telp = formData.telp;
          }
        });
      }else {
        data.push({id: uid(), name: formData.name,  telp: formData.telp});
      }


      //menambahkan contact
      setIsUpdate({id: null, status: false});
      setContacts(data);
      setFormData({name:"", telp:""});
    }

    function handleEdit(id){

      let data = [...contacts];
      let foundData = data.find((contact)=> contact.id === id);
      setFormData({name: foundData.name, telp: foundData.telp});
      setIsUpdate({id: id, status: true});
    }

    function handleDelete(id){
      let data = [...contacts];
      let filteredData = data.filter(contact => contact.id !== id);
      setContacts(filteredData);
    }

    return (
      <div className='app-container'>
        <div className='container'>
          <h1 className='header add-contact-title'>Add / Edit Contact</h1>
  
          <form onSubmit={handleSubmit} className='form'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input type='text' className='form-control' onChange={handleChange} value={formData.name} name='name' id='name' />
            </div>
            <div className='form-group mt-3'>
              <label htmlFor='telp'>No. Telp</label>
              <input type='text' className='form-control' onChange={handleChange} value={formData.telp} name='telp' id='telp' />
            </div>
            <div>
              <button type='submit' className='btn btn-primary w-100 mt-3'>
                Save
              </button>
            </div>
          </form>
  
          <h2 className='header mt-4'>My Contact List</h2>
          <List handleDelete={handleDelete} handleEdit={handleEdit} data={contacts} />
        </div>
      </div>
    );
}

export default App;
