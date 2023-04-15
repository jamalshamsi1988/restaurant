import { gql } from "@apollo/client";

const GET_APPETIZERS= gql`
    query{
        iranianFoods{
                image{
                url
                }
                title
                slug
            }
    }
`;

export {GET_APPETIZERS} ;