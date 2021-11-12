import React from 'react';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src="https://cdn-icons.flaticon.com/png/512/4922/premium/4922972.png?token=exp=1636672596~hmac=8dd55b69bbb8eb8f426bc7d1c05f9134" alt="Rocketseat" />}
    </Button>
  );
};

export default ServerButton;