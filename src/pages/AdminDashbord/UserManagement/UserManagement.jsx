import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import search from '@images/search.svg';
import { Helmet } from 'react-helmet';
import { Column } from 'primereact/column';
import '../admin.scss';
import trash from '@icons/trash.svg';
import view from '@icons/eye.png';
import { toast } from 'react-toastify';
import { DataTable } from 'primereact/datatable';
import { Products } from './Data';
import { Row, Col, Button } from 'react-bootstrap';
import Card from '../../../components/Card/Card';
import ConfirmationBox from '../../../components/ConfirmationBox/ConfirmationBox';

const UserManagement = () => {
    const [searchText, setSearchText] = useState('');
    const [dataTab, setDataTab] = useState('User');
    const [compaign, setCompaign] = useState(Products);
    const [showDialog, setDialog] = useState(false);
    const handleDialogOpen = () => {
        setDialog(!showDialog);
    };
    const handleDialogClose = () => {
        setDialog(false);
    };
    const deleteCompaign = (rowData) => {
        setCompaign(compaign?.filter((val) => val?.id !== rowData?.id));
        toast.info('User Deleted');
        setDialog(false);
    };
    const candidateTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2 user-typo">
                <img src={rowData?.img} className="me-2" width="58" style={{ border: '1px solid #ccc', borderRadius: '50%' }} height="49" />
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

    const actionBodyTemplate = () => {
        return (
            <div className="actions-icons">
                <img
                    src={trash}
                    alt="delete icon"
                    className="cursor-pointer"
                    onClick={() => {
                        handleDialogOpen();
                    }}
                />
                <img src={view} alt="delete icon" className="cursor-pointer" />
            </div>
        );
    };

    const emailTemplate = (rowData) => {
        return (
            <div className="user-typo">
                <span>{rowData?.email}</span>
            </div>
        );
    };
    const dateTemplate = (rowData) => {
        return (
            <div className="user-typo">
                <span>{rowData?.date}</span>
            </div>
        );
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>User Management | ReRaiseIt</title>
            </Helmet>
            <div className="usermanage-main">
                <Card>
                    <div className="user-manag-chat mb-3">
                        <Row>
                            <Col xs={12} sm={6} lg={8} xl={9} className="user-tabs-btn mb-2">
                                <Button className={dataTab === 'User' && 'activetbtn'} onClick={() => setDataTab('User')}>
                                    User
                                </Button>
                                <Button className={dataTab === 'FundRaiser' && 'activetbtn'} onClick={() => setDataTab('FundRaiser')}>
                                    FundRaiser
                                </Button>
                            </Col>
                            <Col xs={12} sm={6} lg={4} xl={3} className="user-tabs-btn spacer-tabs ">
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

                    <div className="home-table-section">
                        <DataTable
                            value={compaign?.length && filteredData}
                            className="adminhome-table mt-3"
                            resizableColumns={true}
                            responsiveLayout="scroll"
                            paginator
                            rows={10}
                            paginatorClassName="interview-tracker-paginator"
                            paginatorLeft
                            paginatorTemplate="PrevPageLink CurrentPageReport NextPageLink"
                            currentPageReportTemplate="Page {currentPage} of {totalPages}"
                        >
                            <Column header="Name" body={candidateTemplate}></Column>
                            <Column header="Email" body={emailTemplate}></Column>
                            <Column header="Joined Date" body={dateTemplate}></Column>
                            <Column header="Actions" body={actionBodyTemplate}></Column>
                        </DataTable>
                    </div>
                </Card>
            </div>

            {showDialog && <ConfirmationBox show={showDialog} onClose={handleDialogClose} onConfirm={deleteCompaign} title="Delete User" body="Are you sure you want to delete this user?" />}
        </React.Fragment>
    );
};

export default UserManagement;
