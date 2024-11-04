import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Column } from 'primereact/column';
import { Row, Col, Button } from 'react-bootstrap';
import search from '@images/search.svg';
import Form from 'react-bootstrap/Form';
import '../cause.scss';
import './productsmanagement.scss';

import trash from '@icons/trash.svg';
import view from '@icons/eye.png';

import { DataTable } from 'primereact/datatable';

import { Products } from '../data';
import Card from '../../../components/Card/Card';
import check from '@images/correct.png';
import cross from '@images/multiply.png';
import flagicon from '@icons/flagicon.svg';
import { useNavigate } from 'react-router-dom';
import ConfirmationBox from '../../../components/ConfirmationBox/ConfirmationBox';
import { toast } from 'react-toastify';

const ProductsManagement = () => {
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
        toast.success('Product deleted successfully');
        setDialog(false);
    };
    const candidateTemplate = (rowData) => {
        return (
            <>
                <div className="flex align-items-center gap-2">
                    <img src={rowData?.img} className="me-2" width="58" style={{ border: '1px solid #ccc', borderRadius: '10px' }} height="49" />
                    <span
                        style={{
                            marginRight: '10px'
                        }}
                    >
                        {rowData?.productname}
                    </span>
                    {dataTab === 'flag' && <img src={flagicon} alt="flag" />}
                </div>
            </>
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
            <>
                {dataTab === 'pending' ? (
                    <div className="actions-icons">
                        <img src={cross} alt="delete icon" className="cursor-pointer" onClick={handleDialogOpen} />
                        <img
                            src={check}
                            alt="delete icon"
                            className="cursor-pointer"
                            onClick={() =>
                                navigate(`/fundraise/products_management/${rowData.id}`, {
                                    state: {
                                        status: dataTab
                                    }
                                })
                            }
                        />
                    </div>
                ) : (
                    <div className="actions-icons">
                        <img src={trash} alt="delete icon" className="cursor-pointer" onClick={handleDialogOpen} />
                        <img
                            src={view}
                            alt="view icon"
                            className="cursor-pointer"
                            onClick={() =>
                                navigate(`/fundraise/products_management/${rowData.id}`, {
                                    state: {
                                        status: dataTab
                                    }
                                })
                            }
                        />
                    </div>
                )}
            </>
        );
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>Product Management | ReRaiseIt</title>
            </Helmet>
            <Card>
                <div className="usermanage-main">
                    <div className="user-tabs-btn mb-4">
                        <Button className={`${dataTab === 'active' && 'activetbtn'} spacer-tabs`} onClick={() => setDataTab('active')}>
                            Products
                        </Button>
                        <Button className={dataTab === 'pending' && 'activetbtn'} style={{ position: 'relative' }} onClick={() => setDataTab('pending')}>
                            Product Requests <span className="unreadcompaigns">05</span>
                        </Button>
                        <Button className={dataTab === 'flag' && 'activetbtn'} style={{ position: 'relative' }} onClick={() => setDataTab('flag')}>
                            Flag Products <span className="unreadcompaigns">05</span>
                        </Button>
                    </div>
                    <div className="user-manag-chat">
                        <Row>
                            <Col xs={12} sm={6} lg={7} xl={8} className="user-tabs-btn mb-1">
                                <div className="request-section d-flex justify-content-between">
                                    <div>
                                        <h2> {dataTab === 'pending' ? 'Pending Requests' : 'All Published Products'}</h2>
                                        <p>{dataTab === 'pending' ? 'Pending for Approval' : 'Products Summary'}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} lg={5} xl={4} className="user-tabs-btn spacer-tabs  ">
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
                                <Column header="Product name" className="cause-title" body={candidateTemplate}></Column>
                                <Column field="price" className="cause-title" header="Price"></Column>
                                <Column field="campaign" header="Campaign Associated "></Column>
                                <Column header="Actions" body={actionBodyTemplate}></Column>
                            </DataTable>
                        </Row>
                    </div>
                </div>
            </Card>
            {showDialog && (
                <ConfirmationBox
                    show={showDialog}
                    onClose={handleDialogClose}
                    onConfirm={deleteCampaign}
                    title={dataTab === 'pending' ? 'Product Rejection' : 'Delete Product'}
                    body={dataTab === 'pending' ? 'Are you sure you want to deny this product?' : 'Are you sure you want to delete this product?'}
                />
            )}
        </React.Fragment>
    );
};

export default ProductsManagement;
