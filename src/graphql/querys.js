import { gql } from "@apollo/client";

const GET_APPETIZERS= gql`
    query{
        appetizers {
    id
    image {
      url
    }
    slug
    title
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

const GET_MAINCOURSES=gql`
        query{
            mainCourses {
    id
    image {
      url
    }
    slug
    title
  }
        }
`;

const GET_DRINKS=gql`
        query{
            drinks {
    id
    image {
      url
    }
    slug
    title
  }
        }

`;

export {GET_APPETIZERS, GET_ALLSOUPS, GET_MAINCOURSES , GET_DRINKS} ;