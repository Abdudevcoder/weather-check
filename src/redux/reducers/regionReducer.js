const initialState = [
  {
    id: 1,
    name: "Andijan",
    lat: 40.7829,
    lon: 72.3451
  },
  {
    id: 2,
    name: "Bukhara",
    lat: 39.7750,
    lon: 64.4158
  },
  {
    id: 3,
    name: "Fergana",
    lat: 40.3894,
    lon: 71.7869
  },
  {
    id: 4,
    name: "Jizzakh",
    lat: 40.1150,
    lon: 67.8447
  },
  {
    id: 5,
    name: "Kashkadarya",
    lat: 39.4547,
    lon: 66.7950
  },
  {
    id: 6,
    name: "Khorezm",
    lat: 41.5083,
    lon: 60.6167
  },
  {
    id: 7,
    name: "Namangan",
    lat: 41.0000,
    lon: 71.6667
  },
  {
    id: 8,
    name: "Navoiy",
    lat: 40.0847,
    lon: 65.3792
  },
  {
    id: 9,
    name: "Samarkand",
    lat: 39.6272,
    lon: 66.9722
  },
  {
    id: 10,
    name: "Sirdaryo",
    lat: 40.1333,
    lon: 67.9333
  },
  {
    id: 11,
    name: "Surkhandarya",
    lat: 38.5500,
    lon: 68.7667
  },
  {
    id: 12,
    name: "Tashkent",
    lat: 41.3111,
    lon: 69.2944
  },
  {
    id: 13,
    name: "Tashkent City",
    lat: 41.3111,
    lon: 69.2944
  },
  {
    id: 14,
    name: "Republic of Karakalpakstan",
    lat: 41.5083,
    lon: 60.6167
  }
];

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default regionReducer;
