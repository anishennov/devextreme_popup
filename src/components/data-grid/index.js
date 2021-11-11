import { TagBox, Template } from "devextreme-react";
import DataGrid, { Column, Editing, Export, HeaderFilter, Popup, RequiredRule, SearchPanel } from "devextreme-react/data-grid";
import employees from "./data";
import projects from "./projects";

export default function CustomDataGrid() {
  const renderProjectsCellTemplate = 
    (row) => {
      console.log('row :>> ', row);
      return (
      <TagBox
        dataSource={projects}
        displayExpr="projectName"
        valueExpr="projectId"
        defaultValue={row?.value || []}
        multiline={false}
        readOnly
        stylingMode="underlined"
        className="custom-tag-box"
      />
    )
  };

  const renderProjectsEditCellTemplate = 
    (row) => (
      <TagBox
        dataSource={projects}
        displayExpr="projectName"
        valueExpr="projectId"
        defaultValue={row?.value || []}
        multiline={false}
        onValueChanged={(e) => row?.setValue(e?.value || [])}
      />
    );

  return (
    <DataGrid
      dataSource={employees}
      repaintChangesOnly
    >
      <Column dataField="ID" />
      <Column dataField="FirstName" />
      <Column dataField="LastName" />
      <Column
        dataField="ProjectId"
        caption="Projects"
        alignment="center"
        lookup={{
          dataSource: projects,
          displayExpr: "projectName",
          valueExpr: "projectId",
        }}
        cellTemplate="projectsCellTemplate"
        editCellTemplate="projectsEditCellTemplate"
        validationRules={[
          <RequiredRule />,
        ]}
      />
      <Template
        name={"projectsCellTemplate"}
        render={renderProjectsCellTemplate}
      />
      <Template
        name={"projectsEditCellTemplate"}
        render={renderProjectsEditCellTemplate}
      />
      <HeaderFilter visible />
      <SearchPanel visible />
      <Export enabled />
      <Editing
        mode="popup"
        allowAdding={true}
        allowUpdating={true}
      >
        <Popup
          title="Employees Info"
          showTitle={true}
        />
      </Editing>
    </DataGrid>
  );
}