/**
 * Child Class 3 - formats (sorts/reduces) data and displays data
 * Stateless Component Class (could be turned into a function component )
 */

import React from 'react';

import { Obj } from './styleMe'; 
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Output = (props) => {

    console.log("4. sorts & displays results");
    console.log("searchStatus:" + props.searchStatus + " keyword: " + props.keyword);

    let classes = Obj.classes;
     
    if (props.movieData) {
        console.log("Output.js has received movieData props")
        const movieArray = props.movieData; 
        const noOfResults = props.noOfResults;
        let shortenedArray = movieArray.slice(0, noOfResults);
        let newArray = shortenedArray; 

        if (props.sortObject) {
            let sortObject = props.sortObject;
            console.log("searchStatus: " + props.searchStatus + " / Sort criteria: " + sortObject.userMessage)
            newArray = shortenedArray.sort(sortObject.comparator); 
        };

        const movies = newArray.map((movie, index) => {  
            return ( 
                <div key={movie.imdbID}>
                    <h5>Movie {index+1}: {movie.Title || "N/A"}</h5>
                    <h5>Year: {movie.Year || "N/A" } &nbsp; IMBD ID.: {movie.imdbID || "N/A" }</h5>
                    <img src={movie.Poster} alt="no graphic available"/>
                </div>
            )
        })

        return (

            <div>
                <ol>{movies}</ol>
            </div>
        )

    } else {   
        return (           
            <div>
                <Grid item xs={12} md={12} lg={12}> 
                    <Paper fullWidth className={classes.paper}>
                        <h5>the keyword is {props.keyword || '???'}</h5>
                        <h5>Press submit to return {props.noOfResults} results</h5>
                    </Paper>
                </Grid>
            </div>
        )
    };
} 

export default Output;

/*
                        <TextField 
                            id="filled-basic"
                            variant="filled"
                            label="lord">
                        </TextField>
*/