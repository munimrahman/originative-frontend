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

export const TargetImageIcon = ({
  className,
  width,
  height,
  fill,
  stroke,
  strokeClassName,
}: IconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={174}
    height={175}
    viewBox="0 0 174 175"
    fill="none"
  >
    <g clipPath="url(#clip0_91_373)">
      <mask
        id="mask0_91_373"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={174}
        height={175}
      >
        <path d="M174 0.504883H0V174.505H174V0.504883Z" fill="white" />
      </mask>
      <g mask="url(#mask0_91_373)">
        <path
          d="M31.855 143.15C62.262 173.451 111.39 173.28 141.584 142.767C171.779 112.254 171.607 62.9551 141.2 32.654C110.793 2.35294 61.6654 2.52443 31.4706 33.0371C1.27584 63.5497 1.44792 112.849 31.855 143.15Z"
          fill="#4070CE"
        />
        <mask
          id="mask1_91_373"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={8}
          y={10}
          width={157}
          height={156}
        >
          <path
            d="M31.855 143.15C62.262 173.451 111.39 173.28 141.584 142.767C171.779 112.255 171.607 62.9553 141.2 32.6543C110.793 2.35318 61.6654 2.52467 31.4706 33.0373C1.27584 63.5499 1.44792 112.849 31.855 143.15Z"
            fill="#0367FC"
          />
        </mask>
        <g mask="url(#mask1_91_373)">
          <g filter="url(#filter0_f_91_373)">
            <path
              d="M35.6557 142.55C66.0628 172.851 115.19 172.679 145.385 142.167C175.58 111.654 175.408 62.355 145.001 32.0539C114.594 1.75284 65.4661 1.92433 35.2713 32.437C5.07656 62.9496 5.24864 112.249 35.6557 142.55Z"
              fill="#6DA6FF"
            />
          </g>
        </g>
        <g
          style={{
            mixBlendMode: "multiply",
          }}
          filter="url(#filter1_f_91_373)"
        >
          <path
            d="M99.8224 103.052C90.8445 112.124 69.9456 112.05 60.9046 103.041C51.8635 94.0309 51.8124 79.3726 60.7903 70.3002C69.7682 61.2277 90.6671 61.3016 99.7082 70.3111C108.749 79.3207 108.8 93.979 99.8224 103.052Z"
            fill="#A3B7D7"
          />
        </g>
        <path
          d="M71.8773 102.856C80.9183 111.865 95.5256 111.814 104.503 102.742C113.481 93.6692 113.43 79.0109 104.389 70.0014C95.3482 60.9919 80.7409 61.0429 71.763 70.1153C62.7851 79.1877 62.8363 93.846 71.8773 102.856Z"
          fill="#0367FC"
        />
        <path
          d="M71.8773 102.856C80.9183 111.865 95.5256 111.814 104.503 102.742C113.481 93.6692 113.43 79.0109 104.389 70.0014C95.3482 60.9919 80.7409 61.0429 71.763 70.1153C62.7851 79.1877 62.8363 93.846 71.8773 102.856Z"
          fill="#B1CFFF"
        />
        <mask
          id="mask2_91_373"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={65}
          y={63}
          width={47}
          height={47}
        >
          <path
            d="M71.8773 102.856C80.9183 111.865 95.5256 111.814 104.503 102.742C113.481 93.6692 113.43 79.0109 104.389 70.0014C95.3482 60.9919 80.7409 61.0429 71.763 70.1153C62.7851 79.1877 62.8363 93.846 71.8773 102.856Z"
            fill="#0367FC"
          />
        </mask>
        <g mask="url(#mask2_91_373)">
          <g filter="url(#filter2_f_91_373)">
            <path
              d="M69.0961 102.718C78.1372 111.728 92.7444 111.677 101.722 102.604C110.7 93.532 110.649 78.8737 101.608 69.8642C92.567 60.8547 77.9598 60.9057 68.9818 69.9781C60.0039 79.0505 60.0551 93.7088 69.0961 102.718Z"
              fill="#D4E5FF"
            />
          </g>
          <g
            style={{
              mixBlendMode: "multiply",
            }}
            filter="url(#filter3_f_91_373)"
          >
            <path
              d="M68.7474 106.343C66.7603 104.303 66.8816 101.016 69.0137 99.1274L86.7803 83.3918C88.1468 82.1814 90.2269 82.2724 91.4826 83.5974C92.6776 84.8584 92.7243 86.8194 91.5904 88.1358L76.1021 106.118C74.1914 108.337 70.7901 108.441 68.7474 106.343Z"
              fill="url(#paint0_linear_91_373)"
            />
          </g>
        </g>
        <g
          style={{
            mixBlendMode: "multiply",
          }}
          filter="url(#filter4_f_91_373)"
        >
          <path
            d="M120.823 126.03C98.8814 148.202 63.1821 148.327 41.0863 126.308C18.9905 104.289 18.8654 68.4651 40.807 46.2925C62.7485 24.12 98.4478 23.9954 120.544 46.0142C142.639 68.033 142.764 103.857 120.823 126.03ZM56.3517 61.7831C42.9353 75.3407 43.0118 97.2457 56.5225 110.709C70.0332 124.173 91.8618 124.097 105.278 110.539C118.695 96.9815 118.618 75.0765 105.107 61.6129C91.5967 48.1493 69.7681 48.2255 56.3517 61.7831Z"
            fill="#A3B7D7"
          />
        </g>
        <path
          d="M128.139 126.298C106.198 148.47 70.4985 148.595 48.4027 126.576C26.3069 104.557 26.1818 68.7329 48.1234 46.5604C70.0649 24.3879 105.764 24.2632 127.86 46.282C149.956 68.3008 150.081 104.125 128.139 126.298ZM63.6681 62.0509C50.2517 75.6085 50.3282 97.5135 63.8389 110.977C77.3496 124.441 99.1783 124.365 112.595 110.807C126.011 97.2494 125.935 75.3443 112.424 61.8807C98.9131 48.4171 77.0845 48.4933 63.6681 62.0509Z"
          fill="white"
        />
        <mask
          id="mask3_91_373"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={31}
          y={29}
          width={114}
          height={115}
        >
          <path
            d="M128.139 126.298C106.198 148.47 70.4985 148.595 48.4027 126.576C26.3069 104.557 26.1818 68.7329 48.1234 46.5604C70.0649 24.3879 105.764 24.2632 127.86 46.282C149.956 68.3008 150.081 104.125 128.139 126.298ZM63.6681 62.0509C50.2517 75.6085 50.3282 97.5135 63.8389 110.977C77.3496 124.441 99.1783 124.365 112.595 110.807C126.011 97.2494 125.935 75.3443 112.424 61.8807C98.9131 48.4171 77.0845 48.4933 63.6681 62.0509Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask3_91_373)">
          <g filter="url(#filter5_f_91_373)">
            <path
              d="M126.237 126.157C104.296 148.33 68.5966 148.455 46.5008 126.436C24.405 104.417 24.28 68.5928 46.2215 46.4202C68.1631 24.2477 103.862 24.1231 125.958 46.1419C148.054 68.1607 148.179 103.985 126.237 126.157ZM61.7662 61.9108C48.3499 75.4684 48.4263 97.3734 61.937 110.837C75.4477 124.301 97.2764 124.225 110.693 110.667C124.109 97.1092 124.033 75.2042 110.522 61.7406C97.0113 48.277 75.1826 48.3532 61.7662 61.9108Z"
              fill="#D4E5FF"
            />
          </g>
        </g>
        <mask
          id="mask4_91_373"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={8}
          y={10}
          width={157}
          height={156}
        >
          <path
            d="M31.855 143.15C62.262 173.451 111.39 173.279 141.584 142.767C171.779 112.254 171.607 62.9548 141.2 32.6538C110.793 2.35269 61.6654 2.52419 31.4706 33.0368C1.27584 63.5494 1.44792 112.849 31.855 143.15Z"
            fill="#0367FC"
          />
        </mask>
        <g mask="url(#mask4_91_373)">
          <g
            style={{
              mixBlendMode: "overlay",
            }}
            opacity={0.5}
            filter="url(#filter6_f_91_373)"
          >
            <path
              d="M108.927 75.7458C134.196 99.6225 162.552 110.648 172.262 100.371C181.972 90.0949 169.36 62.4083 144.091 38.5315C118.822 14.6548 90.4662 3.62952 80.7559 13.9059C71.0456 24.1824 83.6582 51.869 108.927 75.7458Z"
              fill="url(#paint1_linear_91_373)"
            />
          </g>
        </g>
        <path
          d="M145.857 24.3809C146.765 23.4706 148.492 23.7214 149.716 24.9411C150.94 26.1608 151.197 27.8875 150.29 28.7978C149.383 29.7081 147.655 29.4573 146.431 28.2376C145.207 27.0179 144.95 25.2912 145.857 24.3809Z"
          fill="url(#paint2_linear_91_373)"
        />
        <path
          d="M86.7315 87.7398C85.3874 86.0615 86.516 83.9301 87.4231 83.0198L145.857 24.3811C144.95 25.2914 145.207 27.0181 146.431 28.2378C147.655 29.4575 149.383 29.7083 150.29 28.798L91.8555 87.4367C90.9483 88.347 88.527 89.2862 86.7315 87.7398Z"
          fill="url(#paint3_linear_91_373)"
        />
        <path
          d="M164.876 32.9721L147.483 31.5447L126.598 52.503L145.626 53.9333C145.924 53.9558 146.218 53.848 146.43 53.6378L165.525 34.7429C166.154 34.1205 165.76 33.0446 164.876 32.9721Z"
          fill="url(#paint4_linear_91_373)"
        />
        <mask
          id="mask5_91_373"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={126}
          y={31}
          width={40}
          height={23}
        >
          <path
            d="M164.876 32.9721L147.483 31.5447L126.598 52.503L145.626 53.9333C145.924 53.9558 146.218 53.848 146.43 53.6378L165.525 34.7429C166.154 34.1205 165.76 33.0446 164.876 32.9721Z"
            fill="#112437"
          />
        </mask>
        <g mask="url(#mask5_91_373)">
          <g filter="url(#filter7_f_91_373)">
            <path
              d="M165.4 33.998L148.007 32.5706L127.121 53.5289L146.149 54.9592C146.448 54.9817 146.741 54.8739 146.954 54.6637L166.049 35.7688C166.678 35.1464 166.283 34.0705 165.4 33.998Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter8_f_91_373)">
            <path
              d="M163.853 33.998L146.46 32.5706L125.574 53.5289L144.602 54.9592C144.901 54.9817 145.194 54.8739 145.407 54.6637L164.502 35.7688C165.131 35.1464 164.737 34.0705 163.853 33.998Z"
              fill="url(#paint5_linear_91_373)"
            />
          </g>
        </g>
        <path
          d="M141.894 9.86028L143.382 27.2483L122.496 48.2067L121 29.1838C120.976 28.8853 121.083 28.5916 121.292 28.3784L140.12 9.2174C140.741 8.58631 141.818 8.97694 141.894 9.86028Z"
          fill="url(#paint6_linear_91_373)"
        />
        <mask
          id="mask6_91_373"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={120}
          y={8}
          width={24}
          height={41}
        >
          <path
            d="M141.894 9.86028L143.382 27.2483L122.496 48.2067L121 29.1838C120.976 28.8853 121.083 28.5916 121.292 28.3784L140.12 9.2174C140.741 8.58631 141.818 8.97694 141.894 9.86028Z"
            fill="#112437"
          />
        </mask>
        <g mask="url(#mask6_91_373)">
          <g filter="url(#filter9_f_91_373)">
            <path
              d="M140.865 9.33953L142.353 26.7276L121.468 47.6859L119.971 28.6631C119.948 28.3645 120.055 28.0709 120.264 27.8577L139.092 8.69665C139.712 8.06556 140.79 8.45618 140.865 9.33953Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter10_f_91_373)">
            <path
              d="M140.87 10.8864L142.358 28.2744L121.473 49.2328L119.976 30.2099C119.953 29.9114 120.059 29.6177 120.269 29.4046L139.097 10.2435C139.717 9.61244 140.795 10.0031 140.87 10.8864Z"
              fill="url(#paint7_linear_91_373)"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_91_373"
        x={4.44653}
        y={1.1491}
        width={171.763}
        height={172.306}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={4.14542}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <filter
        id="filter1_f_91_373"
        x={43.7267}
        y={53.1614}
        width={73.1592}
        height={67.0291}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={5.18177}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <filter
        id="filter2_f_91_373"
        x={58.1363}
        y={58.995}
        width={54.4315}
        height={54.5926}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={2.07271}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <filter
        id="filter3_f_91_373"
        x={65.7856}
        y={80.9937}
        width={28.172}
        height={28.4049}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={0.773399}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <filter
        id="filter4_f_91_373"
        x={11.996}
        y={17.145}
        width={137.638}
        height={138.032}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={6.21813}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <filter
        id="filter5_f_91_373"
        x={25.7014}
        y={25.5636}
        width={121.056}
        height={121.451}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={2.07271}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <filter
        id="filter6_f_91_373"
        x={46.5447}
        y={-20.8762}
        width={159.929}
        height={156.03}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={15.468}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <filter
        id="filter7_f_91_373"
        x={119.387}
        y={24.8366}
        width={54.7035}
        height={37.8596}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={3.867}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <filter
        id="filter8_f_91_373"
        x={124.745}
        y={31.7415}
        width={40.8939}
        height={24.0498}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={0.414542}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <filter
        id="filter9_f_91_373"
        x={112.234}
        y={0.652474}
        width={37.8531}
        height={54.7676}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={3.867}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <filter
        id="filter10_f_91_373"
        x={119.144}
        y={9.10427}
        width={24.0432}
        height={40.9577}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={0.414542}
          result="effect1_foregroundBlur_91_373"
        />
      </filter>
      <linearGradient
        id="paint0_linear_91_373"
        x1={99.7687}
        y1={75.6682}
        x2={76.18}
        y2={95.3899}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A3B7D7" />
        <stop offset={1} stopColor="#A3B7D7" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_91_373"
        x1={144.091}
        y1={38.5315}
        x2={80.8204}
        y2={113.952}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_91_373"
        x1={120.542}
        y1={58.65}
        x2={116.109}
        y2={54.2331}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#357CC2" />
        <stop offset={1} stopColor="#174E85" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_91_373"
        x1={121.073}
        y1={58.1174}
        x2={116.64}
        y2={53.7005}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#628AC8" />
        <stop offset={0.161458} stopColor="#112437" />
        <stop offset={0.59375} stopColor="#2B537B" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_91_373"
        x1={161.797}
        y1={27.844}
        x2={131.929}
        y2={57.8159}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#112437" />
        <stop offset={1} stopColor="#112437" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_91_373"
        x1={159.296}
        y1={35.8682}
        x2={126.996}
        y2={52.2039}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#113356" />
        <stop offset={1} stopColor="#102F4E" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_91_373"
        x1={147.032}
        y1={12.9219}
        x2={117.165}
        y2={42.8938}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#112437" />
        <stop offset={1} stopColor="#112437" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_91_373"
        x1={139.016}
        y1={15.4503}
        x2={122.793}
        y2={47.8066}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#113356" />
        <stop offset={1} stopColor="#102F4E" />
      </linearGradient>
      <clipPath id="clip0_91_373">
        <rect
          width={174}
          height={174}
          fill="white"
          transform="translate(0 0.504883)"
        />
      </clipPath>
    </defs>
  </svg>
);
