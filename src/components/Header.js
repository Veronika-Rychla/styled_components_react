import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="Logo" />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Built the community your fans will love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get started for Free
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="Mock up" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
