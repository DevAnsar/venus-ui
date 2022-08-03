const Icon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="rgba(149, 151, 161, 1)"
      className={className}
    >

        <circle cx="12" cy="12" r="10" fill="#1F2028"></circle>
        <path
          d="M17.7975 9.8685L13.4058 17.4753C13.273 17.7047 13.0822 17.8952 12.8526 18.0276C12.6229 18.16 12.3625 18.2297 12.0974 18.2297C11.8324 18.2297 11.572 18.16 11.3423 18.0276C11.1127 17.8952 10.9219 17.7047 10.7891 17.4753L10.0192 16.1428C10.0168 16.1395 10.0157 16.1354 10.0163 16.1313C10.0169 16.1272 10.0191 16.1235 10.0224 16.121C10.0257 16.1185 10.0298 16.1175 10.0339 16.118C10.038 16.1186 10.0417 16.1208 10.0442 16.1241C10.1815 16.2597 10.348 16.3621 10.531 16.4234C10.714 16.4847 10.9086 16.5034 11.0999 16.478C11.2912 16.4526 11.4741 16.3837 11.6347 16.2767C11.7953 16.1698 11.9294 16.0275 12.0265 15.8607L15.7029 9.48668C15.7998 9.31839 15.8567 9.13006 15.8692 8.93626C15.8816 8.74245 15.8493 8.54839 15.7747 8.36908C15.7001 8.18977 15.5853 8.03004 15.4391 7.90224C15.2928 7.77445 15.1192 7.68202 14.9315 7.63212C14.9273 7.63212 14.9234 7.63048 14.9205 7.62756C14.9175 7.62463 14.9159 7.62067 14.9159 7.61654C14.9159 7.6124 14.9175 7.60844 14.9205 7.60552C14.9234 7.6026 14.9273 7.60095 14.9315 7.60095H16.4899C16.7551 7.60124 17.0156 7.6713 17.2452 7.80409C17.4748 7.93689 17.6654 8.12775 17.7979 8.35751C17.9304 8.58726 18.0001 8.84784 18 9.11306C17.9999 9.37828 17.9301 9.63881 17.7975 9.8685V9.8685ZM12.5985 7.60095H11.0759C11.0728 7.60198 11.07 7.60396 11.0681 7.60662C11.0662 7.60928 11.0652 7.61248 11.0652 7.61576C11.0652 7.61904 11.0662 7.62224 11.0681 7.6249C11.07 7.62756 11.0728 7.62954 11.0759 7.63056C11.1784 7.67017 11.2712 7.73146 11.3479 7.81023C11.4246 7.88901 11.4834 7.98341 11.5202 8.08698C11.557 8.19056 11.5711 8.30087 11.5614 8.41038C11.5517 8.51989 11.5184 8.626 11.4639 8.72148L9.24469 12.5599C9.18736 12.6573 9.10918 12.7407 9.01578 12.8042C8.92237 12.8678 8.81606 12.9099 8.70447 12.9274C8.59287 12.945 8.47877 12.9377 8.37036 12.9059C8.26194 12.8742 8.1619 12.8188 8.07741 12.7438C8.07493 12.7405 8.07124 12.7383 8.06715 12.7378C8.06306 12.7372 8.0589 12.7382 8.0556 12.7407C8.05229 12.7432 8.0501 12.7469 8.04952 12.751C8.04893 12.7551 8.05 12.7592 8.05248 12.7625L8.8317 14.1153C8.91919 14.2671 9.04513 14.3932 9.19683 14.4808C9.34854 14.5685 9.52065 14.6146 9.69587 14.6146C9.87108 14.6146 10.0432 14.5685 10.1949 14.4808C10.3466 14.3932 10.4725 14.2671 10.56 14.1153L13.4634 9.09707C13.551 8.94535 13.5971 8.77325 13.597 8.59807C13.597 8.42289 13.5508 8.25081 13.4631 8.09915C13.3755 7.9475 13.2494 7.8216 13.0976 7.73415C12.9458 7.64669 12.7737 7.60075 12.5985 7.60095V7.60095ZM7.31377 7.60095C7.05393 7.60095 6.79993 7.678 6.58388 7.82236C6.36783 7.96672 6.19944 8.17191 6.10001 8.41197C6.00057 8.65203 5.97455 8.91618 6.02524 9.17103C6.07594 9.42588 6.20106 9.65997 6.3848 9.8437C6.56853 10.0274 6.80262 10.1526 7.05747 10.2033C7.31232 10.2539 7.57647 10.2279 7.81653 10.1285C8.05659 10.0291 8.26178 9.86067 8.40614 9.64462C8.5505 9.42857 8.62755 9.17457 8.62755 8.91473C8.62775 8.74214 8.59391 8.57121 8.52796 8.41172C8.46201 8.25224 8.36525 8.10733 8.24321 7.98529C8.12117 7.86326 7.97626 7.76649 7.81678 7.70054C7.65729 7.63459 7.48636 7.60075 7.31377 7.60095V7.60095Z"
          fill="url(#389)"
        ></path>
        <defs>
          <linearGradient
            id="389"
            x1="17.8465"
            y1="16.012"
            x2="4.12531"
            y2="6.69405"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#5433FF"></stop>
            <stop offset="0.5" stopColor="#20BDFF"></stop>
            <stop offset="1" stopColor="#5CFFA2"></stop>
          </linearGradient>
        </defs>
      </svg>
  );
};
export default Icon;