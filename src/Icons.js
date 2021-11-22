const HomeIcon = ({ size }) => {
  return (
    <svg
      role="img"
      height={size}
      width={size}
      class="Svg-sc-1bi12j5-0 gSLhUO home-active-icon"
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
      class="Svg-sc-1bi12j5-0 gSLhUO search-icon"
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
      class="Svg-sc-1bi12j5-0 gSLhUO collection-icon"
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

const Icon = ({ name, size = 24 }) => {
  const icons = {
    home: HomeIcon,
    search: SearchIcon,
    collection:CollectionIcon
  };
  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
