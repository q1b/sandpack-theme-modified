export default function Header({ ...props }) {
  return (
    <header
      className="w-full p-10 flex items-center justify-between"
      {...props}
    >
      <Logo />
      <nav className="hidden sm:block">
        <ul className="flex">
          <li>
            <a
              className="items-baseline inline-flex font-medium text-xl text-center -leading-[0.025em] p-4 hover:opacity-50"
              href="https://sandpack.codesandbox.io/docs"
              rel="noreferrer"
              target="_blank"
            >
              Docs
            </a>
          </li>
          <li>
            <a
              className="items-baseline inline-flex font-medium text-xl text-center -leading-[0.025em] p-4 hover:opacity-50"
              href="https://github.com/codesandbox/sandpack"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const Logo = () => {
  return (
    <svg
      className="w-[32rem] h-[3rem] relative"
      height={98}
      viewBox="0 0 903 98"
      width={903}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M38 8H8v67h30V8ZM0 0v83h46V0H0Z"
        fill="#000"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M38 8H8v67h30V8ZM0 0v83h46V0H0Z"
        fill="#000"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M76 23H46v67h30V23Zm-38-8v83h46V15H38Z"
        fill="#000"
        fillRule="evenodd"
      />
      <path
        d="M164.081 58.527c0-8.32-4.972-13.51-14.915-15.8l-7.649-1.832c-7.801-1.832-10.478-3.51-10.478-7.098 0-4.503 4.36-7.098 10.402-7.098 6.195 0 11.473 3.053 12.161 9.311h8.949c-.918-9.082-7.801-16.41-21.263-16.41-10.632 0-19.351 5.954-19.351 14.807 0 7.328 5.125 12.137 15.45 14.579l7.649 1.756c6.807 1.602 10.02 3.892 10.02 8.166 0 4.885-4.972 7.786-11.703 7.786-7.419 0-13.002-5.343-13.538-12.213h-8.949c.842 9.541 8.414 19.311 22.411 19.311 12.237 0 20.804-6.488 20.804-15.265Z"
        fill="#000"
      />
      <path
        clipRule="evenodd"
        d="M194.341 65.015h.229v8.014h8.184V34.866h-8.184v7.938h-.229c-1.836-5.267-6.272-8.702-12.085-8.702-10.173 0-16.062 9.16-16.062 19.845 0 10.686 5.66 19.845 16.062 19.845 5.813 0 10.249-3.51 12.085-8.777ZM174.99 53.947c0-8.167 3.671-13.662 9.866-13.662 6.196 0 10.02 5.495 10.02 13.662 0 8.09-3.824 13.663-10.02 13.663-6.118 0-9.866-5.572-9.866-13.663Z"
        fill="#000"
        fillRule="evenodd"
      />
      <path
        d="M217.513 50.13V73.03h-8.337V34.866h8.108v7.48h.153c1.606-5.343 5.583-8.244 11.167-8.244 8.413 0 12.543 5.725 12.543 14.12V73.03h-8.337V50.665c0-7.098-2.524-10.304-7.648-10.304-5.125 0-7.649 3.511-7.649 9.77Z"
        fill="#000"
      />
      <path
        clipRule="evenodd"
        d="M273.337 65.015h.229v8.014h8.184V20.363h-8.184v22.44h-.229c-1.836-5.266-6.272-8.7-12.085-8.7-10.173 0-16.062 9.158-16.062 19.844 0 10.686 5.66 19.845 16.062 19.845 5.813 0 10.249-3.51 12.085-8.777Zm-19.351-11.068c0-8.167 3.595-13.662 9.943-13.662 6.425 0 9.943 5.495 9.943 13.662 0 8.09-3.518 13.663-9.943 13.663-6.348 0-9.943-5.572-9.943-13.663ZM296.356 65.015V87.61h-8.184V34.865h8.184v7.938h.229c1.836-5.266 6.272-8.7 12.085-8.7 10.173 0 16.062 9.158 16.062 19.844 0 10.686-5.66 19.845-16.062 19.845-5.813 0-10.249-3.51-12.085-8.777h-.229Zm9.637-24.73c-6.425 0-9.943 5.495-9.943 13.662 0 8.09 3.518 13.663 9.943 13.663 6.349 0 9.944-5.572 9.944-13.663 0-8.167-3.595-13.662-9.944-13.662ZM355.246 65.015h.229v8.014h8.184V34.866h-8.184v7.938h-.229c-1.836-5.267-6.272-8.702-12.085-8.702-10.173 0-16.062 9.16-16.062 19.845 0 10.686 5.66 19.845 16.062 19.845 5.813 0 10.249-3.51 12.085-8.777Zm-19.351-11.068c0-8.167 3.671-13.662 9.866-13.662 6.196 0 10.02 5.495 10.02 13.662 0 8.09-3.824 13.663-10.02 13.663-6.119 0-9.866-5.572-9.866-13.663Z"
        fill="#000"
        fillRule="evenodd"
      />
      <path
        d="M395.092 59.748h8.49c-1.453 9.007-8.261 14.044-17.209 14.044-11.244 0-18.434-9.312-18.434-19.845 0-10.304 6.961-19.845 18.128-19.845 8.948 0 15.679 4.885 17.132 13.892h-8.413c-.918-4.885-4.054-7.71-8.566-7.71-6.196 0-9.485 5.725-9.485 13.663 0 8.014 3.519 13.663 9.867 13.663 4.436 0 7.649-2.977 8.49-7.862ZM431.968 73.029h10.479l-17.515-21.372 16.75-16.791h-10.325L415.6 50.588V20.363h-8.337V73.03h8.337V53.108l16.368 19.92ZM489.558 28.984h15.269v43.343h5.881V28.984h15.269v-5.217h-36.419v5.217Zm46.993 21.434c0-6.354 4.055-9.958 9.579-9.958 5.264 0 8.441 3.32 8.441 9.105v22.762h5.596V49.185c0-9.365-4.979-13.752-12.425-13.752-5.738 0-9.01 2.395-10.717 6.165h-.474v-17.83h-5.596v48.559h5.596V50.418Zm45.784 22.668c7.398 0 12.804-3.7 14.511-9.2l-5.406-1.518c-1.423 3.794-4.718 5.691-9.105 5.691-6.568 0-11.096-4.244-11.357-12.045h26.437v-2.371c0-13.563-8.062-18.21-15.649-18.21-9.864 0-16.408 7.777-16.408 18.969 0 11.191 6.45 18.684 16.977 18.684Zm-11.357-21.909c.379-5.667 4.386-10.717 10.788-10.717 6.07 0 9.959 4.552 9.959 10.717h-20.747Zm31.611 21.15h5.595V49.565c0-5.335 3.889-9.105 8.252-9.105 4.244 0 7.208 2.774 7.208 6.923v24.944h5.69v-23.71c0-4.695 2.941-8.157 8.062-8.157 3.983 0 7.398 2.11 7.398 7.492v24.375h5.595V47.952c0-8.56-4.599-12.519-11.096-12.519-5.216 0-9.034 2.395-10.907 6.165h-.379c-1.802-3.889-4.98-6.165-9.769-6.165-4.742 0-8.252 2.276-9.769 6.165h-.474v-5.69h-5.406v36.419Zm69.963.759c7.398 0 12.804-3.7 14.511-9.2l-5.406-1.518c-1.423 3.794-4.719 5.691-9.105 5.691-6.568 0-11.097-4.244-11.358-12.045h26.438v-2.371c0-13.563-8.062-18.21-15.649-18.21-9.864 0-16.408 7.777-16.408 18.969 0 11.191 6.449 18.684 16.977 18.684Zm-11.358-21.909c.38-5.667 4.387-10.717 10.789-10.717 6.07 0 9.958 4.552 9.958 10.717h-20.747Zm47.811 21.15h17.545c11.476 0 16.219-5.596 16.219-12.899 0-7.682-5.312-11.855-9.769-12.14v-.474c4.173-1.138 7.872-3.888 7.872-10.148 0-7.113-4.742-12.898-14.891-12.898h-16.976v48.559Zm5.88-5.216V50.229h11.95c6.354 0 10.338 4.267 10.338 9.2 0 4.267-2.94 7.682-10.623 7.682h-11.665Zm0-22.004V28.984h11.096c6.45 0 9.295 3.414 9.295 7.682 0 5.122-4.173 8.441-9.484 8.441h-10.907Zm56.4 12.33c0 6.828-5.216 9.958-9.389 9.958-4.647 0-7.967-3.414-7.967-8.725V35.907h-5.596V59.05c0 9.295 4.932 13.752 11.761 13.752 5.501 0 9.105-2.94 10.812-6.639h.379v6.165h5.596v-36.42h-5.596v21.53Zm12.507 14.89h5.595v-36.42h-5.595v36.42Zm2.845-42.49c2.181 0 3.983-1.707 3.983-3.793 0-2.087-1.802-3.794-3.983-3.794-2.182 0-3.984 1.707-3.984 3.794 0 2.086 1.802 3.793 3.984 3.793Zm15.256-6.07h-5.595v48.56h5.595v-48.56Zm20.663 49.319c7.018 0 9.39-4.363 10.622-6.355h.664v5.596h5.406v-48.56h-5.595v17.926h-.475c-1.232-1.897-3.414-6.26-10.527-6.26-9.2 0-15.554 7.303-15.554 18.779 0 11.57 6.354 18.874 15.459 18.874Zm.759-5.027c-7.018 0-10.623-6.165-10.623-13.942 0-7.682 3.51-13.657 10.623-13.657 6.829 0 10.433 5.5 10.433 13.657 0 8.251-3.699 13.942-10.433 13.942Zm38.89 5.027c7.398 0 12.804-3.7 14.511-9.2l-5.406-1.518c-1.423 3.794-4.718 5.691-9.105 5.691-6.568 0-11.096-4.244-11.357-12.045h26.437v-2.371c0-13.563-8.062-18.21-15.649-18.21-9.864 0-16.408 7.777-16.408 18.969 0 11.191 6.45 18.684 16.977 18.684Zm-11.357-21.909c.379-5.667 4.386-10.717 10.788-10.717 6.07 0 9.959 4.552 9.959 10.717h-20.747Zm31.611 21.15h5.595V49.28c0-4.932 3.889-8.536 9.2-8.536 1.494 0 3.035.285 3.415.38v-5.69a53.87 53.87 0 0 0-2.941-.096c-4.362 0-8.156 2.466-9.484 6.07h-.379v-5.5h-5.406v36.419ZM476.201 20.01h-4.734l-14.465 53.74h4.734l14.465-53.74Z"
        fill="#000"
      />
    </svg>
  );
};
