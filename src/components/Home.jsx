import { getDashboardData } from "../data";
import DataGrid from "../UI/DataGrid/DataGrid";
import DataGridContextProvider from "../UI/DataGrid/data-grid-context";

export default function Home() {
  return (
    <DataGridContextProvider dataSourceFn={getDashboardData} searchableFields={["fileNumber", "productName", "lenderName", "clientName", "addressLineOne", "addressLineTwo"]}>
      <DataGrid></DataGrid>
    </DataGridContextProvider>
  );
}
