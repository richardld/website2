import styles from '../components/rocket.module.css'

export default function RocketMisc() {
  return (
    <div className={styles.misc}>
      <div className={styles.rocket}>
        <div className={styles.cut}>
          <iframe className={styles.mmr} frameborder="0" src="https://tracker.gg/overlays/overlay/f90d4266-97c1-4e8c-917f-1cf1d09d4f6a"/>
        </div>
        <div className={styles.cut}>
          <iframe className={styles.mmr} frameborder="0" src="https://tracker.gg/overlays/overlay/98693f29-d5cf-4717-9ac4-ce21df3a1601"/>
        </div>
        <div className={styles.cut}>
          <iframe className={styles.mmr} frameborder="0" src="https://tracker.gg/overlays/overlay/34a161c5-9eb9-4655-bbd1-95718947b25f"/>
        </div>
      </div>
    </div>
  )
}
