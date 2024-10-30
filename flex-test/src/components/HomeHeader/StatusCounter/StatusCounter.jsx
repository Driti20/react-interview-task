import { jobData } from "../../../helper/Data";
import styles from "../Header.module.css";

const StatusCounter = ({ dataSource }) => {
  const countJobStatuses = (data) => {
    const statusCount = {
      ONHOLD: 0,
      COMPLETED: 0,
      ONPROGRESS: 0,
    };

    data.forEach((job) => {
      const status = job.status.props.children;
      if (status === "On Hold") {
        statusCount.ONHOLD++;
      } else if (status === "Completed") {
        statusCount.COMPLETED++;
      } else if (status === "On Progress") {
        statusCount.ONPROGRESS++;
      }
    });

    return statusCount;
  };
  return (
    <div className={styles.Header}>
      <div className={styles.onRoad}>{countJobStatuses(dataSource).ONPROGRESS} On Road</div>
      <div className={styles.completed}>{countJobStatuses(dataSource).COMPLETED} Completed</div>
      <div className={styles.onHold}>{countJobStatuses(dataSource).ONHOLD} On Hold</div>
    </div>
  );
};

export default StatusCounter;
