import { AppstoreAddOutlined, FileExcelFilled, FilePdfFilled, FilterFilled } from "@ant-design/icons";
import { Button, Popover, Space, Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ListPrintBtns = ({ AddUrl }) => {
  return (
    <div>
      <Space>

        <Tooltip title="Add New Record" color="gold">
          <Link to={AddUrl}>
            <Button size="small"><AppstoreAddOutlined /></Button>
          </Link>
        </Tooltip>

        <Tooltip title="Advanced Search" color="gold">
          <Button size="small"><FilterFilled /></Button>
        </Tooltip>

        <Tooltip title="Export Excle" color="gold">
          <Button size="small"><FileExcelFilled /></Button>
        </Tooltip>

        <Tooltip title="Export PDF" color="gold">
          <Button size="small"><FilePdfFilled /></Button>
        </Tooltip>

      </Space>
    </div>
  );
};

export default ListPrintBtns;
