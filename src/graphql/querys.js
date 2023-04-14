import { gql } from "@apollo/client";

const GET_MENUS = gql`

    query{
        appetizers{
                image {
                url
                }
  }
    }

`;
export {GET_MENUS} ;