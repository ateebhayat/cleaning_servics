import React, { useState } from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import './card.scss';
import { useNavigate } from 'react-router-dom';
import save from '@icons/save.png';
import savefill from '@icons/save-fill.png';
import david from '@images/david.png';

const ProductCard = ({ product, clickable = true, bookmarkIcon = false }) => {
    const navigate = useNavigate();
    const [boookmark, setbookMark] = useState(false);
    const handleCardClick = () => {
        if (clickable) {
            navigate(`/product/${product.id}`);
        }
    };
    return (
        <>
            <Card className="product-card my-2" onClick={handleCardClick}>
                <Card.Img
                    variant="top"
                    src={product.img}
                    style={{
                        height: '226px'
                    }}
                />
                {bookmarkIcon && (
                    <div className="bookmark">
                        {boookmark ? <img src={save} alt="bookmark" onClick={() => setbookMark(!boookmark)} /> : <img src={savefill} onClick={() => setbookMark(!boookmark)} alt="bookmark" />}
                    </div>
                )}

                <Card.Body>
                    <Card.Title className="title">{product.title}</Card.Title>
                    <h3>{product.price}</h3>
                    <Card.Text className="desc">{product.description}</Card.Text>
                    <div className="catogory-box">{product.category}</div>
                    {product.type === 'target' && (
                        <p className="mb-3 goal">
                            <span className="percentage"> 93% </span> of target/goal has completed in this campaign.
                        </p>
                    )}
                    {product.type === 'fixed' && (
                        <>
                            <ProgressBar className="bar" now={90} />
                            <div className="d-flex align-items-center justify-content-between my-2 mb-4 target">
                                <p>
                                    <span> Raised:</span> $8500
                                </p>
                                <p className="text-end">
                                    <span> Goal:</span> $1,0000
                                </p>
                            </div>
                        </>
                    )}
                    {product.type === 'ongoing' && (
                        <div className="ongoing">
                            <span className=" ">Campaign is on-going...</span>
                        </div>
                    )}
                    <div className="d-flex align-items-center py-2 product-author">
                        <img src={david} width={43} height={43} />
                        <span>Donald Mathew</span>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductCard;
