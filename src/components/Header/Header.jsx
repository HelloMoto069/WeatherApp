import React, { useState, useEffect } from 'react';
import { Logo } from './Logo/Logo';
import {
  Section,
  MenuBtn,
  BlockClock,
  CurrentTime,
  CurrentDate,
} from './Header.styled';
import { MenuBurgerImg } from 'icons/IconComponent.jsx';

export const Header = ({ isOpen, setIsOpen }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const currentDate = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /*clearInterval() гарантирует, что интервал будет остановлен, когда компонент больше не используется. Это важно для предотвращения утечек памяти и избегания ненужных вызовов функции, когда компонент больше не отображается на странице.

В коде clearInterval(intervalId) выполняется при размонтировании компонента, чтобы корректно очистить ресурсы, связанные с интервалом. 😊*/

  return (
    <Section>
      <MenuBtn
        type="button"
        aria-label="burger-menu"
        title="Menu"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <MenuBurgerImg />
      </MenuBtn>
      <BlockClock>
        <CurrentTime>{`${currentTime.toLocaleTimeString(
          'en-US'
        )}`}</CurrentTime>
        <CurrentDate>{`${formattedDate.toLocaleString('en-US')}`}</CurrentDate>
      </BlockClock>
      <Logo />
    </Section>
  );
};
