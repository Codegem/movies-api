import { keyframes } from "styled-components";

export const FirstSpanOpen = keyframes`
    0%{
        width: 3rem;
        margin-left: 0;
    }
    50%{
        position: absolute;
        width: 2.5rem;
        margin-left: 1.5rem;
        transform: rotate(-45deg);
    }
    100%{
        position: absolute;
        width: 2.5rem;
        margin-left: 0;
        transform: rotate(-45deg);
    }
`;

export const SecondSpanOpen = keyframes`
    0%{
        width: 2rem;
        margin-left: 1rem;
    }
    50%{
        width: 3rem;
        margin-left: 0;
    }
    100%{
        opacity: 0;
    }
`;

export const LastSpanOpen = keyframes`
    0%{
        width: 1.5rem;
        margin-left: 1.5rem;
    }
    50%{
        position: absolute;
        width: 2.5rem;
        margin-left: 1rem;
        transform: rotate(45deg);
    }
    100%{
        position: absolute;
        width: 2.5rem;
        margin: 0;
        transform: rotate(45deg);
    }
`;

export const FirstSpanClose = keyframes`
    0%{
        position: absolute;
        width: 2.5rem;
        margin-left: 0;
        transform: rotate(-45deg);
    }
    50%{
        width: 2.5rem;
        margin-left: 1.5rem;
    }
    100%{
        width: 3rem;
        margin-left: 0;
    }

`;

export const SecondSpanClose = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        width: 2rem;
        margin-left: 1rem;
    }

`;

export const LastSpanClose = keyframes`
    0%{
        position: absolute;
        width: 2.5rem;
        margin: 0;
        transform: rotate(45deg);
    }
    50%{
        width: 2.5rem;
        margin-left: 1rem;
    }
    100%{
        width: 1.5rem;
        margin-left: 1.5rem;
    }

`;
