const fetchData = async (searchTerm) => {
   const response = await axios.get("http://www.omdbapi.com/", {
      params: {
         apikey: "d127a146",
         s: searchTerm,
      },
   });

   console.log(response.data);
};

const input = document.querySelector("input");

const debounce = (func, delay = 1000) => {
   let timeoutId;
   return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
         func.apply(null, args);
      }, delay);
   };
};

const onInput = (evt) => {
   fetchData(evt.target.value);
};

input.addEventListener("input", debounce(onInput, 800));
