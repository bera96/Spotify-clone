const HomeIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      className="Svg-sc-1bi12j5-0 gSLhUO home-active-icon"
      viewBox="0 0 24 24"
      xmlns="http://w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z"
      ></path>
    </svg>
  );
};

const SearchIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      className="Svg-sc-1bi12j5-0 gSLhUO search-icon"
      viewBox="0 0 24 24"
      xmlns="http://w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"
      ></path>
    </svg>
  );
};
const CollectionIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height="24"
      width="24"
      className="Svg-sc-1bi12j5-0 gSLhUO collection-icon"
      viewBox="0 0 24 24"
      xmlns="http://w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M13.66 4.097l-.913.406 7.797 17.513.914-.406L13.66 4.097zM3 22h1V4H3v18zm6 0h1V4H9v18z"
      ></path>
    </svg>
  );
};

const PlusIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      xmlns="http://w3.org/2000/svg"
      className="Svg-sc-1bi12j5-0 gSLhUO"
    >
      <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z" fill="currentColor"></path>
      <path fill="none" d="M0 0h16v16H0z"></path>
    </svg>
  );
};

const HeartIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="Svg-sc-1bi12j5-0 gSLhUO"
      xmlns="http://w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h16v16H0z"></path>
      <path
        fill="currentColor"
        d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z"
      ></path>
    </svg>
  );
};

const DownloadIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      viewBox="0 0 24 24"
      className="Svg-sc-1bi12j5-0 gSLhUO"
      xmlns="http://w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M11.5 0C5.149 0 0 5.148 0 11.5 0 17.851 5.149 23 11.5 23S23 17.851 23 11.5C23 5.148 17.851 0 11.5 0zm0 22C5.71 22 1 17.29 1 11.5S5.71 1 11.5 1 22 5.71 22 11.5 17.29 22 11.5 22zm.499-6.842V5h-1v10.149l-3.418-3.975-.758.652 4.678 5.44 4.694-5.439-.757-.653-3.439 3.984z"
      ></path>
    </svg>
  );
};

const NextIcon = ({ size }) => {
  return (
    <svg
      role="img"
      focusable="false"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      class="Svg-ytk21e-0 bevrDs aHN1vHt_AzvQXKPGAGn6"
      xmlns="http://w3.org/2000/svg"
    >
      <polyline
        points="8 4 17 12 8 20"
        fill="none"
        stroke="currentColor"
      ></polyline>
    </svg>
  );
};

const PrevIcon = ({ size }) => {
  return (
    <svg
      role="img"
      focusable="false"
      height="24"
      width="24"
      viewBox="0 0 24 24"
      class="Svg-ytk21e-0 bevrDs aHN1vHt_AzvQXKPGAGn6"
      xmlns="http://w3.org/2000/svg"
    >
      <polyline
        points="16 4 7 12 16 20"
        fill="none"
        stroke="currentColor"
      ></polyline>
    </svg>
  );
};

const DownDirIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height="16"
      width="16"
      class="Svg-sc-1bi12j5-0 gSLhUO zlXkx48bPJsjDXoqsZvD"
      viewBox="0 0 16 16"
      xmlns="http://w3.org/2000/svg"
    >
      <path fill="currentColor" d="M13 10L8 4.206 3 10z"></path>
    </svg>
  );
};
const Icon = ({ name, size = 24 }) => {
  const icons = {
    home: HomeIcon,
    search: SearchIcon,
    collection: CollectionIcon,
    plus: PlusIcon,
    heart: HeartIcon,
    download: DownloadIcon,
    prev: PrevIcon,
    next: NextIcon,
    downdirıcon: DownDirIcon,
  };
  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
