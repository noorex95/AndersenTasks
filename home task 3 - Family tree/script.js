function createFamilyTree(obj){
	var addUl = document.createElement('ul');
	var addLi = document.createElement('li');

	addLi.innerHTML = obj.name;
	addUl.appendChild(addLi);

	if(obj.parents){
		
		var parents = document.createElement('ul');
		
		obj.parents.forEach(function(obj){
			parents.appendChild(createFamilyTree(obj))
		})
		
		addLi.appendChild(parents);
	}

	return addLi
}

document.body.appendChild(createFamilyTree(parentsData));
