const ArrayJoin = () => {
  const Join = (arr1, arr2) => {
    let CombinedArray = [...arr1, ...arr2];
    let Equal = [];
    arr1.map((array) => {
      return arr2.map((array2) => {
        if (array.id === array2.id) {
          Equal.push(array);
        }
      });
    });
    CombinedArray = CombinedArray.filter((el) => !Equal.includes(el));
    return CombinedArray;
  };

  return { Join };
};

export default ArrayJoin;
