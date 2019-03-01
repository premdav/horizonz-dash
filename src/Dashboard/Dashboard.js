import React from 'react';
import Page from '../Shared/Page';
import PriceGrid from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import styled from 'styled-components';

const ChartGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px;
    grid-template-columns: 1fr 3fr;
`;

const Dashboard = () => {
    return (
        <Page name='dashboard'>
            <PriceGrid />
            <ChartGrid>
                <CoinSpotlight />
                <div>chart goes here</div>
            </ChartGrid>
        </Page>
        
    );
}

export default Dashboard;