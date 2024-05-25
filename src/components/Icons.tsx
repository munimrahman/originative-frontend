export interface IconsProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  strokeClassName?: string;
}

export const EditIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "14"}
    height={height || "14"}
    viewBox="0 0 14 14"
    fill={fill || "none"}
    className={className}
  >
    <path
      d="M8.8749 3.48989L9.69256 2.6722C10.1442 2.2206 10.8764 2.2206 11.328 2.6722C11.7796 3.12379 11.7796 3.85598 11.328 4.30758L10.5103 5.12528M8.8749 3.48989L4.07181 8.293C3.46205 8.90276 3.15716 9.20761 2.94956 9.57914C2.74195 9.95066 2.53308 10.8279 2.33334 11.6668C3.17223 11.4671 4.0495 11.2582 4.42103 11.0506C4.79255 10.843 5.09743 10.5381 5.7072 9.92838L10.5103 5.12528M8.8749 3.48989L10.5103 5.12528"
      stroke={stroke || "black"}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.41666 11.6665H9.91666"
      stroke={stroke || "black"}
      stroke-linecap="round"
    />
  </svg>
);

export const DownArrowIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "16"}
    height={height || "16"}
    viewBox="0 0 16 16"
    fill={fill || "none"}
    className={className}
  >
    <path
      d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
      fill={fill || "white"}
    />
    <path
      d="M5.525 6.6665L8.085 9.33317L10.645 6.6665"
      stroke={stroke || "black"}
    />
  </svg>
);

export const RightArrowIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "16"}
    height={height || "16"}
    viewBox="0 0 16 16"
    fill={fill || "none"}
    className={className}
  >
    <path
      d="M13.3333 8.5H2.66667"
      stroke={stroke || "black"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 11.8332C10 11.8332 13.3333 9.37824 13.3333 8.49984C13.3333 7.62144 10 5.1665 10 5.1665"
      stroke={stroke || "black"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const ArrowUpRightIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 24 24"
    fill={fill || "none"}
  >
    <g clip-path="url(#clip0_2_1580)">
      <path
        d="M6 18L18 6M18 6H8.25M18 6V15.75"
        stroke={stroke || "#0F172A"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2_1580">
        <rect
          width={width || "24"}
          height={height || "24"}
          fill={fill || "white"}
        />
      </clipPath>
    </defs>
  </svg>
);

export const ThumbsUpIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "29"}
    height={height || "29"}
    viewBox="0 0 29 29"
    fill={fill || "none"}
    className={className}
  >
    <path
      d="M2.83331 15.0833C2.83331 13.7946 3.87798 12.75 5.16665 12.75C7.09964 12.75 8.66665 14.317 8.66665 16.25V20.9167C8.66665 22.8497 7.09964 24.4167 5.16665 24.4167C3.87798 24.4167 2.83331 23.372 2.83331 22.0833V15.0833Z"
      stroke={stroke || "#453C4F"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.5585 9.60747L18.2478 10.6109C17.9933 11.4331 17.866 11.8442 17.9639 12.1689C18.0431 12.4315 18.2169 12.658 18.4539 12.807C18.7467 12.9911 19.1897 12.9911 20.0756 12.9911H20.547C23.5454 12.9911 25.0446 12.9911 25.7528 13.8787C25.8336 13.9801 25.9056 14.088 25.9679 14.2011C26.5126 15.1909 25.8933 16.5244 24.6547 19.1914C23.518 21.6389 22.9496 22.8626 21.8944 23.5829C21.7923 23.6525 21.6873 23.7183 21.5797 23.7799C20.4687 24.4168 19.0923 24.4168 16.3392 24.4168H15.7421C12.4067 24.4168 10.739 24.4168 9.70285 23.4129C8.66669 22.4089 8.66669 20.793 8.66669 17.5614V16.4255C8.66669 14.7272 8.66669 13.8781 8.96808 13.1009C9.26948 12.3236 9.8466 11.6846 11.0008 10.4065L15.7741 5.12082C15.8938 4.98826 15.9537 4.92197 16.0065 4.87604C16.4991 4.44732 17.2594 4.49558 17.6902 4.98291C17.7364 5.03511 17.7868 5.10839 17.8876 5.25496C18.0453 5.48422 18.1242 5.59886 18.193 5.71242C18.8083 6.72915 18.9945 7.93692 18.7126 9.08351C18.6811 9.21157 18.6403 9.34361 18.5585 9.60747Z"
      stroke={stroke || "#453C4F"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const CustomerChatIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "29"}
    height={height || "29"}
    viewBox="0 0 29 29"
    fill={fill || "none"}
    className={className}
  >
    <path
      d="M26.1667 8.99709C26.1667 12.0789 23.5546 14.5777 20.3333 14.5777C19.9545 14.5781 19.5769 14.5431 19.2048 14.4732C18.9369 14.423 18.803 14.3979 18.7096 14.4121C18.6161 14.4263 18.4836 14.4968 18.2186 14.6377C17.4692 15.0363 16.5952 15.1771 15.7547 15.0208C16.0742 14.6278 16.2924 14.1564 16.3886 13.651C16.4469 13.3418 16.3025 13.0415 16.086 12.8217C15.1027 11.8232 14.5 10.4778 14.5 8.99709C14.5 5.91525 17.1119 3.4165 20.3333 3.4165C23.5546 3.4165 26.1667 5.91525 26.1667 8.99709Z"
      stroke={stroke || "#453C4F"}
      stroke-width="1.8"
      stroke-linejoin="round"
    />
    <path
      d="M18.5742 9.25H18.5837M22.0742 9.25H22.0837"
      stroke={stroke || "#453C4F"}
      stroke-width="1.8"
      stroke-linecap="round"
    />
    <path
      d="M9.25218 25.5835H6.00451C5.62734 25.5835 5.24856 25.5304 4.90213 25.3816C3.77442 24.8971 3.20226 24.2573 2.93562 23.8571C2.78389 23.6294 2.80551 23.3392 2.97012 23.1206C4.27667 21.3853 7.31152 20.337 9.25774 20.3369C11.204 20.337 14.2333 21.3853 15.5398 23.1206C15.7044 23.3392 15.726 23.6294 15.5744 23.8571C15.3077 24.2573 14.7355 24.8971 13.6078 25.3816C13.2613 25.5304 12.8826 25.5835 12.5054 25.5835H9.25218Z"
      stroke={stroke || "#453C4F"}
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.4998 14.2534C12.4998 16.0399 11.0483 17.4881 9.2579 17.4881C7.46748 17.4881 6.01605 16.0399 6.01605 14.2534C6.01605 12.4668 7.46748 11.0186 9.2579 11.0186C11.0483 11.0186 12.4998 12.4668 12.4998 14.2534Z"
      stroke={stroke || "#453C4F"}
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const UserLoveIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "29"}
    height={height || "29"}
    viewBox="0 0 29 29"
    fill={fill || "none"}
    className={className}
  >
    <path
      d="M15.6667 26.1668H8.18934C6.3864 26.1668 4.95236 25.2895 3.66477 24.0628C1.02892 21.5516 5.3566 19.5448 7.00716 18.562C9.28567 17.2053 11.9248 16.6473 14.5 16.8878"
      stroke={stroke || "#453C4F"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.5833 8.0835C18.5833 10.983 16.2328 13.3335 13.3333 13.3335C10.4338 13.3335 8.08333 10.983 8.08333 8.0835C8.08333 5.184 10.4338 2.8335 13.3333 2.8335C16.2328 2.8335 18.5833 5.184 18.5833 8.0835Z"
      stroke={stroke || "#453C4F"}
      stroke-width="2"
    />
    <path
      d="M18.0175 18.4511C19.2689 17.7047 20.3611 18.0055 21.0173 18.4845C21.2864 18.681 21.4209 18.7792 21.5 18.7792C21.5791 18.7792 21.7136 18.681 21.9826 18.4845C22.6389 18.0055 23.7311 17.7047 24.9825 18.4511C26.6249 19.4305 26.9965 22.6618 23.2082 25.3878C22.4866 25.9071 22.1259 26.1667 21.5 26.1667C20.8741 26.1667 20.5134 25.9071 19.7918 25.3878C16.0035 22.6618 16.3751 19.4305 18.0175 18.4511Z"
      stroke={stroke || "#453C4F"}
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);

export const DribbleIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "21"}
    height={height || "21"}
    viewBox="0 0 21 21"
    fill={fill || "none"}
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5 20.4896C4.98437 20.4896 0.5 16.013 0.5 10.5052C0.5 4.98975 4.98437 0.513184 10.5 0.513184C16.0156 0.513184 20.5 4.98975 20.5 10.4975C20.5 16.0053 16.0156 20.4896 10.5 20.4896ZM18.9296 11.8646C18.6406 11.7708 16.2891 11.0756 13.6093 11.4975C14.7266 14.5599 15.1796 17.06 15.2656 17.5755C17.1875 16.2865 18.5546 14.2397 18.9296 11.8646ZM13.8359 18.3646C13.7109 17.6146 13.2109 15.0052 12.0155 11.8959C12 11.9037 11.9766 11.9115 11.9609 11.9115C7.14062 13.5912 5.41406 16.9271 5.25789 17.2396C6.70312 18.3646 8.52344 19.0365 10.5 19.0365C11.6797 19.0443 12.8124 18.8021 13.8359 18.3646ZM4.15633 16.2162C4.35156 15.888 6.69531 12.0131 11.1016 10.5834C11.2109 10.5444 11.3281 10.5131 11.4375 10.4818C11.2266 9.99748 10.9922 9.51311 10.7422 9.03654C6.47664 10.31 2.33594 10.2553 1.96094 10.2474C1.96094 10.3334 1.9532 10.4194 1.9532 10.5052C1.96094 12.7006 2.78914 14.7005 4.15633 16.2162ZM2.1407 8.76311C2.52344 8.77092 6.03906 8.78654 10.0391 7.72404C8.625 5.2085 7.09375 3.09904 6.87508 2.79443C4.47656 3.91943 2.69539 6.12248 2.1407 8.76311ZM8.5 2.21623C8.73437 2.52881 10.2891 4.63818 11.6875 7.20842C14.7266 6.06787 16.0078 4.34904 16.164 4.13029C14.6562 2.79443 12.6718 1.98186 10.5 1.98186C9.8125 1.98186 9.14062 2.06787 8.5 2.21623ZM17.1093 5.11475C16.9297 5.35686 15.5 7.19279 12.3437 8.48186C12.5391 8.88818 12.7344 9.30217 12.9141 9.71623C12.9765 9.86467 13.0391 10.013 13.1016 10.1537C15.9453 9.79436 18.7655 10.3725 19.0468 10.4272C19.0234 8.41943 18.3046 6.56779 17.1093 5.11475Z"
      fill={fill || "#757575"}
    />
  </svg>
);

export const LinkedInIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "21"}
    height={height || "21"}
    viewBox="0 0 21 21"
    fill={fill || "none"}
    className={className}
  >
    <g clip-path="url(#clip0_1_1238)">
      <path
        d="M20.495 20.4999L20.5 20.499V13.164C20.5 9.57569 19.7275 6.81152 15.5325 6.81152C13.5158 6.81152 12.1625 7.91819 11.61 8.96736H11.5517V7.14652H7.57416V20.499H11.7158V13.8874C11.7158 12.1465 12.0458 10.4632 14.2017 10.4632C16.3258 10.4632 16.3575 12.4499 16.3575 13.999V20.4999H20.495Z"
        fill={fill || "#757575"}
      />
      <path
        d="M0.829987 7.14697H4.97665V20.4995H0.829987V7.14697Z"
        fill={fill || "#757575"}
      />
      <path
        d="M2.90167 0.5C1.57583 0.5 0.5 1.57583 0.5 2.90167C0.5 4.2275 1.57583 5.32583 2.90167 5.32583C4.2275 5.32583 5.30333 4.2275 5.30333 2.90167C5.3025 1.57583 4.22667 0.5 2.90167 0.5Z"
        fill={fill || "#757575"}
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1238">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const InstagramIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "21"}
    height={height || "21"}
    viewBox="0 0 21 21"
    fill={fill || "none"}
    className={className}
  >
    <g clip-path="url(#clip0_1_1240)">
      <path
        d="M15.5 0.5H5.50019C2.7505 0.5 0.500305 2.75019 0.500305 5.49988V15.5001C0.500305 18.2491 2.7505 20.5 5.50019 20.5H15.5C18.2496 20.5 20.4998 18.2491 20.4998 15.5001V5.49988C20.4998 2.75019 18.2496 0.5 15.5 0.5ZM18.8331 15.5001C18.8331 17.3376 17.3384 18.8333 15.5 18.8333H5.50019C3.66249 18.8333 2.16701 17.3376 2.16701 15.5001V5.49988C2.16701 3.66193 3.66249 2.16671 5.50019 2.16671H15.5C17.3384 2.16671 18.8331 3.66193 18.8331 5.49988V15.5001Z"
        fill="#757575"
      />
      <path
        d="M15.9176 6.33295C16.6079 6.33295 17.1675 5.77332 17.1675 5.08298C17.1675 4.39264 16.6079 3.83301 15.9176 3.83301C15.2272 3.83301 14.6676 4.39264 14.6676 5.08298C14.6676 5.77332 15.2272 6.33295 15.9176 6.33295Z"
        fill="#757575"
      />
      <path
        d="M10.5002 5.5C7.73827 5.5 5.50034 7.73818 5.50034 10.4999C5.50034 13.2606 7.73827 15.5002 10.5002 15.5002C13.2614 15.5002 15.5001 13.2606 15.5001 10.4999C15.5001 7.73818 13.2614 5.5 10.5002 5.5ZM10.5002 13.8335C8.65949 13.8335 7.16704 12.3411 7.16704 10.4999C7.16704 8.65866 8.65949 7.16671 10.5002 7.16671C12.3409 7.16671 13.8334 8.65866 13.8334 10.4999C13.8334 12.3411 12.3409 13.8335 10.5002 13.8335Z"
        fill="#757575"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1240">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0.5 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const FacebookIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "21"}
    height={height || "21"}
    viewBox="0 0 21 21"
    fill={fill || "none"}
    className={className}
  >
    <g clip-path="url(#clip0_1_1242)">
      <path
        d="M20.5 10.5C20.5 15.4914 16.843 19.6285 12.0625 20.3785V13.3906H14.3926L14.836 10.5H12.0625V8.62422C12.0625 7.8332 12.45 7.0625 13.6922 7.0625H14.9532V4.60156C14.9532 4.60156 13.8086 4.40625 12.7145 4.40625C10.4305 4.40625 8.93753 5.79063 8.93753 8.29688V10.5H6.39847V13.3906H8.93753V20.3785C4.15706 19.6285 0.500031 15.4914 0.500031 10.5C0.500031 4.97734 4.97737 0.5 10.5 0.5C16.0227 0.5 20.5 4.97734 20.5 10.5Z"
        fill="#757575"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1242">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0.500031 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const TwitterIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "21"}
    height={height || "21"}
    viewBox="0 0 21 21"
    fill={fill || "none"}
  >
    <g clip-path="url(#clip0_1_1244)">
      <path
        d="M12.3617 8.96863L19.647 0.5H17.9206L11.5947 7.85319L6.54228 0.5H0.714874L8.35518 11.6193L0.714874 20.5H2.44137L9.12165 12.7348L14.4574 20.5H20.2848L12.3612 8.96863H12.3617ZM9.99698 11.7173L9.22286 10.6101L3.06345 1.79967H5.71524L10.686 8.90993L11.4601 10.0172L17.9214 19.2594H15.2696L9.99698 11.7177V11.7173Z"
        fill="#757575"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1244">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(0.500031 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const PenIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
  strokeClassName,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "14"}
    height={height || "14"}
    viewBox="0 0 14 14"
    fill={fill || "none"}
    className={className}
  >
    <path
      d="M8.87487 3.98964L9.69253 3.17195C10.1441 2.72035 10.8763 2.72035 11.328 3.17195C11.7795 3.62355 11.7795 4.35574 11.328 4.80734L10.5102 5.62503M8.87487 3.98964L4.07178 8.79276C3.46202 9.40252 3.15713 9.70737 2.94953 10.0789C2.74192 10.4504 2.53305 11.3277 2.33331 12.1666C3.1722 11.9669 4.04947 11.758 4.421 11.5504C4.79252 11.3427 5.0974 11.0379 5.70717 10.4281L10.5102 5.62503M8.87487 3.98964L10.5102 5.62503"
      stroke={stroke || "black"}
      stroke-linecap="round"
      stroke-linejoin="round"
      className={strokeClassName}
    />
    <path
      d="M6.41669 12.1667H9.91669"
      stroke={stroke || "black"}
      stroke-linecap="round"
      className={strokeClassName}
    />
  </svg>
);

export const SeparatorIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
  strokeClassName,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 42}
    height={height || 42}
    viewBox="0 0 42 42"
    fill={fill || "none"}
    className={className}
  >
    <mask
      id="mask0_1_1045"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={1}
      width={36}
      height={35}
    >
      <path
        d="M38.4828 1.11426H3.79724V35.8001H38.4828V1.11426Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_1_1045)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.79001 18.6877C7.743 20.6561 13.7475 19.2223 17.1396 22.276C20.0157 24.8651 20.1714 31.2142 21.188 35.7996C26.4845 20.9759 18.4423 21.5496 38.475 18.4182C34.5141 16.5237 27.6516 17.5179 24.7261 14.9188C21.7546 12.2788 22.0632 5.12901 20.4151 1.11401C18.0987 18.1151 19.6019 15.3494 3.79001 18.6877Z"
        fill="#560FB8"
      />
    </g>
  </svg>
);

export const ArrowRightV2Icon = ({
  className,
  width,
  height,
  fill,
  stroke,
  strokeClassName,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "36"}
    height={height || "36"}
    viewBox="0 0 36 36"
    fill={fill || "none"}
  >
    <g clip-path="url(#clip0_81_545)">
      <path
        d="M5.625 18.5049H30.375M30.375 18.5049L20.25 8.37988M30.375 18.5049L20.25 28.6299"
        stroke={stroke || "#453C4F"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_81_545">
        <rect
          width="36"
          height="36"
          fill="white"
          transform="translate(0 0.504883)"
        />
      </clipPath>
    </defs>
  </svg>
);
