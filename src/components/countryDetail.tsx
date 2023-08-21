import { useQuery, gql } from "@apollo/client";

const QUERY_COUNTRY_BY_CODE = gql`
  query GetCountryByCode($code: ID!) {
    country(code: $code) {
      name
      currency
      languages {
        name
      }
    }
  }
`;

export const CountryDetail = ({ code }: { code: string }) => {
  // this is just like useEffect
  const { data, loading } = useQuery(QUERY_COUNTRY_BY_CODE, {
    variables: { code },
  });
  console.log("data", data);
  if (loading) {
    return <div>data is loading</div>;
  }
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          {!loading && data && (
            <div>
              country:{data.country.name}
              currency:{data.country.currency}
              {/* country:{countryDAta.country.name} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
