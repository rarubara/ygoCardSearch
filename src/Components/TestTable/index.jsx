import React from 'react'
import {Table, TableBody, TableRow, TableHead, TableCell, TableHeader, TableFooter, TableCaption} from "../ui/table";
const TestTable = () => {
  return (
    <div>
        <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
            <TableCell className="font-medium"><img src="https://cdn.formatlibrary.com/images/medium_cards/40640057.jpg" alt="logo" className="h-8 sm:h-10"></img>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
        </TableBody>
        </Table>      
    </div>
  )
}

export default TestTable
