import { styled } from "linaria/react";

const TextBlock = styled.div`
    grid-column: 5 / 12;

    h3 {
        margin-bottom: ${props => (props.largeHeader ? "2.6em" : "45px")};
    }

    > b {
        font-size: 1.1em;
        display: block;
        margin-bottom: 0.6em;
    }

    p:not(:last-child) {
        margin-bottom: ${props => (props.tight ? "1.7em" : "2.4em")};
    }

    p:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 1025px) {
        grid-column: 4 / 12;
    }

    @media (max-width: 880px) {
        grid-column: 5 / -1;
    }

    @media (max-width: 769px) {
        grid-column: 3 / 12;

        h3 {
            margin-bottom: ${props => (props.largeHeader ? "2.2em" : "35px")};
        }

        p {
            margin-bottom: ${props => (props.tight ? "1.5em" : "2.2em")};
        }
    }

    @media (max-width: 660px) {
        grid-column: 3 / -1;
    }

    @media (max-width: 580px) {
        grid-column: 1 / -1;
    }
`;

export default TextBlock;
