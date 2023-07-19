import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import * as React from "react";
import { universities } from "./UniversityData";

export default function University(){
    const [mockData, setMockData] = useState(universities);
    const [first, setFirst] = useState(0);
    return <>
        <div>
            <h2>Universities</h2>
        </div>
        <div>
            <DataTable value={mockData}  paginator rows={10} first={first} onPage={(e) => setFirst(e.first)} >
                <Column field="universityname" header="University" sortable></Column>
                <Column field="place" header="Location" sortable></Column>
                <Column field="origin" header="Established year" sortable></Column>
            </DataTable>
        </div>
    </>
}