import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaPrint } from "react-icons/fa";

export interface Column<T> {
  header: string;
  accessor: (row: T) => string | number | React.ReactNode;
}

export interface Props<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  columns: Column<T>[];
}

const GenericTable = <T,>({ data, columns, ...props }: Props<T>) => {
  return (
    <Table {...props}>
      <TableHeader>
        <TableRow className="bg-background border-none">
          {columns.map((col, index) => (
            <TableHead
              key={index}
              className={`bg-[#F3F9FA] text-primary01 font-semibold ${
                index === 0
                  ? "rounded-tl-md rounded-bl-md"
                  : index === columns.length - 1
                  ? "rounded-tr-md rounded-br-md"
                  : ""
              }`}
            >
              {col.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            className="border-none hover:bg-primary-foreground bg-white"
          >
            {" "}
            {columns.map((col, colIndex) => (
              <TableCell
                key={colIndex}
                className={`border-none text-secondary02 ${
                  colIndex === 0
                    ? "rounded-tl-md rounded-bl-md"
                    : colIndex === columns.length - 1
                    ? "rounded-tr-md rounded-br-md"
                    : ""
                }`}
              >
                {" "}
                {col.accessor(row)}
                {colIndex === columns.length - 1 && (
                  <FaPrint className="ml-2 text-blue-800" />
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default GenericTable;
