import React from 'react';
import NGOList from '~/components/NGOList';
// import NGOList from './NGOList';

const ngos = [
  { name: 'International Federation of Red Cross and Red Crescent Societies (IFRC)', website: 'https://www.ifrc.org/' },
  { name: 'Médecins Sans Frontières (Doctors Without Borders)', website: 'https://www.msf.org/' },
  { name: 'CARE International', website: 'https://www.care-international.org/' },
  { name: 'Oxfam International', website: 'https://www.oxfam.org/en' },
  { name: 'Save the Children', website: 'https://www.savethechildren.net/' },
  { name: 'Catholic Relief Services (CRS)', website: 'https://www.crs.org/' },
  { name: 'ActionAid', website: 'https://actionaid.org/' },
  { name: 'Plan International', website: 'https://plan-international.org/' },
  { name: 'Mercy Corps', website: 'https://www.mercycorps.org/' },
  { name: 'International Rescue Committee (IRC)', website: 'https://www.rescue.org/' },
  { name: 'Islamic Relief Worldwide', website: 'https://islamic-relief.org/' },
  { name: 'Direct Relief', website: 'https://www.directrelief.org/' },
  { name: 'GlobalGiving', website: 'https://www.globalgiving.org/' },
  { name: 'Humanity & Inclusion (formerly Handicap International)', website: 'https://www.hi.org/' },
  { name: 'All Hands and Hearts', website: 'https://www.allhandsandhearts.org/' },
  { name: 'GlobalMedic', website: 'https://globalmedic.ca/' },
  { name: 'ShelterBox', website: 'https://shelterbox.org/' },
  { name: 'Habitat for Humanity', website: 'https://www.habitat.org/ap' },
  { name: 'Concern Worldwide', website: 'https://www.concern.net/' },
  { name: 'The Borgen Project', website: 'https://borgenproject.org/' },
  { name: 'International Medical Corps', website: 'https://internationalmedicalcorps.org/' },
  { name: 'ADRA (Adventist Development and Relief Agency)', website: 'https://adra.org/' },
  { name: 'Team Rubicon', website: 'https://teamrubiconusa.org/' },
  { name: 'CARE India', website: 'https://www.careindia.org/' },
  { name: 'GOAL Global', website: 'https://www.goalglobal.org/' },
  { name: 'Disaster Emergency Committee (DEC)', website: 'https://www.dec.org.uk/' },
  { name: 'Relief International', website: 'https://www.ri.org/' },
  { name: 'American Red Cross', website: 'https://www.ri.org/' },
  { name: 'International Relief Teams', website: 'https://www.irteams.org/' },
  { name: 'World Jewish Relief', website: 'https://www.worldjewishrelief.org/' }
];

const App: React.FC = () => {
  return (
    <div className="App">
      <NGOList ngos={ngos} />
    </div>
  );
};

export default App;
