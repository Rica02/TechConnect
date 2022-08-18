import React ,{useState}from 'react'
import { Container, RightContainer, Wrap, Box, Select, LeftContainer, Input, GridWrap, H5, FlexWrap, Lable, Textarea, Button } from './BookLessonStyle'
import {useDB} from '../../ServerContext';
function BookLesson() {
    const{userInf,BookLessonToDB}=useDB();
    const [editdData, seteEitdData] = useState({
        date: "",
        time: "",
        type: "",
        detail: "",
        receive:"",
      })
      const editChange = (e) => {
        e.preventDefault();
        var value = e.target.value
        seteEitdData({ ...editdData, [e.target.name]: value })
      }
      const handleClick = (e) => {
        e.preventDefault();
        BookLessonToDB(editdData)
      };
    return (

        <Container>
            <RightContainer>
                <Wrap>
                    <GridWrap>
                        <H5>Date</H5>
                        <Input type="date" name='date' onChange={editChange}/>
                    </GridWrap>
                    <GridWrap>
                        <H5>Time</H5>
                        <Input type="time" name='time' onChange={editChange}/>
                    </GridWrap>
                    <GridWrap>
                        <H5>Where do you want to have your lesson?</H5>
                        <Select name='type' onChange={editChange}>
                            <option value=""></option>
                            <option value="house">My house</option>
                            <option value="Online">Online (Video Call)</option>
                        </Select>
                    </GridWrap>
                    <GridWrap></GridWrap>
                    <GridWrap>
                        <H5>What would you like learn?</H5>
                        <Textarea type="textarea" name='detail' onChange={editChange}/>
                        <H5>Don't worry, we will contact you to confirm your lesson detail.</H5>
                    </GridWrap>
                    <GridWrap></GridWrap>
                    <GridWrap>
                        <H5>Where do you want to have your lesson?</H5>
                        <Select name='receive' onChange={editChange}>
                            <option value=""></option>
                            <option value="Email">By Email</option>
                            <option value="Phone">By Phone</option>
                        </Select>
                    </GridWrap>
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

export default BookLesson
