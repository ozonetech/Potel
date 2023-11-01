import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
  textSubtitle:string;
  textSubColor: string,
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../../assets/animations/Bulb.json'),
    text: 'Hello ...',
    textColor: '#f1c40f',
    textSubColor: '#f1c40f',
    backgroundColor: '#101111',
    textSubtitle:'In this world of uncertainty one thing we are certain about is the Power status of ****'
  },
  {
    id: 2,
    animation: require('../../assets/animations/Schedule.json'),
    text: 'Bawo Ni ...',
    textSubtitle: 'Introducing Scheduler: Your Personal Todo App for Efficient Daily Scheduling.',
    textColor: '#1e2169',
    textSubColor: '#192a56',
    backgroundColor: '#bae4fd',
  },
  {
    id: 3,
    animation: require('../../assets//animations/Location.json'),
    text: 'Ndewo ...',
    textColor: '#F15937',
    backgroundColor: '#faeb8a',
    textSubColor: '#F15937',
    textSubtitle:'We not only inform you of power outages and restoration status but also provide precise directions'
  },
   {
    id: 4,
    animation: require('../../assets//animations/Location.json'),
    text: 'Sannu ...',
    textColor: '#F15937',
    textSubColor: '#F15937',
    backgroundColor: '#8e44ad',
    textSubtitle:'Our Goal is to Maximize Productivity'
  },
];
const dataText=[
  {
    cardText:"hello"
  },
  {
    cardText:"hello"
  },
  {
    cardText:"hello"
  },
  {
    cardText:"hello"
  },
  {
    cardText:"hello"
  },
  {
    cardText:"hello"
  },
  {
    cardText:"hello"
  },
  {
    cardText:"hello"
  },
  {
    cardText:"hello"
  },
  {
    cardText:"hello"
  },
]

export default [data,dataText];
