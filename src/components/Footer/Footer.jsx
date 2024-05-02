import React from 'react';
import {
  Section,
  ArrowUpBtn,
  LinkList,
  Item,
  GitLink,
  LinkedinLink,
  TelegramLink,
  Copyright,
} from './Footer.styled';
import { Logo } from '../Header/Logo/Logo';
import {
  ArrowUpImg,
  GitImg,
  LinkedinImg,
  TelegramImg,
} from '../../icons/IconComponent';

export const Footer = () => {
  return (
    <Section>
      <Logo />
        <LinkList>
          <Item>
            <GitLink
              href="https://github.com/HelloMoto069"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitImg />
            </GitLink>
          </Item>
          <Item>
            <LinkedinLink
              href="https://www.linkedin.com/in/hellomoto69/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <LinkedinImg />
            </LinkedinLink>
          </Item>
        </LinkList>
      <ArrowUpBtn href="#LocationWeather" title="Top of page">
        <ArrowUpImg />
      </ArrowUpBtn>
    </Section>
  );
};
