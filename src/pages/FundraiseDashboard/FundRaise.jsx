import React, { useState } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import Card from '@components/Card/Card';
import { StatCard } from '@components/Home';
import { Helmet } from 'react-helmet';
import { Column } from 'primereact/column';
import './cause.scss';
import check from '@images/correct.png';
import cross from '@images/multiply.png';

import { DataTable } from 'primereact/datatable';

import { Products, statCards } from './data';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ConfirmationBox from '../../components/ConfirmationBox/ConfirmationBox';

const Cause = () => {
    const [compaign, setCompaign] = useState(Products);

    const [showDialog, setDialog] = useState(false);
    const handleDialogOpen = () => {
        setDialog(!showDialog);
    };
    const handleDialogClose = () => {
        setDialog(false);
    };

    const deleteCampaign = (rowData) => {
        setCompaign(compaign?.filter((val) => val?.id !== rowData?.id));
        toast.success('Product deleted successfully');
        setDialog(false);
    };
    const candidateTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img src={rowData?.img} className="me-2" width="58" style={{ border: '1px solid #ccc', borderRadius: '10px' }} height="49" />
                <span>{rowData?.productname}</span>
            </div>
        );
    };

    const actionBodyTemplate = () => {
        return (
            <div className="actions-icons">
                <img src={cross} alt="delete icon" className="cursor-pointer" onClick={handleDialogOpen} />
                <img src={check} alt="delete icon" className="cursor-pointer" />
            </div>
        );
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Dashboard | Fundraise</title>
            </Helmet>
            <Container fluid className="container-stats">
                <Row>
                    {statCards.map((stat) => (
                        <Col
                            key={stat.id}
                            xs={12}
                            md={4}
                            style={{
                                paddingLeft: 'unset'
                            }}
                        >
                            <Card cardType="small" className="p-0">
                                <StatCard {...stat} />
                            </Card>
                        </Col>
                    ))}
                </Row>
                <div className="home-table-section">
                    <Row>
                        <Card className="py-5">
                            <div className="request-section d-flex align-items-center justify-content-between">
                                <div className="d-flex flex-column">
                                    <h2>Product Requests</h2>
                                    <p>Pending Approvals</p>
                                </div>
                                <div>
                                    <Link to="/fundraise/products_management">
                                        <Button>See All</Button>
                                    </Link>
                                </div>
                            </div>
                            <DataTable
                                value={compaign}
                                className="adminhome-table mt-3"
                                resizableColumns={true}
                                responsiveLayout="scroll"
                                rows={5}
                                paginatorClassName="interview-tracker-paginator"
                                paginatorLeft
                                paginatorTemplate="PrevPageLink CurrentPageReport NextPageLink"
                                currentPageReportTemplate="Page {currentPage} of {totalPages}"
                            >
                                <Column header="Product name" className="cause-title " body={candidateTemplate}></Column>
                                <Column field="price" className="cause-title " header="Price"></Column>
                                <Column field="campaign" className="cause-title " header="Campaign Associated "></Column>
                                <Column header="Actions" body={actionBodyTemplate}></Column>
                            </DataTable>
                        </Card>
                    </Row>
                </div>
            </Container>
            {showDialog && <ConfirmationBox show={showDialog} onClose={handleDialogClose} onConfirm={deleteCampaign} title="Product Rejection" body="Are you sure you want to deny this product?" />}
        </React.Fragment>
    );
};

export default Cause;
