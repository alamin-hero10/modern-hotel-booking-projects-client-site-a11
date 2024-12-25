import { Map, Marker } from 'pigeon-maps';

const PigeonMaps = () => {
    return (
        <div className='w-10/12 mx-auto border border-solid p-3 mt-20'>
            <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
        </div>
    );
};

export default PigeonMaps;