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
          content="a Resposta é 42"
        />

        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
          author="Paulo_K"
          date="11/11/2021"
          content="a Resposta é 42"
        />
        ))}

        <ChannelMessage 
          author="Gabriel D. Roger"
          date="11/11/2021"
          content={
            <>
              <Mention>@Paulo_K</Mention> A interface está Ótima Parabéns
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
