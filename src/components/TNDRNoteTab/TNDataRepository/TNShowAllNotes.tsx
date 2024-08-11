import { MoreOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Dropdown, Empty, Space } from "antd";
import parse from "html-react-parser";
import moment from "moment";
import { TNInput } from "../../common/TNInput/TNInput";
import { TNButton } from "../../common/TNButton/TNButton";
import {
  getBtnNameByType,
  getTitleNameByType,
} from "../../../utils/service.util";
import FolderSelectTree from "../../Tree/FolderSelectTree";
import { TNSelect } from "../../common/TNSelect/TNSelect";
import { TNDatePicker } from "../../common/TNDatePicker/TNDatePicker";
import Loader from "../../common/Loader/Loader";
import NotesLoading from "./NotesLoading";

const TNShowAllNotes = ({
  searchVal,
  handleChangeSearch,
  handleAddNoteButton,
  noteType,
  value,
  onChange,
  treeData,
  onLoadData,
  drNoteOptions,
  selectedValue,
  handleSelectChange,
  sortedNotes,
  isNotesLoading,
  handleSelectedPreview,
  setCurrentId,
  items,
}: any) => {
  return (
    <div>
      <div className="flex w-100 gap-10">
        <div>
          <TNInput
            id="dr-note-search"
            datatestid="dr-note-search-testid"
            type="text"
            name="drNoteSearch"
            value={searchVal}
            label="what are you looking for?"
            placeholder="Search"
            ILInputLabelClass="mb-0 data-repository-seacrhbar-input"
            handleChange={handleChangeSearch}
            textAreaShow={false}
            readOnly={false}
            searchBarControl
            errorMsg="This is an error message"
          />
        </div>

        <TNButton
          id="add-new-note"
          datatestid="add-new-note-testid"
          type="button"
          ILBtnClass="additional-class ml-auto"
          handleChange={handleAddNoteButton}
          disabled={false}
        >
          <PlusCircleOutlined className="w-auto width min-w-auto pa-0 me-2 height min-h-auto" />
          {getBtnNameByType(noteType)}
        </TNButton>
      </div>

      <div className="legency-data-digitization-head-wrap legency-data-digitization-head-tab-wrap flex items-end mt-3 gap-5">
        <div className="selectFodler-home">
          <div className="selectFodler-home-element">
            <FolderSelectTree
              value={value}
              onChange={onChange}
              treeData={treeData}
              onLoadData={onLoadData}
            />
          </div>
        </div>

        <div className="hidden">
          <div>
            <TNInput
              id="dr-note-search"
              datatestid="dr-note-search-testid"
              type="text"
              name="drNoteSearch"
              label="what are you looking for?"
              placeholder="what are you looking for?"
              ILInputLabelClass="mb-0 data-repository-seacrhbar-input"
              textAreaShow={false}
              readOnly={false}
              searchBarControl
              errorMsg="This is an error message"
            />
          </div>
          <div className="ml-auto flex gap-6">
            <TNSelect
              label="Status"
              options={drNoteOptions}
              value={selectedValue}
              onChange={handleSelectChange}
              placeholder="Please select value"
            />
            <TNDatePicker label="Modified" options={[]} />
          </div>
        </div>
      </div>

      <hr className="opacity-03 my-4" />
      <div className="mt-3">
        <h3 className="pb-3 fw-500">{getTitleNameByType(noteType)}</h3>
        {!sortedNotes?.length ? (
          <div className="flex-center">
            <Empty
              imageStyle={{ height: "280px" }}
              description="No Items Available"
            />
          </div>
        ) : isNotesLoading ? (
          <div style={{ width: "100%" }}>
            <NotesLoading />
          </div>
        ) : null}

        <div className="notes-grid-wrap grid">
          <>
            {sortedNotes?.length && !isNotesLoading
              ? sortedNotes?.map((data: any, index: number) => {
                  const title =
                    data?.title?.length > 40
                      ? data?.title?.substring(0, 40) + "..."
                      : data?.title;

                  const fileContent =
                    data?.fileContent?.length > 300
                      ? data?.fileContent?.substring(0, 140) + "..."
                      : data?.fileContent;

                  const tagData = data?.tagData?.length
                    ? data?.tagData?.split(",")
                    : [];

                  return (
                    <div
                      className="notes-col w-full h-full transition-smooth cursor-pointer"
                      key={index}
                      onClick={() => handleSelectedPreview(data)}
                    >
                      <h3 className="mb-3">{title || ""}</h3>
                      <p className="mb-3 file-content-notes">
                        {fileContent ? parse(fileContent) : "N/A"}
                      </p>
                      <div className="flex items-center flex-wrap gap-3 mb-4">
                        <h5 className="ml-auto date-label-text">
                          {data?.createdOn
                            ? moment(data?.createdOn).format("MMM, DD, YYYY")
                            : null}
                        </h5>
                      </div>
                      <div className="tags-notes">
                        <div className="flex items-center gap-2 tags-notes-home">
                          {tagData?.map((data: any, index: any) => {
                            if (index > 4) return null;
                            return (
                              <div className="note-label flex items-center justify-center">
                                <span>{data}</span>
                              </div>
                            );
                          })}
                        </div>
                        <span>
                          <Dropdown menu={{ items }} trigger={["click"]}>
                            <a
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log(data);
                                setCurrentId(data?.fileId);
                              }}
                            >
                              <Space>
                                <MoreOutlined
                                  className="cursor-pointer"
                                  style={{ fontSize: "18px" }}
                                />
                              </Space>
                            </a>
                          </Dropdown>
                        </span>
                      </div>
                    </div>
                  );
                })
              : null}
          </>
        </div>
      </div>
    </div>
  );
};

export default TNShowAllNotes;
