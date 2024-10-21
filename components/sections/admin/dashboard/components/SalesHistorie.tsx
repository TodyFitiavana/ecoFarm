import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GenericTable from '@/components/shared/tables/GenericTable';
import { columns, data } from '@/helpers/constant';

const SalesHistorie = () => {
    return (
      <Card className="w-full my-5">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>Historique de vente</CardTitle>
        </CardHeader>
        <CardContent>
          <GenericTable columns={columns} data={data} />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    );
};

export default SalesHistorie;