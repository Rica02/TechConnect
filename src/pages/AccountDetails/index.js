import React, { useState } from 'react'
import { DeleteButton, EditButton, Container, Title, RWrap, LWrap, WrapContainer, LableContainer, Lable, Divider, Data, Column, LableContainer2,ViewLink,LinkWrap } from './AccountDetailsStyle'
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
function AccountDetails() {

  const AccountData = [
    {
      id: '123',
      FirstName: "FirstName data",
      LastName: "LastName data",
      Email: "Online data",
      Gender: "x",
      DOB: "dd/mm/yyyy",
      Address: "#"
    }
  ];
  const PaymentData = [
    {
      PaymentMethod: "Visa ending in 0000",
      Expirydate: "mm/yy",
    }
  ];
  const [contacts, setContacts] = useState(AccountData)
  const [payments, setPayments] = useState(PaymentData)
  console.log(contacts)
  return (
    <>
      <Container>
        <WrapContainer>
          <RWrap>
            <Title>Account details</Title>
          </RWrap>
          <LWrap>
            <EditButton><FaRegEdit fontSize="1.5rem"/>Edit account</EditButton>
            <DeleteButton><ImBin fontSize="1.5rem"/>Delete account</DeleteButton>
          </LWrap>
        </WrapContainer>
        <WrapContainer>
          <LableContainer>
            {contacts.map((contact) => (<>
              <Column><Lable >First Name :</Lable><Data >{contact.FirstName}</Data></Column>
              <Column><Lable >Last Name :</Lable><Data>{contact.LastName}</Data></Column>
              <Column> <Lable>Email :</Lable><Data>{contact.Email}</Data></Column>
              <Column> <Lable>Gender :</Lable><Data>{contact.Gender}</Data></Column>
              <Column> <Lable>DOB :</Lable><Data>{contact.DOB}</Data></Column>
              <Column> <Lable>Address :</Lable><Data>{contact.Address}</Data></Column>
              <Column> <Lable>Address :</Lable><Data>{contact.Address}</Data></Column>
              <Column> <Lable>Password :</Lable><Data>{contact.Password}</Data></Column>
            </>))}
          </LableContainer>
        </WrapContainer>
      </Container>
      <Divider><label></label></Divider>
      <Container>
        <WrapContainer>
          <RWrap>
            <Title>Payment details</Title>
          </RWrap>
          <LWrap>
            <EditButton><FaRegEdit fontSize="1.5rem"/>Edit card details</EditButton>
            <DeleteButton><ImBin fontSize="1.5rem"/>Delete card details</DeleteButton>
          </LWrap>
        </WrapContainer>
        <WrapContainer >
          <LableContainer2 >
            {payments.map((payment) => (<>
              <Column><Lable >Payment Method:</Lable><Data >{payment.PaymentMethod}</Data></Column>
              <Column><Lable >Expiry date:</Lable><Data>{payment.Expirydate}</Data></Column>
              <LinkWrap><ViewLink to="/accountDetails">View invoices of past transactions</ViewLink></LinkWrap>
            </>))}
          </LableContainer2>
        </WrapContainer>
      </Container>
    </>
  )
}

export default AccountDetails
