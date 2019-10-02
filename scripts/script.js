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

function createTree(container, data) {
    const unorderedList = document.createElement("ul");
    const listItem1 = document.createElement("li");
    listItem1.textContent = "Fish";
    const fishNestedItem1 = document.createElement("li");
    fistNestedItem1.textContent = "trout";
    const fishNestedItem2 = document.createElement("li");
    fistNestedItem2.textContent = "salmon";

    listItem1.append(fishNestedItem1);
    listItem1.append(fishNestedItem2);
    unorderedList.append(listItem1);
    document.body.append(unorderedList);
}

createTree(document.getElementById("tree"), data);