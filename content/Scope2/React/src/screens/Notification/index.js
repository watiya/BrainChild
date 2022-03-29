import React, { useState } from "react";
import cn from "classnames";
import styles from "./Notification.module.sass";
import List from "./List";
import Filters from "./Filters";

const filters = [
  "Comments",
  "Likes",
  "Review",
  "Mentions",
  "Purchases",
  "Message",
];

const Notification = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [visible, setVisible] = useState(0);

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <List className={styles.card} />
      </div>
      <div className={styles.col}>
        <Filters
          className={styles.filters}
          filters={filters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      </div>
    </div>
  );
};

export default Notification;
