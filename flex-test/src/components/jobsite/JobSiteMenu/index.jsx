import { ArrowLeftOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import styles from "../jobsite.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import classNames from "classnames";

const JobSiteMenu = ({ filteredData, currentCategory }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const updateParam = (category) => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };
  return (
    <div className={styles.categoryContainer}>
      <h5>{filteredData[0].name}</h5>
      <div className={styles.categories}>
        {filteredData[0].category.map((category) => {
          return (
            <Button
              key={category}
              className={classNames(styles.categoryButton, {
                [styles.scaffold]:
                  category === currentCategory && currentCategory === "Scaffold",
                [styles.shoring]:
                  category === currentCategory && currentCategory === "Shoring",
                [styles.sidewalkShed]:
                  category === currentCategory && currentCategory === "Sidewalk Shed",
              })}
              onClick={() => updateParam(category)}
            >
              <p>{category}</p> {category === currentCategory && <CheckOutlined />}
            </Button>
          );
        })}
      </div>
      <Button className={styles.goBackButton} onClick={() => navigate("/")}>
        Go back
        <Divider type="vertical" style={{ height: "30px", margin: "0" }} />
        <ArrowLeftOutlined />
      </Button>
    </div>
  );
};
export default JobSiteMenu;
