import { useQuery, useLazyQuery, gql } from "@apollo/client";

const QUERY_ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      name
      code
      currencies
      capital
      emoji
    }
  }
`;

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

export const DisplayData = () => {
  const { data, loading } = useQuery(QUERY_ALL_COUNTRIES);
  const [fetchCountry, { data: countryDAta }] = useLazyQuery(
    QUERY_COUNTRY_BY_CODE
  );

  if (loading) {
    return <div>data is loading</div>;
  }
  return (
    <div>
      displayData
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          {data.countries.map(
            (
              item: {
                name: string;
                currencies: string;
                capital: string;
                emoji: string;
                code: string;
              },
              index: number
            ) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    fetchCountry({ variables: { code: item.code } });
                  }}
                >
                  <div>{item.name}</div>
                  <div>{item.code}</div>
                </div>
              );
            }
          )}
        </div>
        <div>
          {!loading && countryDAta && (
            <div>
              country:{countryDAta.country.name}
              currency:{countryDAta.country.currency}
              {/* country:{countryDAta.country.name} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
