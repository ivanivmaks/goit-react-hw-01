import css from "./Profile.module.css";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.card}>
      <div className={css.cardInfo}>
        <img className={css.cardImg} src={avatar} alt="User avatar" />
        <p className={css.cardName}>{username}</p>
        <p className={css.cardText}>@{tag}</p>
        <p className={css.cardText}>{location}</p>
      </div>

      <ul className={css.cardList}>
        <li className={css.cardItem}>
          <span>Followers</span>
          <span className={css.cardNum}>{stats.followers}</span>
        </li>
        <li className={css.cardItem}>
          <span>Views</span>
          <span className={css.cardNum}>{stats.views}</span>
        </li>
        <li className={css.cardItem}>
          <span>Likes</span>
          <span className={css.cardNum}>{stats.followers}</span>
        </li>
      </ul>
    </div>
  );
}
