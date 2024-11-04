import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Column } from 'primereact/column';
import { Row, Col, Button } from 'react-bootstrap';
import search from '@images/search.svg';
import Form from 'react-bootstrap/Form';
import '../cause.scss';
import './campaigns.scss';

import trash from '@icons/trash.svg';
import view from '@icons/eye.png';

import { DataTable } from 'primereact/datatable';

import { Products } from './Data';
import Card from '../../../components/Card/Card';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ConfirmationBox from '../../../components/ConfirmationBox/ConfirmationBox';

const CompaignManagement = () => {
    const [searchText, setSearchText] = useState('');
    const [dataTab, setDataTab] = useState('active');
    const [compaign, setCompaign] = useState(Products);
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
    const candidateTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img src={rowData?.img} className="me-2" width="58" style={{ border: '1px solid #ccc', borderRadius: '10px' }} height="49" />
                <span>{rowData?.campaign}</span>
            </div>
        );
    };

    const filteredData = compaign?.filter((item) => {
        const propertiesToCheck = Object.keys(compaign?.[0] || {});

        return propertiesToCheck.some((property) => {
            const value = item?.[property];
            if (typeof value === 'string') {
                return value.toLowerCase()?.includes(searchText?.toLowerCase());
            }
            return false;
        });
    });
    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions-icons">
                <img src={trash} alt="delete icon" className="cursor-pointer" onClick={handleDialogOpen} />
                <img src={view} alt="delete icon" className="cursor-pointer" onClick={() => navigate(`/compaign/${rowData?.id}`, { state: { product: rowData } })} />
            </div>
        );
    };
    const filteredProducts = dataTab === 'active' ? filteredData?.filter((product) => product.status === 'Active') : filteredData?.filter((product) => product.status === 'Pending');

    return (
        <React.Fragment>
            <Helmet>
                <title>Campaigns Management | ReRaiseIt </title>
            </Helmet>
            <Card>
                <div className="usermanage-main">
                    <div className="user-tabs-btn mb-4">
                        <Button className={`${dataTab === 'active' && 'activetbtn'} spacer-tabs`} onClick={() => setDataTab('active')}>
                            Active Campaigns
                        </Button>
                        <Button className={dataTab === 'pending' && 'activetbtn'} style={{ position: 'relative' }} onClick={() => setDataTab('pending')}>
                            Pending Campaigns <span className="unreadcompaigns">05</span>
                        </Button>
                    </div>
                    <div className="user-manag-chat">
                        <Row>
                            <Col xs={12} md={3} sm={6} lg={4} xl={5} className="user-tabs-btn mb-2">
                                <div className="request-section d-flex justify-content-between">
                                    <div>
                                        <h2>All Campaigns</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={5} sm={6} lg={4} xl={4} className="user-tabs-btn spacer-tabs  ">
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
                            <Col xs={12} md={4} sm={6} lg={4} xl={3} className="add-btn spacer-tabs">
                                <button type="button" onClick={() => navigate('/fundraise/campaign/add')}>
                                    Add new Campaign
                                </button>
                            </Col>
                        </Row>
                    </div>

                    <div className="home-table-section">
                        <Row>
                            <DataTable
                                value={filteredProducts}
                                className="adminhome-table mt-2"
                                resizableColumns={true}
                                responsiveLayout="scroll"
                                paginator
                                rows={5}
                                paginatorClassName="interview-tracker-paginator"
                                paginatorLeft
                                paginatorTemplate="PrevPageLink CurrentPageReport NextPageLink"
                                currentPageReportTemplate="Page {currentPage} of {totalPages}"
                            >
                                <Column header="Campaign name" className="title" body={candidateTemplate}></Column>
                                <Column field="target" className="amount" header="Target"></Column>
                                <Column field="donation" className="title" header="Donation Collected"></Column>
                                <Column field="products" className="title" header="No. of Products"></Column>
                                <Column field="status" className="amount" header="Status"></Column>

                                <Column header="Actions" body={actionBodyTemplate}></Column>
                            </DataTable>
                        </Row>
                    </div>
                </div>
            </Card>
            {showDialog && <ConfirmationBox show={showDialog} onClose={handleDialogClose} onConfirm={deleteCampaign} title="Delete Campaign" body="Are you sure you want to delete this campaign?" />}
        </React.Fragment>
    );
};

export default CompaignManagement;
