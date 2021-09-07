import React from 'react'

import PageHeader from "../../components/PageHeader";
import { Paper,makeStyles, Box } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CreateBioprocess from './CreateBioprocess';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Bioprocesses() {

    const classes = useStyles();

    return (
        <>
            <Box m={10}></Box>
            <PageHeader
                title="Añadir nuevo Bioproceso"
                subTitle="Debe llenar todos los campos"
                icon={<AddCircleOutlineIcon fontSize="large" 
                />}
            />
            <Paper className={classes.pageContent}>
                <CreateBioprocess />
            </Paper>
        </>
    )
}
