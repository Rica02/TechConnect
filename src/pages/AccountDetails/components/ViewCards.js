import React, { useState } from 'react'
import { DeleteButton, EditButton, Container, Title, RWrap, LWrap, WrapContainer, LableContainer, Lable, Divider, Data, Column, LableContainer2, ViewLink, LinkWrap } from './AccountDetailsStyle'
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";


function ViewCards({ payment ,cardEditClick}) {
  return (
    <>
      <WrapContainer>
        <RWrap>
          <Title>Payment details</Title>
        </RWrap>
        <LWrap>
          <EditButton onClick={(e)=>cardEditClick(e,contact)}><FaRegEdit fontSize="1.5rem" />Edit card details</EditButton>
          <DeleteButton><ImBin fontSize="1.5rem" />Delete card details</DeleteButton>
        </LWrap>
      </WrapContainer>
      <WrapContainer >
        <LableContainer2 >
          <Column><Lable >Payment Method:</Lable><Data >{payment.PaymentMethod}</Data></Column>
          <Column><Lable >Expiry date:</Lable><Data>{payment.Expirydate}</Data></Column>
          <LinkWrap><ViewLink to="/accountDetails">View invoices of past transactions</ViewLink></LinkWrap>
        </LableContainer2>
      </WrapContainer>
    </>
  )
}

export default ViewCards
