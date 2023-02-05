const keyboard ={
	elements:{
		main:null,
		keysContainer: null,
		keys:[]
	},

	eventHandlers :{
		oninput:null,
		onclose:null	
	},

	properties:{
		values:"",
		capslock:false
	},

	init(){
		//Create main element
		this.elements.main = document.createElement('div');
		this.elements.keysContainer = document.createElement('div');

		//Setup main content
		this.elements.main.classList.add('keyboard', 'keyboard--hidden');
		this.elements.keysContainer.classList.add('keyboard__keys');
		this.elements.keysContainer.appendChild(this._createKeys());
		
		this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
		//Add to DOM
		this.elements.main.appendChild(this.elements.keysContainer);
		document.body.appendChild(this.elements.main);

		//Autometiclly keyboard use
		document.querySelectorAll('#use_keyboard').forEach(event=>{
			event.addEventListener('focus',()=>{
				this.open(event.value, currentValue=>{
					event.value = currentValue;
				});
			});
		});
	},

	_createKeys(){
		const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];

        //create HTML icons
        const createIcinHTML = (icon_name)=>{
        	return `<span class="material-icons">${icon_name}</span>`;
        };

        keyLayout.forEach(key => {
        	const keyElement = document.createElement("button");
        	//Add attributes
        	keyElement.setAttribute('type','button');
        	keyElement.classList.add('keyboard__key');
        	//Inser line breake
        	const insertLinBreak = ["backspace","p","enter","?"].indexOf(key) !== -1;
        	
        	switch(key){
        		case "backspace":
        			keyElement.classList.add('keyboard__key--wide');
        			keyElement.innerHTML= createIcinHTML('backspace');

        			keyElement.addEventListener('click',()=>{
        				this.properties.value = this.properties.value.substring(0,this.properties.value.length - 1);
        				this._triggerEvent('oninput');
        			});
        			break;
        		case "caps":
        			keyElement.classList.add('keyboard__key--wide','keyboard__key--activatable');
        			keyElement.innerHTML= createIcinHTML('keyboard_capslock');

        			keyElement.addEventListener('click',()=>{
        				this._toggleCapsLock();
        				keyElement.classList.toggle('keyboard__key--active',this.properties.capslock);
        			});
        			break;
        		case "enter":
        			keyElement.classList.add('keyboard__key--wide');
        			keyElement.innerHTML= createIcinHTML('keyboard_return');

        			keyElement.addEventListener('click',()=>{
        				this.properties.value+='\n';
        				this._triggerEvent('oninput');
        			});
        			break;
        		case "space":
        			keyElement.classList.add('keyboard__key--extra--wide');
        			keyElement.innerHTML= createIcinHTML('space_bar');

        			keyElement.addEventListener('click',()=>{
        				this.properties.value+=' ';
        				this._triggerEvent('oninput');
        			});
        			break;
        		case "done":
        			keyElement.classList.add('keyboard__key--wide','keyboard__key--dark');
        			keyElement.innerHTML= createIcinHTML('check_circle');

        			keyElement.addEventListener('click',()=>{
        				this.close();
        				this._triggerEvent('onclose');
        			});
        			break;
        		default:
        			//keyElement.classList.add('keyboard__key');
        			keyElement.textContent = key.toLowerCase();

        			keyElement.addEventListener('click',()=>{
        				this.properties.value += this.properties.capslock ? key.toUpperCase() : key.toLowerCase();
        				this._triggerEvent('oninput');
        			});
        			break;
        	}
        	fragment.appendChild(keyElement);
        	if(insertLinBreak){
        		fragment.appendChild(document.createElement('br'));
        	}
        });
        return fragment;
	},

	_triggerEvent(handlerName){
		if(typeof this.eventHandlers [handlerName] == 'function'){
			this.eventHandlers [handlerName](this.properties.value);
		}
	},

	_toggleCapsLock(){
		this.properties.capslock = !this.properties.capslock;

		for(const key of this.elements.keys){
			if(key.childElementCount == 0){
				key.textContent = this.properties.capslock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
			}
		}
	},

	open(initialValue, oninput, onclose){
		this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard--hidden");

	},

	close(){
		this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard--hidden");
	}
};
window.addEventListener("DOMContentLoaded", function(){
	keyboard.init();
});



