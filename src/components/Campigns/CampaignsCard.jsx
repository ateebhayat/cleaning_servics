import React from 'react';
import { Card } from 'react-bootstrap';
import './campaigncard.scss';
import { useNavigate } from 'react-router-dom';
const CampaignsCard = ({ campaign }) => {
    const navigate = useNavigate();
    return (
        <div className="campaign-container" onClick={() => navigate(`/campaign/${campaign.id}`)}>
            <Card className="campaign-card">
                <Card.Img variant="top" src={campaign.image} />
                <Card.Body>
                    <Card.Title>{campaign.title}</Card.Title>
                    <Card.Title className="meta-title">{campaign.metaTitle}</Card.Title>
                    <Card.Text>{campaign.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CampaignsCard;
