import React, { Component } from 'react';

import './PartnerCard.scss'

export default class PartnerCard extends Component {

    render() {
        return (
            <div className="PartnerCard">
                <div className="col-md-4">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <div className="PartnerCard__title">
                                { this.props.partner.name }
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="PartnerCard__details">
                                { this.props.partner.details }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}