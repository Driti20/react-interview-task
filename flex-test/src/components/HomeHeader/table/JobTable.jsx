import { Input, Table, Button, Divider } from "antd";
import { InfoCircleFilled, SearchOutlined } from "@ant-design/icons";
import styles from "../Header.module.css";
import { useState } from "react";
import { columns } from "../../../helper/Data";
import JobTableTitle from "./JobTableTitle";

const JobTable = ({ dataSource, setshowJobModal }) => {
  const rowClassName = (record, index) =>
    index % 2 === 0 ? styles.evenRow : styles.oddRow;
  const [filteredData, setFilteredData] = useState();
  const [isFiltered, setIsFiltered] = useState(false);
  const filterDataSource = (e) => {
    const keyword = e.target.value;
    setIsFiltered(keyword !== "");
    const filtered = dataSource.filter(
      (item) => item.name.toLowerCase().includes(keyword.toLowerCase()) // Case insensitive filter
    );
    setFilteredData(filtered);
  };
  return (
    <Table
      title={() => (
       <JobTableTitle filterDataSource={filterDataSource} setshowJobModal={setshowJobModal}/>
      )}
      className={styles.table}
      dataSource={isFiltered ? filteredData : dataSource}
      columns={columns}
      pagination={false}
      width={100}
      rowClassName={rowClassName}
    />
  );
};
export default JobTable;
