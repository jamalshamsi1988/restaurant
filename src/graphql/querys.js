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

const GET_SALAD_MENU=gql`
        query{
            salads{
    id
    image {
      url
    }
    slug
    title
    price
  }
        }
`;


const GET_IRANIANFOODS_MENU=gql`
        query{
            iranianFoods{
    id
    image {
      url
    }
    slug
    title
    price
  }
        }
`;

const GET_FASTFOODS_MENU=gql`
        query{
            fastFoods{
    id
    image {
      url
    }
    slug
    title
    price
  }
        }
`;

export {GET_APPETIZERS, GET_ALLSOUPS, GET_MAINCOURSES , GET_DRINKS,GET_SALAD_MENU , GET_IRANIANFOODS_MENU ,GET_FASTFOODS_MENU} ;