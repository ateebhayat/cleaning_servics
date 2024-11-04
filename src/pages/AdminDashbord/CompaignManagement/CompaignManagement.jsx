import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Column } from 'primereact/column';
import { toast } from 'react-toastify';
import { Row, Col, Button } from 'react-bootstrap';
import search from '@images/search.svg';
import Form from 'react-bootstrap/Form';
import '../admin.scss';
import trash from '@icons/trash.svg';
import view from '@icons/eye.png';
import cross from '@images/multiply.png';
import check from '@images/correct.png';
import { DataTable } from 'primereact/datatable';
import { Products } from './Data';
import { useNavigate } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import ConfirmationBox from '../../../components/ConfirmationBox/ConfirmationBox';

const CompaignManagement = () => {
    const [searchText, setSearchText] = useState('');
    const [dataTab, setDataTab] = useState('Compaigns');
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
            <div className="flex align-items-center gap-2 camp-name">
                <img src={rowData?.img} className="me-2" width="58" style={{ border: '1px solid #ccc', borderRadius: '10px' }} height="49" />
                <span>{rowData?.CompaignName}</span>
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
    const requestBodyTemplate = () => {
        return (
            <div className="actions-icons">
                <img
                    src={cross}
                    alt="delete icon"
                    className="cursor-pointer"
                    onClick={() => {
                        handleDialogOpen();
                    }}
                />
                <img src={check} alt="delete icon" className="cursor-pointer" onClick={() => toast.success('Campaign Approved')} />
            </div>
        );
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Campaign Management | ReRaiseIt </title>
            </Helmet>
            <div className="usermanage-main">
                <div className="home-table-section">
                    <Card>
                        <div className="user-tabs-btn mb-4">
                            <Button className={dataTab === 'Compaigns' && 'activetbtn'} onClick={() => setDataTab('Compaigns')}>
                                Campaigns
                            </Button>
                            <Button className={dataTab === 'Requests' && 'activetbtn'} style={{ position: 'relative' }} onClick={() => setDataTab('Requests')}>
                                Requests <span className="unreadcompaigns">05</span>
                            </Button>
                        </div>
                        <div className="user-manag-chat">
                            <Row>
                                <Col xs={12} sm={6} lg={9} className="user-tabs-btn mb-2">
                                    <div className="request-section d-flex justify-content-between">
                                        <div>
                                            <h2>All Campaigns {dataTab === 'Requests' && 'Requests'}</h2>
                                            <p> {dataTab === 'Requests' ? 'Pending approval' : 'All Active campaings'} </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="user-tabs-btn spacer-tabs ">
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
                            </Row>
                        </div>
                        <Row>
                            <DataTable
                                value={filteredData}
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
                                <Column header="Campaign name" body={candidateTemplate}></Column>
                                <Column field="FundraiserName" className="title" header="FundRaiser Name"></Column>
                                <Column field="description" className="title" header="Description"></Column>
                                <Column field="ObjectiveAmount" className="amount" header="Objective Amount"></Column>
                                <Column header="Actions" body={dataTab === 'Requests' ? requestBodyTemplate : actionBodyTemplate}></Column>
                            </DataTable>
                        </Row>
                    </Card>
                </div>
                {showDialog && (
                    <ConfirmationBox
                        show={showDialog}
                        onClose={handleDialogClose}
                        onConfirm={deleteCampaign}
                        title={dataTab === 'Compaigns' ? 'Delete Campaign' : 'Campaign Rejection'}
                        body={dataTab === 'Compaigns' ? 'Are you sure you want to delete this campaign?' : 'Are you sure you want to deny this campaign?'}
                    />
                )}
            </div>
        </React.Fragment>
    );
};

export default CompaignManagement;
