import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../../components/jobsite/jobsite.module.css";
import NoService from "../../components/jobsite/noService";
import JobSiteTable from "../../components/jobsite/jobSiteTable";
import JobSiteMenu from "../../components/jobsite/JobSiteMenu";
import { useEffect, useState } from "react";
import EditJobSiteModal from "../../components/EditJobSite";
const JobSite = ({ dataSource, allCategories, setAllCategories }) => {
  const [queryParameters] = useSearchParams();
  const id = queryParameters.get("id");
  const category = queryParameters.get("category");
  const navigate = useNavigate();
  const filteredData = dataSource.filter((item) => item.key === id);
  useEffect(() => {
    if (filteredData.length < 1) {
      navigate("/");
    }
  }, [filteredData, navigate]);
  const [filteredCategories, setFilteredCategories] = useState(allCategories);
  useEffect(() => {
    if (category) {
      const updatedCategory = category.replace(/\+/g, " ");
      const newFilter = allCategories.filter(
        (item) => item.category === updatedCategory
      );
      setFilteredCategories(newFilter);
    } else {
      setFilteredCategories(allCategories);
    }
  }, [category]);

  const [modalData, setmodalData] = useState();

  const editModal = (data) => {
    if (data) setmodalData(data);
  };

  return (
    <div className={styles.jobSite}>
      {modalData && (
        <EditJobSiteModal
          setmodalData={setmodalData}
          filteredCategories={filteredCategories}
          setFilteredCategories={setFilteredCategories}
          modalData={modalData}
          allCategories={allCategories}
          setAllCategories={setAllCategories}
        />
      )}
      <JobSiteMenu filteredData={filteredData} currentCategory={category}/>
      {!category ? (
        <NoService />
      ) : (
        <JobSiteTable
          filteredCategories={filteredCategories}
          editModal={editModal}
        />
      )}
    </div>
  );
};
export default JobSite;
