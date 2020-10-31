import React from "react";

/* Importar los componentes */
import Logo from '../globals/logo'
import SearchBar from './search-bar'
import Icon from '../globals/icon'
import Login from './login'


/* Importar los iconos */
import logo from '../../icons/iconfinder_youtube_294703.png'
import videoCall from '../../icons/iconfinder_ic_video_call_48px_3669144.png'
import viewModule from '../../icons/iconfinder_ic_view_module_48px_3669149.png'
import viewAlerts from '../../icons/iconfinder_icon-ios7-bell_211694.png'

export default function Navbar() {
  return (
    <div className="navbar">
      <Logo logo={ logo } />
      <SearchBar />
      <Icon iconUrl={videoCall} />
      <Icon iconUrl={viewModule} />
      <Icon iconUrl={viewAlerts} />
      <Login />

    </div>
  )
}
