import React, { useState } from 'react';
import { Dropdown, Pagination, Search, DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@carbon/react';
import { CheckmarkOutline, Document } from '@carbon/icons-react';
import "./activity-list.scss";

export default function ActivityList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  // Generate sample data for demonstration
  const generateData = (count) => {
    let data = [];
    for (let i = 1; i <= count; i++) {
      data.push({
        id: `id_${i}`,
        name: `Load balancer ${i}`,
        status: i % 2 === 0 ? 'Disabled' : 'Active',
        actions: i % 2 === 0 ? 'EDIT' : 'SAVE'
      });
    }
    return data;
  };

  const rows = generateData(100);

  const headers = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'status',
      header: 'Status',
    },
    {
      key: 'actions',
      header: 'Actions',
    },
  ];

  // Handle filtering
  const filteredRows = rows.filter(row => row.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // Handle sorting
  const sortedRows = [...filteredRows].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const keyA = a[sortConfig.key].toUpperCase();
    const keyB = b[sortConfig.key].toUpperCase();
    if (keyA < keyB) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (keyA > keyB) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  });

  // Calculate data for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const currentPageData = sortedRows.slice(startIndex, startIndex + pageSize);

  const getStatusIcon = (status) => {
    return status === 'Active' ? <CheckmarkOutline style={{ fill: 'green' }} /> : <Document style={{ fill: 'red' }} />;
  };

  const actionOptions = [
    { id: 'edit', label: 'EDIT' },
    { id: 'save', label: 'SAVE' },
    { id: 'delete', label: 'DELETE' }
  ];

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="activities-list-container">
      <Search
        labelText="Search"
        placeholder="Search by name"
        onChange={event => setSearchQuery(event.target.value)}
        value={searchQuery}
      />
      <DataTable rows={currentPageData} headers={headers}>
        {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableHeader
                    {...getHeaderProps({ header })}
                    isSortable
                    onClick={() => handleSort(header.key)}
                  >
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow {...getRowProps({ row })}>
                  {row.cells.map(cell => (
                    <TableCell key={cell.id}>
                      {cell.info.header === 'status' ? (
                        getStatusIcon(cell.value)
                      ) : cell.info.header === 'actions' ? (
                        <Dropdown
                          id={`action-dropdown-${cell.id}`}
                          items={actionOptions}
                          label="Choose an action" // This is visible when no item is selected
                          selectedItem={actionOptions.find(option => option.label === cell.value)}
                          itemToString={(item) => (item ? item.label : '')}
                        />
                      ) : (
                        cell.value
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>
      <Pagination
        totalItems={filteredRows.length}
        pageSize={pageSize}
        page={currentPage}
        pageSizes={[5, 10, 15, 25]}
        onChange={({ page, pageSize }) => {
          setCurrentPage(page);
          setPageSize(pageSize);
        }}
      />
    </div>
  );
}
