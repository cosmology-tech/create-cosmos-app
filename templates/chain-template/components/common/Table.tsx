import { Box, BoxProps } from '@interchain-ui/react';

const Table = (props: BoxProps) => {
  return <Box as="table" rawCSS={{ borderSpacing: '0 20px' }} {...props} />;
};

const TableHeader = (props: BoxProps) => {
  return <Box as="thead" {...props} />;
};

const TableBody = (props: BoxProps) => {
  return <Box as="tbody" {...props} />;
};

const TableRow = (props: BoxProps) => {
  return <Box as="tr" height="38px" {...props} />;
};

const TableHeaderCell = (props: BoxProps) => {
  return (
    <Box
      as="th"
      textAlign="left"
      color="$blackAlpha500"
      fontSize="14px"
      fontWeight="400"
      {...props}
    />
  );
};

const TableCell = (props: BoxProps) => {
  return (
    <Box
      as="td"
      color="$blackAlpha600"
      fontSize="14px"
      fontWeight="600"
      {...props}
    />
  );
};

Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export { Table };
