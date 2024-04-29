import "./App.css";
import Profile from "./Profile/Profile.jsx";
import userData from "./Profile/Profile.json";
import FriendList from "./FriendList/FriendList.jsx";
import friends from "./FriendList/FriendList.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory.jsx";
import transactions from "./TransactionHistory/Transactions.json";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions}
      />
    </>
  );
}
