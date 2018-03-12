import gql from 'graphql-tag';

const  authorMainInformation = gql`
    fragment authorMainInformation on Author {
        id
        firstName
        username
    }
`;

export default authorMainInformation;
