import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";

const DataTable = () => {
  const tableHeaderConfig = [
    { name: "#", styles: "w-[3%]" },
    { name: "Name", styles: "w-[20%]" },
    { name: "Price", styles: "w-[8%]" },
    { name: "1h%", styles: "w-[8%]" },
    { name: "24h%", styles: "w-[8%]" },
    { name: "7d%", styles: "w-[8%]" },
    { name: "24h volume / Market Cap", styles: "w-[15%]" },
    { name: "Circulating / Total supply", styles: "w-[15%]" },
    { name: "Last 7d", styles: "w-[15%]" },
  ];

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {tableHeaderConfig.map((el) => (
            <TableHead key={el.name} className={el.styles}>
              {el.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow></TableRow>
      </TableBody>
    </Table>
  );
};

export default DataTable;
