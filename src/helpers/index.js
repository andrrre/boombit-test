const groupBy = (array, key) =>
  array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});

const getData = (item, filter, group) =>
  item
    .filter((item) => item[filter] === group)
    .reduce((acc, item) => acc + item.count, 0);

export const processChartData = (data, filter) => {
  const filteredData = groupBy(data, "name");
  const labels = ["start", "interaction", "shop_click"];
  const groups = [...new Set(data.map((item) => item[filter]))];

  const datasets = groups.map((group, index) => ({
    label: group,

    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"][index],

    data: labels.map((label) =>
      filteredData[label] ? getData(filteredData[label], filter, group) : 0
    ),
  }));

  return {
    labels,
    datasets,
  };
};

export const firstLetterToUpperCase = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
