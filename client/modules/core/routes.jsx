import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import XpercentY from './components/x_percent_y.jsx';
import YpercentX from './components/y_percent_x.jsx';
import Ypercent from './components/y_percent.jsx';
import Pincrease from './components/p_increase.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'discount',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/XpercentY', {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<XpercentY />)
      });
    }
  });

  FlowRouter.route('/YpercentX', {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<YpercentX />)
      });
    }
  });

  FlowRouter.route('/Ypercent', {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Ypercent />)
      });
    }
  });

  FlowRouter.route('/Pincrease', {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Pincrease />)
      });
    }
  });
}
