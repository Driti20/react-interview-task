import { Button, Divider, Form, Input, Select } from "antd";
import styles from "./EditJobSite.module.css";
import {
  CheckOutlined,
  CloseOutlined,
  InfoCircleFilled,
} from "@ant-design/icons";
import { itemOptions } from "../../helper/Data";

const EditJobSiteModal = ({
  setmodalData,
  filteredCategories,
  setFilteredCategories,
  modalData,
  allCategories,
  setAllCategories
}) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const style = {
    background: "#F5F5F7",
    border: "none",
    resize: "none",
  };
console.log(modalData.item)

const updateCategoryById = (id, updatedData) => {
    setFilteredCategories(filteredCategories.map((category) =>
        category.nr === id ? { ...category, ...updatedData } : category
      )
    );
    setAllCategories(allCategories.map((category) =>
        category.nr === id ? { ...category, ...updatedData } : category
      )
    );
  };

  const handleSave = (values) => {
    updateCategoryById(modalData.nr, values);
    setmodalData(null);
  };

  return (
    <div className={styles.editModal}>
      <div className={styles.editModalContier}>
        <div className={styles.modalHeader}>
          <h5 className={styles.modalTitle}>Title</h5>
          <CloseOutlined
            className={styles.closeModalBtn}
            onClick={() => setmodalData(null)}
          />
        </div>
        <div className={styles.info}>
          <InfoCircleFilled />
          <p>
            Informative piece of text that can be used regarding this modal.
          </p>
        </div>
        <Form
          form={form}
          name="dependencies"
          autoComplete="off"
          layout="vertical"
          className={styles.modalForm}
          onFinish={handleSave}
          initialValues={{
            item: modalData.item,
            quantity: modalData.quantity,
            description: modalData.description,
            notes: modalData.notes,
          }}
        >
          <div className={styles.formItemQuantity}>
            <Form.Item label="Item" name="item" className={styles.itemInput}>
              <Select
                showSearch
                placeholder="Search & Select item"
                variant="filled"
                options={itemOptions}
              />
            </Form.Item>
            <Form.Item
              label="Quantity"
              name="quantity"
              className={styles.quantityInput}
            >
              <Input
                placeholder="Set Quantity"
                style={style}
              />
            </Form.Item>
          </div>
          <Form.Item
            label="Description"
            name="description"
            className={styles.descriptionInput}
          >
            <TextArea
              rows={5}
              placeholder="Type the description..."
              style={style}
            />
          </Form.Item>
          <Form.Item label="Notes" name="notes" className={styles.notesInput}>
            <TextArea
              rows={5}
              placeholder="Type a note..."
              style={style}
            />
          </Form.Item>
          <Button htmlType="submit" className={styles.saveButton}>
            Save Changes
            <Divider type="vertical" style={{ height: "30px", margin: "0" }} />
            <CheckOutlined />
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default EditJobSiteModal;
