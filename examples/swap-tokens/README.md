This is a Cosmos App project bootstrapped with [`create-cosmos-app`](https://github.com/cosmology-tech/create-cosmos-app).

## Getting Started

First, install the packages and run the development server:

```bash
yarn && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More 

### Chain Registry

The npm package for the Official Cosmos chain registry. Get chain and token data for you application.

* https://github.com/cosmology-tech/chain-registry

### Cosmology Videos

Checkout more videos for how to use various frontend tooling in the Cosmos!

* https://cosmology.zone/learn

### Cosmos Kit

A wallet connector for the Cosmos ⚛️

* https://github.com/cosmology-tech/cosmos-kit

### Telescope

A "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs. Telescope is used to generate libraries for Cosmos blockchains. Simply point to your protobuffer files and create developer-friendly Typescript libraries for teams to build on your blockchain.

* https://github.com/cosmology-tech/telescope

🎥 [Checkout the Telescope video playlist](https://www.youtube.com/watch?v=n82MsLe82mk&list=PL-lMkVv7GZwyQaK6bp6kMdOS5mzosxytC) to learn how to use `telescope`!

### CosmWasm TS Codegen

The quickest and easiest way to interact with CosmWasm Contracts. @cosmwasm/ts-codegen converts your CosmWasm smart contracts into dev-friendly TypeScript classes so you can focus on shipping code.

* https://github.com/CosmWasm/ts-codegen

🎥 [Checkout the CosmWasm/ts-codegen video playlist](https://www.youtube.com/watch?v=D_A5V2PfNLA&list=PL-lMkVv7GZwz1KO3jANwr5W4MoziruXwK) to learn how to use `ts-codegen`!


## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


### data sample 
```
// What pairs looks like:
// [
//   {
//     "poolId": "1",
//     "poolAddress": "osmo1mw0ac6rwlp5r8wapwk3zs6g29h8fcscxqakdzw9emkne6c8wjp9q0t3v8t",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "3",
//     "poolAddress": "osmo1c9gj5nwxhuh2gz7wwg4r8e8tw8v7ggy9lh2hu7kkdgh0t450754qh9cpvd",
//     "baseName": "akt",
//     "baseSymbol": "AKT",
//     "baseAddress": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "4",
//     "poolAddress": "osmo1lzwv0glchfcw0fpwzdwfdsepmvluv6z6eh4qunxdml33sj06q3yq7xwtde",
//     "baseName": "akt",
//     "baseSymbol": "AKT",
//     "baseAddress": "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
//     "quoteName": "atom",
//     "quoteSymbol": "ATOM",
//     "quoteAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
//   },
//   {
//     "poolId": "9",
//     "poolAddress": "osmo19fm8jtzyw8ujsnsqm5rznudn8fhhkykjh4ra8rvx9lsfslw2pc2sp36h3r",
//     "baseName": "cro",
//     "baseSymbol": "CRO",
//     "baseAddress": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "10",
//     "poolAddress": "osmo1krp38zzc3zz5as9ndqkyskhkzv6x9e30ckcq5g4lcsu5wpwcqy0sa3dea2",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "cro",
//     "quoteSymbol": "CRO",
//     "quoteAddress": "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1"
//   },
//   {
//     "poolId": "481",
//     "poolAddress": "osmo1y3ptmx57hvu7au6s9r3fxq00856896unkdyqaump7vedag248l0qc03asg",
//     "baseName": "eur",
//     "baseSymbol": "EEUR",
//     "baseAddress": "ibc/5973C068568365FFF40DEDCF1A1CB7582B6116B731CD31A12231AE25E20B871F",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "497",
//     "poolAddress": "osmo1h7yfu7x4qsv2urnkl4kzydgxegdfyjdry5ee4xzj98jwz0uh07rqdkmprr",
//     "baseName": "juno",
//     "baseSymbol": "JUNO",
//     "baseAddress": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "498",
//     "poolAddress": "osmo1tusadtwjnzzyakm94t5gjqr4dlkdcp63hctlql6xvslvkf7kkdws5lfyxc",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "juno",
//     "quoteSymbol": "JUNO",
//     "quoteAddress": "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED"
//   },
//   {
//     "poolId": "560",
//     "poolAddress": "osmo10d8ddsydag5xrnl2kacmkjtdxddstvz4jvraqqpf6ss2n7fy6lkqw4sx2f",
//     "baseName": "ust",
//     "baseSymbol": "USTC",
//     "baseAddress": "ibc/BE1BB42D4BE3C30D50B68D7C41DB4DFCE9678E8EF8C539F6E6A9345048894FCC",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "571",
//     "poolAddress": "osmo1y6gvkz0qu93h7zgkrrhr6fqye5ny9ddpm9az2l5kjr0mmw9n48mqpmcnnv",
//     "baseName": "bcna",
//     "baseSymbol": "BCNA",
//     "baseAddress": "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "572",
//     "poolAddress": "osmo108scuudnnhe70xuwa2etuyxffexexak6rflvsczj9n4fhrz92ajs9zudge",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "bcna",
//     "quoteSymbol": "BCNA",
//     "quoteAddress": "ibc/D805F1DA50D31B96E4282C1D4181EDDFB1A44A598BFF5666F4B43E4B8BEA95A5"
//   },
//   {
//     "poolId": "584",
//     "poolAddress": "osmo1l265e7cug3tk3eugex8hpq2adk5drdecxzp6lsytn6dls6jpjkssvp9zqe",
//     "baseName": "scrt",
//     "baseSymbol": "SCRT",
//     "baseAddress": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "585",
//     "poolAddress": "osmo1amh63u7vgtrak5rmetdjrl67jhl6rate05r792ywyxzp5jt6eq7sx5uphr",
//     "baseName": "scrt",
//     "baseSymbol": "SCRT",
//     "baseAddress": "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
//     "quoteName": "atom",
//     "quoteSymbol": "ATOM",
//     "quoteAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2"
//   },
//   {
//     "poolId": "586",
//     "poolAddress": "osmo18lw3t03dmyv6975kzjgacezvaafflz5aepmqrqqc8y494gwwwpmq9vm7p8",
//     "baseName": "med",
//     "baseSymbol": "MED",
//     "baseAddress": "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "587",
//     "poolAddress": "osmo1y3g6lwd5p72z5uxgm4z6wy7asyg53wg83np7mg3cz2wnf9zhl69q8shlnd",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "med",
//     "quoteSymbol": "MED",
//     "quoteAddress": "ibc/3BCCC93AD5DF58D11A6F8A05FA8BC801CBA0BA61A981F57E91B8B598BF8061CB"
//   },
//   {
//     "poolId": "604",
//     "poolAddress": "osmo1thscstwxp87g0ygh7le3h92f9ff4sel9y9d2eysa25p43yf43rysk7jp93",
//     "baseName": "stars",
//     "baseSymbol": "STARS",
//     "baseAddress": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "611",
//     "poolAddress": "osmo1ejaswj8lcyh0zgnes8zt45e0w7tqm4mrxr74sfwgpdh72shp58ms4fdqsk",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "stars",
//     "quoteSymbol": "STARS",
//     "quoteAddress": "ibc/987C17B11ABC2B20019178ACE62929FE9840202CE79498E29FE8E5CB02B7C0A4"
//   },
//   {
//     "poolId": "678",
//     "poolAddress": "osmo10venxtvdglryxkdmvjr8wa6n3ugja40rewddlxtg0pr30vmkf47sllgslg",
//     "baseName": "usdc",
//     "baseSymbol": "USDC",
//     "baseAddress": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "681",
//     "poolAddress": "osmo1u66wkjthdjxnavklpef7yzasdrvvqhckmhkqsw8uwlad3uaktr3qvny8k4",
//     "baseName": "fet",
//     "baseSymbol": "FET",
//     "baseAddress": "ibc/5D1F516200EE8C6B2354102143B78A2DEDA25EDE771AC0F8DC3C1837C8FD4447",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "722",
//     "poolAddress": "osmo102ryca72c5ktx2ruzt8ag6mvtczdqeuvm82l09vd5uq597e7hn7sqgw28l",
//     "baseName": "evmos",
//     "baseSymbol": "EVMOS",
//     "baseAddress": "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "725",
//     "poolAddress": "osmo1uxqg4sr2yqvamc96n4kwkgna6nmmgtypfdn2gjhvwgymuunq3qlswyrdhg",
//     "baseName": "INJ",
//     "baseSymbol": "INJ",
//     "baseAddress": "ibc/64BA6E31FE887D66C6F8F31C7B1A80C7CA179239677B4088BB55F5EA07DBE273",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "796",
//     "poolAddress": "osmo1rmhusclghxyvyxr9kq4nuum9pvsgplfpuvq0x5d0ufaaxrwkefqsardn6n",
//     "baseName": "cudos",
//     "baseSymbol": "CUDOS",
//     "baseAddress": "ibc/E09ED39F390EC51FA9F3F69BEA08B5BBE6A48B3057B2B1C3467FAAE9E58B021B",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "803",
//     "poolAddress": "osmo1tg2k5rxex7zhzh3rcvmy6a2yfvw8446ezk7utz8j80vmkrpjve2qljc6hk",
//     "baseName": "atom",
//     "baseSymbol": "ATOM",
//     "baseAddress": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
//     "quoteName": "statom",
//     "quoteSymbol": "stATOM",
//     "quoteAddress": "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901"
//   },
//   {
//     "poolId": "806",
//     "poolAddress": "osmo1x0ptme5tp8r2qw8gsypg3qftfwfpt2hdk4jyvp7gryywmg5l9fsqvhs8fk",
//     "baseName": "strd",
//     "baseSymbol": "STRD",
//     "baseAddress": "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "808",
//     "poolAddress": "osmo16cr2suh8wxyd3rdj24s7qe4kr2lnjxmm0495j07tl06jclnwfa2qqs58qg",
//     "baseName": "seasy",
//     "baseSymbol": "SEASY",
//     "baseAddress": "ibc/18A676A074F73B9B42DA4F9DFC8E5AEF334C9A6636DDEC8D34682F52F1DECDF6",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "812",
//     "poolAddress": "osmo1ag2w5l8av9msvzhks4vyd920r9lzaesekes6yg3vykp9fch5n22sk6er50",
//     "baseName": "axl",
//     "baseSymbol": "AXL",
//     "baseAddress": "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "832",
//     "poolAddress": "osmo1q7ul5yz2ma5mjj8vkf5njjz859wk4u90ley2emfx8th4xyx6fg7se0z4hn",
//     "baseName": "jkl",
//     "baseSymbol": "JKL",
//     "baseAddress": "ibc/8E697BDABE97ACE8773C6DF7402B2D1D5104DD1EEABE12608E3469B7F64C15BA",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "907",
//     "poolAddress": "osmo1752ysawy2adr7td9an30a8pkk8ngrvcq3tan08lvnar3s7f82y5s4dt8fs",
//     "baseName": "mars",
//     "baseSymbol": "MARS",
//     "baseAddress": "ibc/573FCD90FACEE750F55A8864EF7D38265F07E5A9273FA0E8DAFD39951332B580",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "960",
//     "poolAddress": "osmo1wpmkhdwjermkp3u6cg6zdjw4vwvd0awjc63m7e86fptra9cjqw0qcp6vtj",
//     "baseName": "whale",
//     "baseSymbol": "WHALE",
//     "baseAddress": "ibc/EDD6F0D66BCD49C1084FB2C35353B4ACD7B9191117CE63671B61320548F7C89D",
//     "quoteName": "osmo",
//     "quoteSymbol": "OSMO",
//     "quoteAddress": "uosmo"
//   },
//   {
//     "poolId": "972",
//     "poolAddress": "osmo10fczpczlj82fm8ce6cnun3j46gganul9dtxj506ldpxnekszjyuq4snyk4",
//     "baseName": "regen",
//     "baseSymbol": "REGEN",
//     "baseAddress": "ibc/1DCC8A6CB5689018431323953344A9F6CC4D0BFB261E88C9F7777372C10CD076",
//     "quoteName": "nct",
//     "quoteSymbol": "NCT",
//     "quoteAddress": "ibc/A76EB6ECF4E3E2D4A23C526FD1B48FDD42F171B206C9D2758EF778A7826ADD68"
//   },
//   {
//     "poolId": "1041",
//     "poolAddress": "osmo1v5dnjxx2a9dm9v7vnza3wphakrz9tnfhtcm5at0chflmsnkfl40qxx7fjn",
//     "baseName": "usdc",
//     "baseSymbol": "USDC",
//     "baseAddress": "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
//     "quoteName": "nls",
//     "quoteSymbol": "NLS",
//     "quoteAddress": "ibc/D9AFCECDD361D38302AA66EB3BAC23B95234832C51D12489DC451FA2B7C72782"
//   }
// ]
```
## Related

Checkout these related projects:

* [@cosmology/telescope](https://github.com/cosmology-tech/telescope) Your Frontend Companion for Building with TypeScript with Cosmos SDK Modules.
* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) Convert your CosmWasm smart contracts into dev-friendly TypeScript classes.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Everything from token symbols, logos, and IBC denominations for all assets you want to support in your application.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) Experience the convenience of connecting with a variety of web3 wallets through a single, streamlined interface.
* [create-cosmos-app](https://github.com/cosmology-tech/create-cosmos-app) Set up a modern Cosmos app by running one command.
* [interchain-ui](https://github.com/cosmology-tech/interchain-ui) The Interchain Design System, empowering developers with a flexible, easy-to-use UI kit.
* [starship](https://github.com/cosmology-tech/starship) Unified Testing and Development for the Interchain.

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.zone/validator)


## Disclaimer

AS DESCRIBED IN THE LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating this software will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
