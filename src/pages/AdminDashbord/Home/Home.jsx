import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Card from '@components/Card/Card';
import { StatCard } from '@components/Home';
import { Helmet } from 'react-helmet';
import { Column } from 'primereact/column';
import check from '@images/correct.png';
import '../admin.scss';
import cross from '@images/multiply.png';
import { DataTable } from 'primereact/datatable';
import { Products, statCards } from './Data';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import ConfirmationBox from '../../../components/ConfirmationBox/ConfirmationBox';

const Home = () => {
    // const [searchText, setSearchText] = useState('');
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

    const actionBodyTemplate = () => {
        return (
            <div className="actions-icons">
                <img src={cross} alt="delete icon" className="cursor-pointer" onClick={handleDialogOpen} />
                <img src={check} alt="delete icon" className="cursor-pointer" onClick={() => toast.success('Campaign Approved')} />
            </div>
        );
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Dashboard | ReRaiseit</title>
            </Helmet>
            <Row>
                {statCards.map((stat) => (
                    <Col
                        style={{
                            paddingLeft: 'unset'
                        }}
                        key={stat.id}
                        xs={12}
                        md={6}
                        lg={6}
                        xl={3}
                    >
                        <Card cardType="small" className="p-0">
                            <StatCard {...stat} />
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="home-table-section">
                <Row>
                    <Card>
                        <div className="request-section d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column">
                                <h2>Campaign Requests</h2>
                                <p>Pending Approvals</p>
                            </div>
                            <div>
                                <Link to="/compaign_management">
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
                            <Column header="Campaign name" body={candidateTemplate}></Column>
                            <Column field="FundraiserName" className="title" header="FundRaiser Name"></Column>
                            <Column field="description" className="title" header="Description"></Column>
                            <Column field="ObjectiveAmount" className="amount" header="Objective Amount"></Column>
                            <Column header="Actions" body={actionBodyTemplate}></Column>
                        </DataTable>
                    </Card>
                </Row>
            </div>
            {showDialog && <ConfirmationBox show={showDialog} onClose={handleDialogClose} onConfirm={deleteCampaign} title="Campaign Rejection" body="Are you sure you want to deny this campaign?" />}
        </React.Fragment>
    );
};

export default Home;
