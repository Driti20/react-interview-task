import { useState } from "react";
import JobTable from "./table/JobTable";
import StatusCounter from "./StatusCounter/StatusCounter";
import AddJobModal from "../AddJobModal/AddJobModal";
import { message } from "antd";

export const HomeHeader = ({dataSource, setDataSource}) => {
  const [showJobModal, setshowJobModal] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  return (
    <>
      {contextHolder}
      <StatusCounter dataSource={dataSource} />
      <JobTable dataSource={dataSource} setshowJobModal={setshowJobModal} />
      {showJobModal && (
        <AddJobModal
          setshowJobModal={setshowJobModal}
          setDataSource={setDataSource}
          dataSource={dataSource}
          messageApi={messageApi}
        />
      )}
    </>
  );
};
