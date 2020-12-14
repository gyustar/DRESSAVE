import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import userData from './userData';
import { Animation } from '@devexpress/dx-react-chart';
import {
    Chart,
    BarSeries,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import productData from './productData';

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: '2vh',
        marginLeft: '-1vw'
    },
    chart: {
        width: '70vw',
        height: '40vh',
        maxHeight: '40vh',
        paddingTop: '1vh'
    },
    gridList: {
        maxWidth: '100%'
    },
    gridListTile: {
        minWidth: '20vw',
        minHeight: '20vw',
        maxWidth: '20vw',
        maxHeight: '20vw',
        cursor: 'pointer'
    },
    orderButton: {
        backgroundColor: '#8bc34a'
    }
}));

function ShopContent(props) {
    const [user, setUser] = useState({ name: '', level: 0, styles: [] });
    const classes = useStyles();

    const UserInfo = styled.div`
        width: 100%;
        height: 17vh;
        padding: 2vh 0 2vh 3vw;
        box-sizing: border-box;
    `;

    const UserStyle = styled.div`
        width: 100%;
        height: 50vh;
        padding: 2vh 0 2vh 3vw;
        box-sizing: border-box;
    `;

    const SaveBox = styled.div`
        width: 100%;
        padding: 2vh 0 2vh 3vw;
        box-sizing: border-box;
    `;

    const FinBox = styled.div`
        display: flex;
        justify-content: space-between;
        width: 40vw;
        height: 7vh;
        padding: 1vh 3vw 1vh 3vw;
        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 1rem;
        margin: 3vh 0 3vh 20vw;
    `;

    useEffect(() => {
        if (props.user == null) return;

        const user = userData[props.user.name];
        setUser(user);
    }, [props.user])

    return (
        <div>
            <UserInfo>
                <Button variant="outlined" className={classes.title}>회원 정보</Button>
                <Typography variant="h5">
                    {user.name}
                </Typography>
                <Typography variant="body1">
                    구독권등급: {user.level}
                </Typography>
            </UserInfo>
            <Divider />
            <UserStyle>
                <Button variant="outlined" className={classes.title}>스타일 정보</Button>
                <Chart data={user.styles} className={classes.chart}>
                    <ArgumentAxis />
                    <ValueAxis max={6} />
                    <BarSeries valueField='preference' argumentField='name' />
                    <Animation />
                </Chart>
            </UserStyle>
            <Divider />
            <SaveBox>
                <Button variant="outlined" className={classes.title}>세이브 박스</Button>
                <GridList className={classes.gridList}>
                    {productData.map(product => (
                        <GridListTile className={classes.gridListTile} key={product.title}>
                            <img src={product.image} alt={product.title} />
                            <GridListTileBar
                                title={product.title}
                                subtitle={<span>{product.point}P</span>}
                                actionIcon={<IconButton color="secondary"><CloseIcon /></IconButton>}
                            />
                        </GridListTile>
                    ))}
                </GridList>
                <FinBox>
                    <Typography variant="h5">{productData.reduce((point, product) => point + product.point, 0)} / 80 Point (주문/주문 가능 포인트)</Typography>
                    <Button variant="contained" className={classes.orderButton}>주문하기</Button>
                </FinBox>
            </SaveBox>
        </div>
    );
}

export default ShopContent;
