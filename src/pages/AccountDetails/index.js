import React, { useState, Fragment } from 'react'
import { DeleteButton, EditButton, Container, Title, RWrap, LWrap, WrapContainer, LableContainer, Lable, Divider, Data, Column, LableContainer2, ViewLink, LinkWrap, EditCardWrap } from './AccountDetailsStyle'
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import { useDB } from '../../ServerContext';
import ViewAccount from './components/ViewAccount';
import EditAccount from './components/EditAccount';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import EditCrads from './components/EditCrads';
import { useNavigate } from "react-router-dom";
function AccountDetails() {
  var navigate = useNavigate()
  const { userInf ,UpdateUser,DeleteUser} = useDB();
  const [editdContactId, setEditContactId] = useState(null);
  const [editCard, seteditCard] = useState(false);
  //Edit Account buttion Click
  const stripePromise = loadStripe("pk_test_51LXPSCGr0Ica2zDT8QjrYyebIyWilHxB9kVafjZD2s09q1Gx1UO5ZzIDj53EBVskto44YBrHhGQ6p90PN0oxa2FR00Pz0gxFic");
  const [editdAccountData, seteEitdAccountData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    Password:"",
    NewPassword:"",
    NewPassword2:"",
  })
  const accountEditClick = (e, contact) => {
    e.preventDefault();
    console.log('click')
    console.log('userInf.id', userInf.id)
    setEditContactId(contact.id)
    const formValues = {
      id: contact.id,
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      phone: contact.phone,
      gender: contact.gender,
      dob: contact.dob,
      address: contact.address,
    };
    seteEitdAccountData(formValues);
  }
  const editAccountChange = (e) => {
    e.preventDefault();
    var value = e.target.value
    seteEitdAccountData({ ...editdAccountData, [e.target.name]: value })
  }
  const handleDeletelClick = (e,id) => {
    e.preventDefault();
    DeleteUser(id);
    navigate("/")
  };


  const handleCancelClick = () => {
    setEditContactId(null);
  };

  // const[notNull,setNotNull]=useState();
  // function NotNull(obj){
  //   {obj!=null?setNotNull(true):setNotNull(false)}
  //   return notNull;
  // }

  const handleUpdatelClick= async (e)=>{
    e.preventDefault();
    UpdateUser(editdAccountData);
  };
  const cardEditClick = (e) => {
    e.preventDefault();
    seteditCard(true);
  }
  const cardCancelClick = (e) => {
    e.preventDefault();
    seteditCard(false);
  }
  const PaymentData = [
    {
      PaymentMethod: "Visa ending in 0000",
      Expirydate: "mm/yy",
    }
  ];

  const [payments, setPayments] = useState(PaymentData)

  return (
    <>
      <Container>
        {React.Children.toArray(
          userInf.map((contact) => {
            return <>
            <Fragment>
              {editdContactId === contact.id ? <><EditAccount editdAccountData={editdAccountData} editAccountChange={editAccountChange} handleCancelClick={handleCancelClick} handleUpdatelClick={handleUpdatelClick}/></> :
                <ViewAccount contact={contact} accountEditClick={accountEditClick} handleDeletelClick={handleDeletelClick}/>}
            </Fragment>
            </>
          })
        )}
      </Container>
      <Divider><label></label></Divider>
      <Container>
        <WrapContainer>
          <RWrap>
            <Title>Payment details</Title>
          </RWrap>
          <LWrap>
            <EditButton onClick={(e) => cardEditClick(e)}><FaRegEdit fontSize="1.5rem" />Edit card details</EditButton>
            <DeleteButton><ImBin fontSize="1.5rem" />Delete card details</DeleteButton>
          </LWrap>
        </WrapContainer>
        <WrapContainer >
          <LableContainer2 >
            {editCard ? <>
              <EditCardWrap>
                <Elements stripe={stripePromise}>
                <EditCrads />
                </Elements>
                <EditButton onClick={cardCancelClick}><FaRegEdit fontSize="1.5rem" />Cancel</EditButton>
                </EditCardWrap>
            </> : <>
              {React.Children.toArray(
                payments.map((payment) => (<>
                  <Column><Lable >Payment Method:</Lable><Data >{payment.PaymentMethod}</Data></Column>
                  <Column><Lable >Expiry date:</Lable><Data>{payment.Expirydate}</Data></Column>
                  <LinkWrap><ViewLink to="/accountDetails">View invoices of past transactions</ViewLink></LinkWrap>
                </>))
              )}</>}

          </LableContainer2>
        </WrapContainer>
      </Container>
    </>
  )
}

export default AccountDetails
