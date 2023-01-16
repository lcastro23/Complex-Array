
		let personArray =
		[
			{name: "Steve Dangus", age: "63", occupation: "hack"},
			{name: "Hannibal's Brother", age: "32", occupation: "general in the lady army"},
			{name: "David Firth", age: "38", occupation: "animator"},
			{name: "Isabelle", age: "25", occupation: "receptionist"},
			{name: "Beadle", age: "29", occupation: "shopkeeper"},

			{name: "Zenos Galvus", age: "26", occupation: "nihilist"},
			{name: "Tataru Taru", age: "21", occupation: "receptionist"},
			{name: "Lolorito Nanarito", age: "64", occupation: "chairman/leading syndicate member"},
			{name: "Patches the Untethered", age: "42", occupation: "betraying people"},
			{name: "Arthas", age: "25", occupation: "being a blue ball"},
		];

		var allButton = document.getElementById("all");
		var below30Button = document.getElementById("below30");
		var allReceptionistsButton = document.getElementById("allReceptionists");
		var futureAllButton = document.getElementById("futureAll");

		allButton.addEventListener("click", displayAll);
		below30Button.addEventListener("click", displayAllOver30);
		allReceptionistsButton.addEventListener("click", displayAllReceptionists);
		futureAllButton.addEventListener("click", displayFutureAll);

		function personObjectToString(item)
		{
			let nameTemplate = `Name:  ${item.name}`;
			let ageTemplate = `Age:  ${item.age}`;
			let occupationTemplate = `Occupation:  ${item.occupation}`;

			let outputTemplate = `${nameTemplate}, ${ageTemplate}, ${occupationTemplate}`;

			return outputTemplate;
		}

		function ageFilter(item)
		{
			if(parseInt(item.age) < 30)
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		function occupationFilter(item)
		{
			if(item.occupation == "receptionist")
			{
				return true;
			}
			else
			{
				return false;
			}
		}

		function increaseAge(item)
		{
			item.age = (parseInt(item.age) + 10);

			return item;
		}

		function displayAll()
		{
			var outputP = document.getElementById("output");
			outputP.innerHTML = "";

			let completeArray = personArray.map(personObjectToString);

			for(var i = 0; i < completeArray.length; i++)
			{
				var newP = document.createElement("p");
				newPersonText = document.createTextNode(completeArray[i]);
				newP.appendChild(newPersonText);
				outputP.appendChild(newP);
			}
		}

		function displayAllOver30()
		{
			var outputP = document.getElementById("output");
			outputP.innerHTML = "";

			let filteredArray = personArray.filter(ageFilter).map(personObjectToString);

			for(var i = 0; i < filteredArray.length; i++)
			{
				var newP = document.createElement("p");
				newPersonText = document.createTextNode(filteredArray[i]);
				newP.appendChild(newPersonText);
				outputP.appendChild(newP);
			}
		}

		function displayAllReceptionists()
		{
			var outputP = document.getElementById("output");
			outputP.innerHTML = "";

			let filteredArray = personArray.filter(occupationFilter).map(personObjectToString);

			for(var i = 0; i < filteredArray.length; i++)
			{
				var newP = document.createElement("p");
				newPersonText = document.createTextNode(filteredArray[i]);
				newP.appendChild(newPersonText);
				outputP.appendChild(newP);
			}
		}

		function displayFutureAll()
		{
			var outputP = document.getElementById("output");
			outputP.innerHTML = "";

			let completeArray = personArray.map(increaseAge).map(personObjectToString);

			for(var i = 0; i < completeArray.length; i++)
			{
				var newP = document.createElement("p");
				newPersonText = document.createTextNode(completeArray[i]);
				newP.appendChild(newPersonText);
				outputP.appendChild(newP);
			}
		}
