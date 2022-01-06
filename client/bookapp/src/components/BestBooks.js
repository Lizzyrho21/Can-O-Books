import { useAuth0 } from "@auth0/auth0-react";

const BestBooks = () => {
const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
              <h1>No Books available  😔 </h1>
            </div>
          )
    )
}

export default BestBooks
