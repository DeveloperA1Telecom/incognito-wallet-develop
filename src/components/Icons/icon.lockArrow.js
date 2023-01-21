import React from 'react';
import Svg, { Path } from 'react-native-svg';

const LockArrowIcon = (props) => (
  <Svg
    width={21}
    height={18}
    viewBox="0 0 21 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.5018 4.73079C10.1847 4.72964 9.87048 4.7911 9.5772 4.91164C9.28391 5.03219 9.01731 5.20946 8.79268 5.43327C8.56806 5.65708 8.38983 5.92304 8.26821 6.21588C8.1466 6.50873 8.084 6.82271 8.084 7.1398V7.90192C8.08415 7.94466 8.07179 7.98652 8.04844 8.02232C8.02509 8.05812 7.99178 8.08631 7.9526 8.1034C7.79862 8.17058 7.6672 8.28062 7.57401 8.42041C7.48082 8.56019 7.42979 8.72383 7.427 8.89181V11.5198C7.427 11.7521 7.5193 11.975 7.68358 12.1392C7.84786 12.3035 8.07067 12.3958 8.30301 12.3958H12.683C12.9154 12.3958 13.1382 12.3035 13.3024 12.1392C13.4667 11.975 13.559 11.7521 13.559 11.5198V8.89181C13.5562 8.72383 13.5052 8.56019 13.412 8.42041C13.3188 8.28062 13.1874 8.17058 13.0334 8.1034C12.9942 8.08631 12.9609 8.05812 12.9376 8.02232C12.9142 7.98652 12.9019 7.94466 12.902 7.90192V7.1398C12.902 6.50241 12.6494 5.89099 12.1995 5.43946C11.7497 4.98794 11.1392 4.73311 10.5018 4.73079ZM10.5018 6.0448C10.7907 6.04711 11.0669 6.16349 11.2704 6.3686C11.4739 6.5737 11.588 6.8509 11.588 7.1398V7.7968C11.5881 7.8534 11.5662 7.90781 11.527 7.94864C11.4878 7.98947 11.4343 8.01354 11.3778 8.0158H9.62577C9.56769 8.0158 9.51198 7.99273 9.47091 7.95166C9.42984 7.91059 9.40677 7.85488 9.40677 7.7968V7.1398C9.40677 6.84939 9.52214 6.57087 9.72749 6.36551C9.93284 6.16016 10.2114 6.0448 10.5018 6.0448ZM10.5018 11.0818C10.3285 11.0818 10.1592 11.0304 10.0151 10.9342C9.87103 10.8379 9.75875 10.7011 9.69245 10.541C9.62615 10.381 9.6088 10.2048 9.6426 10.0349C9.6764 9.86498 9.75983 9.70889 9.88235 9.58638C10.0049 9.46387 10.1609 9.38044 10.3309 9.34664C10.5008 9.31284 10.6769 9.33019 10.837 9.39649C10.9971 9.46279 11.1339 9.57507 11.2301 9.71913C11.3264 9.86319 11.3778 10.0326 11.3778 10.2058C11.3778 10.4381 11.2855 10.661 11.1212 10.8252C10.9569 10.9895 10.7341 11.0818 10.5018 11.0818Z"
      fill="#1A73E8"
    />
    <Path
      d="M0.0597921 7.42014L2.32864 11.3972C2.36617 11.464 2.42089 11.5195 2.48713 11.558C2.55337 11.5965 2.6287 11.6166 2.70532 11.6162C2.76167 11.6222 2.81865 11.6168 2.87284 11.6002C2.92704 11.5837 2.97732 11.5563 3.02068 11.5198L6.20934 8.19102C6.26501 8.13228 6.30333 8.05926 6.32003 7.98007C6.33673 7.90087 6.33115 7.8186 6.30393 7.74238C6.27671 7.66616 6.22891 7.59898 6.16582 7.54828C6.10273 7.49758 6.02683 7.46535 5.94654 7.45518L4.19453 7.22742C4.15744 7.23213 4.11977 7.22644 4.08574 7.21097C4.0517 7.1955 4.02264 7.17086 4.00181 7.13981C3.98902 7.11084 3.98241 7.07951 3.98241 7.04783C3.98241 7.01616 3.98902 6.98483 4.00181 6.95585C4.38748 5.84207 5.04422 4.84173 5.91283 4.045C6.78144 3.24826 7.83463 2.68016 8.97751 2.39188C10.1553 2.11209 11.387 2.15745 12.5411 2.52311C13.6951 2.88876 14.7282 3.56099 15.53 4.468C15.7275 4.66248 15.9913 4.77485 16.2684 4.78244C16.5454 4.79004 16.815 4.69229 17.0229 4.50893C17.2307 4.32556 17.3612 4.07021 17.3882 3.79437C17.4152 3.51854 17.3365 3.24274 17.1681 3.0226C16.106 1.80719 14.7313 0.905837 13.1932 0.416306C11.6552 -0.0732253 10.0124 -0.132238 8.44314 0.245669C6.85271 0.648988 5.39632 1.46348 4.22008 2.60743C3.04385 3.75137 2.18914 5.18454 1.74172 6.76313C1.72936 6.8073 1.70095 6.84526 1.66206 6.86957C1.62317 6.89388 1.57659 6.90278 1.53148 6.89453L0.489034 6.77189C0.410021 6.76029 0.329339 6.77143 0.256426 6.80401C0.183514 6.83659 0.121386 6.88926 0.0773121 6.95585C0.0301447 7.0234 0.00341203 7.10309 0.000305376 7.18542C-0.00280127 7.26775 0.0178494 7.34923 0.0597921 7.42014Z"
      fill="#1A73E8"
    />
    <Path
      d="M20.935 10.8103C20.9775 10.7404 21 10.6601 21 10.5782C21 10.4963 20.9775 10.416 20.935 10.3461L18.6574 6.37776C18.6211 6.32005 18.5724 6.2712 18.5148 6.23482C18.4572 6.19843 18.3921 6.17543 18.3245 6.16752C18.257 6.15642 18.1879 6.16266 18.1235 6.18565C18.0592 6.20863 18.0017 6.24761 17.9565 6.29892L14.7942 9.61021C14.7367 9.66746 14.6971 9.74009 14.68 9.81936C14.6629 9.89862 14.6691 9.98114 14.6978 10.057C14.724 10.1343 14.7717 10.2026 14.8353 10.2538C14.8989 10.305 14.9758 10.337 15.057 10.3461L16.809 10.5563C16.8419 10.5595 16.8735 10.5708 16.901 10.5892C16.9285 10.6075 16.951 10.6323 16.9667 10.6614C16.9795 10.6904 16.9861 10.7217 16.9861 10.7534C16.9861 10.7851 16.9795 10.8164 16.9667 10.8454C16.581 11.9592 15.9243 12.9595 15.0556 13.7562C14.187 14.553 13.1338 15.1211 11.991 15.4094C10.8124 15.6891 9.5799 15.6428 8.4256 15.2755C7.2713 14.9083 6.2387 14.2338 5.43846 13.3245C5.24562 13.1072 4.97439 12.9755 4.68443 12.9583C4.39448 12.941 4.10954 13.0396 3.89231 13.2325C3.67508 13.4253 3.54335 13.6965 3.5261 13.9865C3.50885 14.2765 3.6075 14.5614 3.80033 14.7786C4.6386 15.7276 5.67044 16.486 6.82639 17.0028C7.98234 17.5196 9.23558 17.7827 10.5018 17.7746C16.3885 17.7746 18.78 12.7551 19.2618 11.0381C19.2743 10.987 19.3056 10.9424 19.3494 10.9132C19.3932 10.884 19.4463 10.8723 19.4983 10.8804L20.5232 11.0031C20.6025 11.0081 20.6818 10.9931 20.7538 10.9594C20.8257 10.9257 20.888 10.8744 20.935 10.8103Z"
      fill="#1A73E8"
    />
  </Svg>
);

export default LockArrowIcon;