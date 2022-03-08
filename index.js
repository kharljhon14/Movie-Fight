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
let timeoutId;

const onInput = (evt) => {
   if (timeoutId) clearTimeout(timeoutId);
   timeoutId = setTimeout(() => {
      fetchData(evt.target.value);
   }, 800);
};

input.addEventListener("input", onInput);
