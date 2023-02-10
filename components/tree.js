import styles from './tree.module.css';

export default function TreeHome() {
    return (
        <div className={styles['container']}>
            <iframe className={styles['frame']} src="https://richardld.github.io/cybersecurity-tree/cybersecuritree/www/index.html"/>
        </div>
    )
}