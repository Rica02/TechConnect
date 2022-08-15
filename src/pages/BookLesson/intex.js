import React from 'react'
import { Container, RightContainer, Wrap, Box, PhoneLink, LeftContainer, Input, GridWrap, H5, FlexWrap, Lable, Textarea, Button } from './BookLessonStyle'

function BookLesson() {
    return (

        <Container>
            <RightContainer>
                <Wrap>
                    <GridWrap>
                        <H5>Date</H5>
                        <Input type="date"></Input>
                    </GridWrap>
                    <GridWrap>
                        <H5>Time</H5>
                        <Input type="time"></Input>
                    </GridWrap>
                    <GridWrap>
                        <H5>Where do you want to have your lesson?</H5>
                        <FlexWrap>
                            <Input type="checkbox" />
                            <Lable> My house</Lable>
                            <Input type="checkbox" />
                            <Lable> Online (Video Call)</Lable>
                        </FlexWrap>
                    </GridWrap>
                    <GridWrap></GridWrap>
                    <GridWrap>
                        <H5>What would you like learn?</H5>
                            <Textarea type="textarea" />
                            <H5>Don't worry, we will contact you to confirm your lesson detail.</H5>
                    </GridWrap>
                    <GridWrap></GridWrap>
                    <GridWrap>
                        <H5>Where do you want to have your lesson?</H5>
                        <FlexWrap>
                            <Input type="checkbox" />
                            <Lable> By Email</Lable>
                            <Input type="checkbox" />
                            <Lable> By Phone</Lable>
                        </FlexWrap>
                    </GridWrap>
                    <Button>CONFIRM</Button>
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
