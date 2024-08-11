import { Skeleton } from "antd";

const NotesLoading = () => {
  const loadingArr = new Array(6).fill("loading");

  return (
    <div className="notes-grid-wrap grid">
      {loadingArr?.map((data: any) => {
        return (
          <div className="notes-col w-full h-full transition-smooth cursor-pointer">
            <Skeleton active />
          </div>
        );
      })}
    </div>
  );
};

export default NotesLoading;
