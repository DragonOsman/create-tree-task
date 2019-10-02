"use strict"
const data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

/**
 * @param {any} container
 * @param {any} data
 * @post-cond: must create this tree structured unordered list:
 * Fish
 *    trout
 *    salmon
 *  Tree
 *      Huge
 *        sequoia
 *        oak
 *      Flowering
 *        apple tree
 *        magnolia
 */

function createTree(container, data) {
  data["Fish"].toString = () => {
    return "Fish";
  };
  data["Fish"]["trout"].toString = () => {
    return "trout";
  };
  data["Fish"]["salmon"].toString = () => {
    return "salmon";
  };
  data["Tree"].toString = () => {
    return "Tree";
  };
  data["Tree"]["Huge"].toString = () => {
    return "Huge";
  };
  data["Tree"]["Flowering"].toString = () => {
    return "Flowering";
  };
  data["Tree"]["Huge"]["sequoia"].toString = () => {
    return "sequoia";
  };
  data["Tree"]["Huge"]["oak"].toString = () => {
    return "oak";
  };
  data["Tree"]["Flowering"]["apple tree"].toString = () => {
    return "apple tree";
  };
  data["Tree"]["Flowering"]["magnolia"].toString = () => {
    return "magnolia";
  };
  const mainUnorderedList = document.createElement("ul");
  const fishListItem = document.createElement("li"); // top "Fish" list item in main <ul> that has a nested <ul>
  fishListItem.textContent = data["Fish"].toString();
  const nestedFishUnorderedList = document.createElement("ul");
  const nestedFishULListItem1 = document.createElement("li");
  nestedFishULListItem1.textContent = data["Fish"]["trout"].toString();
  const nestedFishULListItem2 = document.createElement("li");
  nestedFishULListItem2.textContent = data["Fish"]["salmon"].toString();
  nestedFishUnorderedList.append(nestedFishULListItem1);
  nestedFishUnorderedList.append(nestedFishULListItem2);
  fishListItem.append(nestedFishUnorderedList);
  mainUnorderedList.append(fishListItem);

  const mainTreesUnorderedList = document.createElement("ul");
  const treesListItem = document.createElement("li"); // top "Trees" list item in main <ul> that has a nested <ul>
  treesListItem.textContent = data["Tree"].toString();
  const mainTreesULListItem1 = document.createElement("li");
  mainTreesULListItem1.textContent = data["Tree"]["Huge"].toString();
  const mainTreesULListItem2 = document.createElement("li");
  mainTreesULListItem2.textContent = data["Tree"]["Flowering"].toString();

  const hugeTreesUnorderedList = document.createElement("ul");
  const hugeTreesULListItem1 = document.createElement("li");
  hugeTreesULListItem1.textContent = data["Tree"]["Huge"]["sequoia"].toString();
  const hugeTreesULListItem2 = document.createElement("li");
  hugeTreesULListItem2.textContent = data["Tree"]["Huge"]["oak"].toString();

  const floweringTreesUnorderedList = document.createElement("ul");
  const floweringTreesULListItem1 = document.createElement("li");
  floweringTreesULListItem1.textContent = data["Tree"]["Flowering"]["apple tree"].toString();
  const floweringTreesULListItem2 = document.createElement("li");
  floweringTreesULListItem2.textContent = data["Tree"]["Flowering"]["magnolia"].toString();

  hugeTreesUnorderedList.append(hugeTreesULListItem1);
  hugeTreesUnorderedList.append(hugeTreesULListItem2);
  mainTreesUnorderedList.append(hugeTreesUnorderedList);
  mainTreesULListItem1.append(hugeTreesUnorderedList);
  mainTreesUnorderedList.append(mainTreesULListItem1);

  floweringTreesUnorderedList.append(floweringTreesULListItem1);
  floweringTreesUnorderedList.append(floweringTreesULListItem2);
  mainTreesUnorderedList.append(floweringTreesUnorderedList);
  mainTreesULListItem2.append(floweringTreesUnorderedList);
  mainTreesUnorderedList.append(mainTreesULListItem2);

  treesListItem.append(mainTreesUnorderedList);
  container.append(mainUnorderedList);
  mainUnorderedList.append(treesListItem);
  document.body.append(mainUnorderedList);
}

createTree(document.getElementById("tree"), data);
