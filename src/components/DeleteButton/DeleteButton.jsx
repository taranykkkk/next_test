import styles from './DeleteButton.module.scss';

function DeleteButton({ postId, setPosts }) {
  const handleDeletePost = async (e, id) => {
    e.stopPropagation();
    const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/${id}`, {
      method: 'DELETE',
    });
    setPosts((prev) => prev.filter((elem) => elem.id !== id));
  };

  return (
    <button
      className={styles.delete_button}
      onClick={(e) => handleDeletePost(e, postId)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.5">
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <line x1="10" x2="10" y1="11" y2="17" />
        <line x1="14" x2="14" y1="11" y2="17" />
      </svg>
    </button>
  );
}

export default DeleteButton;