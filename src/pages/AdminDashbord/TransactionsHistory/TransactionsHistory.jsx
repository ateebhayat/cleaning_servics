import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Column } from 'primereact/column';
import search from '@images/search.svg';
import Form from 'react-bootstrap/Form';
import '../admin.scss';
import { DataTable } from 'primereact/datatable';
import { Products } from './Data';
import Card from '../../../components/Card/Card';

const TransactionsHistory = () => {
    const [searchText, setSearchText] = useState('');
    // const [compaign, setCompaign] = useState(Products);

    // const filteredData = Products && Products?.filter((item) => item?.jobId !== null && Object?.values(item?.jobId)?.some((field) => String(field).toLowerCase()?.includes(searchText.toLowerCase())));

    const actionBodyTemplate = () => {
        return (
            <div className="actions-icons">
                <span>Completed</span>
            </div>
        );
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Transaction History | ReRaiseIt </title>
            </Helmet>

            <div className="home-table-section">
                <Card>
                    <Row>
                        <Col xs={12} sm={6} lg={8} xl={9} className="user-tabs-btn mb-2">
                            <div>
                                <h2>All Transactions</h2>
                                <p>Transactions Summary</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={4} xl={3} className="user-tabs-btn mt-2 spacer-tabs">
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

                    <Row>
                        <DataTable
                            value={Products}
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
                            <Column field="ObjectiveAmount" className="transaction-amount" header="Amount"></Column>
                            <Column field="Date" className="transaction-table-content" header="Date"></Column>
                            <Column field="BuyerName" className="transaction-table-content" header="Buyer Name"></Column>
                            <Column field="SellerName" className="transaction-table-content" header="Seller Name"></Column>
                            <Column field="product" className="transaction-table-content" header="Product Name"></Column>
                            <Column header="Status" className="transaction-amount" body={actionBodyTemplate}></Column>
                        </DataTable>
                    </Row>
                </Card>
            </div>
        </React.Fragment>
    );
};

export default TransactionsHistory;
