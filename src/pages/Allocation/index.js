import React from 'react';
import { useDB } from '../../ServerContext';
import moment from "moment";
import { Container, ContainerWrap, Title, Wrap, SubTitle, Data, Column, Select } from './AllocationStyle';
import { FaGripLines } from 'react-icons/fa';
function Allocation() {
    const { getBookLesson, getChangeAvailability, getStudent, getTutor } = useDB();
    console.log(getTutor)
    return (
        <>
            <Container>
                <ContainerWrap>
                    <Title>Book Lesson</Title>
                    {React.Children.toArray(
                        getBookLesson.map((GBL) => {
                            return <>
                                <Wrap>
                                    <Column><SubTitle>Booking NO. : </SubTitle><Data>{GBL.idbookLesson}</Data></Column>
                                    <Column><SubTitle>Date : </SubTitle><Data>{moment(GBL.date).format("MMM Do YY")}</Data></Column>
                                    <Column><SubTitle>Time : </SubTitle><Data>{GBL.time}</Data></Column>
                                    <Column><SubTitle>Type : </SubTitle><Data>{GBL.type}</Data></Column>
                                    <Column><SubTitle>User NO. : </SubTitle><Data>{GBL.uid}</Data></Column>
                                    <Column> <SubTitle>Receive : </SubTitle><Data>{GBL.receive}</Data></Column>
                                    <Column><SubTitle>Detial : </SubTitle><Data>{GBL.detial}</Data></Column>
                                    <Column>
                                    <Select type="text">
                                        {React.Children.toArray(
                                            getTutor.map((Tutor) => {
                                                return <>
                                                    <option value={Tutor.id} >Name :{Tutor.lastName} ,Phone :{Tutor.phone} </option>
                                                </>
                                            })
                                        )}
                                    </Select>
                                    <button>Allocation</button>
                                    </Column>
                                </Wrap>
                            </>
                        })
                    )}

                </ContainerWrap>

                <ContainerWrap>
                    <Title>Change Availability</Title>
                    {React.Children.toArray(
                        getChangeAvailability.map((GCA) => {
                            return <>
                                <Wrap>
                                    <Column><SubTitle>Meeting Id : </SubTitle><Data>{GCA.meetingId}</Data></Column>
                                    <Column><SubTitle>Change Date : </SubTitle><Data>{moment(GCA.aDate).format("MMM Do YY")}</Data></Column>
                                    <Column><SubTitle>Change Time : </SubTitle><Data>{GCA.aTime}</Data></Column>
                                    <Column><SubTitle>Tutor NO. : </SubTitle><Data>{GCA.tid}</Data></Column>
                                    <Column><SubTitle>Detial : </SubTitle><Data>{GCA.detial}</Data></Column>
                                    <Column>
                                    <Select type="text">
                                        {React.Children.toArray(
                                            getTutor.map((Tutor) => {
                                                return <>
                                                    <option value={Tutor.id} >Name :{Tutor.lastName} ,Phone :{Tutor.phone} </option>
                                                </>
                                            })
                                        )}
                                    </Select>
                                    <button>Change Tutor</button>
                                    </Column>
                                    <Column>
                                    <Select type="text">
                                        {React.Children.toArray(
                                            getStudent.map((trainees) => {
                                                return <>
                                                    <option value={trainees.id} >Name :{trainees.lastName} ,Phone :{trainees.phone} </option>
                                                </>
                                            })
                                        )}
                                    </Select>
                                    <button>Notify trainees</button>
                                    </Column>
                                    
                                </Wrap>
                            </>
                        })
                    )}
                </ContainerWrap>
                <Wrap></Wrap>
            </Container>
        </>
    )
}

export default Allocation
