const data = [
  {
    id: Math.random() * 5172152,
    img: "https://images.unsplash.com/photo-1566371486490-560ded23b5e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmFjYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    destination: "Tamarin, Mauritius",
    distance: "62 km to Bras d'Eau National Park",
    date: "Apr 1-6",
    price: "$171 night",
  },
  {
    id: Math.random() * 5172152,
    img: "https://images.unsplash.com/photo-1671548884578-0a6762663803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dWdhbmRhJTIwc2FmYXJpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    destination: "Fort Portal, Uganda",
    distance: "27 km to Kibale National Park",
    date: "sep 13-18",
    price: "$132 night",
  },
  {
    id: Math.random() * 5172152,
    img: "https://images.unsplash.com/photo-1651860282131-e3257674ccd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZGlhbml8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    destination: "Diani Beach, Kenya",
    distance: "42 km to kisite-mpunguti",
    date: "Apr 10-16",
    price: "$455 night",
  },
  {
    id: Math.random() * 5172152,
    img: "https://images.unsplash.com/photo-1553829176-61484f865ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2V5Y2hlbGxlcyUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    destination: "Au Cap, Seychelles",
    distance: "12 km to Sainte Anne Marine",
    date: "Apr 12-17",
    price: "$155 night",
  },
  {
    id: Math.random() * 5172152,
    img: "https://images.unsplash.com/photo-1553829176-61484f865ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2V5Y2hlbGxlcyUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    destination: "Au Cap, Seychelles",
    distance: "12 km to Sainte Anne Marine",
    date: "Apr 12-17",
    price: "$155 night",
  },
  {
    id: Math.random() * 5172152,
    img: "https://images.unsplash.com/photo-1553829176-61484f865ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2V5Y2hlbGxlcyUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    destination: "Au Cap, Seychelles",
    distance: "12 km to Sainte Anne Marine",
    date: "Apr 12-17",
    price: "$155 night",
  },
  {
    id: Math.random() * 5172152,
    img: "https://images.unsplash.com/photo-1553829176-61484f865ac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2V5Y2hlbGxlcyUyMGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    destination: "Au Cap, Seychelles",
    distance: "12 km to Sainte Anne Marine",
    date: "Apr 12-17",
    price: "$155 night",
  },
];

document.getElementById("cards").innerHTML = data
  .map(
    (d) =>
      `
         
      <div class="overflow-hidden shadow-lg rounded-md relative mb-3">
        <div class="absolute right-4 top-4">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
        <img
          class="w-full"
          src=${d.img}
          alt="Sunset in the mountains"
        />
        <div class="flex justify-between">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">   ${d.destination}</div>
            <p class="text-gray-700 text-base">
              ${d.distance}
            </p>
            <p>${d.date}</p>
            <p class="mt-2"><span class="font-semibold">$171 night</span></p>
          </div>
          <div class="mt-5">
            <i class="fa fa-star" aria-hidden="true"></i>4.71
          </div>
        </div>
      </div>
  
        `
  )
  .join("");
