import React from 'react'
import { Container, ContainerWrap, IconWrap, Img, ImgText, ItemWrap, TextWrap, TitleH1 } from './WhatDoWeDoStyle';
import { IoIosHome } from "react-icons/io";
import { HiUserGroup } from "react-icons/hi";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { RiComputerFill } from "react-icons/ri";

function WhatDoWeDo({ HomeContent, GroupContent, ComputerContent, EmojContent }) {
    return (
        <>
            <Container>
                <ContainerWrap>
                    <TitleH1>What do We DO</TitleH1>
                </ContainerWrap>
                <ContainerWrap>
                    
                    <ItemWrap>
                        <IconWrap>
                            <HiUserGroup color='white' fontSize="2.5em" />
                        </IconWrap>
                        <TextWrap>
                            <ImgText>{GroupContent}</ImgText>
                        </TextWrap>
                    </ItemWrap>
                    <ItemWrap>
                        <IconWrap>
                            <RiComputerFill color='white' fontSize="2.5em" />
                        </IconWrap>
                        <TextWrap>
                            <ImgText>{ComputerContent}</ImgText>
                        </TextWrap>
                    </ItemWrap>

                </ContainerWrap>
                <ContainerWrap>
                    <ItemWrap>
                        <IconWrap>
                            <IoIosHome color='white' fontSize="2.5em" />
                        </IconWrap>
                        <TextWrap>
                            <ImgText>{HomeContent}</ImgText>
                        </TextWrap>
                    </ItemWrap>
                    <ItemWrap>
                        <IconWrap>
                            <BsFillEmojiSmileFill color='white' fontSize="2.5em" />
                        </IconWrap>
                        <TextWrap>
                            <ImgText>{EmojContent}</ImgText>
                        </TextWrap>
                    </ItemWrap>
                </ContainerWrap>

            </Container>
        </>
    );
}

export default WhatDoWeDo;
