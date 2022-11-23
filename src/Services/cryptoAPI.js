import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  // 'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  // 'x-rapidapi-key': '5196a491d6msh06ce381c91135b7p19c2bejsn88b94beddba4',
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "0a380338b6msh45b9632c0c16a90p121be8jsn64a565db6fbb",
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl = 'https://coinranking1.p.rapidapi.com'

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?referenceCurrencyUui='6mUvpzCc2lFo'?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    getExchanges: builder.query({
      query: () => createRequest(`/coin/Qwsogvtv82FCd/exchanges`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;