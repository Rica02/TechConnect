import React from 'react'
import { Container, RightContainer, Wrap, Box, PhoneLink, LeftContainer, Input, GridWrap, H5, FlexWrap, Lable, Textarea, Button } from './ChangeAvailabilityStyle'

function ChangeAvailability() {
    return (

        <Container>
            <RightContainer>
                <Wrap>
                    <GridWrap>
                        <H5>Original date</H5>
                        <Input type="date"></Input>
                    </GridWrap>
                    <GridWrap>
                        <H5>Original Time</H5>
                        <Input type="time"></Input>
                    </GridWrap>
                    <GridWrap>
                        <H5>Availability date</H5>
                        <Input type="date"></Input>
                    </GridWrap>
                    <GridWrap>
                        <H5>Availability Time</H5>
                        <Input type="time"></Input>
                    </GridWrap>
                    <GridWrap>
                        <H5>have those course reference numbers?</H5>
                            <Textarea type="textarea" />
                    </GridWrap>
                    <GridWrap></GridWrap>
                    <GridWrap></GridWrap>
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

export default ChangeAvailability
