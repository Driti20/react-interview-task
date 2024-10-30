import { Button, Divider, Form, Input, Select } from "antd";
import styles from "./AddJobModal.module.css";
import {
  CheckOutlined,
  CloseOutlined,
  InfoCircleFilled,
} from "@ant-design/icons";
import { getStatusTag, rendomKey } from "../../helper/helpers";
import { useNavigate } from "react-router-dom";

const AddJobModal = ({
  setshowJobModal,
  setDataSource,
  dataSource,
  messageApi,
}) => {
  const [form] = Form.useForm();

  const selectOptions = [
    { label: "Sidewalk Shed", value: "Sidewalk Shed" },
    { label: "Scaffold", value: "Scaffold" },
    { label: "Shoring", value: "Shoring" },
  ];
  const statusOptions = [
    { label: "On Progress", value: "ONPROGRESS" },
    { label: "Completed", value: "COMPLETED" },
    { label: "On Hold", value: "ONHOLD" },
  ];
  const navigate = useNavigate()
  const onFinish = (values) => {
    const keyVal = rendomKey()
    setDataSource([
      {
        key: keyVal,
        name: values.name,
        status: getStatusTag(values.status),
        category: values.category,
      },
      ...dataSource,
    ]);
    messageApi.success("Job has been added");
      navigate(`/jobsite?id=${keyVal}`);
  };
  const rules=[
    {
      required: true,
    },
  ]

  return (
    <div className={styles.jobModal}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h5 className={styles.modalTitle}>Title</h5>
          <CloseOutlined
            className={styles.closeModalBtn}
            onClick={() => setshowJobModal(false)}
          />
        </div>
        <div className={styles.info}>
          <InfoCircleFilled />
          <p>
            Informative piece of text that can be used regarding this modal.
          </p>
        </div>
        <Form
          className={styles.modalForm}
          form={form}
          name="dependencies"
          autoComplete="off"
          layout="vertical"
          onFinish={onFinish}
        >
          <div className={styles.modalInputs}>
            <Form.Item className={styles.nameLabel} label="Name" name="name" rules={rules}>
              <Input
                placeholder={`Type the jobsite’s name`}
                style={{
                  background: "#F5F5F7",
                  border:'none'
                }}
              />
            </Form.Item>
            <div className={styles.categoryStatusInputs}>
              <div className={styles.categoryInput}>
                <Form.Item
                  className={styles.nameLabel}
                  label="Category Included"
                  name="category"
                  rules={rules}
                >
                  <Select
                    mode="multiple"
                    placeholder={`Select`}
                    style={{
                      width: "100%",
                    }}
                    variant="filled"
                    options={selectOptions}
                  />
                </Form.Item>
              </div>
              <div className={styles.statusInput}>
                <Form.Item
                  className={styles.nameLabel}
                  label="Status"
                  name='status'
                  rules={rules}
                >
                  <Select
                    placeholder={`Select one`}
                    style={{
                      width: "100%",
                    }}
                    variant="filled"
                    options={statusOptions}
                  />
                </Form.Item>
              </div>
            </div>
          </div>
          <Form.Item className={styles.modalButtons}>
            <Button
              onClick={() => setshowJobModal(false)}
              className={styles.cancelButton}
            >
              Cancel Changes
              <Divider
                type="vertical"
                style={{ height: "30px", margin: "0" }}
              />
              <CloseOutlined />
            </Button>

            <Button htmlType="submit" className={styles.saveButton}>
              Save Changes
              <Divider
                type="vertical"
                style={{ height: "30px", margin: "0" }}
              />
              <CheckOutlined />
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default AddJobModal;
