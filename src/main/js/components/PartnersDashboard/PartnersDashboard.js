import React, { Component } from 'react';
import PartnerCard from '../PartnerCard'

import './PartnersDashboard.scss'

export default class PartnersDashboard extends Component {

    constructor() {
        super();

        this.partners = [
            {id: 1, name: "Partner 1", details: "The best partner ever"},
            {id: 2, name: "Partner 2", details: "Generous partner "},
            {id: 3, name: "Partner 3", details: "Partner with wide-spread networking"}
        ];
    }
    render() {
        const cards = this.partners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner}/>
        ));

        return (
            <div className="PartnersDashboard">
                <div className="row">
                    { cards }
                </div>
            </div>
        );
    }
}