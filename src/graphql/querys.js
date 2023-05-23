import { gql } from "@apollo/client";

const GET_APPETIZERS= gql`
    query{
        appetizers {
    id
    slug
    title
    image {
      url
    }
  }
}
`;

const GET_ALLSOUPS= gql`

        query{
            allSoups {
                    id
                    title
                    slug
                    price
                    image {
                    url
                    }
                }
        }

`;

const GET_MAINCOURSES=gql`
        query{
            mainCourses {
    id
    slug
    title
    image {
      url
    }
  }
        }
`;

const GET_DRINKS=gql`
        query{
            drinks {
    id
    slug
    title
  }
    image {
      url
    }
        }

`;

const GET_SALAD_MENU=gql`
        query{
            salads{
    id
    slug
    title
    price
    image {
      url
    }
  }
        }
`;


const GET_IRANIANFOODS_MENU=gql`
        query{
            iranianFoods{
    id
    slug
    title
    price
    image{
      url
    }
  }
        }
`;

const GET_FASTFOODS_MENU=gql`
        query{
            fastFoods{
    id
    slug
    title
    price
    image {
      url
    }
  }
        }
`;

export {GET_APPETIZERS, GET_ALLSOUPS, GET_MAINCOURSES , GET_DRINKS,GET_SALAD_MENU , GET_IRANIANFOODS_MENU ,GET_FASTFOODS_MENU} ;