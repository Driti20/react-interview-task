import { InfoCircleFilled, SearchOutlined } from "@ant-design/icons"
import { Button, Divider, Input } from "antd"
import styles from "../../Header.module.css";

const JobTableTitle = ({filterDataSource, setshowJobModal}) =>{
    return(
        <>
          <h4 className={styles.titleText}>Title</h4>
          <div className={styles.title}>
            <div className={styles.info}>
              <InfoCircleFilled />
              <p>
                Informative piece of text that can be used regarding this modal.
              </p>
            </div>
            <div className={styles.input}>
              <Input
                prefix={<SearchOutlined />}
                placeholder={`Search jobsite`}
                onChange={(e) => filterDataSource(e)}
                style={{
                  marginBottom: 8,
                  marginRight: 10,
                  width: "65%",
                }}
              />
              <Button
                className={styles.createButton}
                onClick={() => setshowJobModal(true)}
              >
                Create <Divider type="vertical" style={{ height: "25px" }} />
                <span className={styles.plusIcon}>+</span>
              </Button>
            </div>
          </div>
        </>
    )
}
export default JobTableTitle