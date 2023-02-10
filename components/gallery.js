import styles from './gallery.module.css';

export default function GalleryHome() {
    return (
        <div className={styles['container']}>
            <iframe className={styles['frame']} src="https://richardld.github.io/misc/gallery/"/>
        </div>
    )
}