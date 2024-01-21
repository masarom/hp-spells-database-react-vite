const CallToApi = (page) => {
  return fetch(`https://api.potterdb.com/v1/spells?page[number]=${page}`)
    .then((response) => response.json())
    .then((result) => {
      const cleanedData = result.data.map((eachSpell) => {
        return {
          id: eachSpell.id,
          title: eachSpell.attributes.incantation || eachSpell.attributes.name,
          image: eachSpell.attributes.image,
          desc: eachSpell.attributes.effect,
        };
      });
      const pagesCount = result.meta.pagination.last;
      return { cleanedData, pagesCount };
    })
    .catch((error) => console.log("Error fetching data: " + error));
};

export default CallToApi;
