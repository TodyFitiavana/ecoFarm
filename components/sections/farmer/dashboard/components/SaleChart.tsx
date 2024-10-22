"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ChartContainer } from "@/components/ui/chart";
import { chartData } from "@/helpers/_mock/chart.mock";
import { chartConfig } from "@/lib/chartConfig";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SaleChart() {
  return (
    <Card className="w-full mt-7">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="flex flex-row gap-5 justify-center items-center">
          <span>Ventes</span>
          <Button variant="ghost">Exporter en CSV</Button>
        </CardTitle>
        <CardDescription>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Tous les prodiuts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Vary</SelectItem>
              <SelectItem value="dark">Vary Gasy</SelectItem>
              <SelectItem value="system">Vary mainty</SelectItem>
            </SelectContent>
          </Select>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[400px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="var(--color-desktop)" radius={10} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
