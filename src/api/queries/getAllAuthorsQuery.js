import gql from 'graphql-tag'
import client from '../../apollo'
import authorMainInformation from '../fragments/author';

const getAllAuthors = gql`
    query {
        authors { 
            ...authorMainInformation
            articles {
                id
            }
        }
    }
    ${authorMainInformation}
`

// query {
//     authors { 
//         id
//         username
//         firstName
//         articles {
//             id
//         }
//     }
// }

export default getAllAuthors;