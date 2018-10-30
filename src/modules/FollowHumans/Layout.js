import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import loadReducer from '../../store/loadReducer';
import reducer from './store/reducer';
import Content from '../../assembly/Content/index';
import Sider from '../../assembly/Sider/index';
import Index from './Index/index';

type OptionItem = {
  id: string,
  name: string,
  href: string,
  children: Array<OptionItem>
};

const options: Array<OptionItem> = [
  {
    id: 'followHuman_list',
    name: '关注管理',
    href: '/FollowHumans/List'
  }
];

@loadReducer(reducer)
class ModuleLayout extends Component{
  render(): React.ChildrenArray<React.Element>{
    return [
      <Sider key="sider" options={ options } />,
      <Content key="content">
        <Switch>
          <Route path="/FollowHumans" component={ Index } exact={ true } />
          <Route path="/FollowHumans/List" component={ Index } exact={ true } />
        </Switch>
      </Content>
    ];
  }
}

export default ModuleLayout;