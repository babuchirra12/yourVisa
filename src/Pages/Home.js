import Carousel from 'react-bootstrap/Carousel';

function HomeComponent() {
    const slideData = [
        { id: 1, name: 'slide1', headingText: 'slide1', subText: 'Dummy Text' },
        { id: 2, name: 'slide2', headingText: 'slide2', subText: 'Dummy Text2' },
        { id: 2, name: 'slide3', headingText: 'slide2', subText: 'Dummy Text2' }
    ]
    return (
        <>
            <Carousel fade>

                {slideData.map((item, idx) => {
                    return (<Carousel.Item key={idx} style={{ backgroundColor: 'red' }}>
                        <img
                            className="d-block w-100" style={{ height: '300px' }}
                            src={`assets/img/${item.name}.png`}
                            alt={item.name}
                        />
                        <Carousel.Caption>
                            <h3>{item.headingText}</h3>
                            <p>{item.subText}</p>

                        </Carousel.Caption>
                        <div style={{
                            background: '#f3f3f34d',
                            position: 'absolute',
                            top: '0px',
                            height: '300px',
                            width: '100%'
                        }}></div>
                    </Carousel.Item>)

                })}
            </Carousel>
        </>
    );
}

export default HomeComponent;