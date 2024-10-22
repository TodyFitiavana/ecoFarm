import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GenericTable from "@/components/shared/tables/GenericTable";
import {Farmer_dashboard_columns, Farmer_dashboard_data } from "@/helpers/_mock/SaleMock";

const SalesHistorie:FC = ():JSX.Element => {
  return (
    <Card className="w-full mt-7">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Historique de vente</CardTitle>
      </CardHeader>
      <CardContent>
        <GenericTable columns={Farmer_dashboard_columns} data={Farmer_dashboard_data} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default SalesHistorie;
