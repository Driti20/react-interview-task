import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styles from "../../jobsite.module.css"
import { useNavigate, useSearchParams } from "react-router-dom";

const JobSiteTableTitle = ({setSearchTerm}) => {
  const [queryParameters] = useSearchParams();
  const navigate = useNavigate()
  const removeCategoryParam = () => {
    const newParams = new URLSearchParams(queryParameters);
    newParams.delete("category");
    navigate({
      search: newParams.toString(),
    });
  };
  return (
    <div className={styles.title}>
      <h4 className={styles.titleText}>Title</h4>
      <div className={styles.input}>
        <Input
          prefix={<SearchOutlined />}
          placeholder={`Search a driver`}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            marginRight: "10px",
          }}
        />
        <CloseOutlined onClick={removeCategoryParam} />
      </div>
    </div>
  );
};
export default JobSiteTableTitle;
