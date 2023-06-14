function Spinner(props) {
  return (
    <div
      class={`animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full ${props.class} ${props.className}`}
      role="status"
      aria-label="loading"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
