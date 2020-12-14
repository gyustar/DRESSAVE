import React from "react";
import styled from "styled-components";
import MainTable from './MainTable';
import background from './images/background.jpg';
import earth from './images/earth.png';

function MainContent() {
    const Main = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 0;
        height: 100vh;
    `;

    const Content = styled.div`
        position: fixed;
        top: 160px;
        left: 650px;
    `;

    const Header = styled.h1`
        font-size: 3.125rem;
        margin: 10px;
        text-align: center;
        color: white;
    `;

    const Earth = styled.img`
        width: 800px;
        position: fixed;
        top: 110px;
        left: -30px;
    `;

    return (
        <Main>
            <img src={background} alt='bg' style={{ width: '100%', 'vertical-align': 'middle' }} />
            <Earth src={earth} alt='earth' />
            <Content>
                <Header>패션산업이 해치는 지구,</Header>
                <Header>빈티지 패션으로 살려주세요.</Header>
                <MainTable />
            </Content>
        </Main>
    );
}

export default MainContent;