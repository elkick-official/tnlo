import { Table } from "antd";
import "./TNTable.css";
import { FC } from "react";
interface tableProps {
    dataSource: object[],
    columns: object[]
}
export const TNTable:FC<tableProps> = ({
    dataSource,
    columns
}) => {
    return(
        <>
            <Table dataSource={dataSource} columns={columns} scroll={{ x: 1920, y: 600 }}/>;
        </>
    )
}