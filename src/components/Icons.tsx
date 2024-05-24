export interface IconsProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
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
