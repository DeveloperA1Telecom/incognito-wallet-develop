import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const PowerIcon = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M25.2577 13.0965C25.1601 12.8911 25.0059 12.7176 24.8132 12.5962C24.6204 12.4747 24.397 12.4102 24.1688 12.4103H18.3294L19.3388 5.38306C19.3794 5.12138 19.332 4.85366 19.2039 4.62162C19.0758 4.38959 18.8742 4.20628 18.6306 4.10029C18.3869 3.9943 18.1149 3.97158 17.8569 4.03566C17.5989 4.09975 17.3695 4.24704 17.2044 4.45458L6.36383 17.6501C6.21989 17.8259 6.12894 18.0387 6.10153 18.2639C6.07412 18.4891 6.11137 18.7174 6.20897 18.9223C6.30656 19.1272 6.4605 19.3004 6.65292 19.4218C6.84534 19.5431 7.06836 19.6076 7.29611 19.6079H13.1428L12.1455 26.6351C12.1093 26.8938 12.1589 27.1572 12.2868 27.3853C12.4147 27.6134 12.6139 27.7936 12.854 27.8987C13.0942 28.0038 13.3622 28.0279 13.6174 27.9674C13.8726 27.9069 14.1009 27.7651 14.2678 27.5636L25.1084 14.368C25.2513 14.1918 25.3412 13.9788 25.3676 13.7537C25.394 13.5287 25.3559 13.3008 25.2577 13.0965Z"
      fill="url(#paint0_linear_2554_9696)"
    />
    <Path
      d="M10.0497 10.0832C10.2176 9.91627 10.3507 9.71806 10.4415 9.49987C10.5324 9.28168 10.5791 9.0478 10.5791 8.8116C10.5791 8.5754 10.5324 8.34152 10.4415 8.12333C10.3507 7.90514 10.2176 7.70693 10.0497 7.54003L7.03847 4.54104C6.69597 4.2232 6.24296 4.05016 5.77489 4.05839C5.30681 4.06661 4.86022 4.25546 4.52919 4.58514C4.19816 4.91481 4.00854 5.35959 4.00028 5.82575C3.99202 6.29192 4.16577 6.74308 4.48491 7.08418L7.49618 10.0832C7.66376 10.2503 7.86279 10.3829 8.08187 10.4734C8.30095 10.5638 8.53579 10.6104 8.77296 10.6104C9.01013 10.6104 9.24497 10.5638 9.46405 10.4734C9.68313 10.3829 9.88215 10.2503 10.0497 10.0832Z"
      fill="url(#paint1_linear_2554_9696)"
    />
    <Path
      d="M27.5151 24.9341L24.5038 21.9351C24.1613 21.6172 23.7083 21.4442 23.2402 21.4524C22.7721 21.4607 22.3255 21.6495 21.9945 21.9792C21.6635 22.3089 21.4739 22.7536 21.4656 23.2198C21.4574 23.686 21.6311 24.1371 21.9502 24.4782L24.9615 27.4772C25.304 27.7951 25.757 27.9681 26.2251 27.9599C26.6932 27.9516 27.1398 27.7628 27.4708 27.4331C27.8018 27.1034 27.9914 26.6587 27.9997 26.1925C28.008 25.7263 27.8342 25.2752 27.5151 24.9341Z"
      fill="url(#paint2_linear_2554_9696)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2554_9696"
        x1={9.5}
        y1={25.5}
        x2={24}
        y2={7}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C0C0C0" />
        <Stop offset={1} stopColor="#F5F5F5" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_2554_9696"
        x1={27.5}
        y1={27.5}
        x2={4}
        y2={4}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1C55B8" />
        <Stop offset={1} stopColor="#1A73E8" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_2554_9696"
        x1={27.5}
        y1={28}
        x2={4}
        y2={4.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#1C55B8" />
        <Stop offset={1} stopColor="#1A73E8" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default PowerIcon;