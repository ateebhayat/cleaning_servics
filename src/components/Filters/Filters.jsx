import React, { useEffect, useState } from 'react';
import './filters.scss';
import { Accordion, Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Range, getTrackBackground } from 'react-range';
import { useLocation } from 'react-router-dom';
const Filters = ({ productCategory, campaignCategory, priceToggle, campaignFilter }) => {
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;
    const [values, setValues] = useState([50]);
    const [showMoreCampaigns, setShowMoreCampaigns] = useState(false);
    const [showMoreProducts, setShowMoreProducts] = useState(false);
    const [campCategory, setCampaingCategory] = useState(campaignCategory);
    const [campaignCheckboxes, setCampaignCheckboxes] = useState(
        campaignCategory.reduce((checkboxes, campaign) => {
            checkboxes[campaign.id] = false;
            return checkboxes;
        }, {})
    );

    // const [urlFilter, setUrlFilter] = useState('');

    let location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const filterValue = searchParams.get('filter');
        // setUrlFilter(filterValue);
        setCampaignCheckboxes((prevCheckboxes) =>
            Object.keys(prevCheckboxes).reduce((checkboxes, key) => {
                checkboxes[key] = false;
                return checkboxes;
            }, {})
        );

        // Check the checkbox based on the filter value
        const checkedCampaign = campaignCategory.find((campaign) => campaign.categoryName === filterValue);
        if (checkedCampaign) {
            setCampaignCheckboxes((prevCheckboxes) => ({
                ...prevCheckboxes,
                [checkedCampaign.id]: true
            }));
        }
        const updatedCampaignCategory = campaignCategory.map((campaign) => ({
            ...campaign,
            checked: filterValue === campaign.categoryName
        }));

        setCampaingCategory(updatedCampaignCategory);
    }, [location.search, campaignCategory, productCategory]);

    const handleToggleCampaigns = () => {
        setShowMoreCampaigns(!showMoreCampaigns);
    };

    const handleToggleProducts = () => {
        setShowMoreProducts(!showMoreProducts);
    };
    return (
        <div className="filters">
            <div className="d-flex align-items-center justify-content-between filter-margin">
                <h3>Filters</h3>
                <Button className="clear-btn">Clear All</Button>
            </div>

            {/* Campaigna category Section */}
            <Card className="card-wrapper">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{campaignFilter}</Accordion.Header>
                        <Accordion.Body>
                            {campCategory.map((campaign) => (
                                <Row className="mb-3" key={campaign.id}>
                                    <Col className="d-flex align-items-center filter-checkbox ">
                                        <Form.Check
                                            type="checkbox"
                                            checked={campaignCheckboxes[campaign.id]}
                                            onChange={() =>
                                                setCampaignCheckboxes((prevCheckboxes) => ({
                                                    ...prevCheckboxes,
                                                    [campaign.id]: !prevCheckboxes[campaign.id]
                                                }))
                                            }
                                        />
                                        <span className="category-name"> {campaign.categoryName}</span>
                                    </Col>
                                    <Col className="text-end">
                                        <span className="count">({`${campaign.count}`})</span>
                                    </Col>
                                </Row>
                            ))}
                            {!showMoreCampaigns && (
                                <button className="show-btn" type="button" onClick={handleToggleCampaigns}>
                                    Show more
                                </button>
                            )}

                            {showMoreCampaigns && (
                                <>
                                    {campaignCategory.map((campaign) => (
                                        <Row className="mb-3" key={campaign.id}>
                                            <Col className="d-flex align-items-center filter-checkbox ">
                                                <Form.Check type="checkbox" />
                                                <span className="category-name"> {campaign.categoryName}</span>
                                            </Col>
                                            <Col className="text-end">
                                                <span className="count">({`${campaign.count}`})</span>
                                            </Col>
                                        </Row>
                                    ))}
                                    <button className="show-btn" type="button" onClick={handleToggleCampaigns}>
                                        Show less
                                    </button>
                                </>
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <hr />
                {/* Products category Section */}
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Products Categories </Accordion.Header>
                        <Accordion.Body>
                            {productCategory.slice(0, 5).map((product) => (
                                <Row className="mb-3" key={product.id}>
                                    <Col className="d-flex align-items-center filter-checkbox ">
                                        <Form.Check type="checkbox" />
                                        <span className="category-name"> {product.categoryName}</span>
                                    </Col>
                                    <Col className="text-end">
                                        <span className="count">({`${product.count}`})</span>
                                    </Col>
                                </Row>
                            ))}
                            {!showMoreProducts && (
                                <button className="show-btn" type="button" onClick={handleToggleProducts}>
                                    Show more
                                </button>
                            )}

                            {showMoreProducts && (
                                <>
                                    {productCategory.slice(0, 5).map((product) => (
                                        <Row className="mb-3" key={product.id}>
                                            <Col className="d-flex align-items-center filter-checkbox ">
                                                <Form.Check type="checkbox" />
                                                <span className="category-name"> {product.categoryName}</span>
                                            </Col>
                                            <Col className="text-end">
                                                <span className="count">({`${product.count}`})</span>
                                            </Col>
                                        </Row>
                                    ))}
                                    <button className="show-btn" type="button" onClick={handleToggleProducts}>
                                        Show less
                                    </button>
                                </>
                            )}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {priceToggle && (
                    <>
                        <hr />
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Price </Accordion.Header>
                                <Accordion.Body className="price-body">
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            flexWrap: 'wrap',
                                            margin: '2em 0em'
                                        }}
                                    >
                                        <Range
                                            values={values}
                                            step={STEP}
                                            min={MIN}
                                            max={MAX}
                                            onChange={(newValues) => setValues(newValues)}
                                            renderTrack={({ props, children }) => (
                                                <div
                                                    onMouseDown={props.onMouseDown}
                                                    onTouchStart={props.onTouchStart}
                                                    style={{
                                                        ...props.style,
                                                        height: '10px',
                                                        display: 'flex',
                                                        width: '100%'
                                                    }}
                                                >
                                                    <div
                                                        ref={props.ref}
                                                        style={{
                                                            height: '6.25px',
                                                            width: '100%',
                                                            borderRadius: '4px',
                                                            background: getTrackBackground({
                                                                values,
                                                                colors: ['#3A4980', '#EDEEF3'],
                                                                min: MIN,
                                                                max: MAX
                                                            }),
                                                            alignSelf: 'center'
                                                        }}
                                                    >
                                                        {children}
                                                    </div>
                                                </div>
                                            )}
                                            renderThumb={({ props }) => (
                                                <div
                                                    {...props}
                                                    style={{
                                                        ...props.style,
                                                        height: '19.03px',
                                                        width: '18.75px',
                                                        borderRadius: '100px',
                                                        padding: 10,
                                                        backgroundColor: '#fff',

                                                        border: '2.5px solid #1A064F',

                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            ...props.style,
                                                            height: '15px',
                                                            width: '15px',
                                                            borderRadius: '100px',
                                                            backgroundColor: '#1A064F',

                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        />
                                    </div>
                                    <div className="d-flex price-inputs ">
                                        <input type="number" min="0" placeholder="$0" />
                                        <input type="number" min="0" placeholder="$5000" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </>
                )}
            </Card>
        </div>
    );
};

export default Filters;
