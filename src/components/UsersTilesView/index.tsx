import { User } from '../../types/user';

import styles from './index.module.css';

type UsersTilesViewProps = {
  users: User[];
};

export const UsersTilesView = ({ users }: UsersTilesViewProps) => {
  return (
    <div className={styles.tiles}>
      {users.map((user) => (
        <div className={styles.item} key={user.id}>
          <div>
            {user.firstName} {user.lastName} {user.middleName}
          </div>
          <div>{user.email}</div>
          <div>{user.phone}</div>
        </div>
      ))}
    </div>
  );
};
