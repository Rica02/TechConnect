import React from "react";

import {
    Container,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormWrap,
    Icon,
    Form,
    FormLabel,
    FormInputText
} from './AddNewsStyle';

function AddNews() {
    return (
        <Container>
            <FormWrap>
                <Icon to="/"></Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Post News Page</FormH1>
                        <FormLabel htmlFor='for'>Title</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Date</FormLabel>
                        <FormInput type='date' required />
                        <FormLabel htmlFor='for'>Text</FormLabel>
                        <FormInputText type='text' required />
                        <FormButton type='submitSignup'>Submit</FormButton>
                    </Form>

                </FormContent>

            </FormWrap>
        </Container>
    )
}

export default AddNews
