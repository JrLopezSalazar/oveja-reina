const IconCart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      //style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
    >
      <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
      <circle cx="10.5" cy="19.5" r="1.5"></circle>
      <circle cx="17.5" cy="19.5" r="1.5"></circle>
    </svg>
  );
};

const IconHome = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
    )
}

const IconHeart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      //style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
    >
      <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
    </svg>
  );
};

const IconAvatar = () => {
     return (
        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 4.75C12.75 5.74456 12.3549 6.69839 11.6516 7.40165C10.9484 8.10491 9.99454 8.5 8.99998 8.5C8.00541 8.5 7.05159 8.10491 6.34833 7.40165C5.64506 6.69839 5.24998 5.74456 5.24998 4.75C5.24998 3.75544 5.64506 2.80161 6.34833 2.09835C7.05159 1.39509 8.00541 1 8.99998 1C9.99454 1 10.9484 1.39509 11.6516 2.09835C12.3549 2.80161 12.75 3.75544 12.75 4.75ZM1.50098 18.868C1.53311 16.9004 2.33731 15.0242 3.74015 13.644C5.14299 12.2639 7.03206 11.4905 8.99998 11.4905C10.9679 11.4905 12.857 12.2639 14.2598 13.644C15.6626 15.0242 16.4668 16.9004 16.499 18.868C14.1464 19.9468 11.5881 20.5035 8.99998 20.5C6.32398 20.5 3.78398 19.916 1.50098 18.868Z" stroke="#181818" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
     )
}

export { IconCart, IconHeart, IconAvatar, IconHome };
