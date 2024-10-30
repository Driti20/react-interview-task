import { useState } from "react";
import JobTable from "../../components/HomeHeader/table/JobTable";
import StatusCounter from "../../components/HomeHeader/StatusCounter/StatusCounter";
import AddJobModal from "../../components/AddJobModal/AddJobModal";
import { message } from "antd";

export const Home = ({dataSource, setDataSource}) => {
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
