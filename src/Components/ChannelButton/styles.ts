import styled from 'styled-components';
import { Settings, PersonAdd } from 'styled-icons/material'
import { Hashtag } from 'styled-icons/heroicons-outline'


export const Container = styled.button`
  display: flex;

  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 5px 3px;
  
  border-radius: 5px;
  background-color: transparent;

  transition: background-color .2s;

  > div  {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary)
  }

  &.active, &:hover {
    background-color: var(--quinary);
    
    > div span {
      color: var(--white);
    }
  } 

`;

export const HastagIcon = styled(Hashtag)`
  color: var(--gray);
  width: 20px;
  height: 20px;
`;

export const InviteIcon = styled(PersonAdd)`
  color: var(--gray);
  width: 16px;
  height: 16px;
  transition: color .2s;

  &:hover {
    color: var(--white)
  }
`;

export const SettingsIcon = styled(Settings)`
  color: var(--gray);
  width: 16px;
  height: 16px;
  margin-left: 4px;
  transition: color .2s;

  &:hover {
    color: var(--white)
  }
`;
