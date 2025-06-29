import Card from './Card';

function Tours({ tours, removeTour, setTours }) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan With Ayushman</h2>
      </div>
      <div className='cards'>
        {
          tours.map((tour) => (
            <Card
              key={tour.id}
              {...tour}
              removeTour={removeTour}
              setTours={setTours}
              tours={tours}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Tours;
