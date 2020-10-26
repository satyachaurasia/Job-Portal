import React from 'react';
import { Route } from 'react-router-dom';
import Content from './Components/Content'
import JobDetail from './Components/JobDetail';


const BaseRouter = () =>(
    <div>
        <Route exact path='/' component={Content}/>
        <Route exact path='/:companySlug/:jobSlug' component={JobDetail}/>
    </div>
);

export default BaseRouter;