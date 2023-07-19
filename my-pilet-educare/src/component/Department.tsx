import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import * as React from "react";
import { departmentsData } from "./DepartmentData";

export default function Department(){
    const [mockData, setMockData] = useState(departmentsData);
    const [first, setFirst] = useState(0);
    return <>
    <div>
            <DataTable value={mockData}  paginator rows={10} first={first} onPage={(e) => setFirst(e.first)} >
                <Column field="deptname" header="Department" sortable></Column>
                <Column field="university" header="University" sortable></Column>
                <Column field="strength" header="Strength" sortable></Column>
            </DataTable>
        </div>
    </>
}