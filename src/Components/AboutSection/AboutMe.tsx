import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const AboutMe = () => {
    return (
        <Container inverted text textAlign={'center'}>
             <Header as='h2'>About Me</Header>
            <p>
                I'm a software engineer with a degree in CS and a cuple of years of experience under my belt.
            </p>
        </Container>
    );
}

export default AboutMe;