const fetchData = async () => {
   const response = await axios.get("http://www.omdbapi.com/", {
      params: {
         apikey: "d127a146",
         s: "spiderman",
      },
   });

   console.log(response.data)
};

fetchData();
