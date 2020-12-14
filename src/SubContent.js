import React, {useState} from "react";
import styled from "styled-components";
import Grow from '@material-ui/core/Grow';

function SubContent(props) {
    const [checked] = useState(true);

    const Main = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 0;
        height: 100vh;
        background-color: black;
    `;

    const Content = styled.div`
        position:absolute;
        top: 50%;
        left: 50%;
        display: flex;
        justify-content: space-between;
        width: 80vw;
        height: 50vh;
        margin: -25vh 0 0 -40vw;
    `;

    const Picture = styled.img`
        width: 30vw;
        height: 50vh;
        padding: 0 0 0 2vw;
        box-sizing: border-box;
    `;

    const Typo = styled.div`
        width: 46vw;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10vh 0 10vh 0;
        box-sizing: border-box;
    `;

    return (
        <Main>
            <Content>
                <Grow in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}
                >
                    <Picture src={props.content.img} alt={props.content.name} />
                </Grow>
                <Grow
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 2000 } : {})}
                >
                    <Typo>
                        {props.content.headerText}
                        {props.content.bodyText}
                    </Typo>
                </Grow>
            </Content>
        </Main>
    );
}

export default SubContent;