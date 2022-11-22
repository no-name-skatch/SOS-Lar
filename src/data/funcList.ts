import { ImageProps } from "react-native";

export interface Funcionario {
  name: string;
  image: ImageProps;
  description: string;
  atuationArea: string;
  contact: string;
}

const imgF1 = require('../assets/pedreiros.jpg');
const imgF2 = require('../assets/design.jpg');

export const pedreiros: Funcionario[] = [
  {
    name: "José",
    image: imgF1,
    description: "Muito prazer",
    atuationArea: "Sorocaba",
    contact: "(15) 991234567"  
  },
  
  {
    name: "Vinicius",
    image: imgF1,
    description: "Muito prazer",
    atuationArea: "São Paulo",
    contact: "(15) 991234567"  
  },
  
  {
    name: "Felipe",
    image: imgF1,
    description: "Muito prazer",
    atuationArea: "Campinas",
    contact: "(15) 991234567"  
  },
];

export const designers: Funcionario[] = [
  {
    name: "Victória",
    image: imgF2,
    description: "Olá",
    atuationArea: "Brasil",
    contact: "(15) 991876543"
  },

  {
    name: "Pedro",
    image: imgF2,
    description: "Olá",
    atuationArea: "Brasil",
    contact: "(15) 991876543"
  }  
]

export const cuidadores: Funcionario[] = [
  {
    name: "Victória",
    image: imgF2,
    description: "Olá",
    atuationArea: "Brasil",
    contact: "(15) 991876543"
  },

  {
    name: "Pedro",
    image: imgF2,
    description: "Olá",
    atuationArea: "Brasil",
    contact: "(15) 991876543"
  }
]

export const eletricista: Funcionario[] = [
  {
    name: "Victória",
    image: imgF2,
    description: "Olá",
    atuationArea: "Brasil",
    contact: "(15) 991876543"
  },

  {
    name: "Pedro",
    image: imgF2,
    description: "Olá",
    atuationArea: "Brasil",
    contact: "(15) 991876543"
  }
]

export const pintores: Funcionario[] = [
  {
    name: "Victória",
    image: imgF2,
    description: "Olá",
    atuationArea: "Brasil",
    contact: "(15) 991876543"
  },

  {
    name: "Pedro",
    image: imgF2,
    description: "Olá",
    atuationArea: "Brasil",
    contact: "(15) 991876543"
  }
]