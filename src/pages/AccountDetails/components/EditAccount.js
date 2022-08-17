import React from 'react'
import { DeleteButton, Input, EditButton, Container, Title, RWrap, LWrap, WrapContainer, LableContainer, Lable, Select, Data, Column, LableContainer2, ViewLink, LinkWrap } from '../AccountDetailsStyle'
import { BsFillCloudUploadFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
function EditAccount({ editdAccountData, editAccountChange, handleCancelClick, handleUpdatelClick }) {
    return (
        <>
            <WrapContainer>
                <RWrap>
                    <Title>Account details</Title>
                </RWrap>
                <LWrap>
                    <EditButton onClick={handleCancelClick}><FaRegEdit fontSize="1.5rem" />Cancel</EditButton>
                    <DeleteButton onClick={(e) => handleUpdatelClick(e)}><BsFillCloudUploadFill fontSize="1.5rem" />Update account</DeleteButton>
                </LWrap>
            </WrapContainer>
            <WrapContainer>
                <LableContainer>
                    <Column>
                        <Lable >First Name :</Lable>
                        <Input type="text" name="firstName" required placeholder="Enter first Name..." value={editdAccountData.firstName} onChange={editAccountChange} />
                    </Column>
                    <Column>
                        <Lable >Last Name :</Lable>
                        <Input type="text" name="lastName" required placeholder="Enter last Name..." value={editdAccountData.lastName} onChange={editAccountChange} />
                    </Column>
                    <Column>
                        <Lable>Phone :</Lable>
                        <Input type="text" name="phone" required placeholder="Enter phone..." value={editdAccountData.phone} onChange={editAccountChange} />
                    </Column>
                    <Column>
                        <Lable>Email :</Lable>
                        <Input type="email" name="email" required placeholder="Enter email..." value={editdAccountData.email} onChange={editAccountChange} />
                    </Column>
                    <Column>
                        <Lable>Gender :</Lable>
                        <Select type="text" name="gender" required value={editdAccountData.gender} onChange={editAccountChange}>
                            <option value="">select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Select>
                    </Column>
                    <Column>
                        <Lable>DOB :</Lable>
                        <Input type="date" name="dob" required placeholder="Enter DOB..." value={editdAccountData.dob} onChange={editAccountChange} />
                    </Column>
                    <Column>
                        <Lable>Address :</Lable>
                        <Input type="text" name="address" required placeholder="Enter address..." value={editdAccountData.address} onChange={editAccountChange} />
                    </Column>
                    <Column>
                        <Lable>Old Password :</Lable>
                        <Input type="password" name="Password" required placeholder="Enter Password..." value={editdAccountData.Password} onChange={editAccountChange} />
                    </Column>
                    <Column>
                        <Lable>New Password :</Lable>
                        <Input type="password" name="NewPassword" required placeholder="Enter New Password..." value={editdAccountData.NewPassword} onChange={editAccountChange} />
                    </Column>
                    <Column>
                        <Lable>New Password confirm:</Lable>
                        <Input type="password" name="NewPassword2" required placeholder="Enter New Password confirm..." value={editdAccountData.NewPassword2} onChange={editAccountChange} />
                    </Column>
                </LableContainer>
            </WrapContainer>
        </>
    )
}

export default EditAccount
