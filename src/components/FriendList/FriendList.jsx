import FriendListItem from "./FriendListItem";
import css from'./FriendList.module.css'


export default function FriendList( {friends} ) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friendItem}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}