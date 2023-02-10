import styles from './newspaper.module.css';
import moment from 'moment';

export default function NewspaperHome() {
    const rawDate = new Date()
    const date = new Date( rawDate.getTime() + rawDate.getTimezoneOffset() * 60000 )
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear()
    const day = date.getDay()
    const dayOfWeek = date.toLocaleString('en-us', {  weekday: 'long' })
    const dateString = moment().format('dddd, MMMM Do, YYYY')

    const topics = ['World', 'U.S.', 'Politics', 'C.A.', 'Business', 'Opinion', 'Science', 'Health', 'Sports', 'Arts', 'Books', 'Style', 'Food', 'Travel', 'Magazine', 'Real Estate']

    return (
        <div className={styles['container']}>
            <div className={styles['header']}>
                <div className={styles['infoBoxLeft']}>
                    <p className={styles['date']}>{dateString}</p>
                    <p className={styles['date-subtext']}>Today's Paper</p>
                </div>
                <h1 className={styles['title']}>The Richard Times</h1>
                <div className={styles['infoBoxRight']}>
                    <p className={styles['date']}>Sunny Weather</p>
                    <p className={styles['date-subtext']}>SNAP <p className={styles['stock']}>+99.4%</p></p>
                </div>
            </div>
            <div className={styles['topics']}>
                {topics.map((name) => 
                    <a className={styles['topic']} key={name}>{name}</a>
                )}
            </div>
            <div className={styles['double-divider']}>
                <span/>
            </div>
            <div className={styles['news-box']}>
                <div className={styles['news-column-left']}>
                    <div className={styles['news-row']}>
                        <div className={styles['news-row-column']}>
                            <div className={styles['news-row-column-article']}>
                                <h2 className={styles['news-row-article-heading']}>U.S. Hiring Pace Surges Unexpectedly, Fed Not Expecting Richard to get a Job</h2>
                                <p className={styles['news-row-article-description']}>Employers added 1 job in January. The Richard unemployment rate fell to its lowest level ever, illustrating the Richard labor market's extraordinary vibrancy. </p>
                            </div>
                            <div className={styles['single-divider']}>
                                <span/>
                            </div>
                            <div className={styles['news-row-column-article']}>
                                <h2 className={styles['news-row-article-heading-small']}>As hiring surged, Richard wage growth increased slightly. The report suggests more work ahead for the Fed.</h2>
                            </div>
                        </div>
                        <div className={styles['news-row-column-picture']}>
                            <img src='/jobs.webp' className={styles['news-row-column-picture-img']}></img>
                        </div>
                    </div>
                </div>
                <div className={styles['single-divider-vertical']}>
                    <span/>
                </div>
                <div className={styles['news-column-right']}>
                    <div className={styles['news-row']}>
                        <div className={styles['news-row-column']}>
                            <div className={styles['news-row-column-article']}>
                                <h2 className={styles['news-row-article-heading']}>Even a 7,000$ Rent Doesn't Guarantee Richard's Cat Gets To Walk Through The Lobby</h2>
                                <p className={styles['news-row-article-description']}>In some New York City buildings, the four-legged cats are not welcome everywhere. Richard must carry them or use a service elevator.</p>
                            </div>
                            <div className={styles['single-divider']}>
                                <span/>
                            </div>
                            <div className={styles['news-row-column-article']}>
                                <h2 className={styles['news-row-article-heading-small']}>In a shared library, a student playing music aloud put one reader over the edge.</h2>
                            </div>
                            <div className={styles['single-divider']}>
                                <span/>
                            </div>
                            <div className={styles['news-row-column-article']}>
                                <h2 className={styles['news-row-article-heading-small']}>Richard Liu of "The Real Richards of New York City" writes about his life in "Richard's Portfolio"</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}