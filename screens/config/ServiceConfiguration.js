// ServiceConfigurations.js
const serviceConfigurations = {
    Wedding: {
      fields: [
        { label: 'Bride’s Name', type: 'text' },
        { label: 'Groom’s Name', type: 'text' },
        { label: 'Wedding Date', type: 'date' },
        { label: 'Reception Venue', type: 'text' },
      ],
    },
    Baptism: {
      fields: [
        { label: 'Child’s Name', type: 'text' },
        { label: 'Parents’ Names', type: 'text' },
        { label: 'Baptism Date', type: 'date' },
      ],
    },
    FuneralMass: {
      fields: [
        { label: 'Deceased Name', type: 'text' },
        { label: 'Mass Date', type: 'date' },
        { label: 'Location', type: 'text' },
      ],
    },
    HouseBlessing: {
      fields: [
        { label: 'Resident Name', type: 'text' },
        { label: 'House Address', type: 'text' },
        { label: 'Blessing Date', type: 'date' },
      ],
    },
  };
  
  export default serviceConfigurations;
  