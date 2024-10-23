'use client';

import { observer } from 'mobx-react-lite';

import Home from '@/components/Home';

const Main = observer(() => {
  return <Home />;
});

export default Main;
