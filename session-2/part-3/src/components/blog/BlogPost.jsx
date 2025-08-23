import styles from "./Blog.module.css";

function BlogPost({ title, author, children }) {
  return (
    <article className={styles.post}>
      <h3>{title}</h3>
      <p>{children}</p>
      <p>
        <strong>Author:</strong> {author}
      </p>
    </article>
  );
}

export default BlogPost;
