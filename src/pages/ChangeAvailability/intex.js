import React,{useState} from 'react'
import { Container, RightContainer, Wrap, Box, Select, LeftContainer, Input, GridWrap, H5, FlexWrap, Lable, Textarea, Button } from './ChangeAvailabilityStyle'
import { useDB } from '../../ServerContext';
import moment from "moment";
function ChangeAvailability() {
    const { getMeetings ,ChangeAvailabilityToDB} = useDB();
    const [editdData, seteEitdData] = useState({
        meetingId: "",
        aDate: "",
        aTime: "",
        detail: "",
      })
      const editChange = (e) => {
        e.preventDefault();
        var value = e.target.value
        seteEitdData({ ...editdData, [e.target.name]: value })
      }
      const handleClick = (e) => {
        e.preventDefault();
        ChangeAvailabilityToDB(editdData)
      };
    return (

        <Container>
            <RightContainer>
                <Wrap>
                    <GridWrap>
                        <H5>Original meeting</H5>
                        <Select type="text" name="meetingId"  onChange={editChange}>
                            {React.Children.toArray(
                               getMeetings.map((meeting) => {
                                    return <>
                                        <option value={meeting.meetingId} >meeting Id :{meeting.meetingId} , startTime :{moment(meeting.startTime).format('MMMM Do YYYY, hh:mm')}</option>
                                    </>
                                })
                            )}

                        </Select>
                    </GridWrap>
                    <GridWrap></GridWrap>
                    <GridWrap>
                        <H5>Availability date</H5>
                        <Input type="date" name='aDate'  onChange={editChange}/>
                    </GridWrap>
                    <GridWrap>
                        <H5>Availability Time</H5>
                        <Input type="time" name='aTime'  onChange={editChange}/>
                    </GridWrap>
                    <GridWrap>
                        <H5>Do you want to say something?</H5>
                        <Textarea type="textarea" name='detail'  onChange={editChange}/>
                    </GridWrap>
                    <GridWrap></GridWrap>
                    <GridWrap></GridWrap>
                    <Button onClick={(e) => handleClick(e)}>CONFIRM</Button>
                </Wrap>
            </RightContainer>
            <LeftContainer>
                <Wrap>
                    <Box>
                        Do you wnat to speak to someone? Call us at 000-000-0000.
                    </Box>

                </Wrap>
                <Wrap>
                    <Box>
                        (Other info here)
                    </Box>
                </Wrap>

            </LeftContainer>
        </Container>

    )
}

export default ChangeAvailability
