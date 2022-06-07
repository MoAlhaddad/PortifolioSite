import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
       <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:702-849-3627">702-849-3627</LinkItem>
       </LinkColumn>
       <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:mohamadalhaddad25@gmail.com">Contact</LinkItem>
       </LinkColumn>
      </LinkList>
    <SocialIconsContainer>
    <SocialIcons href="https://github.com/MoAlhaddad"></SocialIcons>
        <AiFillGithub size="3rem" />
        <SocialIcons href="https://www.linkedin.com/in/mohamad-alhaddad-002a30161/"></SocialIcons>
        <AiFillLinkedin size="3rem" />

    </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
