import React, { useEffect, useRef } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import ChannelMessage, { Mention }from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return ( 
    <Container>
      <Messages>
        <ChannelMessage 
          author="Paulo_K"
          date="11/11/2021"
          content="Vou jogar 20 no Macaco"
        />

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
          author="Paulo_K"
          date="11/11/2021"
          content="Vou jogar 20 no Macaco"
        />
        ))}

        <ChannelMessage 
          author="Gabriel D. Roger"
          date="11/11/2021"
          content={
            <>
              <Mention>@Paulo_K</Mention> Dei Bastante o cu hoje, Muito bom, amanhã vou dar dnv
            </>
          }
          hasMention
          isBot
        />
      </Messages>
      
      <InputWrapper>
        <Input placeholder="Conversem em #chat-livre" />
        <InputIcon />
      </InputWrapper>
      
    </Container> 
 
)}
export default ChannelData;
