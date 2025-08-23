import BlogPost from "./BlogPost";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <section className={styles.blog}>
      <h2>Latest Articles</h2>
      <BlogPost title="Mastering React Components" author="Sarah Dev">
        Components are the heart of React apps. Learn how to structure, style, and optimize them.
      </BlogPost>
      <BlogPost title="Using Props Like a Pro" author="John Code">
        Make your React components reusable and dynamic with props and destructuring.
      </BlogPost>
      <BlogPost title="Understanding State and Effects" author="Lina Hooks">
        Learn the fundamentals of useState and useEffect with real-life examples.
      </BlogPost>
    </section>
  );
}

export default Blog;
