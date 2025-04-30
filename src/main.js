import './style.css'
import { createClient } from '@supabase/supabase-js'

class Yarn {
  constructor() {
    this.initSupabase();
    this.getData();
  }

  initSupabase() {
    const supabaseURL = 'https://aukevjqwffwwxjjwsmko.supabase.co'
    const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1a2V2anF3ZmZ3d3hqandzbWtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5MTk0NDYsImV4cCI6MjA2MTQ5NTQ0Nn0.XaTo37DctMyJaunBhe113qzaMW_C23MghXwmRv3N6tA'
    this.supabase = createClient(supabaseURL, supabaseKEY);
  }
  // je veux recuperer de ma BDD les valeurs assosicés a ma laine :
  //je veux recuperer le nom de la laine
  //le mettre dans un balise h3
  //l'afficher 

  //select()
  async getData(){
    const {data,error} = await this.supabase
    .from('yarn')
    .select()
    data.forEach(element => {
      const yarnContainer = document.createElement("div");
      yarnContainer.classList.add("yarnContainer");
      const yarnContainers = document.getElementById('yarnContainers');
      console.log(element.name);
      console.log(element.image)
      const name = document.createElement("h3");
      const weight = document.createElement("p");
      const material = document.createElement("p");
      const img = document.createElement("img"); 
      const price = document.createElement("p");
      const made = document.createElement("p");
      const hook = document.createElement("p");
      const link  = document.createElement("a");
      const color = document.createElement("p");
      const textClickToBuy = "click to buy"
      

      name.textContent = element.name;
      yarnContainer.appendChild(name);

      img.src = element.image;
      yarnContainer.appendChild(img);


      weight.textContent = element.weight;
      yarnContainer.appendChild(weight);

      material.textContent = element.material;
      yarnContainer.appendChild(material);

      

      price.textContent = element.price;
      yarnContainer.appendChild(price);

      made.textContent = element.made;
      yarnContainer.appendChild(made);

      hook.textContent = element.hook;
      yarnContainer.appendChild(hook);
      
      link.href = element.link;
      yarnContainer.appendChild(link);
      link.innerText = textClickToBuy;

      color.textContent = element.color;
      yarnContainer.appendChild(color);

      yarnContainers.appendChild(yarnContainer)
      
    });
    
  }

//creer un formulaire

//quand on click sur submit pouvoir recuperer les valeurs de ce formulaire
//créer un .insert avec les valeurs à inserer
//inserer les valeurs reçu dans le .insert

  async postData(){

  }



}
new Yarn;