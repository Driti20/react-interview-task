import { Table } from "antd";
import styles from "../jobsite.module.css";
import { categoryColumns } from "../../../helper/Data";
import { useEffect, useState } from "react";
import JobSiteTableTitle from "./JobSiteTableTitle";

const JobSiteTable = ({ filteredCategories, editModal }) => {
  const rowClassName = (record, index) =>
    index % 2 === 0 ? styles.evenRow : styles.oddRow;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(filteredCategories);
  const filterDataSource = (value) => {
    const newFilteredData = filteredCategories.filter((category) =>
      category.item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(newFilteredData);
  };
  useEffect(() => {
    filterDataSource(searchTerm);
  }, [searchTerm, filteredCategories]);

  return (
    <Table
      title={() => <JobSiteTableTitle setSearchTerm={setSearchTerm} />}
      dataSource={filteredData}
      columns={categoryColumns}
      pagination={false}
      style={{ width: "100%" }}
      rowClassName={rowClassName}
      onRow={(record) => {
        return {
          onClick: () => editModal(record),
        };
      }}
    />
  );
};
export default JobSiteTable;
