import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({
    table: {
        width: '600px',
    }
});

const questions = [
    '환경을 해치지 않는가?',
    '더 저렴한가?',
    '더 유니크한가?',
    '지속 가능한가?'
];

export default function MainTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} elevation={10} className={classes.table}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">패스트 패션</TableCell>
                        <TableCell align="center">빈티지 패션</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {questions.map(question => 
                        <TableRow key={question}>
                            <TableCell component="th" scope="row">
                                {question}
                            </TableCell>
                            <TableCell align="center"><ClearIcon color='error' /></TableCell>
                            <TableCell align="center"><DoneIcon color='primary' /></TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}