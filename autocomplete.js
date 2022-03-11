const createAutoComplete = ({ root, renderOption, onOptionSelect, inputValue, fetchData }) => {
   root.innerHTML = `
   <label><b>Search</b></label>
   <input type="text" class="input">
   <div class="dropdown">
      <div class="dropdown-menu">
         <div class="dropdown-content results"></div>
      </div>
   </div>
`;

   const input = root.querySelector("input");
   const dropdown = root.querySelector(".dropdown");
   const resultWrapper = root.querySelector(".results");

   const onInput = async (evt) => {
      const items = await fetchData(evt.target.value);

      if (!items.length) {
         dropdown.classList.remove("is-active");
         return;
      }

      resultWrapper.innerHTML = "";
      dropdown.classList.add("is-active");
      for (let item of items) {
         const option = document.createElement("a");

         option.classList.add("dropdown-item");
         option.innerHTML = renderOption(item);

         option.addEventListener("click", () => {
            dropdown.classList.remove("is-active");
            input.value = inputValue(item);

            //follow up request
            onOptionSelect(item);
         });

         resultWrapper.appendChild(option);
      }
   };

   input.addEventListener("input", debounce(onInput, 800));

   document.addEventListener("click", (evt) => {
      if (!root.contains(evt.target)) dropdown.classList.remove("is-active");
   });
};
