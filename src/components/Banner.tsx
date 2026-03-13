import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80" />
      <h1>where every event finds its venue</h1>
      <p>Find the perfect venue for weddings and celebrations.</p>
    </div>
  );
}
