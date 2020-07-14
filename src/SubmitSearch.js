/**
 * Child 3 - renders search/refresh buttons
 * Stateless Functional Component 
 */

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const SubmitSearch = (props) => {
    console.log("3. search / refresh buttons");
    
    if (!props.searchStatus) {
        return ( 
            <div>
                <Grid item xs={12} sm={4} lg={4} align="right">
                    <Paper align="right">
                        <Button fullWidth variant="contained" style={{ color: "white", backgroundColor: "mediumvioletred" }} onClick={props.handleClick}>Search</Button> 
                    </Paper>
                </Grid>
            </div>
        ) 
    } else {
        return (
            <div>
                <Grid item xs={12} sm={4} lg={4} >
                    <Paper>
                        <Button fullWidth variant="contained" color="primary" className="Refresh" onClick={()=>window.location.reload(false)}>Refresh</Button>
                    </Paper>
                </Grid>
            </div>
        )
    };
}

export default SubmitSearch;

SubmitSearch.propTypes = {
    searchStatus: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
}; 

