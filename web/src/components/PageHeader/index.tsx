import React from 'react'
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

interface PageHeaderProps { 
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div id="page-teacher-list" className="container">
    <header className="page-header">
      <div className="top-bar-container">
        <Link to='/'>
          <img src={backIcon} alt="botão voltar" />
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>
      
      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
      
    </header>
  </div>
  )
}

export default PageHeader