import { User } from '../../types/user';
import styles from './index.module.css';

type UsersListViewProps = {
  users: User[];
};

// В задаче больше похоже на таблицу, но словами указано список
export const UsersListView = ({ users }: UsersListViewProps) => {
  return (
    <ul className={styles.list}>
      {users.map((user) => (
        <li className={styles.item} key={user.id}>
          <div className={styles.field}>
            {user.firstName} {user.lastName} {user.middleName}
          </div>
          <div className={styles.field}>{user.email}</div>
          <div className={styles.field}>{user.phone}</div>
        </li>
      ))}
    </ul>
  );
};
