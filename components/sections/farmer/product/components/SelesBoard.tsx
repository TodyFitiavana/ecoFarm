import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GenericTable from "@/components/shared/tables/GenericTable";
import {
  Farmer_produit_columns,
  Farmer_produit_data,
} from "@/helpers/_mock/SaleMock";

const SalesBoard: FC = (): JSX.Element => {
  return (
    <Card className="w-full mt-7">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent>
        <GenericTable
          columns={Farmer_produit_columns}
          data={Farmer_produit_data}
        />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default SalesBoard;
