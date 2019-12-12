import { styled } from "linaria/react";

const TextBlock = styled.div`
    grid-column: 5 / 12;

    h3 {
        margin-bottom: 50px;
    }

    > b {
        font-size: 1.1em;
        display: block;
        margin-bottom: 0.84em;
    }

    p {
        margin-bottom: ${props => (props.tight ? "1.7em" : "2.4em")};
    }

    @media (--for-up-to-large-tablet) {
        grid-column: 4 / 12;
    }

    @media (--for-up-to-tablet) {
        grid-column: 3 / 12;

        h3 {
            margin-bottom: 35px;
        }

        p {
            margin-bottom: ${props => (props.tight ? "1.5em" : "2.2em")};
        }
    }

    @media (max-width: 660px) {
        grid-column: 3 / -1;
    }

    @media (--for-up-to-small-tablet) {
        grid-column: 1 / -1;
    }
`;

export default TextBlock;
