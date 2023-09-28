import styles from './style'
import { ArticleListItem } from './Item';

export function ArticleList() {
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const renderItems = () => {
        return(
            items.map((item, index) => ArticleListItem())
        )
    }

    return <div className={styles.container}>
        <ul className={styles.content}>
            {renderItems()}
        </ul>
    </div>;
  }
  