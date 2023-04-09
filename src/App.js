
import { gql,useQuery } from '@apollo/client';

const QUERY=gql`
query{
  mainCourses {
    id
  }
  iranianFoods {
    image {
      url
    }
    price
    slug
    title
    description
  }
  fastFoods {
    image {
      url
    }
    price
    slug
    title
    description
  }
}

`;



function App() {

  const {loadin, data}=useQuery(QUERY);
  console.log(data);

  return (
    <div >
    app

    </div>
  );
}

export default App;
