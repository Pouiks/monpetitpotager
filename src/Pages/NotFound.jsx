import React  from 'react';
import H1 from '../Components/H1'
import LinkButton from '../Components/LinkButton'
import colors from '../Config/theme/colors'
import styled from 'styled-components'
import pxToRem from '../Services/pxToRem';
import Text from '../Components/Text';
import ImgErr from '../Components/ImgErr';
import { breakpoint_mobile } from '../Config/theme/breakpoint_mobile';

const Body = styled.div`
width: 100%;
height: 100%;
`
const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;

@media screen and (max-width:${breakpoint_mobile.tabletM}){
    display:block;
    
}

`
const ChildContainer = styled.div`
margin: ${pxToRem(10)};
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
justify-content: center;
padding: ${pxToRem(10)};
`

const NotFound = () => {

    return (
            <Body>
                <Container>
                    <ChildContainer>
                        <H1
                            content="404"
                            color={`${colors.secondary}`}
                            fontSize={`${pxToRem(140)}`}
                            margin="0"/>
                        <Text
                            content="La page demandée n'existe pas"/>
                        <LinkButton
                            link="/"
                            content="Retour à l'accueil"/>
                    </ChildContainer>
                    <ChildContainer>
                        <ImgErr
                            src="images/basket-full-vegetables.jpg"
                            alt="panier de légumes"
                        />
                    </ChildContainer>
                </Container>
            </Body>
    )
}

export default NotFound;