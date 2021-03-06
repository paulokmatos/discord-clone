import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
  <User>
    <Avatar className={isBot ? 'bot' : ''}/>
    <strong>{nickname}</strong>

    {isBot && <span>Bot</span>} 

  </User>
  )
}

const UserList: React.FC = () => {
  return ( 
    <Container>
      <Role> Disponível - 1 </Role>
      <UserRow nickname="Paulo_K" />

      <Role> Bots - 1</Role>
      <UserRow nickname="Gabriel D. Roger da Fonseca Faria Lima " isBot /> 

      <Role> Offiline - 10</Role>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
      <UserRow nickname="Fulano de Tal"/>
    </Container> 
 
)}

export default UserList;
