import styles from "../styles/Home.module.css";
import tw from 'tailwind-styled-components'
export default function Home() {
  return (
    <Wrapper>
      <div className={styles.map}  >map</div>
      <div  className={styles.box}  >box</div>
    </Wrapper>
  );
}


const Wrapper=tw.div`

`