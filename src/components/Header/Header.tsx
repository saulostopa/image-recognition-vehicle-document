import React from 'react'

import { Button } from '../Button/Button'
import './header.css'
import logo from '../../image/CoopLogoSmall.svg'; // with import

export interface HeaderProps {
  user?: {}
}

export const Header: React.FC<HeaderProps> = ({
  user
}) => (
  <header>
    <div className='wrapper'>
      <div>
          <img src={logo} />
          <h1>COOP</h1>
      </div>
    </div>
  </header>
)