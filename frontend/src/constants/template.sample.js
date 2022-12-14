// id
// garment
// name
// measurement

const templates = [
  {
    id: "1234-5678-0",
    garment: "shirt",
    name: "template 1",
    measurement: [
      {
        id: "5f9f1b9b9c9d3c0b8c8b4568",
        label: "chest",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b4569",
        label: "waist",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b456a",
        label: "hip",
        value: "100",
        unit: "inch",
      },
    ],
  },
  {
    id: "1234-5678-1",
    garment: "shirt",
    name: "template 2",
    measurement: [
      {
        id: "5f9f1b9b9c9d3c0b8c8b456c",
        label: "chest",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b456d",
        label: "waist",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b456e",
        label: "hip",
        value: "100",
        unit: "inch",
      },
    ],
  },
  {
    id: "1234-5678-3",
    garment: "shirt",
    name: "template 3",
    measurement: [
      {
        id: "5f9f1b9b9c9d3c0b8c8b4570",
        label: "chest",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b4571",
        label: "waist",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b4572",
        label: "hip",
        value: "100",
        unit: "inch",
      },
    ],
  },
  {
    id: "1234-5678-4",
    garment: "shirt",
    name: "template 4",
    measurement: [
      {
        id: "5f9f1b9b9c9d3c0b8c8b4574",
        label: "chest",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b4575",
        label: "waist",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b4576",
        label: "hip",
        value: "100",
        unit: "inch",
      },
    ],
  },
  {
    id: "1234-5678-5",
    garment: "shirt",
    name: "template 5",
    measurement: [
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "type",
        value: "style 1,style 2,style 3",
        unit: "option",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b4578",
        label: "chest",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b4579",
        label: "waist",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "hip",
        value: "100",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "sleeve",
        value: "quarter,half,full",
        unit: "option",
      },
    ],
  },
  {
    id: "1234-5678-5",
    garment: "kandura",
    name: "template 5",
    measurement: [
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "type",
        value: "arabi, kuwaiti, kathari, jallabi, mughassir",
        unit: "option",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b4578",
        label: "lenght",
        value: "60",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b4579",
        label: "bottom",
        value: "32",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "b-width",
        value: "3 1/4",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "shoulder",
        value: "19 3/4",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "neck",
        value: "16 1/2",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "h-lenght",
        value: "25 1/2",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "regal",
        value: "8 3/4",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "h-bottom",
        value: "6 1/8",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "chest",
        value: "41",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "k-lose",
        value: "24 1/4",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "ch-lose",
        value: "24 1/2",
        unit: "inch",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "sleeve",
        value: "bath, bithunbath",
        unit: "option",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "stitch",
        value: "inside, outside",
        unit: "option",
      },
      {
        id: "5f9f1b9b9c9d3c0b8c8b457a",
        label: "lisaan",
        value: "bt, t-saada",
        unit: "option",
      },
    ],
  },
]

export default templates
