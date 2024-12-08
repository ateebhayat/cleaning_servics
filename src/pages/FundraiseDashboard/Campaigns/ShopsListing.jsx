import React, { memo, useCallback, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Row, Col, Button } from 'react-bootstrap';
import search from '@images/search.svg';
import Form from 'react-bootstrap/Form';
import '../cause.scss';
import './campaigns.scss';
import trash from '@icons/trash.svg';
import view from '@icons/eye.png';
import { DataGrid, GridActionsCellItem, renderActionsCell } from '@mui/x-data-grid'; // Import DataGrid from Material UI
import { Products } from './Data';
import Card from '../../../components/Card/Card';
import { useNavigate } from 'react-router-dom';
import ConfirmationBox from '../../../components/ConfirmationBox/ConfirmationBox';
import toast from 'react-hot-toast';
import useShops from '../../../api/hooks/use-get-shops';
import useAuth from '../../../hooks/use-auth';
import { Box } from '@mui/material';

const ShopsListing = () => {
  const [searchText, setSearchText] = useState('');
  const [dataTab, setDataTab] = useState('active');
  const [compaign, setCompaign] = useState(Products);
  const { user } = useAuth();
  const { data: shops } = useShops(user?._id);
  const navigate = useNavigate();

  const [showDialog, setDialog] = useState(false);
  const handleDialogOpen = () => {
    setDialog(!showDialog);
  };
  const handleDialogClose = () => {
    setDialog(false);
  };

  const deleteCampaign = (rowData) => {
    setCompaign(compaign?.filter((val) => val?.id !== rowData?.id));
    toast.success('Campaign deleted successfully');
    setDialog(false);
  };

  const columns = [
    {
      field: 'shop_name',
      headerName: 'Shop Name',
      flex: 1,
      renderCell: (params) => <span>{params.row.shop_name}</span>,
      headerClassName: 'shop-header'
    },
    { field: 'point_limit', headerName: 'Point Limit', width: 150 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'lat', headerName: 'Latitude', width: 200 },
    { field: 'long', headerName: 'Longitude', width: 200 },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      getActions: (params) => {
        return [
          <GridActionsCellItem
            key={`${params.id}-remove`}
            showInMenu
            icon={<img src={view} alt="view" width={'20px'} className="cursor-pointer" onClick={() => navigate(`/compaign/${rowData.id}`, { state: { product: rowData } })} />}
            label={'View'}
            sx={{
              borderRadius: '6px'
            }}
          />,
          <GridActionsCellItem
            key={`${params.id}-edit`}
            showInMenu
            label={'Remove'}
            icon={<img src={trash} alt="delete" width={'20px'} className="cursor-pointer" onClick={() => toast.success('Deleted')} />}
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
          <div className="user-tabs-btn mb-4">
            <Button className={`${dataTab === 'active' && 'activetbtn'} spacer-tabs`} onClick={() => setDataTab('active')}>
              Active Shops
            </Button>
            <Button className={dataTab === 'pending' && 'activetbtn'} style={{ position: 'relative' }} onClick={() => setDataTab('pending')}>
              Pending Shops <span className="unreadcompaigns">05</span>
            </Button>
          </div>
          <div className="user-manag-chat">
            <Row>
              <Col xs={12} md={3} sm={6} lg={4} xl={5} className="user-tabs-btn mb-2">
                <div className="request-section d-flex justify-content-between">
                  <div>
                    <h2>All Shops</h2>
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
                <button type="button" onClick={() => navigate('/seller/adpost')}>
                  Add new Shop
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
                    backgroundColor: `#f5f8f9`
                  },
                  '& .MuiDataGrid-row.odd-row': {
                    backgroundColor: `#FFF`
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
      {showDialog && (
        <ConfirmationBox show={showDialog} onClose={handleDialogClose} onConfirm={deleteCampaign} stitle="Delete Campaign" body="Are you sure you want to delete this campaign?" />
      )}
    </React.Fragment>
  );
};

export default memo(ShopsListing);
