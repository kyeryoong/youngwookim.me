'use client';

import { observer } from 'mobx-react-lite';

import { NewHome } from '@/components/NewHome';

const Main = observer(() => {
  return <NewHome />;
});

export default Main;
