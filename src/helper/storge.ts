const storge: { [key: string]: unknown } = {
  page: 1,
  create: {
    name: "",
    color: "#000000",
  },
  selectCar: 0,
  change: {
    create: {
      name: "",
      color: "#000000",
    },
  },
  first: 0,
  race: false,
};

function setStorge(obj: typeof storge) {
  localStorage.setItem("storge", JSON.stringify(obj));
}

function getStorge() {
  if (localStorage.length) {
    const obj = JSON.parse(localStorage.getItem("storge") as string);
    Object.keys(obj).forEach((key) => {
      storge[key] = obj[key];
    });
  }
}
export { storge, setStorge, getStorge };
