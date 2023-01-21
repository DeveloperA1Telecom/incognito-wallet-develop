import React from 'react';
import Svg, { Path } from 'react-native-svg';

const PaperPlusIcon = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19.5083 2.5L17.5 0.491667C17.1889 0.178677 16.7663 0.00186066 16.325 0L6.66667 0C6.22464 0 5.80072 0.175595 5.48816 0.488155C5.17559 0.800716 5 1.22464 5 1.66667V7.73333C5.00189 7.78657 5.02334 7.83725 5.06023 7.87568C5.09712 7.91411 5.14688 7.9376 5.2 7.94167C5.50833 7.94167 6.03333 7.94167 6.44167 8.00833C6.47039 8.01064 6.49929 8.00696 6.52652 7.99753C6.55375 7.98809 6.57873 7.97311 6.59988 7.95353C6.62102 7.93395 6.63788 7.9102 6.64937 7.88377C6.66087 7.85734 6.66676 7.82882 6.66667 7.8V2.08333C6.66667 1.97283 6.71056 1.86685 6.7887 1.78871C6.86685 1.71057 6.97283 1.66667 7.08333 1.66667H16.15C16.2046 1.666 16.2588 1.67678 16.3091 1.69831C16.3593 1.71983 16.4045 1.75164 16.4417 1.79167L18.2083 3.55833C18.2484 3.59554 18.2802 3.64071 18.3017 3.69094C18.3232 3.74117 18.334 3.79535 18.3333 3.85V15C18.3333 15.1105 18.2894 15.2165 18.2113 15.2946C18.1332 15.3728 18.0272 15.4167 17.9167 15.4167H12.2C12.1515 15.418 12.105 15.4362 12.0685 15.4681C12.032 15.5001 12.0077 15.5438 12 15.5917C11.9236 16.0059 11.8121 16.413 11.6667 16.8083C11.6542 16.8392 11.6496 16.8727 11.6533 16.9058C11.657 16.9388 11.6689 16.9705 11.688 16.9978C11.707 17.0251 11.7325 17.0472 11.7623 17.0622C11.792 17.0771 11.8251 17.0844 11.8583 17.0833H18.3333C18.7754 17.0833 19.1993 16.9077 19.5118 16.5952C19.8244 16.2826 20 15.8587 20 15.4167V3.675C19.9981 3.23369 19.8213 2.81112 19.5083 2.5Z"
      fill="#4C8BF5"
    />
    <Path
      d="M5.41667 9.16669C4.34535 9.16669 3.2981 9.48437 2.40733 10.0796C1.51656 10.6748 0.822296 11.5207 0.412322 12.5105C0.00234696 13.5003 -0.104921 14.5894 0.104082 15.6401C0.313085 16.6908 0.828973 17.656 1.58651 18.4135C2.34404 19.171 3.3092 19.6869 4.35993 19.8959C5.41066 20.1049 6.49977 19.9977 7.48954 19.5877C8.4793 19.1777 9.32527 18.4835 9.92046 17.5927C10.5157 16.7019 10.8333 15.6547 10.8333 14.5834C10.8311 13.1474 10.2597 11.771 9.2444 10.7556C8.22905 9.74028 6.85258 9.16889 5.41667 9.16669ZM7.5 15.2084H6.25C6.19475 15.2084 6.14176 15.2303 6.10269 15.2694C6.06362 15.3084 6.04167 15.3614 6.04167 15.4167V16.6667C6.04167 16.8324 5.97582 16.9914 5.85861 17.1086C5.7414 17.2258 5.58243 17.2917 5.41667 17.2917C5.25091 17.2917 5.09194 17.2258 4.97473 17.1086C4.85752 16.9914 4.79167 16.8324 4.79167 16.6667V15.4167C4.79167 15.3614 4.76972 15.3084 4.73065 15.2694C4.69158 15.2303 4.63859 15.2084 4.58333 15.2084H3.33334C3.16757 15.2084 3.0086 15.1425 2.89139 15.0253C2.77418 14.9081 2.70834 14.7491 2.70834 14.5834C2.70834 14.4176 2.77418 14.2586 2.89139 14.1414C3.0086 14.0242 3.16757 13.9584 3.33334 13.9584H4.58333C4.63859 13.9584 4.69158 13.9364 4.73065 13.8973C4.76972 13.8583 4.79167 13.8053 4.79167 13.75V12.5C4.79167 12.3343 4.85752 12.1753 4.97473 12.0581C5.09194 11.9409 5.25091 11.875 5.41667 11.875C5.58243 11.875 5.7414 11.9409 5.85861 12.0581C5.97582 12.1753 6.04167 12.3343 6.04167 12.5V13.75C6.04167 13.8053 6.06362 13.8583 6.10269 13.8973C6.14176 13.9364 6.19475 13.9584 6.25 13.9584H7.5C7.66576 13.9584 7.82473 14.0242 7.94194 14.1414C8.05915 14.2586 8.125 14.4176 8.125 14.5834C8.125 14.7491 8.05915 14.9081 7.94194 15.0253C7.82473 15.1425 7.66576 15.2084 7.5 15.2084Z"
      fill="#4C8BF5"
    />
  </Svg>
);

export default PaperPlusIcon;
