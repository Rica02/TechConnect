import React from 'react';
import { useDB } from '../../ServerContext';
import moment from "moment";
import { Container, ContainerWrap, Title, Wrap, SubTitle,Data,Column } from './AllocationStyle';
import { FaGripLines } from 'react-icons/fa';
function Allocation() {
    const { getBookLesson, getChangeAvailability } = useDB();
    console.log(getBookLesson)
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
                                <Column><SubTitle>Date : </SubTitle><Data>{moment(GBL.date).format("MMM Do YY") }</Data></Column>
                                <Column><SubTitle>Time : </SubTitle><Data>{GBL.time}</Data></Column>
                                <Column><SubTitle>Type : </SubTitle><Data>{GBL.type}</Data></Column>
                                <Column><SubTitle>User NO. : </SubTitle><Data>{GBL.uid}</Data></Column>
                                <Column> <SubTitle>Receive : </SubTitle><Data>{GBL.receive}</Data></Column>
                                <Column><SubTitle>Detial : </SubTitle><Data>{GBL.detial}</Data></Column>
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
                                <Column><SubTitle>Change Date : </SubTitle><Data>{moment(GCA.aDate).format("MMM Do YY") }</Data></Column>
                                <Column><SubTitle>Change Time : </SubTitle><Data>{GCA.aTime}</Data></Column>
                                <Column><SubTitle>Tutor NO. : </SubTitle><Data>{GCA.tid}</Data></Column>
                                <Column><SubTitle>Detial : </SubTitle><Data>{GCA.detial}</Data></Column>
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
