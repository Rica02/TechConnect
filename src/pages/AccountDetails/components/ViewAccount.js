import React from 'react'
import { DeleteButton, EditButton, Title, RWrap, LWrap, WrapContainer, LableContainer, Lable, Data, Column } from '../AccountDetailsStyle'
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
function ViewAccount({contact,accountEditClick}) {
    return (
        <>
         <WrapContainer>
          <RWrap>
            <Title>Account details</Title>
          </RWrap>
          <LWrap>
            <EditButton onClick={(e)=>accountEditClick(e,contact)}><FaRegEdit fontSize="1.5rem" />Edit account</EditButton>
            <DeleteButton><ImBin fontSize="1.5rem" />Delete account</DeleteButton>
          </LWrap>
        </WrapContainer>
        <WrapContainer>
          <LableContainer>
            <Column><Lable >First Name :</Lable><Data >{contact.firstName}</Data></Column>
            <Column><Lable >Last Name :</Lable><Data>{contact.lastName}</Data></Column>
            <Column> <Lable>phone :</Lable><Data>{contact.phone}</Data></Column>
            <Column> <Lable>Email :</Lable><Data>{contact.email}</Data></Column>
            <Column> <Lable>Gender :</Lable><Data>{contact.gender}</Data></Column>
            <Column> <Lable>DOB :</Lable><Data>{contact.dob}</Data></Column>
            <Column> <Lable>Address :</Lable><Data>{contact.address}</Data></Column>
            <Column> <Lable>Password :</Lable><Data>********</Data></Column>
            </LableContainer>
        </WrapContainer>
        </>
    )
}

export default ViewAccount
