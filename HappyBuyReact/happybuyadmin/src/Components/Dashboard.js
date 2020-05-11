import React from 'react'
import {  Alert } from 'antd';
function Dashboard() {
    return (
        <div>
            <Alert message="Success Text" type="success"  description="Detailed description and advice about successful copywriting." />
            <Alert message="Info Text" type="info"  description="Detailed description and advice about successful copywriting." />
            <Alert style={{ margin: '16px 0' }} message="Click the navigation above to switch:" />
        </div>
    )
}

export default Dashboard
