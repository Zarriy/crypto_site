import Scrollbar from "smooth-scrollbar";
// Goal is to use Promises for getting data from other server.

// selecting the element.
const tableBody = document.querySelector(".table-body");

// how to get data form online
const url = "https://api.coinlore.net/api/tickers/";
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    const { data } = res;
    data.forEach((v) => {
      console.log(v);
      const price = v.price_usd;
      const arrPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      const img =
        "https://cryptoicons.org/api/icon/${v.symbol.toLowerCase()}/300";

      const img2 = `./files/icon/${v.symbol.toLowerCase()}@2x.png`;
      const html = ` <tr class="body-row">
      <td class="body-row-des"><div class="coin-no coin-row">${
        v.rank
      }</div></td>
      <td class="body-row-des table-heading-name"><div class="coin-name coin-row"><div class="coin-icon"><img src="${img2}" alt="${
        v.name
      }"/></div><div class="name">${v.name}<span>${
        v.symbol
      }</span></div></div></td>
      <td class="body-row-des table-heading-price"><div class="coin-price coin-row">$${arrPrice}</div></td>
      <td class="body-row-des table-heading-volume"><div class="coin-market coin-row">$${v.market_cap_usd
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></td>
      <td class="body-row-des table-heading-volume"><div class="coin-vol coin-row">${parseFloat(
        v.volume24
      )
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div></td>
      <td class="body-row-des table-heading-trend"><div class="coin-change coin-row ${
        v.percent_change_24h > 0 ? "green-trend" : "red-trend"
      }">${
        v.percent_change_24h > 0
          ? `+${v.percent_change_24h}`
          : v.percent_change_24h
      }</div></td>
  </tr>`;

      tableBody.innerHTML += html;
    });
  });

const options = {
  damping: 0.4,
  speed: 0.6,
};

Scrollbar.init(document.querySelector("#my-scrollbar"), options);
