import React, {useState} from "react";
import MainContent from './MainContent';
import SubContent from './SubContent';
import { makeStyles } from '@material-ui/core/styles';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import shoppingImg from './images/shopping.png';
import recommendImg from './images/recommend.png';
import serviceImg from './images/service.png';
import styled from "styled-components";

const useStyles = makeStyles({
    nextArrow: {
        width: '50px',
        height: '50px',
        color: 'lightgrey',
        cursor: 'pointer',
        position: 'fixed',
        top: '80vh',
        left: '48vw'
    },
});

function MainPage() {
    const [contentNum, setContentNum] = useState(0);
    const classes = useStyles();

    const Header = styled.h1`
        font-size: 3.125rem;
        margin: 10px;
        color: white;
    `;

    const Body = styled.h6`
        font-size: 1.5rem;
        color: white;
        margin: 10px;
        font-weight: normal;
    `;

    const shoppingContent = {
        name: 'shopping',
        headerText: <Header>전국 빈티지 의류를 한 곳에,<br />구독 후 더 저렴하게 받아보세요.</Header>,
        bodyText: <Body>분산된 빈티지 매장들을 통합해, 다양한 제품들을 한 곳에서<br />보여드려요. 정액권 구독 시 더 저렴하게 받아볼 수 있답니다.</Body>,
        img: shoppingImg
    };

    const recommendContent = {
        name: 'recommend',
        headerText: <Header>좋아하실 만한 아이템으로<br />먼저 보여드릴게요.</Header>,
        bodyText: <Body>원하는 스타일을 찾으려 이리저리 돌아다니지 않아도 돼요. <br />실루엣, 소재, 스타일, 색상 등 찜과 구매 목록을 분석해<br />추천해드릴게요.</Body>,
        img: recommendImg
    };

    const serviceContent = {
        name: 'service',
        headerText: <Header>매번 직접 고르기 힘들다면,<br />알아서 보내드릴수도 있어요.</Header>,
        bodyText: <Body>시간이 부족한가요? 추천 아이템이 마음에 드셨나요?<br />매달 이대로 보내드릴게요.</Body>,
        img: serviceImg
    };

    const contents = [<MainContent />, <SubContent content={shoppingContent} />,
        <SubContent content={recommendContent} />, <SubContent content={serviceContent} />];

    const turnNextContent = () => {
        setContentNum(cNum => {
            cNum++;
            if (cNum === contents.length) cNum = 0;
            return cNum;
        });
    }

    return (
        <div>
            {contents[contentNum]}
            <DoubleArrowIcon onClick={turnNextContent} className={classes.nextArrow} />
        </div>
    );
}

export default MainPage;