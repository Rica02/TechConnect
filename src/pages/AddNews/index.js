import React,{useState} from "react";
import {
    Container,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormWrap,
    Icon,
    Form ,
    FormLabel,
    FormInputText
} from './AddNewsStyle';
import {useDB}from'../../ServerContext';
function AddNews() {
    const{AddNewsToDB}=useDB();
    const [editdData,seteEitdData] = useState({
        title: "",
        date: "",
        text: "",
      })
      const editNewsChange = (e) => {
        e.preventDefault();
        var value = e.target.value
        seteEitdData({ ...editdData, [e.target.name]: value })
      }
      const handleClick = (e) => {
        e.preventDefault();
        AddNewsToDB(editdData);
        alert('Update succeed')
      };

  return (
    <Container>
            <FormWrap>
                <Icon to="/"></Icon>
                <FormContent>
                    <Form onSubmit={handleClick}>
                    <FormH1>Post News Page</FormH1>
                        <FormLabel htmlFor='for'>Title</FormLabel>
                        <FormInput type='text' name="title" required onChange={editNewsChange}/>
                        <FormLabel htmlFor='for'>Date</FormLabel>
                        <FormInput type='date' name="date" required onChange={editNewsChange}/>
                        <FormLabel htmlFor='for'>Text</FormLabel>
                        <FormInputText type='text' name="text" required onChange={editNewsChange}/>
                        <FormButton type='submitSignup'>Submit</FormButton> 
                    </Form>

                </FormContent>
             
            </FormWrap>
            </Container>
  )
}

export default AddNews
