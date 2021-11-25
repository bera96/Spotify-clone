import {Menu} from '@headlessui/react'
import { Icon } from 'Icons';

import React from 'react';

function Auth() {

    const user = {
        name:'Bera Yılmazyurt',
        avatar:'https://avatars.githubusercontent.com/u/63601569?v=4'
    }
    return (
        <Menu as="nav" className={"relative"}>
        {({open})=>(<>
            <Menu.Button className={`flex items-center h-8 pr-2 rounded-3xl ${open?'bg-active':'bg-black'} hover:bg-active`}>
              <img className="rounded-full w-8 h-8 p-0.5 mr-2" src={user.avatar}/>
              <span className="text-sm font-semibold mr-2">{user.name}</span>
              <Icon size={16} name="downdirıcon" />
          </Menu.Button>
          <Menu.Items className={"absolute top-full right-0 w-48 bg-active rounded translate-y-2"}>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && 'bg-blue-500'}`}
                  href="/account-settings"
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
          </Menu.Items></>)}
        </Menu>
      )
}

export default Auth;