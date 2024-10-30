import styles from "../jobsite.module.css";
import noService from "../../../assets/noService.png";
const NoService = () => {
  return (
    <div className={styles.noServiceSelected}>
      <h5 className={styles.noServiceTitle}>Data Grid</h5>
      <div className={styles.noServiceMessage}>
        <img src={noService} alt="" />
        <h5>No Service Selected</h5>
        <p>Please select a service on your left to proceed.</p>
      </div>
    </div>
  );
};
export default NoService;
