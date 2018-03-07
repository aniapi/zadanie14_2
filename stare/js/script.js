  var movies = [
  {
  	id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://images.pottermore.com/bxd3o8b291gf/3SQ3X2km8wkQIsQWa02yOY/25f258f21bdbe5f552a4419bb775f4f0/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=320&h=240&fit=thumb&f=face&q=85'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: './images/cat.jpg'
  },
  {
    id: 3,
    title: 'Marry Poppins',
    desc: 'Film o parasolce',
    img: './images/cat.jpg'
  },
  {
    id: 4,
    title: 'Piotruś Pan',
    desc: 'Film o chłopcu',
    img: './images/cat.jpg'
  },
  {
    id: 5,
    title: 'Ogniem i mieczem',
    desc: 'Film o ogniu',
    img: './images/cat.jpg'
  }
];


var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key:movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.img})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

  ReactDOM.render(element, document.getElementById('app'));