import names from "@/constants/names";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import styles from './style'

export function Header() {
  return (
    <div className={styles.container}>
      <Bars3Icon className={styles.menuIcon} />
      <div className={styles.title}>
        {names.serviceName}
      </div>
      <MagnifyingGlassIcon className={styles.searchIcon} />
    </div>
  );
}
