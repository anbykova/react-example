import gql from 'graphql-tag';

const articleMainInformation = gql`
    fragment articleMainInformation on Article {
        id
        title
        description
        imageURL
    }
`;


export default articleMainInformation;