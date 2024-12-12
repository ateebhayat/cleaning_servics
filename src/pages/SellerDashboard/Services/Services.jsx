import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'react-bootstrap';
import search from '@images/search.svg';
import Form from 'react-bootstrap/Form';
import './service.scss';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid'; // Import DataGrid from Material UI
import Card from '../../../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useShops from '../../../api/hooks/use-get-shops';
import { Box } from '@mui/material';
import useAuth from '../../../hooks/use-auth';
import useDeleteService from '../../../api/hooks/use-delete-service';

const ShopsListing = () => {
  const [searchText, setSearchText] = useState('');
  const { user } = useAuth();
  const { data: shops } = useShops(user?._id);
  const navigate = useNavigate();
  const { mutate: deleteService, isError } = useDeleteService();

  const deleteCampaign = async ({ id }) => {
    await deleteService({
      id: id
    });
    if (!isError) {
      toast.success('service deleted successfully');
      window.location.reload();
    }
  };

  const columns = [
    {
      field: 'service_name',
      headerName: 'Service Name',
      flex: 1,
      renderCell: (params) => <span>{params.row?.service_name}</span>,
      headerClassName: 'shop-header'
    },
    { field: 'service_type', headerName: 'Service Type', width: 150 },
    { field: 'price', headerName: 'Price', width: 200 },
    { field: 'duration', headerName: 'Duration', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      getActions: (params) => {
        return [
          <GridActionsCellItem
            key={`${params.id}-remove`}
            showInMenu
            label={'View'}
            onClick={() => navigate(`/services/${params.id}`)}
            sx={{
              borderRadius: '6px'
            }}
          />,
          <GridActionsCellItem
            key={`${params.id}-edit`}
            showInMenu
            label={'Remove'}
            onClick={() => {
              deleteCampaign({ id: params.id });
            }}
          />
        ];
      },
      flex: 1
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Shops Management | FlikClub </title>
      </Helmet>
      <Card>
        <div className="usermanage-main">
          <div className="user-manag-chat">
            <Row>
              <Col xs={12} md={3} sm={6} lg={4} xl={5} className="user-tabs-btn mb-2">
                <div className="request-section d-flex justify-content-between">
                  <div>
                    <h2>All Services</h2>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={5} sm={6} lg={6} xl={5} className="user-tabs-btn spacer-tabs">
                <div className="userlisting" style={{ position: 'relative' }}>
                  <Form.Control
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                    placeholder="Search"
                    className="search-input w-full"
                  />
                  <img src={search} alt="search icon" className="px-2 cursor-pointer" />
                </div>
              </Col>
              <Col xs={12} md={4} sm={6} lg={3} xl={2} className="add-btn spacer-tabs">
                <button type="button" onClick={() => navigate('/services/adpost')}>
                  Add new Service
                </button>
              </Col>
            </Row>
          </div>

          <div className="home-table-section">
            <Row>
              <Box
                mt={2}
                sx={{
                  '& .MuiDataGrid-row.even-row': {
                    backgroundColor: '#f5f8f9'
                  },
                  '& .MuiDataGrid-row.odd-row': {
                    backgroundColor: '#FFF'
                  },
                  height: 400,
                  width: '100%'
                }}
              >
                <DataGrid
                  rows={shops}
                  columns={columns}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  disableSelectionOnClick
                  getRowId={(row) => row._id} // Make sure you set a unique identifier for each row
                  getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row' : 'odd-row')}
                />
              </Box>
            </Row>
          </div>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default memo(ShopsListing);
