import { Tag } from "antd";


export const getStatusTag = (status) => {
    switch (status) {
      case "ONHOLD":
        return (
          <Tag color="#FE4C4A" className={"styles.tag"}>
            On Hold
          </Tag>
        );
      case "COMPLETED":
        return (
          <Tag color="#7AC14D" className={"`${styles.tag} ${styles.completed}`"}>
            Completed
          </Tag>
        );
      case "ONPROGRESS":
        return (
          <Tag color="#ECDE7C" className={"`${styles.tag} ${styles.onprogress}`"}>
            On Progress
          </Tag>
        );
      default:
        return null;
    }
  };

  export const rendomKey = () =>(Math.random() + 1).toString(36).substring(7)