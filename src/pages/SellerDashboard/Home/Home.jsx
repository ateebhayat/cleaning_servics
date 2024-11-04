import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import Card from '@components/Card/Card';
import { StatCard } from '@components/Home';
import { Helmet } from 'react-helmet';
import { Column } from 'primereact/column';
import '../seller.scss';
import { DataTable } from 'primereact/datatable';
import { Products, statCards } from './Data';
import { Link } from 'react-router-dom';

const Home = () => {
    const candidateTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <img src={rowData?.img} className="me-2" width="58" style={{ border: '1px solid #ccc', borderRadius: '10px' }} height="49" />
                <span>{rowData?.productname}</span>
            </div>
        );
    };

    const statusTemplate = (rowData) => {
        return <span className={` cause-title ${rowData?.status === 'Active' ? 'status-text-green' : 'status-text-red'}`}>{rowData?.status}</span>;
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
                            xl={3}
                            lg={6}
                            md={6}
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
                                    <Link to="/product_listing">
                                        <Button>See All</Button>
                                    </Link>
                                </div>
                            </div>
                            <DataTable
                                value={Products}
                                className="adminhome-table mt-3"
                                resizableColumns={true}
                                responsiveLayout="scroll"
                                rows={5}
                                paginatorClassName="interview-tracker-paginator"
                                paginatorLeft
                                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                                currentPageReportTemplate="{currentPage}-{totalPages} of List"
                            >
                                <Column header="Product name" className="cause-title " body={candidateTemplate}></Column>
                                <Column field="price" className="cause-title " header="Price"></Column>
                                <Column field="campaign" className="cause-title" header="Campaign Associated "></Column>
                                <Column header="Status" className="cause-title status-text" body={statusTemplate} field="status"></Column>
                            </DataTable>
                        </Card>
                    </Row>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Home;
