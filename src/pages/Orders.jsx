import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { Header } from "../components";

const Orders = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="m-2 p-2 md:m-10 md:p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        style={{
          backgroundColor:
            currentColor === "dark" ? "dark:bg-secondary-dark-bg" : "",
        }}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
