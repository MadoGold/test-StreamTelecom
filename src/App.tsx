import { useState } from 'react';

import users from './data/users.json';

import { UsersListView } from './components/UsersListView';
import { UsersTilesView } from './components/UsersTilesView';
import { Button } from './components/Button';

import styles from './App.module.css';

export const App = () => {
  const [view, setView] = useState<'list' | 'tiles'>('list');

  return (
    <div className={styles.app}>
      <div className="container">
        <h1 className={styles.title}>Users</h1>
        <div className={styles.controls}>
          <Button onClick={() => setView('list')}>List View</Button>
          <Button className={styles.redButton} onClick={() => setView('tiles')}>
            Tiles View
          </Button>
        </div>
        {view === 'list' ? (
          <UsersListView users={users} />
        ) : (
          <UsersTilesView users={users} />
        )}
      </div>
    </div>
  );
};
