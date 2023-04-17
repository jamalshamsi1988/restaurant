import { gql } from "@apollo/client";

const GET_APPETIZERS= gql`
    query{
       appetizers{
                title
                slug
            }
    }
`;

const GET_ALLSOUPS= gql`

        query{
            allSoups {
                    price
                    image {
                    url
                    }
                    title
                    slug
                }
        }

`;

export {GET_APPETIZERS, GET_ALLSOUPS} ;