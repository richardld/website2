import styles from './food.module.css';

export default function FoodHome() {
    return (
        <div className={styles['container']}>
            <iframe src="https://crtsn.com/view/embed?restaurantId=-NKgefgIeCbzLamuXd82&itemId=7af49c8a-35b6-4461-be4b-11b093019612&width=350&height=350"
                className={styles['frame']}
            />
        </div>
    )
}