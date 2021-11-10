import { DataGrid, Popup } from "devextreme-react";
import { Editing } from "devextreme-react/data-grid";
import employees from "./data";

export default function CustomDataGrid() {
  return (
    <DataGrid
      dataSource={employees}
      repaintChangesOnly
    >
      <Editing
        mode="popup"
        allowAdding={true}
        allowUpdating={true}
      >
        <Popup
          title="Employees Info!!"
          showTitle={true}
          width={200}
          height={525}
        />
      </Editing>
    </DataGrid>
  );
}